# lg8-vakaras — VARIANT.md

Matricos eilutė: **# 8** (`config/diferenciacijos-matrica.md`). Prekės ženklas: **Vakaras**.
Kampas: **C — rezultatas ir momentumas**. Terminija: `config/terminu-zemelapis.md` stulpelis **8**.

---

## ŽINGSNIS 1 — Planas

### Spalvos

| Reikšmė | Vaidmuo |
|---|---|
| `#3B2EDB` — vakaro mėlyna | Pagrindinis puslapio fonas. Sotus, ne šviesus — sąmoningas apvertimas: bento sistemos įprastai statomos ant šviesaus lauko, čia jos stovi ant sodraus mėlyno. |
| `#F2F1FE` — šviesa | Tekstas ant mėlyno fono; taip pat šviesių blokų paviršiaus spalva (dvigubas vaidmuo — kaip teksto ir kaip paviršiaus atspalvis, įprasta bento sistemose). |
| `#1B1A33` — tekstas | Tekstas ant šviesių (`#F2F1FE`) paviršių ir ant akcentinių blokų. |
| `#C3F53C` — lajaus žalsva | Pirminis akcentas: pasirinkta būsena, pirminis CTA mygtukas, `is-picked` blokas. |
| `#FF6B57` — koralas | Antrinis akcentas: antriniai mygtukai, pabraukimai, dėmesio taškai, kur lajaus žalsva jau užimta pasirinkimo būsenos. |

Ribų spalvai atskiro tono nenaudoju — ribos gaunamos iš pačių paviršių atspalvių skirtumo (mėlynas fonas / šviesus blokas), nereikia šeštos hex reikšmės.

### Tipografija

- **Fredoka** 600 — visos antraštės (`h1`–`h3`) ir blokų pavadinimai (Google Fonts, vienas svoris).
- **Plus Jakarta Sans** 400 (tekstas) / 600 (etiketės, mygtukų tekstas, akcentuoti žodžiai) — visas likęs tekstas.
- Bazė **16px**, santykis **1.260** (ašis 5):
  - `--fs-sm: 0.85rem` (13.6px) — smulkus tekstas, teisinės pastabos
  - `--fs-body: 1rem` (16px) — pagrindinis tekstas
  - `--fs-label: 1.26rem` (20px) — blokų pavadinimai, formos etiketės
  - `--fs-h3: 1.587rem` (25px) — sekcijų antraštės
  - `--fs-h2: 2rem` (32px) — antrinės antraštės
  - `--fs-h1-m: 2.52rem` (40px, mobile `h1`)
  - `--fs-h1-d: 4rem` (64px, desktop `h1`)
- Eilutės ilgis tekste ribojama `max-width: 34ch`–`38ch` (<80 simbolių).
- Line-height: antraštėms (Fredoka, apvalus display) 1.15; tekstui (Plus Jakarta Sans) 1.55 — sans-serifui pakanka mažiau nei serifui, bet Fredoka apvalumas reikalauja šiek tiek daugiau oro nei įprastam grotesk'ui, todėl 1.15, ne 1.05.

### Layout — bento koncepcija

Puslapis stovi ant vieno tinklelio principo: **4 stulpelių bento rėmelis**, blokai skirtingo dydžio
(1×1, 1×2, 2×1, 2×2 vienetų), **nesilygiuoja į vieną bazinę liniją** — kai kurie blokai prasideda
pusės vieneto poslinkiu žemyn. Vienetas (`--unit`) desktop'e ≈ 96px, tarpas (`gap`) — 16px (ašis 5).
Kampai mišrūs: dideliems blokams 28px, mažiems — 6px (ašis 10), jokių šešėlių.

