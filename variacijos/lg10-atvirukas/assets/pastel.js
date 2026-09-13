/* lg10-atvirukas — pastel.js
   Vienintelis judesio momentas: viršutinės dėklo kortelės apvertimas (reakcija į veiksmą).
   Realūs <label>/<input> visada yra dokumento sraute — vizualus apvertimas tik sinchronizuoja
   išvaizdą su fokusu/paspaudimu, prieinamumas nepriklauso nuo animacijos. */
(function () {
  "use strict";

  var STORAGE_KEY = "atvirukas:dek-progresas";
  var COOKIE_KEY = "atvirukas:slapukai-patvirtinta";
  var TOTAL_CARDS = 5;

  var form = document.getElementById("deckForm");
  var stack = document.getElementById("deckStack");
  var status = document.getElementById("deckStatus");
  var successPanel = document.getElementById("successPanel");
  if (!form || !stack) { return; }

  var cards = Array.prototype.slice.call(stack.querySelectorAll(".deck-card"));

  function cardByOrder(order) {
    return cards.filter(function (c) { return c.dataset.order === String(order); })[0];
  }

  function fieldsOf(card) {
    return Array.prototype.slice.call(card.querySelectorAll("input, select"));
  }

  function errorEl(name) {
    return form.querySelector('.field-error[data-error-for="' + name + '"]');
  }

  function clearError(name) {
    var el = errorEl(name);
    if (el) { el.hidden = true; el.textContent = ""; }
  }

  function showError(name, message) {
    var el = errorEl(name);
    if (el) { el.hidden = false; el.textContent = message; }
  }

  var messages = {
    nuotaika: "Pasirink bent vieną nuotaiką, kad kortelė apsiverstų atgal.",
    vardelis: "Įrašyk vardelį — bent 2 simbolius.",
    tarpsnis: "Pasirink savo tarpsnį iš sąrašo.",
    kampelis: "Įrašyk kampelį — bent 2 simbolius.",
    atsakymoAdresas: "Šis atsakymo adresas atrodo neteisingas — patikrink, ar yra ženklas „@“.",
    savasZodis: "Savas žodis turi būti bent 8 ženklų.",
    pasizadejimas: "Kad tęstum, reikia patvirtinti pasižadėjimą."
  };

  function validateCard(card) {
    var order = card.dataset.order;
    var ok = true;
    var firstInvalid = null;

    if (order === "1") {
      var checked = card.querySelector('input[name="nuotaika"]:checked');
      clearError("nuotaika");
      if (!checked) {
        showError("nuotaika", messages.nuotaika);
        ok = false;
        firstInvalid = card.querySelector('input[name="nuotaika"]');
      }
    } else {
      fieldsOf(card).forEach(function (field) {
        if (field.type === "checkbox") {
          clearError(field.name);
          if (field.required && !field.checked) {
            showError(field.name, messages[field.name] || "Šitą lauką reikia užpildyti.");
            ok = false;
            firstInvalid = firstInvalid || field;
          }
          return;
        }
        clearError(field.name);
        if (!field.checkValidity()) {
          showError(field.name, messages[field.name] || "Šitą lauką reikia užpildyti.");
          ok = false;
          firstInvalid = firstInvalid || field;
        }
      });
    }

    return { ok: ok, firstInvalid: firstInvalid };
  }

  function flipCard(card, flipped) {
    card.dataset.flipped = flipped ? "true" : "false";
  }

  function activateCard(order) {
    cards.forEach(function (c) {
      if (c.dataset.state !== "done") {
        var isActive = c.dataset.order === String(order);
        c.dataset.state = isActive ? "active" : "pending";
        /* Kortelės, kurios dar ne eilėje, negali gauti fokuso — be šito klaviatūros
           vartotojas galėtų Tab klavišu peršokti tiesiai į paskutinę kortelę ir apeiti
           anksčiau esančių kortelių privalomus laukus. */
        c.inert = !isActive;
      }
    });
  }

  function markDone(card) {
    card.dataset.state = "done";
    flipCard(card, false);
    card.inert = true;
  }

  function announce(text) {
    if (status) { status.textContent = text; }
  }

  function advanceFrom(order) {
    var card = cardByOrder(order);
    if (!card) { return; }
    var result = validateCard(card);
    if (!result.ok) {
      if (result.firstInvalid) { result.firstInvalid.focus(); }
      return;
    }
    markDone(card);
    saveProgress();
    var next = order + 1;
    if (next <= TOTAL_CARDS) {
      activateCard(next);
      announce("Kortelė " + next + " iš " + TOTAL_CARDS + " atversta.");
      var nextCard = cardByOrder(next);
      var firstField = nextCard.querySelector("input, select");
      if (firstField) { firstField.focus(); }
    }
  }

  /* --- kortelės apvertimo mygtukai (dešiniarankiams/pelės vartotojams) --- */
  stack.addEventListener("click", function (e) {
    var flipBtn = e.target.closest(".deck-flip");
    if (flipBtn) {
      var card = flipBtn.closest(".deck-card");
      flipCard(card, true);
      var firstField = card.querySelector(".deck-back input, .deck-back select");
      if (firstField) { firstField.focus(); }
      return;
    }
    var nextBtn = e.target.closest(".deck-next");
    if (nextBtn) {
      advanceFrom(parseInt(nextBtn.dataset.next, 10));
    }
  });

  /* --- fokusas ant tikro lauko taip pat apverčia kortelę (klaviatūra be pelės) --- */
  stack.addEventListener(
    "focusin",
    function (e) {
      var back = e.target.closest(".deck-back");
      if (!back) { return; }
      var card = back.closest(".deck-card");
      if (card.dataset.state === "done") { return; }
      flipCard(card, true);
    },
    true
  );

  /* --- Enter tarpinėse kortelėse = tęsti, ne visos formos pateikimas --- */
  stack.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") { return; }
    var field = e.target;
    if (field.tagName !== "INPUT" || field.type === "checkbox" || field.type === "radio") { return; }
    var card = field.closest(".deck-card");
    if (!card) { return; }
    var order = parseInt(card.dataset.order, 10);
    if (order < TOTAL_CARDS) {
      e.preventDefault();
      advanceFrom(order);
    }
  });

  /* --- pasirinkimo žymėjimas (nuotaika) --- */
  var moodInputs = form.querySelectorAll('input[name="nuotaika"]');
  moodInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      moodInputs.forEach(function (i) {
        i.closest(".answer-item").classList.toggle("is-checked", i.checked);
      });
    });
  });

  /* --- savo žodžio rodymas/slėpimas (ikona, ne tekstas) --- */
  var toggle = form.querySelector(".password-toggle");
  var passwordField = document.getElementById("savasZodis");
  if (toggle && passwordField) {
    toggle.addEventListener("click", function () {
      var showing = passwordField.type === "text";
      passwordField.type = showing ? "password" : "text";
      toggle.setAttribute("aria-pressed", String(!showing));
      toggle.setAttribute("aria-label", showing ? "Rodyti savą žodį" : "Slėpti savą žodį");
      toggle.classList.toggle("is-visible", !showing);
    });
  }

  /* --- galutinis pateikimas ---
     Tikrina VISAS kortelis, ne tik paskutinę: net jei klaviatūros vartotojas kažkaip
     atsidurtų prie paskutinio mygtuko neužpildęs ankstesnių kortelių, siuntimas vis tiek
     sustabdomas ir grąžina prie pirmos neužpildytos kortelės. */
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var result = validateCard(card);
      if (!result.ok) {
        var order = parseInt(card.dataset.order, 10);
        if (card.dataset.state !== "done") {
          activateCard(order);
          flipCard(card, true);
        }
        if (result.firstInvalid) { result.firstInvalid.focus(); }
        return;
      }
    }
    var lastCard = cardByOrder(TOTAL_CARDS);
    markDone(lastCard);
    form.hidden = true;
    if (successPanel) {
      successPanel.hidden = false;
      successPanel.focus();
    }
    announce("Atvirukas išsiųstas.");
    clearProgress();
    // <!-- tracking: form_submitted -->
  });

  /* --- progreso išsaugojimas tarp apsilankymų --- */
  function currentValues() {
    var data = {};
    fieldsOf(stack).forEach(function (field) {
      if (field.type === "radio") {
        if (field.checked) { data[field.name] = field.value; }
      } else if (field.type === "checkbox") {
        data[field.name] = field.checked;
      } else {
        data[field.name] = field.value;
      }
    });
    return data;
  }

  function saveProgress() {
    var doneOrder = 0;
    cards.forEach(function (c) {
      if (c.dataset.state === "done") { doneOrder = Math.max(doneOrder, parseInt(c.dataset.order, 10)); }
    });
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        values: currentValues(),
        doneOrder: doneOrder
      }));
    } catch (err) { /* privatus naršymo režimas — tyliai ignoruojame */ }
  }

  function clearProgress() {
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (err) { /* ignoruojama */ }
  }

  function restoreProgress() {
    var raw;
    try { raw = window.localStorage.getItem(STORAGE_KEY); } catch (err) { return; }
    if (!raw) { return; }
    var data;
    try { data = JSON.parse(raw); } catch (err) { return; }
    if (!data || !data.values) { return; }

    Object.keys(data.values).forEach(function (name) {
      var value = data.values[name];
      var field = form.querySelector('[name="' + name + '"]');
      if (!field) { return; }
      if (field.type === "checkbox") { field.checked = !!value; return; }
      if (field.type === "radio") {
        var radio = form.querySelector('[name="' + name + '"][value="' + value + '"]');
        if (radio) { radio.checked = true; radio.closest(".answer-item").classList.add("is-checked"); }
        return;
      }
      field.value = value;
    });

    var doneOrder = data.doneOrder || 0;
    if (doneOrder > 0) {
      cards.forEach(function (c) {
        if (parseInt(c.dataset.order, 10) <= doneOrder) { markDone(c); }
      });
      var next = doneOrder + 1;
      if (next <= TOTAL_CARDS) {
        activateCard(next);
        announce("Sveiki sugrįžę — tęsi nuo " + next + " kortelės iš " + TOTAL_CARDS + ".");
      }
    }
  }

  /* Numatytoji pradžia: tik pirma kortelė pasiekiama fokusu, likusios — inert.
     restoreProgress() žemiau, jei yra išsaugota pažanga, šią pradinę būseną perrašo. */
  activateCard(1);
  restoreProgress();

  /* --- slapukų juosta (statinė, ne plūduriuojanti, be uždelsimo) --- */
  var cookieStrip = document.getElementById("cookieStrip");
  var cookieAccept = document.getElementById("cookieAccept");
  if (cookieStrip && cookieAccept) {
    try {
      if (window.localStorage.getItem(COOKIE_KEY) === "1") {
        cookieStrip.classList.add("is-dismissed");
      }
    } catch (err) { /* ignoruojama */ }

    cookieAccept.addEventListener("click", function () {
      cookieStrip.classList.add("is-dismissed");
      try { window.localStorage.setItem(COOKIE_KEY, "1"); } catch (err) { /* ignoruojama */ }
      // <!-- tracking: cookie_ack -->
    });
  }
})();
