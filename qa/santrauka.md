# QA santrauka — 10 variantų vienoje lentelėje

Sudaryta iš realaus kodo (`index.html` + CSS), ne iš matricos deklaracijų. Data: 2026-09-13.

---

## Pagrindinė lentelė

| # | Variantas | Kryptis | Paletė (realios CSS reikšmės) | Šriftai | Hero tipas | CTA modelis |
|---|---|---|---|---|---|---|
| 1 | **lg1-matmuo** | Matavimo / specifikacijos lapas: viskas turi nurodytą matmenį, matomas bazinis tinklelis | `#E9ECEF` lapas · `#16181D` grafitas · `#D5202C` kalibravimo raudona · `#FDFDFD` paviršius · `#C4CAD1` tinklelio linija | **Chivo** 700 (antraštės, tabuliariniai skaitmenys) + **Newsreader** 400 (tekstas, lh 1.65) | Kairiojo lygiavimo antraštė be vaizdo; po ja horizontali 3 matmenų eilutė (laukai / trukmė / kaina) ir vienas įvesties laukas | **Vieno lauko įėjimas:** el. paštas hero'e → reikšmė perkeliama į pilną 5 laukų formą žemiau (2 etapai) |
| 2 | **lg2-lenta** | Fizinė skelbimų lenta: antspauduoti lapeliai, storos juodos ribos, fiksuoti pasukimo kampai | `#F2E205` lentos geltona · `#000000` juodas rašalas · `#2B4BFF` antspaudo mėlyna · `#FFFDF2` lapelis · `#E0D400` nuspausta geltona | **Anton** 400 (visos antraštės, didžiosiomis) + **Space Grotesk** 400/700 (tekstas, etiketės, mygtukai) | Tipografinis plakatas be UI: trijų eilučių antraštė + pasuktas apskritas antspaudas + vienas mygtukas | **Pilno ekrano modalas:** `<dialog>` su visa 6 laukų forma vienu ekranu (1 etapas), atidaromas iš 3 taškų |
| 3 | **lg3-pultas** | Prietaisų skydelis: skalės, rodyklės, būsenų rodmenys; puslapis kaip stebimas pultas | `#0A1628` pultas · `#071120` gylis · `#12253F` prietaisas · `#D9E6F4` tekstas · `#3FD0E8` signalas · `#6E8BA8` nuslopintas | **Sora** 600 (antraštės, rodmenys) + **IBM Plex Sans** 400/500 (tekstas, formos etiketės) | Antraštė per visą plotį; po ja skilta zona — kairėje slenkantis rodmenų srautas, dešinėje sticky prietaisas su SVG skale ir rodykle | **Inline forma sticky dešinėje kolonoje:** zonos pasirinkimas persuka rodyklę → atsiveria likę 5 laukai (2 etapai) |
| 4 | **lg4-silas** | Sodo / lauko dienoraštis: viena plati kolona, natūrali faktūra, lėtas ritmas | `#F1F4EA` popierius · `#C9D3C0` šalavijas · `#22301F` samana · `#7A3352` uogos rašalas · `#9DAE92` riba | **Fraunces** 500/600 (`opsz` ašis, antraštės) + **Karla** 400/700 (tekstas) | Full-bleed 88vh scena (CSS gradientas + SVG horizontas + grūdelis), tekstas apačioje ant jos; fonas per scroll pereina iš dienos į vakarą | **Nuolatinė apatinė juosta** per visą puslapį; pilna 7 laukų forma puslapio gale (1 etapas, be žingsnių) |
| 5 | **lg5-salyga** | Sąlygų registras: tanki lentelė, viskas sunumeruota ir išskleidžiama, skaitomumas kaip argumentas | `#F5F7FA` registras · `#102A43` tekstas · `#00778A` petrolio akcentas · `#FFFFFF` eilutė · `#BCCCDC` lentelės linija | **Source Serif 4** 600 (antraštės, lentelės skiltys) + **Atkinson Hyperlegible** 400/700 (**visas** tekstas, min. 16px) | Antraštė + numeruotų sąlygų lentelė (8 stulpelių tinklelis, 44px eilutės, dviguba apatinė linija po skilties eilute) | **Sąlygų kortelė su forma viduje:** forma yra 5-as registro punktas; el. paštas matomas iš karto, likę laukai išsiskleidžia toje pačioje eilutėje (1 etapas) |
| 6 | **lg6-talonas** | Rizografinė spauda dviem rašalais su 2px persidengimu; forma — nukerpamas talonas | `#E7D8B4` ochrinis popierius · `#0B57A4` mėlynas rašalas · `#3AA35C` žalias rašalas · `#123A2F` persidengimas · `#6E6353` nublukęs | **Bitter** 700 (antraštės, talono laukeliai) + **Work Sans** 400/600 (tekstas) | Horizontali marquee juosta virš antraštės; po ja 2:1 kolonos — kairėje antraštė + aktyvumas + kaina, dešinėje talonas | **Nukerpamas talonas:** perforuota atkarpa dešinėje; 1 laukelis pirmoje pusėje (amžiaus tarpsnis) → 4 laukeliai antroje (2 etapai) |
| 7 | **lg7-kabinetas** | Uždaras kabinetas: riešutmedis, kaulo baltumo tekstas, storos juostos, siaura centrinė juosta | `#2A211B` riešutmedis · `#372C24` paviršius · `#EFE6D8` kaulas · `#5F8C72` patina · `#574A3F` juosta | **Gloock** 400 (`h1`, stambus skaičius) + **Jost** 300/500 (tekstas) | Antraštė + stambus dviejų skaitmenų skaičius, kuris susisuka iš atskirų skaitmenų į **00** („tiek lankytojų mato tavo bylą“) — vienintelis vizualas | **Įrašomos eilutės sakinyje:** forma yra vienas sakinys, kurio 6 laukai įterpti į tekstą (1 etapas) |
| 8 | **lg8-vakaras** | Vakaro planuoklis: sotus spalvinis laukas, bento laiko blokai, pasirinkimo šakotuvas | `#3B2EDB` vakaro mėlyna · `#C3F53C` lajaus žalsva · `#FF6B57` koralas · `#F2F1FE` šviesa · `#1B1A33` tekstas | **Fredoka** 600 (antraštės, blokų pavadinimai) + **Plus Jakarta Sans** 400/600 (tekstas) | Klausimas + keturi skirtingo dydžio atsakymo blokai 4 stulpelių bento rėmelyje (realūs `radio` po vizualiniu sluoksniu) | **Pasirinkimo šakotuvas:** vakaro tipo pasirinkimas persitvarko lentą ir atveria likusius blokus (4 etapai, be progreso juostos) |
| 9 | **lg9-prieiga** | Komandų terminalas ant grafito: išvesties eilutės, prompt'as, fiksuoto pločio ritmas | `#2B2B28` grafitas · `#201F1C` gilesnis sluoksnis · `#FFB000` gintaras · `#E8E2D6` išvestis · `#8B8680` komentaras | **JetBrains Mono** 400/700 (antraštės, prompt'as, etiketės) + **Inter Tight** 400 (ilgesnės pastraipos) | Eilutė po eilutės išspausdintas pasiūlymas kaip komandos išvestis — statinis, skaitomas ir be JS | **Komandų prompt'as:** po vieną klausimą eilutėje, atsakymai lieka išspausdinti virš prompt'o kaip seanso istorija su „taisyti“ mygtuku (5 eilutės) |
| 10 | **lg10-atvirukas** | Pastelinis atvirukų dėklas: koliažas, perverčiamos kortelės, asimetrinė šoninė juosta | `#FBF7FF` rytas · `#F0E6FA` vakaras · `#6E4BA8` violetinė · `#FFC9A3` persikas · `#3C2A56` tekstas · `#E2D6F2` riba | **Lora** 500 *italic* (visos antraštės) + **Manrope** 400/600 (tekstas) | Kortelių dėklas su fiziniais sluoksnių poslinkiais ir pasukimais; viršutinė kortelė apverčiama | **Perverčiamas kortelių dėklas:** po vieną klausimą kortelėje, baigtos kortelės nuskrenda į viršų (5 kortelės) |