Herojus pats yra bento lenta: vienas platus tekstinis blokas (klausimas + paantraštė + įsipareigojimo
eilutė) ir keturi atsakymo blokai su tikrais `radio` po vizualiniu sluoksniu (F10 pradžia). Pasirinkus
vieną — **visa lenta persitvarko**: pasirinktas blokas užauga, likę trys susitraukia, o po jais atsiranda
naujas blokų rinkinys su likusiais formos laukais (F10 tęsinys). Tas pats persitvarkymo mechanizmas
naudojamas ir tolesniems trims formos etapams — tai **vienas** judesio tipas, kartojamas, ne keturi skirtingi.

**ASCII wireframe — desktop (1440px, prieš pasirinkimą):**

```
┌────────────────────────────────────────────────────────────────────┐
│ [H] ● Vakaras                                   Jau turi planą? →  │  ← l-board (nav), be sticky/blur
├────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────┐  ┌─────────────┐          │
│ │ c-block--intro  (2×2)                │  │ block: Ramus│ 1×2      │
│ │ Kokį vakarą renkiesi šiandien?        │  │ vakaras     │          │
│ │ paantraštė + „4 blokai. ~2 min.“      │  │ (radio)     │          │
│ └──────────────────────────────────────┘  └─────────────┘          │
│ ┌───────────────┐┌───────────────┐        ┌─────────────┐          │
│ │ Aktyvus vakaras││ Vėlyvas vakaras│        │ Netikėtas   │ 1×1      │
│ │ (radio) 1×1    ││ (radio) 1×1   │        │ vakaras 1×1 │          │
│ └───────────────┘└───────────────┘        └─────────────┘          │
├────────────────────────────────────────────────────────────────────┤
│ [M] Kas nutinka, kai baigsi — 4 punktų blokų eilutė                 │
├────────────────────────────────────────────────────────────────────┤
│ [FORM tęsinys] — bento lenta atsiranda čia po pasirinkimo           │
├────────────────────────────────────────────────────────────────────┤
│ [Q] tvarkaraščio aktyvumo blokas   [N] „kodėl šiandien“ blokas      │
├────────────────────────────────────────────────────────────────────┤
│ [€] pinigų klausimas — vienas platus blokas                         │
├────────────────────────────────────────────────────────────────────┤
│ [A] filtravimo / autentiškumo blokas                                │
├────────────────────────────────────────────────────────────────────┤
│ [K] privatumo blokas                                                │
├────────────────────────────────────────────────────────────────────┤
│ [D] 5 klausimai + „Grįžti prie pasirinkimo“                         │
├────────────────────────────────────────────────────────────────────┤
│ [L] teisinė poraštė                                                 │
│ [C] slapukų juosta (dalis srauto, ne plūduriuojanti)                │
└────────────────────────────────────────────────────────────────────┘
```

**Po pasirinkimo (pvz. „Aktyvus vakaras“), ta pati lenta:**

```
┌──────────────────────────────────────────────────┐
│ ┌───────────────┐ ┌──────────────────────────┐   │
│ │ Ramus  (0.5×1) │ │ AKTYVUS VAKARAS — is-picked│  │
│ └───────────────┘ │ 2×2, paaugęs, lajaus žalia │  │
│ ┌───────────────┐ │ „Dar trys blokai — ir baigta“│ │
│ │ Vėlyvas (0.5×1)│ └──────────────────────────┘   │
│ └───────────────┘ ┌──────────────┐┌──────────────┐│
│ ┌───────────────┐ │ Amžiaus juosta││ Miestas      ││
│ │ Netikėt.(0.5×1)│ │ (naujas 1×1) ││ (naujas 1×1) ││
│ └───────────────┘ └──────────────┘└──────────────┘│
└──────────────────────────────────────────────────┘
```

**ASCII wireframe — mobile (360px):** viena kolona, blokai vienas po kito ta pačia eilės tvarka
kaip desktop bento skaitymo tvarka (intro → 4 pasirinkimai vienas po kito, be persidengimo):

