# build-01.done.md — `lg1-matmuo`

Statybos agentas: fazė 3 (03-statyba.md), matricos eilutė #1, terminų stulpelis 1.

## Output failai

- `variacijos/lg1-matmuo/index.html`
- `variacijos/lg1-matmuo/assets/style.css` (12.0 KB)
- `variacijos/lg1-matmuo/assets/app.js` (6.8 KB)
- `variacijos/lg1-matmuo/VARIANT.md`

Puslapio bendras svoris (html+css+js, be šriftų): ~35 KB. Šriftai — Google Fonts, tik Chivo 700 ir
Newsreader 400 (po vieną svorį kiekvienai šeimai).

## Priėmimo kriterijai

- [x] Planas ir savikritika parašyti prieš kodą — `VARIANT.md` §1–2.
- [x] Visos spalvos, šriftai, hero tipas, CTA modelis, sekcijų tvarka atitinka matricos eilutę #1 —
      `#E9ECEF/#16181D/#D5202C/#FDFDFD/#C4CAD1`, Chivo 700 + Newsreader 400, centrinė antraštė be vaizdo
      su horizontalia matmenų eilute ir vienu įvesties lauku, „vieno lauko įėjimas“ CTA, seka
      H→P→Į→FORM(1)→€→M→A→Q→FORM(pilna)+sėkmė→D→L→C tiksliai atkartota HTML sekcijų tvarka.
- [x] Visas tekstas tikras, terminija iš savo stulpelio (1) — patikrinta rankomis: įrašymas, duomenų
      lapas, dalyvis, sistema (leidžiama išimtis lg1), sutapimas, žinutės, deklaracija, auditas, žymė,
      pašto adresas, kodas, vietovė, amžiaus intervalas, be mokesčio, matomumo nustatymai — visi naudoti
      tiksliai, jokio kito varianto termino.
- [x] Nėra nė vieno žodžio iš draudžiamo sąrašo — patikrinta `grep` paieška per §1–§9 frazes
      (Pradėti/Submit/Pateikti/nemokamai/veltui/platforma/sprendim*/aplikacij*/įrankis/svetain*/
      produktas/paslauga) — nė vienas neaptiktas; jokio „A · B · C“ vidurio taškų modelio; jokio
      Bricolage Grotesque / Archivo; jokių draudžiamų hex reikšmių.
- [x] Klasių pavadinimai pagal BEM, nestandartiniai — `sheet__*`, `masthead__*`, `plate__*`, `spec__*`,
      `panel__*`, `entry__*`, `faq__*`, `legal__*`, `consent__*`, `callout__*`. Patikrinta grep'u — nė
      vienas draudžiamas bendrinis vardas (`hero/container/wrapper/btn/card/section/grid/row/col/cta/...`)
      neaptiktas.
- [x] 360px be horizontalaus scroll, klaviatūra pereinamas visas puslapis — patikrinta Playwright/Chrome
      automatizuotai: `scrollWidth === clientWidth` ties 360/768/1024/1440px; klaviatūros Tab perėjimas
      per visą puslapį patvirtintas (31 fokusuojamas elementas su id), checkbox veikia per Tarpo klavišą.
- [x] Konsolė švari, forma validuoja ir rodo sėkmės būseną — patikrinta realiame Chrome per Playwright:
      pilnas srautas (pašto adreso perkėlimas iš herojaus → validacijos klaidos visiems 5 laukams →
      teisingi duomenys → sėkmės būsena) veikia be jokių konsolės pranešimų ar klaidų.
- [x] `<title>` ir `meta description` unikalūs ir tinkamo ilgio — title 46 simb., description 139 simb.
      (patikrinta programiškai).
- [x] Vienas judesio momentas — `h1` atsiskleidžia per horizontalią `clip-path` kaukę vieną kartą
      užkrovus; `prefers-reduced-motion: reduce` patikrintas Playwright's `emulateMedia` — animacija
      išjungiama, h1 iškart pilnai matomas.
- [x] Pašalintas perteklinis elementas ir tai užrašyta — žr. `VARIANT.md` §5 (dubliuota ruler juostelė
      pašalinta; papildomai užrašyti du realūs, testavimo metu rasti ir ištaisyti trūkumai: slapukų
      juosta perkelta iš `position:fixed` į dokumento srautą, kad negalėtų persidengti su forma (F14),
      ir pašalintas automatinis fokusavimas po herojaus formos perkėlimo).

## Pastabos kitai fazei (4A/4B)

- Testuota realiame Chrome (per Playwright, `channel: "chrome"`, nes standartinis Playwright Chromium
  binary nepalaikomas šios mašinos macOS versijoje) — vizualiai ir funkciškai patikrinta 360/768/1024/1440px,
  klaviatūros naršymas, forma, sėkmės būsena, `prefers-reduced-motion`.
- Vienintelė žinoma keistenybė: automatizuotas Playwright `.check()` iškvietimas ant žymimojo langelio
  kartais nepavykdavo iš karto po `<select>` reikšmės pasirinkimo tame pačiame automatizuotame scenarijuje
  (CDP lygmens keistenybė, patvirtinta, kad tikram naudotojui nekyla — veikia ir pelės, ir klaviatūros
  (Tarpo klavišas) būdu patikimai). Nurodoma dėl skaidrumo, jei fazė 4 kartotų automatizuotą testą tuo
  pačiu būdu.
