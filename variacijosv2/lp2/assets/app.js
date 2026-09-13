(function () {
  "use strict";

  /* ---------- swipe kortelių dėklas ---------- */
  var stage = document.getElementById("swipeStage");
  var btnLike = document.getElementById("btnLike");
  var btnDislike = document.getElementById("btnDislike");

  var queue = [
    { name: "Eglė", age: 27, city: "Vilnius", cls: "avatar--rose" },
    { name: "Ugnė", age: 24, city: "Kaunas", cls: "avatar--amber" },
    { name: "Aistė", age: 30, city: "Klaipėda", cls: "avatar--teal" },
    { name: "Karolina", age: 26, city: "Šiauliai", cls: "avatar--plum" },
    { name: "Rasa", age: 33, city: "Panevėžys", cls: "avatar--coral" },
    { name: "Toma", age: 22, city: "Alytus", cls: "avatar--indigo" },
    { name: "Gabrielė", age: 29, city: "Marijampolė", cls: "avatar--forest" },
    { name: "Ieva", age: 28, city: "Utena", cls: "avatar--berry" }
  ];

  var isAnimating = false;

  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function renderStage() {
    if (!stage) return;
    var html = "";
    for (var i = 0; i < 3 && i < queue.length; i++) {
      var p = queue[i];
      html +=
        '<article class="profile-card pos-' + i + '" aria-hidden="' + (i === 0 ? "false" : "true") + '">' +
        '<svg class="avatar ' + p.cls + '" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><use href="#lowpoly-bust"></use></svg>' +
        '<h3 class="card-name">' + p.name + ", " + p.age + "</h3>" +
        '<p class="card-meta">' + p.city + "</p>" +
        "</article>";
    }
    stage.innerHTML = html;
  }

  function setControlsDisabled(disabled) {
    if (btnLike) btnLike.disabled = disabled;
    if (btnDislike) btnDislike.disabled = disabled;
  }

  function advanceQueue() {
    var finished = queue.shift();
    queue.push(finished);
    renderStage();
    isAnimating = false;
    setControlsDisabled(false);
  }

  function swipe(direction) {
    if (isAnimating || !stage) return;
    var top = stage.querySelector(".pos-0");
    if (!top) return;

    isAnimating = true;
    setControlsDisabled(true);

    if (reducedMotion()) {
      advanceQueue();
      return;
    }

    top.classList.add(direction === "like" ? "fly-right" : "fly-left");
    var done = false;
    var finish = function () {
      if (done) return;
      done = true;
      advanceQueue();
    };
    top.addEventListener("transitionend", finish, { once: true });
    // atsarginis laikmatis, jei transitionend neįvyksta (pvz., elementas pašalintas anksčiau)
    window.setTimeout(finish, 650);
  }

  if (btnLike) btnLike.addEventListener("click", function () { swipe("like"); });
  if (btnDislike) btnDislike.addEventListener("click", function () { swipe("dislike"); });

  renderStage();

  /* ---------- slaptažodžio rodymas/slėpimas ---------- */
  var passInput = document.getElementById("fPass");
  var passToggle = document.getElementById("passToggle");
  if (passInput && passToggle) {
    var iconEye = passToggle.querySelector(".icon-eye");
    var iconEyeOff = passToggle.querySelector(".icon-eye-off");
    passToggle.addEventListener("click", function () {
      var show = passInput.type === "password";
      passInput.type = show ? "text" : "password";
      // SVG elementai neturi HTML „hidden“ IDL savybės, todėl matomumas valdomas klase, ne .hidden
      if (iconEye) iconEye.classList.toggle("is-hidden", show);
      if (iconEyeOff) iconEyeOff.classList.toggle("is-hidden", !show);
      passToggle.setAttribute("aria-label", show ? "Slėpti slaptažodį" : "Rodyti slaptažodį");
    });
  }

  /* ---------- registracijos formos validacija ---------- */
  var form = document.getElementById("signupForm");
  var statusEl = document.getElementById("formStatus");

  function setError(name, msg) {
    var el = form.querySelector('[data-error-for="' + name + '"]');
    if (el) el.textContent = msg || "";
  }

  function validate() {
    var ok = true;

    var nick = form.nick.value.trim();
    if (nick.length < 2) { setError("fNick", "Įvesk slapyvardį (bent 2 simboliai)."); ok = false; }
    else setError("fNick", "");

    var email = form.email.value.trim();
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) { setError("fEmail", "Įvesk galiojantį el. pašto adresą."); ok = false; }
    else setError("fEmail", "");

    var age = Number(form.age.value);
    if (!age || age < 18 || age > 99) { setError("fAge", "Turi būti bent 18 metų."); ok = false; }
    else setError("fAge", "");

    var city = form.city.value.trim();
    if (city.length < 2) { setError("fCity", "Įvesk miestą."); ok = false; }
    else setError("fCity", "");

    if (!form.gender.value) { setError("gender", "Pasirink vieną iš variantų."); ok = false; }
    else setError("gender", "");

    if (!form.seeking.value) { setError("seeking", "Pasirink, ką nori matyti dėkle."); ok = false; }
    else setError("seeking", "");

    var pass = form.password.value;
    if (pass.length < 8) { setError("fPass", "Bent 8 simboliai."); ok = false; }
    else setError("fPass", "");

    if (!form.consent.checked) { setError("fConsent", "Reikia patvirtinti amžių ir sutikti su taisyklėmis."); ok = false; }
    else setError("fConsent", "");

    return ok;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      statusEl.textContent = "";
      statusEl.className = "form-status";

      var ok = validate();
      if (!ok) {
        statusEl.textContent = "Patikrink pažymėtus laukus aukščiau.";
        statusEl.classList.add("is-error");
        return;
      }

      // tracking: registration_success
      statusEl.textContent = "Kortelė sukurta! Patikrink el. paštą — atsiuntėme nuorodą aktyvavimui.";
      statusEl.classList.add("is-success");
      form.reset();
      ["fNick", "fEmail", "fAge", "fCity", "gender", "seeking", "fPass", "fConsent"].forEach(function (n) {
        setError(n, "");
      });
    });
  }
})();