```
┌───────────────────┐
│ ● Vakaras          │
│         Jau turi… →│
├───────────────────┤
│ c-block--intro     │
│ Kokį vakarą…       │
│ 4 blokai · ~2 min. │
├───────────────────┤
│ [ ] Ramus vakaras   │
├───────────────────┤
│ [ ] Aktyvus vakaras │
├───────────────────┤
│ [ ] Vėlyvas vakaras │
├───────────────────┤
│ [ ] Netikėtas vak.  │
├───────────────────┤
│ M → FORM → Q → N   │
│ → € → A → K → D    │
│ → L → C            │
└───────────────────┘
```

### Principai (3)

1. **Fonas kaip apvertimas, ne dekoras.** Bento + žaismingas tonas įprastai statomas ant šviesaus
   lauko — čia jis stovi ant soties mėlynos, todėl lajaus žalsva ir koralas dirba kaip šviesos taškai,
   ne kaip spalvotos dėmės ant balto.
2. **Bentas yra turinys, ne tinklelio mada.** Kiekvienas blokas — arba pasirinkimas, arba viena
   funkcija (F4, F5, F6…). Blokų dydis auga ne dėl vizualinio ritmo, o dėl to, kad pasirinktas
   variantas tampa svarbiausiu turiniu ekrane.
3. **Vienas persitvarkymas, pakartotas, ne keturi skirtingi triukai.** Tas pats FLIP tipo
   persitvarkymas dirba per visus keturis formos etapus — tai suteikia nuoseklumo jausmą, o ne
   „efektų rinkinį“.

### Kur išleidžiama drąsa

Vienas sakinys: pasirinkus bloką, visa bento lenta fiziškai persitvarko realiu laiku (blokai keičia
dydį, vietą ir spalvą per FLIP animaciją) — tai vienintelis įsimenamas momentas, viskas kita (spalvos,
šriftai, tekstas) lieka disciplinuota ir tylu.

---

## ŽINGSNIS 2 — Savikritika prieš kodą

**„Jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?“**

Pirmas atsakymas dalinai **TAIP**: „žaismingas bento + ryškios spalvos“ pirmas instinktas — daugelis
dizainerių pasiūlytų šviesų lelijinį foną (kaip ir pati matrica pastebi savo Dalies 5 savikritikoje).
Tą dalį jau pakeitė pati matrica (apverstas fonas). Liko patikrinti likusias tris rizikas, kurias
turėjau spręsti pats statybos lygmenyje:

1. **Rizika:** hero klausimas „Kas tu / ko ieškai?“ tipo būtų tiesioginis draudžiamas pagal
   `draudziamu-zodziu-sarasas.md` §7.5 p. 57 („tiesioginis identifikacinis klausimas kaip pagrindinė
   antraštė“). **Pakeičiau:** klausimas nėra apie lankytojo tapatybę, o apie **pasirinkimą** („Kokį
   vakarą renkiesi šiandien?“) — funkciškai tai bento pasirinkimo užklausa, ne asmens identifikacija,
   ir hero nėra centruotas vienos kolonos be iliustracijos (p. 22–23) — tai bento tinklelis su spalvotais
   blokais, kurie patys yra vizualinis sluoksnis.
2. **Rizika:** keturi pasirinkimo blokai lengvai virstų piliulės/chip mygtukais (p. 45, aiškiai
   draudžiama užduotyje). **Pakeičiau:** kiekvienas blokas yra didelis stačiakampis su tikru
   `<input type="radio">` ir `<label>`, apvalinimas 28px/6px (ašis 10), ne pilnas 100px piliulės
   suapvalinimas.
3. **Rizika:** F7 (įsipareigojimo dydis) parašius iškart po `h1` kartu su „nemokama“ žodžiu virstų
   draudžiamu „formos pavadinimo palydovu“ (p. 58: nemokamumas + trukmė minutėmis iškart po
   pavadinimu). **Pakeičiau:** F7 eilutė („4 blokai. Apie 2 minutes.“) parašyta be žodžio „nemokamai“;
   pinigų klausimas (€, F8) perkeltas į atskirą sekciją toliau sraute, kaip nurodyta ašyje 8.