---

## Papildomos ašys

| # | Variantas | Kampas | Fono charakteris | Tinklelis | Kampai / šešėliai | Vienas judesio momentas | Kodo konvencija ir failai |
|---|---|---|---|---|---|---|---|
| 1 | lg1 | **A** skaidrumas | Šviesus, plokščias; 1px tinklelio liniuotė kairėje paraštėje | Griežtas 12 stulpelių, 2 stulpelių tuščia kairė paraštė | **0px**, jokių šešėlių | `h1` atsiskleidžia per horizontalią `clip-path` kaukę (užkrovimas) | BEM `sheet__*` · `assets/style.css`, `assets/app.js` |
| 2 | lg2 | **C** momentumas | Spalvotas: sotus geltonas laukas per visą puslapį | Asimetrinis, be stulpelių; pasukimai −1.5° / +1° | **0px** + 3px juodi rėmeliai + kietas `6px 6px 0` ofsetas | Mygtukas nusispaudžia 6px ir suvalgo savo šešėlį (reakcija) | Semantiniai vientisi vardai · `styles/main.css`, inline JS |
| 3 | lg3 | **C** momentumas | Gradientinis: vertikalus `#0A1628` → `#071120`, be dėmių | Split: kairė slenka, dešinė sticky | **12px**, jokių išorinių šešėlių; `inset` 1px šviesos žiedas | Rodyklė perbėga į pasirinktos zonos padalą (reakcija) | `data-` atributai + minimalios klasės · `static/panel.css`, `static/panel.js` |
| 4 | lg4 | **B** kontrolė | Tekstūrinis: matinė spalva + `feTurbulence` grūdelis | Viena plati kolona (max 62rem), dideli tarpai 40/80/128 | Asimetrinis organinis `24px 4px 24px 4px`, jokių šešėlių ⚠️ *plius 3 svetimos 999px piliulės — taisoma* | Fono spalva pereina iš dienos į vakarą slenkant (scroll) | Utility `u-*` + `silas-*` · `assets/garden.css`, `assets/garden.js` |
| 5 | lg5 | **A** skaidrumas | Šviesus: vėsus lentelinis fonas, baltos eilutės | Tankus 8 stulpelių, lentelinis; 44px eilutės, 6px žingsnis | **4px**; vietoj šešėlio — 1px riba ir dviguba apatinė linija | Lentelės eilutė išsiskleidžia paspaudus „Ką tai reiškia“ (reakcija) | Ilgi semantiniai vardai `terms-` / `ledger-` · `css/ledger.css`, inline JS |
| 6 | lg6 | **A** skaidrumas | Tekstūrinis: ochrinis popierius, 2px rašalo ofsetas | Dvi nelygios kolonos 2:1 **be** tarpinių linijų | **0px**; vietoj šešėlio — 2px misregistracija ir perforacijos punktyras | Marquee juosta slenka nuolat — vienintelis judesys puslapyje | kebab-case be prefiksų · `assets/style.css`, inline JS |
| 7 | lg7 | **B** kontrolė | Tamsus: monolitinis riešutmedis, be sluoksnių ir šešėlių | Siaura centrinė juosta (max 46rem), 32/96/192 tarpai | **0px**; 3px storio horizontalios juostos | Stambus skaičius susiformuoja iš atskirų skaitmenų (užkrovimas) | CSS-modulių stilius `Panel_root` · `assets/study.css`, `assets/app.js` |
| 8 | lg8 | **C** momentumas | Spalvotas: sotus mėlynas laukas, ant jo šviesūs blokai | Bento: 4 stulpeliai, skirtingo dydžio blokai, 16px gap | Mišrūs: **28px** dideliems, **6px** mažiems; jokių šešėlių | Pasirinkus bloką bento lenta persitvarko per FLIP (reakcija) | Komponentiniai prefiksai `c-` / `l-` / `is-` · `ui/board.css`, `ui/board.js` |
| 9 | lg9 | **C** momentumas | Tamsus: plokščias grafitas, be gradientų ir švytėjimo | Viena kolona, kairysis lygiavimas, 72ch simbolių ritmas | **2px**; 1px gintarinės ribos, mirksintis blokinis kursorius | Įvedus atsakymą virš prompt'o išspausdinama nauja eilutė (reakcija) | Sutrumpinti `tm-*` · `bin/term.css`, `bin/term.js` |
| 10 | lg10 | **B** kontrolė | Gradientinis: švelnus vertikalus `#FBF7FF` → `#F0E6FA` | Asimetrinis 2/3 + 1/3, dešinėje lėčiau slenkanti šoninė juosta | **999px** mygtukams + **18px** kortelėms; minkštas `0 10px 30px` šešėlis **tik** po aktyvia dėklo kortele | Viršutinė dėklo kortelė apverčiama (reakcija) | Dvižodžiai semantiniai `story-panel` · `assets/pastel.css`, `assets/pastel.js` |

