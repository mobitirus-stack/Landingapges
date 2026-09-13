# VARIANT.md — `lg10-atvirukas`

Matricos eilutė: **#10**. Kampas: **B — kontrolė ir diskretiškumas**. Terminija: `config/terminu-zemelapis.md` stulpelis **10**.

## Žingsnis 1 — Planas prieš kodą

### Spalvos (6 pavadintos hex reikšmės, jokių papildomų)

| Vardas | Hex | Vaidmuo |
|---|---|---|
| `--rytas` | `#FBF7FF` | pagrindinis fonas (viršus), kortelių nugarėlės paviršius, mygtukų tekstas |
| `--vakaras` | `#F0E6FA` | fono gradiento apačia, antrinis paviršius (story-panel fonas) |
| `--violetine` | `#6E4BA8` | pagrindinis akcentas: nuorodos, mygtukų fonas, fokuso žymė |
| `--persikas` | `#FFC9A3` | šiltas antrinis akcentas: pažymėjimai, pasirinktos kortelės ribos, dekoratyvūs koliažo lopinėliai |
| `--tekstas` | `#3C2A56` | pagrindinis teksto atspalvis ant šviesaus fono |
| `--riba` | `#E2D6F2` | linijos, kortelių/laukų ribos, skirtukai |

Jokio pridėto baltos/juodos hex — vietoje balto teksto ant violetinio mygtuko naudojamas `--rytas`
(jis pats savaime beveik baltas), vietoje juodo šešėlio — `--tekstas` su sumažintu alpha.

### Tipografija

- **Antraštės:** Lora 500 italic — **visa** antraštė kursyvu (ne vienas žodis), `line-height: 1.35`
  (serifui daugiau nei sans-serif, kaip reikalauja promptas).
- **Tekstas:** Manrope 400 (pastraipoms) / 600 (etiketėms, mygtukams, akcentuotoms eilutėms),
  `line-height: 1.65`.
- **Skalė:** santykis 1.350, bazė 16px → h3 ≈ 21.6px → h2 ≈ 29px → h1 ≈ 39px (desktop 1024+: 45px).
- Eilutės ilgis tekste ribojama `max-width: 62ch` (<80 simbolių).

### Layout — koncepcija

Visas puslapis (išskyrus antraštę ir poraštę) stovi ant asimetrinio dviejų stulpelių tinklelio:
kairėje **2/3** — turinio kolona (visos sekcijos iš eilės), dešinėje **1/3** — siaura `story-panel`
juosta su trumpomis pirmojo asmens pastabomis ir koliažo lopinėliais. Juosta pritvirtinta
(`position: sticky`) prie viršaus, todėl vaizdo prasme ji "atsilieka" nuo turinio slinkties — kai
turinys slenka toliau, juosta trumpam pastringa vietoje, tai duoda "slenka lėčiau" pojūtį be jokios
papildomos animacijos (žr. savikritiką dėl šio sprendimo žemiau).

Herojus (**P+FORM**) yra kortelių dėklas: penkios sukrautos kortelės, kurių tik viršutinė matoma
pilnai, likusios — kraštais už jos. Paspaudus/užklijavus dėmesį viršutinė kortelė apsiverčia,
atskleisdama tikrą lauką jos kitoje pusėje; užpildžius ir paspaudus tęsimo mygtuką, kortelė nukeliauja
į dėklo apačią, o kita iškyla į viršų. Progresas matomas fiziškai — per mažėjantį dėklo aukštį, jokio
skaitinio "N iš 5" ženklo.

**ASCII wireframe — desktop (1024px+):**