Po šių pataisymų: **antras atsakymas — NE.** Kitas dizaineris, gavęs tą patį briefą, greičiausiai
padarytų šviesų bento startuolio puslapį su chip mygtukais ir klausimu apie save — šis variantas
sąmoningai išvengia abiejų.

---

## ŽINGSNIS 3 — Turinys

Terminija griežtai iš `terminu-zemelapis.md` stulpelio 8: **įsirašymas** (registracija), **planas**
(paskyra/profilis), **kompanionas** (narys), **tvarkaraštis** (bendruomenė/visuma), **suderinimas**
(susiejimas), **pasikalbėjimas** (susirašinėjimas), **sutikimas** (patvirtinimas), **filtravimas**
(moderavimas), **pseudonimas** (slapyvardis), **paštas** (el. paštas), **kombinacija** (slaptažodis),
**miestas** (vietovė), **amžiaus juosta** (amžiaus grupė), **nemokamai** (kainos būsena), **privatumas**
(matomumas).

### [H] Antraštė

- Ženklas: `● Vakaras`
- Grįžtančio kompaniono nuoroda (F2, žemo prioriteto, tekstinė): **„Jau turi planą? Prisijungti“**

### [P+FORM pradžia] Herojus

- **H1:** „Kokį vakarą renkiesi šiandien?“
- **Paantraštė:** „Pasirink, koks vakaras — likusią dalį sudėsim mes.“
- **Įsipareigojimo eilutė (F7):** „4 blokai. Apie 2 minutes.“
- **Keturi pasirinkimo blokai (radio + label), pavadinimas grupei (`fieldset legend`):** „Vakaro tipas“
  1. **„Ramus vakaras“** — paaiškinimas: „Kalbėtis, nesiskubinant.“
  2. **„Aktyvus vakaras“** — „Išeiti, judėti, nesėdėti vietoje.“
  3. **„Vėlyvas vakaras“** — „Kai diena jau baigėsi, o norisi dar.“
  4. **„Netikėtas vakaras“** — „Be plano — kaip išeis.“
- **Mikrotekstas po pasirinkimo (rodomas dinamiškai):** „Pasirinkta: {pasirinkimas}. Dar trys blokai —
  ir baigta.“ (skaičius mažėja su kiekvienu užpildytu etapu: „Dar du blokai...“, „Paskutinis blokas.“)

### [M] Kas nutinka, kai baigsi

**Antraštė (h2):** „Kas nutinka, kai baigsi“

Keturi punktai:
1. „Tavo planas atsiranda tvarkaraštyje tą pačią sekundę.“
2. „Suderinimą matai tą pačią minutę, ne kitą dieną.“
3. „Pasikalbėjimas prasideda tavo pusėje — niekas tarp jūsų nestovi.“
4. „Jei šįvakar niekas nesutampa, planas lieka ir laukia kito karto.“

### [FORM tęsinys] Likę bento blokai

Sąmoningai **ne** referencinė seka „lytis → amžius+miestas → slapyvardis+paštas+slaptažodis+sutikimas“
(draudžiama, `draudziamu-zodziu-sarasas.md` p. 28–29, taip pat p. 29 specialiai draudžia būtent
amžiaus+miesto porą viename dviejų stulpelių bloke). Todėl amžius ir miestas išskirti į **atskirus**
etapus/blokus, o paskutiniame etape lieka tik prisijungimo duomenys + sutikimas (be pseudonimo):

- **Etapas 2 — legend:** „Kur“
  - Laukas: **Miestas** — tekstinis laukas, `placeholder`: „Vilnius, Kaunas, Klaipėda…“
  - Mygtukas: **„Rodyti kitą bloką“**