---

## Ašių patikra (realiame kode)

| Patikra | Rezultatas |
|---|---|
| 10 skirtingų paletės rinkinių, jokia hex reikšmė dviejuose variantuose | ✔ |
| 20 šriftų šeimų, nė viena dviejuose variantuose; Bricolage Grotesque ir Archivo nenaudojami niekur | ✔ |
| 10 skirtingų hero tipų | ✔ |
| 10 skirtingų CTA modelių; 10 skirtingų formos pradžios laukų; nė vienas ne 3 žingsnių; nė vienos „N iš 3“ juostos | ✔ |
| 10 skirtingų judesio momentų; 6 iš jų — reakcija į veiksmą; `prefers-reduced-motion` visuose 10 | ✔ |
| 10 skirtingų kodo konvencijų ir failų kelių | ⚠️ `assets/style.css` naudoja ir lg1, ir lg6 (matrica lg6 numatė `press/style.css`) — **liko** |
| Kampų / šešėlių kalba nesikartoja | ✔ **ištaisyta** — lg4 999px piliulių nebeliko (`garden.css` 0 rezultatų) |
| Klasių vardų kolizijos tarp variantų | ⚠️ liko **viena**: `.masthead` (lg1 + lg6). `cookie-strip` / `legal-links` / `repeat-link` / `skip-link` / `visually-hidden` — išvalytos ✔ |
| lg6 šriftai kraunami per `<link>`, ne CSS `@import` | ✔ **ištaisyta** |
| Jokio `IntersectionObserver` / scroll-reveal / fade-up nė viename JS | ✔ |
| Tiksliai vienas `<h1>` kiekviename puslapyje | ✔ |
| Gyvas GTM / Meta Pixel / OpenAI pikselis | Nėra nė viename — tik `<!-- tracking: -->` žymos |

