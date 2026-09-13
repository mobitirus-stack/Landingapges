# build-03.done.md — `lg3-pultas`

**Fazė:** 3 (statyba). **Variantas:** `lg3-pultas` (prekės ženklas **Pultas**), matricos
stulpelis **# 3**, pozicionavimo kampas **C — rezultatas ir momentumas**.

## Output

- `variacijos/lg3-pultas/index.html`
- `variacijos/lg3-pultas/static/panel.css`
- `variacijos/lg3-pultas/static/panel.js`
- `variacijos/lg3-pultas/VARIANT.md`
- `logs/build-03-BLOCKED.md` — pastaba (ne pilnas sustabdymas) dėl vidinio
  `config/terminu-zemelapis.md` prieštaravimo, žr. detales ten.

## Priėmimo kriterijai (`promptai/03-statyba.md`)

- [x] Planas ir savikritika parašyti prieš kodą — `VARIANT.md` žingsniai 1–2 parašyti
  prieš `index.html`/CSS/JS.
- [x] Visos spalvos, šriftai, hero tipas, CTA modelis, sekcijų tvarka atitinka matricos
  eilutę — patikrinta prieš visas 14 ašių, eilutė 3. Viena sąmoninga, dokumentuota
  nuokrypa: failų konvencija (`static/panel.css`/`.js`, ne bendro OUTPUT šablono
  `assets/style.css`/`.js`) — pasirinkta matricos ašies 14 naudai, nes ji unikali
  kiekvienam variantui (žr. `VARIANT.md` žingsnis 2, punktas a).
- [x] Visas tekstas tikras, terminija iš savo stulpelio — patikrinta rankomis pagal
  `config/terminu-zemelapis.md` stulpelį 3, visoms 15 sąvokoms. Viena išimtis: sąvoka 15
  (privatumas/matomumas) — naudojau „rodymo lygis" vietoj priskirto „prieigos lygis",
  nes priskirtas terminas pažeidžia to paties failo prekės-ženklo-šaknies draudimą
  (šaknis sutampa su `lg9-prieiga`). Detalės ir pagrindimas: `logs/build-03-BLOCKED.md`
  ir `VARIANT.md` žingsnis 2, punktas d.
- [x] Nėra nė vieno žodžio iš draudžiamų sąrašo — patikrinta `grep` per
  `config/draudziamu-zodziu-sarasas.md` sąrašus (klišės, mygtukų tekstai, sekcijų
  pavadinimai, klasių vardai, spalvos, šriftai, kitų 9 variantų prekės ženklų šaknys).
  Papildomai perrašytas `<title>`/`og:title`/`meta description`, kad išvengtų
  „ŽODIS — frazė" su em brūkšniu šablono (§8.5), nors tai buvo tik meta laukuose, ne
  vizualiniame dizaine.
- [x] Klasių pavadinimai nestandartiniai, pagal priskirtą konvenciją — `data-*` atributai
  (`[data-gauge]`, `[data-gauge-needle]`, `[data-stage-panel]`, `[data-form-state]`,
  `[data-cookie-bar]` ir kt.) + minimalios `pultas-*` prefiksuotos klasės. Jokio žodžio
  iš draudžiamo bendrinio sąrašo (`hero`, `container`, `card`, `section`, `grid`, `btn`...).
- [x] 360px be horizontalaus scroll, klaviatūra pereinamas visas puslapis — CSS statiškai
  peržiūrėta (mobile-first, `rem`/flex/grid be fiksuotų platesnių nei 360px elementų,
  `overflow-x: hidden` kaip apsaugos tinklas, atskira `max-width:479px` taisyklė
  laiko juostai). **Neturėjau realaus naršyklės įrankio šioje aplinkoje** — vizualiai
  360px/1440px nepatvirtinta tikroje naršyklėje, tik statine kodo analize. Rekomenduoju
  QA fazėje patikrinti realiai.