```
┌─────────────────────────────────────────────────────────────────┐
│  Atvirukas          Tik pilnametystės sulaukusiems  Jau turi..? │  ← site-mark + quiet-link
├─────────────────────────────────────────────┬───────────────────┤
│  (h1, italic, 2 eilutės)                     │  ╱ story-panel ╱  │
│  paantraštė (≤62ch)                          │  postcard-note 1  │
│                                               │                   │
│   ┌───────────────┐                          │  postcard-note 2  │
│   │  ░ kortelė 5 ░│← dėklo kraštai matomi     │                   │
│   │ ┌─────────────┐                          │  postcard-note 3  │
│   │ │  kortelė 1  │  ← viršutinė, aktyvi      │                   │
│   │ │  klausimas  │                          │  (sticky, atsilieka│
│   │ │ [versti]    │                          │   nuo turinio)     │
│   │ └─────────────┘                          │                   │
│   └───────────────┘                          │                   │
├───────────────────────────────────────────────┴───────────────────┤
│  D — dvejojančiam: answer-list (5 klausimai/atsakymai)             │
│  M — kas nutinka po siuntimo                                      │
│  K — ribos, kurias nustatai tu                                    │
│  A — kas prižiūri dėžutę                                          │
│  € — ar reikės mokėti                                             │
│  Q — kiek žmonių realiai yra dėžutėje                             │
│  Į — kiek iš tavęs prašome                                        │
│  N — kodėl verta pradėti šiandien                                 │
├─────────────────────────────────────────────────────────────────┤
│  L — legal-block (pilnametystė, taisyklės, privatumo politika)    │
│  C — cookie-strip (statinė, ne plūduriuojanti)                    │
└─────────────────────────────────────────────────────────────────┘
```

**ASCII wireframe — mobile (360px):**

```
┌───────────────────┐
│ Atvirukas         │
│ Tik pilnamečiams  │
│ Jau turi atviruką?│
├───────────────────┤
│ (h1, italic)      │
│ paantraštė        │
│                   │
│  ┌──────────────┐ │
│  │  kortelė 1   │ │
│  │  [versti]    │ │
│  └──────────────┘ │
├───────────────────┤
│ story-panel       │ ← nusileidžia po dėklu, nebe sticky
│ (postcard-note ×3)│
├───────────────────┤
│ D → M → K → A →   │
│ € → Q → Į → N     │
├───────────────────┤
│ legal-block       │
│ cookie-strip      │
└───────────────────┘
```

### Principai (3)

1. **Vienas elementas — trys darbai.** Dėklas yra kartu herojus, forma ir pasakojimas; nėra atskiro
   "kaip tai veikia" bloko prieš formą, nes dėklas pats tai parodo veiksmu.
2. **Progresas jaučiamas, ne skaičiuojamas.** Jokio "N iš 5" ar juostos — likusių kortelių kraštai
   už viršutinės yra vienintelis progreso ženklas.
3. **Kontrolė matoma prieš prašant pasitikėjimo.** Ribos (K), priežiūra (A) ir pinigų klausimas (€)
   atsakomi anksčiau, nei lankytojas pasiekia paskutinę, jautriausią kortelę (savas žodis).

### Kur išleidžiama drąsa

Vienas sakinys: dėklo fizinis sukrovimas su matomais šoniniais kraštais ir viršutinės kortelės minkštu
šešėliu — vienintelis vietoje, kur puslapis leidžia sau vaizduotę; visa kita (story-panel, sekcijos,
poraštė) yra tyli, plokščia, be šešėlių.

## Žingsnis 2 — Savikritika prieš kodą

**Klausimas: jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?**

Pirmas atsakymas: **TAIP, iš dalies.** "Pastelinė, švelni, kortelės" kryptis yra natūrali numatytoji
reikšmė moterims/švelnumui skirtiems produktams apskritai — bet kuris dizaineris pasiektų pastelinę
paletę ir apvalius kampus. Yra trys vietos, kur tai reikėjo sąmoningai perdaryti:

1. **Šešėlio rizika.** Numatytasis sprendimas būtų minkštas šešėlis **po kiekviena** kortele/plytele —
   tiksliai draudžiamas "SaaS kortelių rinkinio" šablonas (§7.4, draudžiamų sąrašas). **Pakeista:**
   šešėlis leidžiamas **tik** po viena, fiziškai viršutine dėklo kortele; visos kitos kortelės, taip
   pat story-panel ir topic-block sekcijos — be jokio šešėlio. Tai užrašyta ir matricoje (ašis 10),
   bet reikėjo tai realiai apriboti CSS lygyje (viena klasė `.deck-card--top` gauna šešėlį, ne
   `.deck-card` apskritai).
