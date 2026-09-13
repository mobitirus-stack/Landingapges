(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Orkestruotas momentas: chat burbulai atsiranda iš eilės ---------- */
  var phone = document.querySelector("[data-lp6-animate-thread]");
  if (phone) {
    if (reduceMotion) {
      phone.classList.add("lp6-phone--played");
    } else {
      // HTML ships with "lp6-phone--played" already applied so that visitors without
      // JavaScript see the full conversation immediately (no-JS fallback). When JS runs,
      // pull the class back off so the staggered entrance can play, then restore it once
      // the animation is triggered.
      phone.classList.remove("lp6-phone--played");
      var bubbles = phone.querySelectorAll("[data-lp6-bubble]");
      var played = false;
      var play = function () {
        if (played) return;
        played = true;
        bubbles.forEach(function (el, i) {
          el.style.transitionDelay = (i * 0.16) + "s";
        });
        // trigger the transition on next frame
        requestAnimationFrame(function () {
          phone.classList.add("lp6-phone--played");
        });
      };
      if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              play();
              observer.disconnect();
            }
          });
        }, { threshold: 0.35 });
        observer.observe(phone);
      } else {
        play();
      }
    }
  }

  /* ---------- Slaptažodžio rodyti/slėpti perjungiklis ---------- */
  var toggle = document.getElementById("lp6-password-toggle");
  var passwordInput = document.getElementById("lp6-slaptazodis");
  if (toggle && passwordInput) {
    toggle.addEventListener("click", function () {
      var isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";
      toggle.setAttribute("aria-pressed", String(isHidden));
      toggle.setAttribute("aria-label", isHidden ? "Slėpti slaptažodį" : "Rodyti slaptažodį");
      var icon = toggle.querySelector("svg use");
      if (icon) {
        icon.setAttribute("href", isHidden ? "#lp6-icon-eye-off" : "#lp6-icon-eye");
      }
    });
  }

  /* ---------- Registracijos formos validacija ---------- */
  var form = document.getElementById("lp6-form");
  if (form) {
    var status = document.getElementById("lp6-form-status");

    var fields = {
      vardas: {
        el: document.getElementById("lp6-vardas"),
        error: document.getElementById("lp6-vardas-error"),
        valid: function (el) { return el.value.trim().length > 1; }
      },
      amzius: {
        el: document.getElementById("lp6-amzius"),
        error: document.getElementById("lp6-amzius-error"),
        valid: function (el) {
          var v = parseInt(el.value, 10);
          return !isNaN(v) && v >= 18 && v <= 99;
        }
      },
      miestas: {
        el: document.getElementById("lp6-miestas"),
        error: document.getElementById("lp6-miestas-error"),
        valid: function (el) { return el.value !== ""; }
      },
      epastas: {
        el: document.getElementById("lp6-epastas"),
        error: document.getElementById("lp6-epastas-error"),
        valid: function (el) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()); }
      },
      slaptazodis: {
        el: document.getElementById("lp6-slaptazodis"),
        error: document.getElementById("lp6-slaptazodis-error"),
        valid: function (el) { return el.value.length >= 8; }
      },
      sutikimas: {
        el: document.getElementById("lp6-sutikimas"),
        error: document.getElementById("lp6-sutikimas-error"),
        valid: function (el) { return el.checked; }
      }
    };

    var setFieldState = function (field, ok) {
      var wrap = field.el.closest(".lp6-field");
      if (wrap) wrap.classList.toggle("lp6-field--invalid", !ok);
      if (field.error) field.error.hidden = ok;
    };

    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
      if (!field.el) return;
      var evt = field.el.tagName === "SELECT" || field.el.type === "checkbox" ? "change" : "input";
      field.el.addEventListener(evt, function () {
        setFieldState(field, field.valid(field.el));
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var allValid = true;

      Object.keys(fields).forEach(function (key) {
        var field = fields[key];
        if (!field.el) return;
        var ok = field.valid(field.el);
        setFieldState(field, ok);
        if (!ok) allValid = false;
      });

      if (!allValid) {
        status.hidden = false;
        status.textContent = "Patikrink pažymėtus laukus ir bandyk dar kartą.";
        status.className = "lp6-form__status lp6-form__status--error";
        var firstInvalid = form.querySelector(".lp6-field--invalid .lp6-field__input, .lp6-field--invalid input");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Realaus backend'o nėra – tik demonstracinė sėkmės būsena.
      status.hidden = false;
      status.textContent = "Ačiū! Tavo anketa gauta – netrukus galėsi peržiūrėti anketas ir pradėti savo pokalbį.";
      status.className = "lp6-form__status lp6-form__status--success";
      form.reset();
    });
  }
})();