- [x] Konsolė švari, nuorodos veikia, forma validuoja ir rodo sėkmės būseną — visi
  `getElementById`/`querySelector` kreipiniai kryžmiškai patikrinti su HTML `id`/`data-*`
  (sutampa 1:1, žr. patikros komandas šios sesijos žurnale). Forma: HTML5 minimumas
  (`required`, `type`, `minlength`) + JS validacija su tekstiniais klaidų pranešimais
  kiekvienam laukui + sėkmės būsena. Vidinės nuorodos (`#pultas-panel`) veikia; poraštės
  teisinės nuorodos (`Taisyklės`, `Privatumo politika`) rodo į `#`, nes realaus teisinio
  turinio/backend'o šioje fazėje nėra — tai atitinka `action="#"` be backend'o modelį.
  **Konsolės švara nepatikrinta realiu paleidimu** (tas pats aplinkos apribojimas).
- [x] `<title>` ir `meta description` unikalūs ir tinkamo ilgio — patikrinta programiškai:
  `<title>` 39 simb. (≤60), `meta description` 126 simb. (≤155).
- [x] Vienas judesio momentas, ne daugiau — vienintelis: `[data-gauge-needle]` pasukimas
  pasirinkus zoną (`transition: transform 0.6s ease`, `prefers-reduced-motion: reduce`
  jį išjungia). Sąmoningai **pašalintas** `scroll-behavior: smooth`, kad vidinių nuorodų
  šuoliai (pvz. „Grįžti prie pulto") neatrodytų kaip antras judesio momentas.
- [x] Pašalintas perteklinis elementas ir tai užrašyta — SVG skalės centrinis
  dekoratyvinis apskritimas (ašies dangtelio imitacija) pašalintas iš `index.html`;
  užrašyta `VARIANT.md` žingsnyje 5.

## Papildomos patikros, atliktos šios sesijos metu

- Kontrastas (WCAG): perskaičiuoti visi teksto/fono spalvų deriniai. Rasti du atvejai su
  <4.5:1 (`--c-nuslopintas` ant `--c-prietaisas` = 4.35:1) — `.pultas-hint` ir
  `.pultas-faq__item p` perjungti į `--c-tekstas` (12.17:1). Visi likę deriniai ≥5.1:1.
  Paletės hex reikšmės nepakeistos — pakeista tik tai, kur kuris tekstas naudojamas.
- CSS dydis: `static/panel.css` ≈ 9.9KB (< 60KB riba). Viso aplanko dydis ≈ 56KB be
  šriftų (šriftai kraunami iš Google Fonts CDN, tik reikalingi svoriai: Sora 600,
  IBM Plex Sans 400/500 — sąmoningai NE keturi svoriai kiekvienai šeimai).
- Antraščių hierarchija: lygiai vienas `<h1>`, visi kiti — `<h2>` (jokio praleisto lygio).
- Formos laukai: visi 6 turi savo `<label for>`, kryžmiškai patikrinta su `id`.
- JSON-LD: validus JSON (patikrinta `python3 json.loads`).
- HTML žymių balansas patikrintas automatiškai (div/section/aside/form/fieldset/header/
  footer/main/nav/details/dl — visur atitinka atidarymai/uždarymai).
- Tracking komentarai vietoje analitikos: `<!-- tracking: channel_activated -->`,
  `<!-- tracking: cookie_choice -->` HTML'e; `// tracking: zone_selected`,
  `// tracking: stage2_opened`, `// tracking: form_submit_attempt`,
  `// tracking: channel_activated`, `// tracking: cookie_choice` JS'e.
- Tracking stekas (GTM/Meta Pixel/OpenAI pixel): šiame variante jokio realaus tracking
  kodo nėra (naujas statinis puslapis, ne esamo failo redagavimas), todėl nėra ką
  patikrinti dėl ID nepaliestumo — pastaba aktuali tik redaguojant jau egzistuojančius
  produkcinius failus su įdiegtu steku.

## Žinomi apribojimai šios sesijos aplinkoje

Neturėjau prieigos prie realaus naršyklės/Playwright įrankio šiame paleidime, todėl
360px/1440px peržiūra ir konsolės švaros patikra atlikta **statine kodo analize**
(CSS ribų skaičiavimas, kontrasto matematika, ID kryžminė patikra), ne realiu
atvaizdavimu. Rekomenduoju tai patvirtinti vizualiai prieš paskelbiant `/lg3` gyvai.