- **Etapas 3 — legend:** „Kas tu“
  - Laukas: **Amžiaus juosta** — select su intervalais: 18–24, 25–34, 35–44, 45–54, 55+
  - Laukas: **Pseudonimas** — `placeholder`: „Kaip tave vadinti tvarkaraštyje“
  - Mygtukas: **„Rodyti paskutinį bloką“**
- **Etapas 4 — legend:** „Paskutinis blokas“
  - Laukas: **Paštas** — `type=email`
  - Laukas: **Kombinacija** — `type=password`, su rodymo perjungikliu kaip **piktograma** (akies ženklas,
    ne tekstinis „rodyti/slėpti“ dviejų būsenų perjungiklis — pastarasis draudžiamas p. 46)
  - Varnelė (**sutikimas**): „Man 18+ ir sutinku su taisyklėmis bei privatumo sąlygomis.“
  - Mygtukas (pirminis CTA, per visą srautą tas pats veiksmo pavadinimas): **„Įsirašyti“**

### [Q] Kiekybinis aktyvumas (negalintis sugriūti)

**Antraštė (h3):** „Tvarkaraštis šią savaitę“

„Kiekvieną vakarą tvarkaraštyje atsiranda 40–70 naujų planų. Ketvirtadienis čia gyviausias, ir tai ne
mūsų nuopelnas.“ *(statinis intervalas, ne tikralaikis skaitiklis — negali parodyti nulio)*

### [N] Kodėl dabar

**Antraštė (h3):** „Kodėl šiandien“

„Šiandienos tvarkaraštis egzistuoja tik šiandien — rytoj jame bus kiti planai ir kiti kompanionai.
Jokio laikmačio čia nėra, tiesiog toks yra tvarkaraščio ritmas.“

### [€] Pinigų klausimas

**Antraštė (h3):** „Kiek tai kainuoja“

„Vakaras yra nemokamai — nuo pirmo bloko iki paskutinio. Jei kada nors atsirastų mokamas lygis, apie
tai pasakysime čia, šioje pačioje vietoje, prieš tai, o ne po to, kai jau būsi įsirašęs.“

### [A] Filtravimas / autentiškumas

**Antraštė (h3):** „Kas patenka į tvarkaraštį“

„Kiekvienas naujas planas pereina filtravimą, prieš pasirodydamas tvarkaraštyje. Tikriname, ar
kompanionas iš tikrųjų yra tas, kuo prisistato — ne tik ar jis parašė tekstą.“

### [K] Privatumas

**Antraštė (h3):** „Kas mato tavo planą“

„Tavo pseudonimas ir amžiaus juosta matomi kitiems tvarkaraštyje — miestas, paštas ir kombinacija
niekada nerodomi viešai. Ištrinti planą gali bet kada iš nustatymų, be papildomo prašymo mums.“

### [D] Atsakymai dvejojantiems (FAQ, 5 klausimai) + pakartotinis CTA

**Antraštė (h2):** „Jei dar dvejoji“

1. **„Ar tikrai nereikia mokėti?“** — „Ne. Vakaras nemokamai, ir tai pasakyta aukščiau, ne tik čia.“
2. **„Ar galiu pasirinkti kitą vakaro tipą vėliau?“** — „Taip — tavo planas keičiamas nustatymuose bet
   kada, tvarkaraštis atsinaujina iš karto.“
3. **„Kas mato mano pseudonimą?“** — „Kiti tvarkaraščio kompanionai. Miestas, paštas ir kombinacija
   lieka tik tau.“
4. **„Kas tikrina, ar kitoje pusėje yra tikras žmogus?“** — „Filtravimas prieš kiekvieną naują planą —
   žr. sekciją aukščiau.“
5. **„Kiek laiko užtrunka įsirašymas?“** — „Keturi blokai, apie dvi minutes — tiek pat, kiek užrašė
   pirmoje sekcijoje.“