---

## Verdiktų santrauka

### Po pirmojo audito (2026-09-13, ryte)

**PRIIMTA: 0 · PERDARYTI: 10** — visi dėl to paties: keturios bendros teksto konstrukcijos
(pinigų pažadas, moderavimo pažadas, privatumo dvipusis sąrašas, antraštė „Jei dar dvejoji“)
kartojasi 7–10 iš 10 puslapių tose pačiose vietose.

### Po pirmo perdarymo ciklo (2026-09-13, po `fix-01…10`)

**PRIIMTA: 3 · PERDARYTI: 7** — liko S2b (4/10) ir S3 (6/10) virš ribos, plius 3 naujos
taisymo įneštos frazės (N1–N3). Detalės — `qa/panasumo-auditas.md` §R.

### Po antro perdarymo ciklo (2026-09-13, po `fix-*-r2`)

**PRIIMTA: 6 · PERDARYTI: 4** (lg3, lg8, lg9, lg10) — lg2, lg4, lg5, lg6 uždaryti galutinai, bet
ciklas įnešė 6 naujas bendras frazes (NN1–NN6). Detalės — `qa/panasumo-auditas.md` §T.

### Po trečio perdarymo ciklo — **GALUTINIS** (2026-09-13, po T.7.1–T.7.4)

**PRIIMTA: 10 · PERDARYTI: 0 — PROJEKTAS BAIGTAS.**

| Variantas | Verdiktas | Pastaba |
|---|---|---|
| lg1-matmuo | ✅ PRIIMTA | Neliestas. N1/N2 savininkas |
| lg2-lenta | ✅ PRIIMTA | Neliestas. NN3 savininkas |
| lg3-pultas | ✅ PRIIMTA | F8 `dl` eilutė ištrinta, F9 eil. 206 ir F5 eil. 213–223 perrašytos; S2b 3/4 → **0/4** |
| lg4-silas | ✅ PRIIMTA | Neliestas. S3 išimties savininkas |
| lg5-salyga | ✅ PRIIMTA | Neliestas |
| lg6-talonas | ✅ PRIIMTA | Neliestas. S3 istorinis precedentas (eil. 215). Kosmetika: marquee eil. 48/49/52 |
| lg7-kabinetas | ✅ PRIIMTA | Neliestas. Abiejų išimčių (S2b eil. 163, S3 eil. 69–70) savininkas |
| lg8-vakaras | ✅ PRIIMTA | Eil. 241 + 258 perrašytos; NN1 ir NN3 uždarytos |
| lg9-prieiga | ✅ PRIIMTA | S3 sąrašas išardytas iš esmės (eil. 179–181 nebevardija laukų); NN1/NN2/NN4/NN5 uždarytos |
| lg10-atvirukas | ✅ PRIIMTA | F5 perrašyta pirmuoju asmeniu, vienaskaita; S2b 3/4 → **1/4** |

**S1–S5 galutinė būsena:** S1 **0/10** ✔ · S2a **2/10** (leista) · S2b **1/10** — tik `lg7:163`, riba
laiko ✔ · S3 **3/10** — lg4 + lg7 + lg6 precedentas, riba laiko ✔ · S4 **1/10** ✔ · S5 **3/10** ✔.

**Naujų bendrų frazių trečiame cikle — nė vienos** (n-gramų analizė per visas 45 poras; visi
sutapimai — slapukų juostos, poraštės, 18+ varnelės, formos klaidos).

**Dizaino sluoksnis nekeistas ir toliau pereina visus objektyvius testus.** Nė vienas CSS ar JS
failas nė viename perdarymo cikle nepaliestas. Visos 56 tracking žymos vietoje, gyvo GTM / Meta
Pixel / OpenAI pikselio nėra nė viename.

**Likusi neprivaloma kosmetika (nekeičia nė vienos konversijos):** klasių kolizija `.masthead`
(lg1 + lg6) ir F-skilčių antraščių šablonai už F5/F8/F9 ribų. Pagrindimas — `qa/panasumo-auditas.md`
§G.7.
