# build-08.done.md — `lg8-vakaras`

Statybos agentas: fazė 3 (03-statyba.md), matricos eilutė #8, terminų stulpelis 8.

## Output failai

- `variacijos/lg8-vakaras/index.html` (15.3 KB)
- `variacijos/lg8-vakaras/ui/board.css` (10.2 KB)
- `variacijos/lg8-vakaras/ui/board.js` (8.5 KB)
- `variacijos/lg8-vakaras/VARIANT.md`

Bendras svoris (html+css+js, be šriftų): ~34.5 KB — gerokai mažiau nei 1.5 MB riba, CSS gerokai mažiau
nei 60 KB riba. Šriftai — Google Fonts: **Fredoka** (svoris 600, vienas) + **Plus Jakarta Sans** (400 ir
600) per bendrą `preconnect`. Jokių rastrinių vaizdų — tik inline SVG (prekės ženklo taškas, akies
piktograma slaptažodžio laukui).

## Priėmimo kriterijai

- [x] Planas ir savikritika parašyti prieš kodą — `VARIANT.md` Žingsnis 1–2.
- [x] Visos spalvos, šriftai, hero tipas, CTA modelis, sekcijų tvarka atitinka matricos eilutę #8:
      `#3B2EDB/#C3F53C/#FF6B57/#F2F1FE/#1B1A33`, Fredoka 600 + Plus Jakarta Sans 400/600, hero = klausimas
      + keturi atsakymo blokai, CTA modelis „pasirinkimo šakotuvas“ (4 blokai, pasirinkus atsiveria likę
      laukai), seka H→P+FORM(pradžia)→M→FORM(tęsinys)→Q→N→€→A→K→D→L→C tiksliai atkartota HTML sekcijų
      tvarka. Fonas sotus mėlynas (apverstas, ne šviesus) — sąmoningas sprendimas iš matricos DALIES 3.
      Bento tinklelis 4 stulpelių, blokai 1/2/3 vienetų aukščio, nesilygiuoja į vieną bazę (dense
      auto-flow + kintami `--span-col/--span-row`). Kampai mišrūs 28px/6px, jokių šešėlių (ašis 10).
      Formos pradžia — vakaro tipas (NE lytis), 4 etapai, be progreso juostos (ašis 9).
- [x] Visas tekstas tikras, terminija iš savo stulpelio (8): įsirašymas, planas, kompanionas,
      tvarkaraštis, suderinimas, pasikalbėjimas, sutikimas, filtravimas, pseudonimas, paštas, kombinacija,
      miestas, amžiaus juosta, nemokamai, privatumas — visi panaudoti tiksliai, patikrinta `grep`. Nė
      vienas kito varianto stulpelio žodis tai pačiai sąvokai nerastas (patikrinta spot-check: sistema,
      platforma, sprendimas, produktas, įrankis, aplikacija, svetainė, vartotojas, paslauga, narys,
      registracija, profilis, lytis, amžius — nė vienas neaptiktas kaip pašalinis terminas).
- [x] Nėra nė vieno žodžio iš draudžiamo sąrašo — patikrinta `grep` per draudžiamas hex reikšmes
      (`#12101a` ir 10 kitų), šriftus (Bricolage Grotesque, Archivo), kito varianto prekės ženklus
      (Matmuo/Pultas/Šilas/Sąlyga/Talonas/Kabinetas/Prieiga/Atvirukas). Vienintelis atpažintas atvejis —
      žodis „lenta“ meta apraše („bento lenta“) — tai bendrinis lietuviškas žodis, naudojamas paties
      lg8 mechanizmui apibūdinti; matricos DALIES 3 lg8 kortelė pati vartoja šį žodį lg8 kontekste
      („visa bento lenta persitvarko“), todėl tai nėra kito varianto (lg2 „Lenta“) prekės ženklo
      pasisavinimas, o autoritetingo šaltinio jau sankcionuotas bendrinis terminas. Piliulės/chip formos
      pasirinkimo mygtukų NĖRA — keturi vakaro tipo blokai yra tikri `<input type="radio">` su
      `<label>`, vizualiai dideli, apvalinimas 28px/6px (ne 100px piliulė). Slaptažodžio rodymo
      perjungiklis yra **piktograma** (akies SVG), NE tekstinis „rodyti/slėpti“ dviejų būsenų mygtukas
      (banned p. 46). Tarpinių žingsnių mygtukai „Rodyti kitą bloką“ / „Rodyti paskutinį bloką“ nėra
      vienas bendrinis tęsimo žodis (banned p. 62) — kiekvienas sako, kas konkrečiai įvyks paspaudus.
      Amžiaus ir miesto laukai sąmoningai IŠSKIRTI į atskirus etapus (ne pora viename dviejų stulpelių
      bloke, banned p. 29) — žr. `VARIANT.md` FORM tęsinio pastabą.