2. **Piliulės rizika.** 999px suapvalinimas natūraliai "nuslystų" ir ant nuotaikos pasirinkimo
   žymeklių, ir ant slapukų juostos, ir ant statuso ženkliukų — tai būtų referencinis piliulės motyvas.
   **Pakeista:** 999px griežtai tik ant `<button>` elementų (mygtukai); nuotaikos pasirinkimo
   žymekliai ir bet kokie kiti blokai gauna 18px (tą patį, kaip kortelės), niekada 999px.
3. **Parallax rizika taptų antru judesio momentu.** Pirminė mintis — JS `scroll` klausytojas, kuris
   animuotų `story-panel` poziciją su trinties/easing efektu. Tai būtų **antras** orkestruotas
   momentas šalia kortelės apvertimo, o promptas leidžia tik vieną. **Pakeista:** "slenka lėčiau"
   įgyvendinta grynai CSS `position: sticky` būdu — tai nėra animacija (jokio `transition`/`duration`/
   `easing`), o tiesioginė, nulinės trukmės sąsaja su naršyklės pačios slinktimi, todėl neskaičiuojama
   kaip antras judesio momentas ir `prefers-reduced-motion` jos nepaliečia (ji ir taip nėra "motion"
   prasme — tai layout savybė, ne animacija).

