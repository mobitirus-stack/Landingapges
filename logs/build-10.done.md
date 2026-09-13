# build-10.done.md — `lg10-atvirukas`

**Rolė šioje sesijoje:** ne pirminė statyba (ta jau buvo padaryta ankstesnio, API limito nutraukto
agento) — **patikra ir užbaigimas**. Matricos eilutė **#10**, terminų stulpelis **10**
(`config/diferenciacijos-matrica.md`, `config/terminu-zemelapis.md`).

## Rasta pradinė būsena

Egzistavo `index.html`, `VARIANT.md` (be Žingsnio 5), `assets/pastel.css`, `assets/pastel.js`, ir
netikėtai `assets/grain.png` (64×64 RGBA, 11 KB), niekur VARIANT.md nepaaiškintas.

## 1. `assets/grain.png` kilmės patikra — REZULTATAS: PAŠALINTA

Failas buvo naudojamas kaip pasikartojanti tekstūra (`.deck-front` ir `.story-panel` foniniai vaizdai),
bet **VARIANT.md, index.html nei bet kuriame kitame šio aplanko faile nebuvo nė žodžio apie tai, kaip
jis sukurtas** — jokio generavimo scenarijaus (Python/PIL, canvas, ar pan.) neliko nei šiame aplanke,
nei likusiame repo. Kadangi statybos taisyklės draudžia bet kokį iš išorės atsisiųstą turinį ir leidžia
tik SVG/CSS arba paties agento programiškai sugeneruotą turinį, o jo lokalios kilmės **negalėjau
patvirtinti jokiais įrodymais**, laikiausi nurodymo: **failas pašalintas**, o jo abi naudojimo vietos
pakeistos grynu CSS sprendimu — inline SVG `feTurbulence` (fraktalinis triukšmas) + `feColorMatrix`,
tonuotas `--tekstas` atspalviu, alpha 0.05, kaip CSS kintamasis `--grain` faile `pastel.css`. Vizualiai
patikrinta Playwright ekrano nuotraukoje (1440px) — tekstūra subtiliai matoma ant hero kortelės
gradiento, teksto kontrastui neturi jokios įtakos. Pilnai užrašyta `VARIANT.md` § „Žingsnis 5“.

## 2. Turinio patikra prieš PRIĖMIMO KRITERIJUS, matricos eilutę #10 ir terminų stulpelį #10

- Spalvos `#FBF7FF/#F0E6FA/#6E4BA8/#FFC9A3/#3C2A56/#E2D6F2` — tiksliai, jokių papildomų hex CSS faile
  (patikrinta `grep -oE '#[0-9A-Fa-f]{6}'` — lygiai 6 reikšmės).