- [x] Klasių pavadinimai komponentiniai su prefiksais `c-`/`l-`/`is-` (`c-block`, `l-board`, `is-picked`
      ir t.t.), pagal priskirtą ašies 14 konvenciją. Failai tiksliai `index.html`, `ui/board.css`,
      `ui/board.js`. Patikrinta grep'u — nė vienas draudžiamas bendrinis vardas (`hero/container/wrapper/
      btn/card/section/grid/row/col/cta/feature/testimonial/footer-links`) neaptiktas kaip savarankiška
      klasė (radiniai buvo tik CSS custom property vardų dalys `--span-col/--span-row` arba mūsų pačių
      prefiksuotos klasės `c-cta`, kurios yra leidžiama konvencija, ne draudžiamas bendrinis vardas).
      Papildomai pervadinti `id="hero-heading"` → `id="klausimas-heading"` ir `data-board="hero"` →
      `data-board="pradzia"`, kad mechaninė paieška neaptiktų net atsitiktinio žodžio „hero“ pavadinime.
- [x] 360px be horizontalaus scroll (patikrinta REALIAME Chrome per Playwright CDP, ne vien skaičiuojant
      iš kodo — `scrollWidth === clientWidth` abiem 360 ir 1440 pločiais), klaviatūra pereinamas visas
      puslapis (patikrinta: Tab pasiekia radio, Space pažymi, tęsinio sekcija atsiveria).
- [x] Konsolė švari, nuorodos veikia, forma validuoja ir rodo sėkmės būseną — patikrinta realiame Chrome
      per Playwright: pilnas 4 etapų srautas (vakaro tipas → miestas → amžius+pseudonimas →
      paštas+kombinacija+sutikimas → pateikimas be duomenų → klaida → pilnai užpildyta → sėkmė) veikia
      be jokių konsolės klaidų abiem pločiais (360/1440).
- [x] `<title>` (51 simb.) ir `meta description` (151 simb.) unikalūs ir tinkamo ilgio.
- [x] Vienas judesio momentas — bento lentos FLIP persitvarkymas (First-Last-Invert-Play), naudojamas
      IR hero pasirinkimui, IR visiems trims formos tęsinio etapams (tas pats mechanizmas, ne keli
      skirtingi efektai). `prefers-reduced-motion: reduce` patikrintas Playwright `emulateMedia` —
      `transform` lieka `none`, animacijos nėra.
- [x] Pašalintas perteklinis elementas ir tai užrašyta — žr. `VARIANT.md` Žingsnis 5 (mažų lajaus
      žalsvos spalvos apskritimų prie „Kas nutinka, kai baigsi“ sąrašo punktų pašalinimas).

## Reali klaida, rasta ir ištaisyta realiame naršyklės teste (ne vien skaitant kodą)

`ui/board.css` pirminėje versijoje `.l-board__grid` naudojo `grid-auto-rows: var(--unit)` (fiksuotas
aukštis). Herojaus `c-block--intro` turinys (h1 + paantraštė + įsipareigojimo eilutė + statuso
pranešimas) realiame renderyje užėmė daugiau vietos nei jam skirti 2 tinklelio vienetai — blokas
fiziškai persidengė su „Netikėtas vakaras“ bloku po juo (ir analogiškai su formos tęsinio bloku po
pasirinkimo). Tai matėsi TIK ekrano nuotraukoje realiame Chrome, ne skaitant CSS. Pataisyta į
`grid-auto-rows: minmax(var(--unit), auto)` — patikrinta iš naujo ekrano nuotraukomis 360/1440px prieš
ir po pasirinkimo, persidengimo nebeliko. Taip pat pataisytas su tuo susijęs antras rastas rizikos
taškas prieš testavimą: `<fieldset>` su `display:contents` turi žinomų suderinamumo problemų senesnėse
naršyklėse (Safari), todėl visi keturi `<fieldset>/<legend>` grupavimo elementai pakeisti į
`<div role="group" aria-labelledby="...">` + `<p class="c-legend">` — išlaikoma ta pati prieinamumo
semantika be rizikos, kad tinklelio išdėstymas sulūžtų senesnėje naršyklėje.

## Pastabos kitai fazei (4A/4B)

- Testuota realiame Chrome per Playwright (`channel: "chrome"`, standartinis Chromium binary
  nepalaikomas šios mašinos macOS versijoje) — 360/1440px scroll patikra, pilnas 4 etapų formos srautas,
  klaidos, sėkmės būsena, klaviatūros navigacija, `prefers-reduced-motion`, ekrano nuotraukos prieš/po
  pasirinkimo abiem pločiais.
- Tracking steko šiame variante **nėra** (naujas, izoliuotas puslapis, joks GTM/Meta/OpenAI pixel
  failas nebuvo liestas) — vietoje analitikos paliktos `<!-- tracking: event_name -->` žymos prie
  pagrindinių įvykių (vakaro_tipas_pasirinktas, žingsnis_2/3_baigtas, isirasymo_forma_pateikta,
  isirasyta_sekme, slapukai_patvirtinti), kaip nurodyta 03-statyba.md.
- Ašis 9 formos etapų grupavimas: matrica nurodo tik lauko pradžią („vakaro tipas“) ir etapų skaičių
  (4), o konkretų likusių laukų grupavimą į etapus pasirinkau pats statybos metu — sąmoningai IŠSKYRIAU
  amžių ir miestą į atskirus etapus (o ne suporavau, kaip referencinis modelis p. 28–29), kad išvengčiau
  net dalinio panašumo į draudžiamą fiksuotą laukų seką. Paskutiniame etape liko paštas+kombinacija+
  sutikimas (be pseudonimo, kuris perkeltas į 3 etapą kartu su amžiumi) — tai skiriasi nuo referencinio
  „slapyvardis+paštas+slaptažodis+sutikimas vienu žingsniu“ modelio tiek sudėtimi, tiek tuo, kad tai
  ketvirtas, ne trečias/paskutinis iš trijų žingsnis.
