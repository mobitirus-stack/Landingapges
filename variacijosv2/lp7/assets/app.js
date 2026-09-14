(function () {
  "use strict";

  var form = document.getElementById("lp7-form");
  if (!form) return;

  var daySelect = document.getElementById("lp7-day");
  var monthSelect = document.getElementById("lp7-month");
  var yearSelect = document.getElementById("lp7-year");
  var genderInputs = form.querySelectorAll('input[name="lp7-gender"]');
  var genderError = document.getElementById("lp7-gender-error");
  var dobError = document.getElementById("lp7-dob-error");
  var successEl = document.getElementById("lp7-success");
  var socialEl = document.getElementById("lp7-social");
  var ctaBtn = form.querySelector(".lp7-cta");

  // Populate day options (1-31)
  if (daySelect) {
    for (var d = 1; d <= 31; d++) {
      var opt = document.createElement("option");
      opt.value = String(d);
      opt.textContent = String(d);
      daySelect.appendChild(opt);
    }
  }

  // Populate year options (18+ eligible range, newest first)
  if (yearSelect) {
    var currentYear = new Date().getFullYear();
    var maxYear = currentYear - 18;
    var minYear = currentYear - 90;
    for (var y = maxYear; y >= minYear; y--) {
      var yOpt = document.createElement("option");
      yOpt.value = String(y);
      yOpt.textContent = String(y);
      yearSelect.appendChild(yOpt);
    }
  }

  function isAdult(day, month, year) {
    var birth = new Date(year, month - 1, day);
    if (
      birth.getFullYear() !== year ||
      birth.getMonth() !== month - 1 ||
      birth.getDate() !== day
    ) {
      return false; // invalid calendar date (e.g. 31 Feb)
    }
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age >= 18;
  }

  function getCheckedGender() {
    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) return genderInputs[i].value;
    }
    return null;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var gender = getCheckedGender();
    var day = daySelect ? parseInt(daySelect.value, 10) : NaN;
    var month = monthSelect ? parseInt(monthSelect.value, 10) : NaN;
    var year = yearSelect ? parseInt(yearSelect.value, 10) : NaN;

    var hasGenderError = !gender;
    var hasDobError =
      !day || !month || !year || !isAdult(day, month, year);

    if (genderError) genderError.hidden = !hasGenderError;
    if (dobError) dobError.hidden = !hasDobError;

    if (hasGenderError || hasDobError) {
      var firstInvalid = hasGenderError
        ? genderInputs[0]
        : daySelect;
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Success state
    form.hidden = true;
    if (socialEl) socialEl.hidden = true;
    if (successEl) {
      successEl.hidden = false;
      successEl.textContent = "Ačiū! Peržiūrėk anketas — nukreipiame tave toliau.";
      successEl.focus();
    }
    if (ctaBtn) ctaBtn.disabled = true;
  });

  // Clear individual error states as user corrects them
  genderInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      if (genderError && !genderError.hidden) genderError.hidden = true;
    });
  });
  [daySelect, monthSelect, yearSelect].forEach(function (sel) {
    if (!sel) return;
    sel.addEventListener("change", function () {
      if (dobError && !dobError.hidden) dobError.hidden = true;
    });
  });
})();