- Lora 500 italic (antraštės) + Manrope 400/600 (tekstas) — atitinka.
- Asimetrinis 2/3+1/3 su `story-panel` dešinėje, `position: sticky` nuo 1024px — atitinka ašį 6/10.
- Perverčiamų kortelių dėklas, 5 kortelės, po vieną klausimą — atitinka CTA modelį (ašis 9, #10).
- Sekcijų tvarka HTML dokumente: H → P+FORM(dėklas) → D → M → K → A → € → Q → Į → N → L → C —
  patikrinta rankomis pagal `id`/antraščių tekstą, tiksliai sutampa su matricos ašimi 8, eilute #10.
- Terminija: patikrinta kiekviena iš 15 sąvokų prieš `config/terminu-zemelapis.md` stulpelį 10
  (išsiuntimas, atvirukas, korespondentas, dėžutė, simpatija, korespondencija, pasižadėjimas,
  priežiūra, vardelis, atsakymo adresas, savas žodis, kampelis, tarpsnis, dovanai, ribos). Rastas ir
  ištaisytas vienas kryžminis sutapimas: „susirašinėjimo“ (lg5 terminas) panaudotas vietoje savo
  termino „korespondencija“ — pataisyta tiek `index.html`, tiek `VARIANT.md` juodraštyje (kur dar buvo
  ir lg1 terminas „žinutės“ tame pačiame sakinyje).
- Draudžiami žodžiai/frazės (§1, §9 sąrašai) — patikrinta programiškai, jokio tikslaus sutapimo
  (paviršutiniai „Submit“/„Susisiekti“ atitikmenys pasirodė esą HTML atributas `type="submit"`,
  tracking žymos ir prasminis veiksmažodis sakinyje — ne draudžiami CTA/frazių atitikmenys).
- 999px suapvalinimas — patikrinta, kad taikomas TIK `<button>` elementams (deck-flip, deck-next,
  deck-send, cookie-strip button). Rastas ir ištaisytas vienas nukrypimas: `.skip-link` (tai `<a>`,
  ne mygtukas) naudojo `var(--radius-button)` — pakeista į `var(--radius-card)` (18px). Nuotaikos
  žymekliai ir kitos plytelės — 18px, ne piliulės formos.
- Klasių konvencija (dvižodžiai semantiniai: `story-panel`, `answer-list`, `deck-card`...) —
  patikrinta, jokio draudžiamo bendrinio vardo tiksliai kaip class token.

## 3. Realaus naršyklės patikra (Playwright + Chromium, headless, lokalūs failai)

Patikrinta realiai (ne vien statine analize), pagal `~/.claude/…/memory/verify-in-a-real-browser.md`
nuorodą:

- **360 / 768 / 1024 / 1440px:** `document.documentElement.scrollWidth === clientWidth` visuose
  keturiuose pločiuose — jokio horizontalaus scroll. Ekrano nuotraukos patvirtina layout'ą vizualiai.
- **Konsolė:** jokių `console.error` ar `pageerror` įvykių per pilną sąveikos scenarijų (žr. žemiau).
- **Kortelės apvertimas:** veikia pele (klik ant „Versti kortelę“) ir klaviatūra (fokusas ant tikro
  lauko automatiškai apverčia kortelę per `focusin` klausytoją) — realūs `<label>`/`<input>` visada
  dokumento sraute po vizualiu flip sluoksniu, ne tik dekoratyvūs.
- **Formos validacija:** tikrinta klaidingais duomenimis (per trumpas vardelis → tiksli klaidos eilutė
  iš `VARIANT.md`), tiesioginis `submit` įvykio iškvietimas prieš užpildant nė vieno lauko — teisingai
  blokuojamas, rodoma pirma klaida. Rastas ir ištaisytas realus defektas: originalus kodas tikrino tik
  paskutinę kortelę prieš siunčiant — dabar tikrinamos visos penkios (detalės `VARIANT.md`).
  Rastas ir ištaisytas antras defektas: prieš pataisymą visų 5 kortelių tikri laukai buvo vienodai
  pasiekiami `Tab` klavišu nepriklausomai nuo aktyvios kortelės — pridėtas `inert` neaktyvioms
  kortelėms; patvirtinta Playwright testu, kad fokusas į trečios kortelės lauką nepavyksta, kol antra
  tebėra aktyvi.
- **Sėkmės būsena:** po pilno teisingo srauto (5 kortelės) forma pasislepia, `success-panel` atsiranda
  ir gauna fokusą, `aria-live="polite"` regionas paskelbia „Atvirukas išsiųstas.“ — tiksliai pagal
  `VARIANT.md`.
- **Kontrastas:** paskaičiuota programiškai (WCAG santykis) visoms teksto/fono poroms, įskaitant
  sumažintos (0.75) neskaidrumo antrines etiketes — mažiausias rastas santykis ≈5.2:1, visi ≥4.5:1.
- **`prefers-reduced-motion: reduce`:** Playwright kontekste su šia nuostata, kortelės `transition-
  duration` (ir `.deck-card-inner`) = `0s` — animacija pilnai išjungta, atitinka medijos taisyklę
  CSS faile.
- **Slaptažodžio rodymas/slėpimas:** mygtukas perjungia `type="password"`↔`"text"` ir `aria-pressed`/
  `aria-label` — patikrinta veikimas.

## 4. Ištaisyta šioje sesijoje

1. `assets/grain.png` pašalintas; pakeistas CSS/SVG `feTurbulence` triukšmu (`--grain` kintamasis).
2. `index.html` + `VARIANT.md`: terminijos kryžminis sutapimas „susirašinėjimo“ (lg5) → „korespondencijos“.
3. `assets/pastel.js`: `submit` validuoja visas 5 korteles, ne tik paskutinę.
4. `assets/pastel.js`: pridėtas `inert` neaktyvioms/baigtoms kortelėms + trūkęs pradinis `activateCard(1)`.
5. `index.html`: pridėtas trūkęs `action="#"` ant `<form>`.
6. `assets/pastel.css`: `.skip-link` 999px → 18px (999px tik `<button>`).
7. `VARIANT.md`: pridėtas Žingsnis 5 (savikritika po kodo) su visais aukščiau išvardintais pataisymais
   ir sąmoningu sprendimu **nepridėti** grįžimo prie baigtos kortelės mygtuko (draudžiamas šablonas
   §7.6 p. 63) — vietoje to paaiškinta, kaip F12 laikomas įvykdytu kitaip (progreso išsaugojimas,
   klaidos prieš kortelei tampant „baigta“).

Diff apima tik `variacijos/lg10-atvirukas/` failus; joks kitas variantas neliestas ir neskaitytas.
Jokio GTM/Meta Pixel/OpenAI pixel identifikatoriaus šiame variante nėra (tik `<!-- tracking: ... -->`
komentarų placeholder'iai pagal statybos reikalavimą) — patikrinta, kad visos 7 tracking žymos liko
nepaliestos ir nepakitusios.

## Priėmimo kriterijai (`promptai/03-statyba.md`)

- [x] Planas ir savikritika parašyti prieš kodą — `VARIANT.md` Žingsnis 1–2 (jau buvo).
- [x] Visos spalvos, šriftai, hero tipas, CTA modelis, sekcijų tvarka atitinka matricos eilutę #10 —
      patikrinta punkte 2 aukščiau.
- [x] Visas tekstas tikras, terminija iš savo stulpelio — patikrinta, vienas kryžminis sutapimas rastas
      ir ištaisytas (žr. punktą 4.2).
- [x] Nėra nė vieno žodžio iš draudžiamo sąrašo — patikrinta programiškai.
- [x] Klasių pavadinimai nestandartiniai, pagal priskirtą konvenciją (dvižodžiai semantiniai).
- [x] 360px be horizontalaus scroll (Playwright patvirtinta visuose 4 pločiuose), klaviatūra pereinamas
      visas puslapis (papildomai pataisyta — žr. `inert` fix'ą).
- [x] Konsolė švari, nuorodos veikia, forma validuoja ir rodo sėkmės būseną — patikrinta realiu
      naršyklės testu, viena reali validacijos spraga rasta ir ištaisyta.
- [x] `<title>` (43 simb.) ir `meta description` (120 simb.) unikalūs ir tinkamo ilgio.
- [x] Vienas judesio momentas — viršutinės kortelės apvertimas; `prefers-reduced-motion` patikrinta
      realiai, transition duration → 0s.
- [x] Pašalintas perteklinis elementas ir tai užrašyta — šioje sesijoje: `assets/grain.png` (neaiškios
      kilmės rastrinis vaizdas) pašalintas ir pakeistas CSS/SVG sprendimu; pirminio statybos agento
      savo pašalintas elementas nebuvo užrašytas (VARIANT.md Žingsnis 5 trūko) — dabar pridėtas.

## Pastabos kitai fazei (4A/4B)

- F12 („gali grįžti atgal“) šiame variante įgyvendintas per `localStorage` progreso išsaugojimą ir
  klaidų rodymą prieš kortelei tampant „baigta“, NE per grįžimo mygtuką (jis būtų pažeidęs draudžiamą
  šabloną §7.6 p. 63). Jei fazės 4B auditas nuspręs, kad to nepakanka, rekomenduojama sprendimą
  įgyvendinti per pačio dėklo sąveiką (klik ant matomos ankstesnės kortelės krašto), ne per pakartotą
  tekstinį/mygtuko elementą.
- `og:image` sąmoningai neįtrauktas — ašis 12 dabar visiškai be rastrinių vaizdų (po `grain.png`
  pašalinimo), o SVG-kaip-`og:image` sprendimo šiam etapui nereikėjo.
- Kanoninis URL (`https://vyrukambarys.lt/lg10`) — pagal `CLAUDE.md` deployment schemą; nekeista.