**Pakartotinis priėjimas (F15):** mygtukas „Grįžti prie pasirinkimo“ — nuoroda atgal į hero bento lentą.

### [L] Teisinė poraštė

„Vakaras skirtas tik pilnametystės sulaukusiems asmenims. Įsirašydamas patvirtini, kad tau 18+ ir
sutinki su taisyklėmis bei privatumo sąlygomis.“
Nuorodos: „Taisyklės“ · „Privatumo sąlygos“ · „Kontaktai“
„© {metai} Vakaras“

### [C] Slapukai

**Antraštė (h4 arba p su stipriu svoriu):** „Slapukai“
„Naudojame būtinuosius slapukus, kad tvarkaraštis veiktų ir prisimintų tavo pasirinkimą. Analitinių
slapukų be tavo sutikimo nededame.“ Mygtukas: **„Supratau“**

### Klaidos ir sėkmė

- **Tuščias privalomas laukas:** „Šis blokas dar tuščias — užpildyk, kad galėtume tęsti.“
- **Neteisingas pašto formatas:** „Šis paštas neatrodo teisingas — patikrink @ ženklą.“
- **Per trumpa kombinacija:** „Kombinacija per trumpa — reikia bent 8 simbolių.“
- **Nepažymėtas sutikimas:** „Be šio sutikimo tvarkaraštyje atsirasti negalime.“
- **Sėkmės būsena (po pateikimo):** „Įsirašyta! Tavo planas jau tvarkaraštyje — suderinimą pamatysi
  čia pat, šiame ekrane.“

---

## ŽINGSNIS 5 — Savikritika po kodo

Peržiūrėjau puslapį realiame Chrome (Playwright + CDP, ne vien skaitant kodą — pagal taisyklę
„patikrink realiame naršyklėje") 360px ir 1440px pločiu, prieš ir po bloko pasirinkimo.

**Rasta ir ištaisyta reali klaida (svarbiau nei dekoracija):** pirminėje versijoje `.l-board__grid`
naudojo `grid-auto-rows: var(--unit)` — fiksuoto aukščio eilutes. Intro bloko turinys (h1 + paantraštė +
įsipareigojimo eilutė + statuso pranešimas) realiame ekrane užėmė daugiau vietos nei jam paskirti 2
vienetai, todėl blokas fiziškai persidengė su „Netikėtas vakaras" bloku po juo (ir su formos tęsinio
bloku po pasirinkimo) — matoma tik realiame renderyje, ne kode. Pataisyta į
`grid-auto-rows: minmax(var(--unit), auto)`, kad eilutė augtų pagal turinį. Patikrinta iš naujo
ekrano nuotraukomis 360/1440px prieš ir po pasirinkimo — persidengimo nebeliko.

**Pašalintas perteklinis dekoratyvinis elementas:** sekcijoje „Kas nutinka, kai baigsi" keturi sąrašo
punktai turėjo papildomą mažą lajaus žalsvos spalvos apskritimą (`::before`) vietoje numatytojo sąrašo
ženklo. Tai buvo grynai dekoratyvus, turinio nekeičiantis elementas, konkuruojantis dėmesiu su
vieninteliu numatytu akcentu — bento persitvarkymu. Pašalintas; sąrašas liko paprastas, be papildomo
vizualinio ženklo (semantinė `<ul><li>` struktūra ekrano skaitytuvams išlieka nepakitusi).

**Papildomai patikrinta realiame naršyklėje:** klaviatūros navigacija iki radio mygtukų ir pažymėjimas
`Space` klavišu; `prefers-reduced-motion: reduce` — persitvarkymo `transform` lieka `none`, judesio
nėra; pilnas keturių etapų srautas (pasirinkimas → miestas → amžius+pseudonimas → paštas+kombinacija+
sutikimas → sėkmė) abiem pločiais be konsolės klaidų.