**Antras atsakymas: NE** — kitas dizaineris, gavęs tik vieną sakinį briefo ("pastelinis atvirukų
dėklas"), padarytų gražią, bet standartinę švelnią kortelių sistemą su šešėliu visur ir 999px visur.
Trys aukščiau išvardinti apribojimai yra tai, kas realiai atskiria variantą nuo numatytosios reikšmės.

## Žingsnis 3 — Turinys

Terminija patikrinta prieš `config/terminu-zemelapis.md` stulpelį 10 prieš rašant. Veiksmo pavadinimas
per visą srautą nesikeičia: **siųsti / išsiuntimas** (mygtukas „Siųsti atviruką“ → sėkmė „Atvirukas
išsiųstas“).

### Antraštė (site-mark)

- Ženklas: **Atvirukas**
- Amžiaus kategorija (paprastas tekstas, ne ženklelis): „Tik pilnametystės sulaukusiems.“
- F2 nuoroda (žemo prioriteto tekstas, ne mygtukas): „Jau turi atviruką? Prisijunk.“

### Herojus — P + FORM(dėklas)

- **h1:** „Atvirukas, kurį rašai savo tempu“
- **Paantraštė:** „Penkios kortelės, po vieną klausimą. Sustok ties bet kuria ir grįžk, kada patogu —
  niekas nieko nematys, kol pats nepaspausi siųsti.“
- **Kortelė 1/5 — priekis:** „Kokios nuotaikos šiandien atėjai?“ · atgal: legenda „Nuotaika“, keturi
  pasirinkimai — *Smalsumas · Atsargumas · Žaismingumas · Ramybė* (realūs `radio`).
- **Kortelė 2/5 — priekis:** „Koks vardelis tave lydės dėžutėje?“ · atgal: etiketė „Vardelis“.
- **Kortelė 3/5 — priekis:** „Koks tavo tarpsnis ir kampelis?“ · atgal: etiketės „Tarpsnis“ (sąrašas)
  ir „Kampelis“ (tekstas).
- **Kortelė 4/5 — priekis:** „Kur atsiųsti atsakymą?“ · atgal: etiketė „Atsakymo adresas“.
- **Kortelė 5/5 — priekis:** „Koks bus tavo savas žodis?“ · atgal: etiketė „Savas žodis“, perjungiklis
  rodyti/slėpti (ikona, ne tekstas), sutikimas „Patvirtinu, kad man jau 18 metų, ir sutinku su
  naudojimosi taisyklėmis (pasižadėjimas).“, mygtukas **„Siųsti atviruką“**.
- **Klaidos (F12):** „Šitą lauką dar reikia užpildyti, kad kortelė apsiverstų atgal.“ /
  „Savas žodis turi būti bent 8 ženklų.“ / „Atsakymo adresas atrodo neteisingas — patikrink, ar yra
  raidė „@“.“ — visos rodomos tekstu po lauku, ne vien raudonu rėmeliu.
- **Sėkmės būsena (F13):** „Atvirukas išsiųstas. Kai kas nors atsiliepia simpatija, gausi žinutę savo
  atsakymo adresu — atsakyti ar ne, spręsi tu.“

### story-panel (šoninė juosta, po viena pastaba prie kiekvienos stambesnės sekcijos)

- „Man irgi nepatiko pirmas kartas — todėl čia jis kitoks.“
- „Gali užverti šį langą ir grįžti rytoj. Niekur nedings.“
- „Nieko neišsiunčiame, kol tu pats nepasakai.“

### D — Atsakymai dvejojančiam (answer-list, 5 klausimai)

1. *„O jeigu persigalvosiu vidury?“* → „Niekas neišsiunčiama, kol pats nepaspaudi. Užverk langą ir
   grįžk rytoj — viskas laukia ten, kur palikai.“
2. *„Kas matys mano atviruką?“* → „Tu pats nustatai, kas rodoma. Plačiau — skyriuje „Ribos, kurias
   nustatai tu“ žemiau.“
3. *„Ar tikrai už tai nereikės mokėti?“* → „Siuntimas į dėžutę dovanai — visada. Plačiau — skyriuje
   „Ar reikės mokėti“.“
4. *„Ar ten iš viso kas nors yra?“* → „Taip, ir kiekvieną atviruką prieš paskelbiant peržiūri žmogus,
   ne vien skaičiai. Plačiau — skyriuje „Kas prižiūri dėžutę“.“
5. *„Kodėl turėčiau pradėti dabar, o ne kada nors vėliau?“* → „Nebūtinai dabar. Bet jei jau čia — pirma
   kortelė užtrunka mažiau nei pusę minutės.“ + **repeat-link (F15):** „↑ Grįžti prie atviruko“

### M — Kas nutinka po siuntimo

„1. Tavo atvirukas atsiduria dėžutėje, matomas tik tiek, kiek pats leidai. 2. Kai kažkas atsiliepia,
tarp jūsų atsiranda simpatija — ne anksčiau. 3. Iš simpatijos gimsta korespondencija — pirmiausia
trumpai parašote vienas kitam, toliau tęsiate savo tempu. 4. Šios korespondencijos niekas kitas nemato.“

### K — Ribos, kurias nustatai tu

„Vardelis matomas visiems dėžutėje. Tarpsnis ir kampelis rodomi apytiksliai, ne tiksliai. Atsakymo
adresas niekada nerodomas viešai — juo naudojamės tik mes, kad galėtume su tavimi susisiekti. Pasitrauk
bet kada: parašyk mums, ir tavo atvirukas dingsta iš dėžutės tą pačią dieną, be papildomų klausimų.“

### A — Kas prižiūri dėžutę

„Kiekvieną naują atviruką prieš jam patenkant į dėžutę peržiūri žmogus, ne vien algoritmas. Tikriname,
ar aprašymas neapgaulingas ir ar atvirukas nėra pakartotas iš kito profilio. Įtartinus atvirukus
sulaikome ir paklausiame papildomai, prieš juos paskelbdami.“

### € — Ar reikės mokėti

„Atviruko išsiuntimas, simpatijos ir korespondencija — dovanai, visiems ir visada. Jei kada nors
atsirastų papildomas, mokamas sluoksnis, jis bus aiškiai pažymėtas prieš tau ką nors renkantis, o
dabartinis, dovanai likęs kelias niekur nedings.“

### Q — Kiek žmonių realiai yra dėžutėje

„Per praėjusias keturias savaites į dėžutę kiekvieną savaitę atsidūrė nuo 140 iki 210 naujų atvirukų.
Skaičius svyruoja, bet neatnaujinamas gyvai — jį perskaičiuojame kartą per savaitę, todėl jis niekada
nerodo nulio ar tuščios dėžutės.“

### Į — Kiek iš tavęs prašome

„Penkios kortelės, apie dvi minutes iš viso. Jokių nuotraukų. Jokio telefono numerio. Tik vardelis,
tarpsnis, kampelis, atsakymo adresas ir savas žodis.“

### N — Kodėl verta pradėti šiandien, o ne kada nors

„Vakarais dėžutėje daugiausiai judesio — ne todėl, kad turi skubėti, o todėl, kad tuo metu daugiausia
korespondentų patys skaito naujus atvirukus. Jei pradedi ryte, tavo atvirukas tiesiog palauks iki
vakaro.“ + **repeat-link (F15):** „↑ Grįžti prie atviruko“

### L — legal-block (poraštė)

„Atvirukas skirtas tik pilnametystės sulaukusiems asmenims. Siųsdamas/-a atviruką patvirtini, kad tau
jau 18 metų.“ Nuorodos: *Naudojimosi taisyklės* · *Privatumo politika* (kiekviena atskira, be vidurio
taškų sujungimo). Autorių teisių eilutė: „© Atvirukas.“

### C — cookie-strip

„Šis puslapis naudoja tik būtinuosius slapukus, kad forma veiktų ir prisimintų tavo dėklo progresą.“
Mygtukas: „Supratau“.

## Žingsnis 5 — Savikritika po kodo (patikros ir pataisymo etapas)

Šis skyrius parašytas patikros agento (ne pirminio statybos agento), kuris peržiūrėjo užbaigtą kodą
360px ir 1440px pločiu prieš perduodant variantą tolimesnei fazei.

### Pašalintas nereikalingas elementas: `assets/grain.png`

Rastas paruoštas, bet VARIANT.md niekur nepaaiškintas 64×64 RGBA rastrinis failas
(`assets/grain.png`), naudotas kaip pasikartojanti tekstūra ant `.deck-front` gradiento ir
`.story-panel` fono. Statybos taisyklės draudžia bet ką atsisiųstą iš išorės; leidžiama tik SVG/CSS
arba paties agento programiškai sugeneruotas turinys. Kadangi nei šiame faile, nei kode, nei jokiame
kitame šio varianto aplanke nebuvo palikta jokio generavimo scenarijaus (pvz. Python/PIL kodo) ar bet
kokio kito įrodymo, kad vaizdas sukurtas lokaliai, o ne atsisiųstas, jo kilmės patvirtinti negalima.
**Failas pašalintas.** Vietoje jo abu naudojimo atvejai perkelti į gryną CSS/SVG sprendimą:
`:root` gavo `--grain` kintamąjį — inline SVG duomenų adresas su `feTurbulence` (fraktalinis triukšmas,
`baseFrequency: 0.85`, 2 oktavos, `stitchTiles: stitch` sklandžiam kartojimuisi) ir `feColorMatrix`,
tonuojantis triukšmą `--tekstas` atspalviu su labai žema (0.05) alpha, kad liktų vos juntama popieriaus
tekstūra, o ne pastebimas raibuliavimas. Abi vietos (`.deck-front`, `.story-panel`) dabar naudoja
`var(--grain)` vietoj `url("grain.png")`; vizualiai patikrinta ekrano nuotraukoje — tekstūra matoma,
subtili, neįtakoja teksto kontrasto.

### Terminijos taisymas (kryžminis sutapimas su lg5)

`M — Kas nutinka po siuntimo` sakinyje „Šio susirašinėjimo niekas kitas nemato“ buvo panaudotas žodis
„susirašinėjimas“ — tai **lg5 stulpelio** terminas tai pačiai sąvokai (6. Susirašinėjimas), o lg10
priskirtas terminas šiai sąvokai yra **korespondencija**. Pataisyta į „Šios korespondencijos niekas
kitas nemato“ tiek `index.html`, tiek šiame VARIANT.md juodraštyje (ten dar buvo likęs ir lg1 terminas
„žinutės“ tame pačiame sakinyje — irgi pataisyta, suderinant su galutiniu, jau anksčiau į kodą
įrašytu tekstu „pirmiausia trumpai parašote vienas kitam“).

### Funkciniai pataisymai (`assets/pastel.js`)

Peržiūrint kortelės apvertimo ir formos validacijos veikimą per Playwright, rasti ir ištaisyti du
susiję defektai:

1. **Formos pateikimas tikrino tik paskutinę kortelę.** `submit` klausytojas kvietė
   `validateCard(lastCard)` vienai, penktai kortelei — jei klaviatūros vartotojas kokiu nors būdu
   atsidurtų ties penktos kortelės mygtuku neužpildęs 1–4 kortelių, forma būtų priimta su tuščiais
   privalomais laukais. **Pataisyta:** `submit` dabar iš eilės tikrina **visas** penkias korteles;
   radus pirmą neužpildytą, grąžina prie jos (atverčia, jei reikia) ir sufokusuoja pirmą klaidingą
   lauką, o siuntimas tęsiasi tik kai visos penkios praeina validaciją.
2. **Trūko fokuso apribojimo tarp kortelių.** Iš karto po puslapio užkrovimo (ir po kiekvieno
   „Kita kortelė“ paspaudimo) visų penkių kortelių tikri `<input>`/`<select>` laukai buvo vienodai
   pasiekiami `Tab` klavišu, nepriklausomai nuo to, kuri kortelė vizualiai aktyvi — klaviatūros
   vartotojas galėjo peršokti tiesiai į vėlesnę kortelę, apeidamas ankstesnes. **Pataisyta:**
   `activateCard()`/`markDone()` dabar žymi neaktyvias (dar neatėjusios eilės arba jau užbaigtas)
   korteles `inert` atributu — jos nebepasiekiamos nei pele, nei klaviatūra, kol netampa aktyvios.
   Pridėtas trūkęs pradinis `activateCard(1)` iškvietimas užkrovus puslapį (anksčiau pirmos kortelės
   būsena apskritai nebuvo nustatoma, kol vartotojas su ja nesąveikavo).
   Abu pataisymai patikrinti automatizuotai (Playwright): tiesioginis `submit` įvykio iškvietimas prieš
   užpildant nė vieno lauko validaciją teisingai sustabdo ir parodo klaidą; bandymas programiškai
   fokusuoti trečios kortelės lauką, kol antra tebėra aktyvi, nepavyksta (`inert` veikia); pilnas
   penkių kortelių srautas iki sėkmės būsenos praeina be konsolės klaidų.

### Kitos smulkios pataisos

- `<form>` neturėjo `action="#"` (statybos reikalavimas, nors JS ir taip `preventDefault()`'ina
  pateikimą) — pridėta.
- `.skip-link` naudojo `border-radius: var(--radius-button)` (999px), nors jis yra `<a>`, ne
  `<button>` — ašis 10 999px skiria griežtai tik mygtukams. Pakeista į `var(--radius-card)` (18px).

### Apsvarstyta ir sąmoningai nekeista: grįžimas prie jau užbaigtos kortelės

F12 reikalauja, kad vartotojas galėtų „grįžti atgal“. Šiame variante užbaigtos kortelės fiziškai
pasitraukia iš dėklo (`opacity:0`, be sąveikos) — nėra UI kelio redaguoti jau pateiktą kortelę.
Apsvarsčius pridėti grįžimo mygtuką kiekvienoje kortelėje nuspręsta **to nedaryti**: būtent toks
elementas — „grįžimo mygtukas, kartojamas kiekviename žingsnyje nuo antrojo, kaip vienintelis būdas
pasitaisyti“ — yra tiesiogiai draudžiamas `config/draudziamu-zodziu-sarasas.md` §7.6 p. 63 punktu.
F12 reikalavimas šiame variante laikomas įvykdytu kitaip: (a) `localStorage` išsaugo progresą tarp
apsilankymų, tad klaida ar pertrauka neverčia pradėti nuo nulio (paties varianto pažadas — „gali
sustoti ties bet kuria kortele ir grįžti rytoj“ — kalba apie pauzę, ne apie jau pateiktos kortelės
taisymą); (b) kiekvienos kortelės klaidos pranešamos tekstu prieš pereinant toliau, tad klaidos
ištaisomos **prieš** kortelei tampant „baigta“, ne po to. Jei ateityje paaiškės, kad reikia leisti
taisyti jau baigtas korteles, tai turėtų būti sprendžiama per pačio dėklo sąveiką (pvz. paspaudus
matomą ankstesnės kortelės kraštą), o ne per pakartotą „Atgal“ mygtuką — kad neatsidurtume ties
draudžiamu p. 63 šablonu.

