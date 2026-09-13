# v2 taisymas — lp6 (pagal `qa/v2-patikra-batch2.md` → „lp6 ... PERDARYTI")

## 1. BLOKATORIUS: be-JS hero pokalbis buvo tuščias — IŠTAISYTA

- `variacijosv2/lp6/index.html:188` — `class="lp6-phone"` → `class="lp6-phone lp6-phone--played"`
  (klasė dabar tiesiai HTML'e, ne tik pridedama JS).
- `variacijosv2/lp6/assets/app.js` — prieš groojant staggered animaciją JS pats nuima
  `lp6-phone--played` (`phone.classList.remove(...)`), tada, kai `IntersectionObserver` (arba
  fallback be jo) suveikia, `play()` grąžina klasę atgal per `requestAnimationFrame`. `style.css`
  keisti nereikėjo — esama `opacity:0` / `--played{opacity:1}` logika (`style.css:288-298`) liko
  nepaliesta, tik dabar pradinė HTML būsena atitinka „po animacijos" būseną.
- **Patikrinta realioje naršyklėje (Chrome headless, `--disable-javascript`, 1280×1400):**
  ekrano nuotrauka rodo VISUS 5 burbulus + „Rašo…" indikatorių pilnai matomus (opacity 1) be jokio
  JS. Antras patikrinimas su JS įjungtu parodė, kad animacija vis dar veikia (paskutinis burbulas /
  typing indikatorius sugauti pusiau nublukę vieno kadro momentu) — t. y. JS aktyviai nuima ir
  grąžina klasę, o ne tiesiog nieko nedaro.
- Reduced-motion atšaka (`style.css:559-563` + `app.js` `reduceMotion` šaka) nekeista — ji jau buvo
  teisinga.

## 2–3. Neteisingi teiginiai apie „realius žmones" prie iliustracijų

- `index.html:324`: „Realūs žmonės, patvirtintos anketos..." → „Iliustracijos, ne tikrų narių
  nuotraukos – kiekviena anketa peržiūrima prieš patenkant į naršymą."
- `index.html:356`: „Šie žmonės jau naršo Vyrų kambaryje." → „Iliustracinis pavyzdys – panašiai
  atrodo tie, kurie šiandien naršo Vyrų kambaryje."

## 4. DUK antraštės dublis su lp4

- `index.html:421` `<h2>Klausimai prieš registruojantis</h2>` → `<h2>Dažniausi klausimai apie
  pokalbių peržiūrą</h2>` (lp4 lieka nepaliestas).

## 5. „Trys žingsniai iki X" dublis su lp3/lp4/lp5

- `index.html:233` „Trys žingsniai iki pirmo pokalbio" → „Kaip atrodo pirmas susirašinėjimas"
  (nenaudoja nei „Trys žingsniai iki X" formos, nei frazės „iki pirmo pokalbio").

## 6. Vardai, sutampantys su lp1

- `index.html:194` „Eglė, 29" → „Monika, 28"
- `index.html:204` (vokatyvas tame pačiame chat burbule) „Labas, Egle!" → „Labas, Monika!"
- `index.html:270` „Rūta ir Tomas · Vilnius" → „Deimantė ir Lukas · Vilnius"
- `index.html:278` „Giedrė ir Mindaugas · Kaunas" → „Viltė ir Mindaugas · Kaunas"
- `index.html:286` „Aistė ir Karolis · Klaipėda" → „Agnė ir Karolis · Klaipėda"
- Grep patvirtino: jokių kitų šių vardų pasikartojimų `index.html`/`app.js`/`style.css` nebuvo.
- `VARIANT.md:38` iliustracinis pavyzdys „Eglė, 29, Vilnius..." atnaujintas į „Monika, 28,
  Vilnius..." nuoseklumui su realiu turiniu (nebuvo tiesiogiai prašyta, bet paliktas neatnaujintas
  būtų suklaidinęs kitą sesiją).

## 7. VARIANT.md — patikslintas „akių tarpo" teiginys

- Buvusi 3-ia variacijos priemonė „Akių tarpą/dydį — nedideli skirtumai..." pakeista paaiškinimu,
  kad akių pozicijos skiriasi 1–2 vnt. iš 64 `viewBox` (sub-pikselinis skirtumas 28–40px dydžiu,
  praktiškai nematomas) ir NĖRA faktinė variacijos priemonė; realiai avatarus skiria tik spalva ir
  burnos forma (1–2 punktai virš).

## Kas NEKEISTA (pagal draudimus)

- Paletė, šriftai, forma, sekcijų tvarka, avatarų SVG geometrija — nepaliesta.
- `<!-- tracking: ... -->` žymos (`lp6_view`, `lp6_signup_submit`, `lp6_signup_success`) — patikrinta
  `diff`'u, liko tiksliai tokios pačios, ID nekeisti.
- `assets/style.css` — faile pakeitimų nepadaryta (0 eilučių skirtumo `diff`'e); blokatorius
  išspręstas per HTML klasę + JS logiką, ne CSS.
- Kiti `variacijosv2/lpN*` katalogai neskaityti.

## Atsarginės kopijos

Prieš keičiant, `index.html`, `assets/style.css`, `assets/app.js`, `VARIANT.md` nukopijuoti į
scratchpad (`.../scratchpad/lp6-backup/`) prieš bet kokį keitimą.

## PATVIRTINIMAS — be-JS testas praeina

Chrome headless su `--disable-javascript`, aptarnauta per lokalų `python3 -m http.server`,
1280×1400 langas, `variacijosv2/lp6/index.html`: ekrano nuotraukoje matomi visi 5 chat burbuliai
(du „jo", du „mano", vienas „Rašo…" su taškais) su pilnu tekstu, `opacity: 1`, telefono kontaktas
rodo „Monika, 28". Jokio tuščio telefono rėmo. Su JS įjungtu puslapis veikia kaip anksčiau —
animacija vis tiek suveikia (patikrinta antru screenshot'u, kuriame paskutinis burbulas dar
pusiau nublukęs — vadinasi, JS realiai perkrauna animaciją, o ne tiesiog palieka klasę).
