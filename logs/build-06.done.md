# build-06.done.md — `lg6-talonas`

Statybos agentas: fazė 3 (03-statyba.md), matricos eilutė #6, terminų stulpelis 6.

## Output failai

- `variacijos/lg6-talonas/index.html` (16.3 KB)
- `variacijos/lg6-talonas/assets/style.css` (10.2 KB)
- `variacijos/lg6-talonas/VARIANT.md`

Puslapio bendras svoris (html+css, be šriftų): ~26.5 KB. Jokio `app.js` — visa JS logika inline
`<script>` prieš `</body>`, nes užduoties OUTPUT skyrius nurodė tik `index.html` + `assets/style.css`.
Šriftai — Google Fonts: **Bitter** (svoris 700, vienas) + **Work Sans** (400 ir 600) — 3 šriftų failai,
gerokai mažiau nei draudžiamas „4 svoriai kiekvienai šeimai“ modelis. Jokių rastrinių nuotraukų —
matricos ašis 12 numato „duotone fotografiją dviem rašalais“, bet realios licencijuotos fotografijos
šiame statybos kontekste sąžiningai gauti negalima (nėra leidimo siųstis nuotraukų iš išorės, o 18+
kontekstui reikalingos realios nuotraukos būtų už užduoties ribų); vietoje to — inline SVG iliustracija
(korektoriaus patvirtinimo žymė) su tuo pačiu duotone/2px poslinkio principu. Užrašyta ir pagrįsta
`VARIANT.md` §1 ir šiame žurnale.

## Priėmimo kriterijai

- [x] Planas ir savikritika parašyti prieš kodą — `VARIANT.md` §1–2.
- [x] Visos spalvos, šriftai, hero tipas, CTA modelis, sekcijų tvarka atitinka matricos eilutę #6 —
      `#E7D8B4/#0B57A4/#3AA35C/#123A2F/#6E6353`, Bitter 700 + Work Sans 400/600, hero = marquee juosta
      virš antraštės, CTA modelis „nukerpamas talonas su perforacija“, seka
      C→H→marquee→P→Q→€→FORM(talonas)→M→A→Į→D→K→L tiksliai atkartota HTML sekcijų tvarka (DUK po D
      turi F15 pakartotinį priėjimą prie `#coupon`, L turi antrą).
- [x] Visas tekstas tikras, terminija iš savo stulpelio (6): užpildymas, skelbimas, rubrika,
      atsišaukimai, laiškai, antspaudas, korektūra, slapyvardis, pašto dėžutė, šifras, dešimtmetis,
      veltui — visi panaudoti tiksliai, patikrinta `grep`. Vienas rizikingas atvejis rastas ir
      ištaisytas: sakinys apie mokamą lygį iš pradžių naudojo žodį „matomumą“ (kito varianto stulpelio
      1 terminas „matomumo nustatymai“ tai pačiai #15 sąvokai) — perrašyta be to žodžio prieš baigiant.
      Miesto/vietovės laukas (koncepcija #12) sąmoningai nenaudojamas — forma renka tik paskyrai būtinus
      duomenis (F10 minimalizmas), todėl kolizijos rizikos nėra.
- [x] Nėra nė vieno žodžio iš draudžiamo sąrašo — patikrinta `grep` paieška per §1–§9 frazes, terakotos
      hex `#B4471F`, Bricolage Grotesque/Archivo, kito varianto prekės ženklų (Matmuo/Lenta/Pultas/
      Šilas/Sąlyga/Kabinetas/Vakaras/Prieiga/Atvirukas) — nė vienas neaptiktas. Slaptažodžio laukas
      neturi teksto tipo rodyti/slėpti perjungiklio (banned p. 46) — tokio elemento apskritai nėra.
      Tarpinio žingsnio mygtukas „Rašau antrą pusę“ nėra vienas bendrinis tęsimo žodis (banned p. 62).
      Pagrindinis CTA „Įteikiu taloną“ yra pirmuoju asmeniu, ne beasmenis liepiamasis veiksmažodis
      (banned p. 61).
- [x] Klasių pavadinimai kebab-case be prefiksų (`press-mark`, `ink-strip`, `coupon-tear`, `coupon-field`,
      `moderation-block`, `faq-item` ir t.t.) — patikrinta grep'u, nė vienas draudžiamas bendrinis vardas
      (`hero/container/wrapper/btn/card/section/grid/row/col/cta/feature/testimonial/footer-links`)
      neaptiktas tiksliai.
- [x] 360px be horizontalaus scroll (patikrinta 360/768/1024/1440px), klaviatūra pereinamas visas
      puslapis (16 fokusuojamų elementų).
- [x] Konsolė švari, forma validuoja ir rodo sėkmės būseną — patikrinta realiame Chrome per Playwright:
      pilnas srautas (tuščias dešimtmetis → klaida → pasirinkta → antra pusė → tušti laukai → visos 4
      klaidos → užpildyta teisingai → sėkmės būsena) veikia be jokių konsolės pranešimų ar klaidų.
- [x] `<title>` (38 simb.) ir `meta description` (121 simb.) unikalūs ir tinkamo ilgio.
- [x] Vienas judesio momentas — marquee juosta (`.ink-strip-track`) slenka nuolat per CSS `animation`;
      `prefers-reduced-motion: reduce` patikrintas Playwright `emulateMedia` — `animation-play-state`
      tampa `paused`. Talono pusių perjungimas (1↔2) yra momentinis `hidden` atributo perjungimas, be
      jokios animacijos/perėjimo — kad neatsirastų antras judesio momentas.
- [x] Pašalintas perteklinis elementas ir tai užrašyta — žr. `VARIANT.md` §4 (dubliuota dekoratyvi
      punktyrinė linija virš „Serija A“ pašalinta). Papildomai, testuojant realiu Playwright 360px
      pločiu, rasta ir ištaisyta reali struktūrinė problema: talonas mobiliajame layout'e atsidurdavo
      toli už pirmo ekrano ribos (~1016px nuo viršaus) — perrašyta `.lead-grid` su
      `grid-template-areas`, kad <768px talonas vizualiai iškiltų iškart po antrašte (dokumento/
      klaviatūros tvarka nepakito). Po pataisymo — talono viršus 360×740 lange ties ~687px.

## Pastabos kitai fazei (4A/4B)

- Testuota realiame Chrome per Playwright (`channel: "chrome"`, standartinis Chromium binary
  nepalaikomas šios mašinos macOS versijoje) — 360/768/1024/1440px scroll patikra, formos srautas,
  klaidos, sėkmės būsena, slapukų žymos `localStorage`, `prefers-reduced-motion`.
- Ašis 12 (duotone fotografija) įgyvendinta kaip inline SVG iliustracija, ne kaip rastrinė nuotrauka —
  priežastis ir pagrindimas aukščiau ir `VARIANT.md`. Jei 4B fazė nuspręs, kad reikalinga tikra
  rastrinė nuotrauka, tai reikštų papildomą turto (asset) šaltinį, kurio šiame statybos žingsnyje
  nebuvo galima gauti be pažeidimo („nesisiųsk nieko iš išorės“ dvasios).
- Tracking steko šiame variante **nėra** (naujas, izoliuotas puslapis, joks GTM/Meta/OpenAI pixel
  failas nebuvo liestas) — vietoje analitikos paliktos `<!-- tracking: coupon_submitted -->` žymos
  prie formos pateikimo, kaip nurodyta 03-statyba.md.
