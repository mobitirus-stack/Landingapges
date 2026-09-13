# VARIANT.md — `lg2-lenta`

Šaltiniai: `analize/sinteze.md`, `config/diferenciacijos-matrica.md` (eilutė **# 2**, mano detalioji kortelė
dalyje 3), `config/terminu-zemelapis.md` (stulpelis **2**), `config/draudziamu-zodziu-sarasas.md`.
Prekės ženklas: **Lenta**. Pozicionavimo kampas: **C — rezultatas ir momentumas**.

---

## Žingsnis 1 — Planas prieš kodą

### Spalvos (5, su vaidmenimis)

| Hex | Vaidmuo |
|---|---|
| `#F2E205` | **Fonas** — lentos geltona, sotus laukas per visą puslapį |
| `#000000` | **Tekstas** — juodas rašalas, visas tekstas ir 3px ribos |
| `#2B4BFF` | **Akcentas** — antspaudo mėlyna: antspaudo grafika, focus žymėjimas, nuorodų spalva ant popieriaus paviršiaus |
| `#FFFDF2` | **Paviršius** — lapelis: popieriaus spalva po prisegtomis pastabomis (`pinnote`), modalo lapas, FAQ kortelės |
| `#E0D400` | **Riba / paspaudimo būsena** — nuspausta geltona: mygtuko fonas po paspaudimo (kai ofsetinis šešėlis „suvalgomas“), subtilios ribos ant geltono fono |

Nė viena reikšmė nekeičiama, nė viena nauja spalva nepridedama — tiksliai 5 iš savo matricos eilutės.

### Tipografija

- **Anton** 400 — tik `h1` ir sekcijų `h2`/`h3` antraštės, labai didelės, `text-transform: uppercase`,
  `letter-spacing` neigiamas labai nedaug (display šriftas jau tankus, papildomo suspaudimo nereikia).
- **Space Grotesk** 400/700 — visas tekstas, etiketės, mygtukai, FAQ atsakymai.
- Santykis **1.618** (auksinis pjūvis): bazė 16px → 26px → 42px → 68px → 110px (hero `h1` desktop,
  mobile suvaromas per `clamp()` išlaikant tą pačią proporciją).
- Pastraipos ribojamos `max-width: 58ch`, kad eilutė netaptų ilgesnė nei ~80 simbolių.
- `line-height`: Anton antraštėms 1.05–1.1 (display, tanki), Space Grotesk tekstui 1.5.
- **Vienintelis ritmas — dvi tarpų reikšmės, 24px ir 72px, nieko tarp jų.** Tai galioja sekcijų ir blokų
  tarpams (layout ritmui). Mažos komponentų vidinės paskyros (mygtuko `padding`, lauko `padding`, 3px riba)
  nėra „ritmas“ šia prasme ir gali būti mažesnės — tai komponento apnaša, ne vertikalus takas.

### Layout

**Koncepcija:** puslapis yra fizinė lenta. Fonas — ištisas geltonas laukas be jokio konteinerio rėmo.
Kiekviena funkcinė sekcija (išskyrus herojų) yra **prisegtas lapelis** (`pinnote`) — balto/lapelio tono
stačiakampis su 3px juodu rėmeliu ir kietu `6px 6px 0` šešėliu, pasuktas fiksuotu kampu (−1.5° arba +1°,
kaitaliojant), lapeliai persidengia 16–24px persidengimu. Nėra stulpelinio tinklelio — kiekvienas lapelis
turi savo plotį ir laisvą poziciją asimetriškame sraute (flex/column su neigiamais paraštės poslinkiais
desktop'e, tiesus vertikalus dėliojimas mobile'e be persidengimo, kad nekiltų horizontalaus scroll).

Herojus (`offerboard`) neturi jokio UI — tik `h1` (poster tekstas), didelis pasuktas antspaudas (`stamp`),
kuris **uždėtas ant** teksto (persidengia su juo, ne šalia), ir vienas mygtukas apačioje.

**ASCII wireframe — desktop (≥1024px):**

```
┌──────────────────────────────────────────────────────────────┐
│ LENTA  [18+]                          Jau turi lapelį? Prisijunk │  ← H (board-topbar)
├──────────────────────────────────────────────────────────────┤
│                                                                │
│        PAKABINI LAPELĮ.                    ╱────────╲         │
│        KAŽKAS NUPLEŠIA NUMERĮ.            │  ANTSPAUDAS │      │  ← P (offerboard, be UI)
│        VISKAS.                             ╲────────╱         │
│        Jokio algoritmo. Jokio slankiojimo.                     │
│                                                                │
│              [ Iškabinti lapelį ]                              │
├──────────────────────────────────────────────────────────────┤
│   ╱ pinnote ╲  Kodėl dabar               ╱ pinnote ╲          │  ← N, A (persidengia, pasuktos)
│  │ vakarais  │                          │  valymas   │         │
│   ╲─────────╱                            ╲──────────╱          │
├──────────────────────────────────────────────────────────────┤
│        ╱ pinnote ╲  Kiek tai užima                            │  ← FORM-explainer (2-as CTA taškas)
│       │ 1 laukas   │      [ Iškabinti lapelį ]                 │
│        ╲──────────╱                                            │
├──────────────────────────────────────────────────────────────┤
│  ╱ pinnote ╲   ╱ pinnote ╲   ╱ pinnote ╲   ╱ pinnote ╲         │  ← M, €, Q, K (keturi lapeliai eilutėje)
│ │ kas toliau│ │  kaina    │ │  kiek judesio│ │  kas mato   │   │
│  ╲─────────╱   ╲─────────╱   ╲───────────╱   ╲───────────╱     │
├──────────────────────────────────────────────────────────────┤
│   Jei dar dvejoji                                              │  ← D (FAQ, 5 <details> lapeliai)
│   ╱ pinnote ╲ ╱ pinnote ╲ ╱ pinnote ╲ ╱ pinnote ╲ ╱ pinnote ╲   │
├──────────────────────────────────────────────────────────────┤
│  Lenta — tik pilnamečiams. Taisyklės · Privatumo politika      │  ← L (footer)
├──────────────────────────────────────────────────────────────┤
│  Naudojame būtinuosius slapukus...                 [Supratau] │  ← C (statinė juosta apačioje)
└──────────────────────────────────────────────────────────────┘

        (modalas atsidaro virš viso puslapio paspaudus bet kurį
         „Iškabinti lapelį“ mygtuką — pilnas ekranas, viena forma,
         be žingsnių: rajonas → metai → pravardė → el. paštas →
         slaptažodis → parašo varnelė → [Iškabinti lapelį])
```

**ASCII wireframe — mobile (360–767px):**

```
┌────────────────────────┐
│ LENTA [18+]            │
│ Jau turi lapelį?        │  ← H, lūžta į dvi eilutes
│ Prisijunk               │
├────────────────────────┤
│ PAKABINI LAPELĮ.        │
│ KAŽKAS NUPLĖŠIA         │  ← P, antspaudas mažesnis,
│ NUMERĮ. VISKAS.         │     lieka virš teksto krašto,
│ [ANTSPAUDAS mažesnis]   │     nebe persidengia per vidurį
│ Jokio algoritmo.         │
│ [ Iškabinti lapelį ]    │
├────────────────────────┤
│ ╱ pinnote ╲ Kodėl dabar │  ← lapeliai vienas po kito,
│ ╲─────────╱             │     be persidengimo (rotacija
│ ╱ pinnote ╲ Kas kabo    │     sumažinta iki 0 ar minimali,
│ ╲─────────╱             │     kad nekirstų krašto)
│ ...                     │
├────────────────────────┤
│ Footer, tada slapukų    │
│ juosta per visą plotį   │
└────────────────────────┘
```

### 3 unikalumo principai

1. **Antspaudas ant teksto, ne šalia jo.** Herojaus antspaudo grafika fiziškai persidengia su `h1`
   raidėmis — tai nėra dekoratyvinis ženkliukas kampe, o kompozicinis elementas, kuris paverčia herojų
   plakatu, ne UI ekranu.
2. **Vienas šešėlio tipas, vienas jo panaudojimas.** Kietas `6px 6px 0` juodas ofsetas naudojamas **tik**
   ant `pinnote` ir mygtukų — niekur kitur. Kai mygtukas paspaudžiamas, tas pats šešėlis fiziškai
   „suvalgomas“ (dingsta) ir blokas pasislenka 6px — vienas judesio momentas visame puslapyje, tiesiogiai
   kylantis iš to paties vizualinio principo.
3. **Fiksuoti pasukimo kampai, ne atsitiktiniai.** Kiekvienas lapelis pasuktas tiksliai −1.5° arba +1° —
   dvi reikšmės, kaitaliojamos nuosekliai, o ne atsitiktinė „išmesta ant stalo“ estetika. Tai suteikia
   tvarkingą netvarką, atitinkančią tiesmuką, negarsų, bet discipliniuotą toną.

### Kur išleidžiama drąsa

Vienas sakinys: **herojaus antspaudas** — didžiulis, pasuktas, persidengiantis su `h1` tekstu — yra
vienintelis įsimenamas, teatrališkas elementas; visi kiti lapeliai puslapyje ramūs, vienodo dydžio
šešėlio ir vieno rėmelio pločio, be jokių papildomų dekoro sluoksnių.

---

## Žingsnis 2 — Savikritika prieš kodą

**Klausimas: „jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?"**

Pradinis atsakymas: **iš dalies taip.** „Neo-brutalizmas su geltona ir juodais rėmeliais" yra atpažįstamas
šablonas (baltas fonas, `6px 6px 0` šešėlis, Anton antraštės) — tai jau užfiksuota
`config/diferenciacijos-matrica.md` Dalyje 5 kaip pirminė rizika, ir sprendimai ten jau priimti (geltonas
laukas vietoje balto fono, fiksuoti pasukimo kampai, šešėlis tik ant lapelių). Statant konkretų kodą
papildomai patikrinau tris vietas, kur būtų buvę lengva nuslysti į numatytąją reikšmę:

1. **Rizika:** padaryti visus mygtukus ir korteles vienodo `border-radius: 0` ir vienodo šešėlio kampo —
   tai būtų grynas šablonas be turinio pagrindimo.
   **Pataisyta:** šešėlio kryptis ir pasukimo kampas susieti su fizine lentos metafora (lapeliai „kabo"
   skirtingais kampais, nes juos kabino skirtingi žmonės skirtingu metu) — tai paaiškinta pačiame
   `VARIANT.md` ir atsispindi CSS komentaruose.
2. **Rizika:** FAQ padaryti kaip standartinį akordeoną su generine „+" piktograma ir šešėliu ant kiekvienos
   kortelės hover'e (draudžiama — „hover perėjimai ant visų kortelių"). **Pataisyta:** FAQ — statiniai
   `<details>` elementai be jokio hover efekto, vienintelis vizualinis skirtumas atidarius — `open`
   atributo sukeliamas turinio atsiradimas, ne animacija.
3. **Rizika:** slapukų juosta kaip įprastas plaukiojantis kampo langelis su vėlavimu (tiksliai draudžiamas
   referencinis modelis). **Pataisyta:** slapukų juosta yra statinė, per visą pločio juosta puslapio
   apačioje, atsiranda iš karto (be vėlavimo), o ne kampe.

Papildomai patikrinta prieš rašant kodą: JS failo axis14 lentelėje `lg2-lenta` eilutei nurodyti tik du
failai — `index.html` ir `styles/main.css` (jokio atskiro `.js`). Kadangi funkcionalumui (modalas,
validacija, sėkmės būsena, slapukų atmena) JavaScript būtinas, sprendimas — **visą JS įrašyti inline
`<script>` bloke `index.html` pabaigoje**, o ne kurti `assets/app.js`, kad failų sąrašas tiksliai atitiktų
matricos eilutę. Tai užfiksuota čia, kad kita sesija nekartotų šio klausimo.

Po šios peržiūros: **antras atsakymas — NE.** Kitas dizaineris, gavęs tą patį briefą, greičiausiai
padarytų švarų neo-brutalistinį šabloną be fizinės kabėjimo logikos už sprendimų ir be susietos
priežasties tarp šešėlio, judesio ir turinio. Toliau rašomas kodas.

---

## Žingsnis 3 — Turinys

Terminija — **tik** iš `config/terminu-zemelapis.md` stulpelio **2**: iškabinimas (registracija) ·
lapelis (paskyra/profilis) · kaimynas (narys) · lenta (bendruomenė/visuma) · atsakas (susiejimas) ·
pokalbis (susirašinėjimas) · parašas (patvirtinimas) · valymas (moderavimas) · pravardė (slapyvardis) ·
el. paštas · slaptažodis · rajonas (miestas/vietovė) · metai (amžiaus grupė) · už dyką (nemokama) ·
kas mato (privatumas/matomumas).

### H — Antraštė

- Ženklas: **LENTA** + maža žyma „18+" (amžiaus kategorijos signalas, F1).
- Grįžtančio nario nuoroda (F2, žemo prioriteto tekstinė nuoroda, ne mygtukas):
  „Jau turi lapelį? Prisijunk." — atidaro mažą `<details>` su tekstu: „Prisijungimas veikia el. paštu,
  kurį naudojai iškabindamas lapelį — nuoroda ateina į tavo paštą."

### P — Herojus (pozicionavimas, F3)

- `h1` (3 trumpos eilutės): „Pakabini lapelį. Kažkas nuplėšia numerį. Viskas."
- Paaiškinamoji eilutė: „Jokio algoritmo, jokio begalinio slankiojimo. Nieko čia gudraus nėra — parašai
  lapelį, kažkas atsiliepia, susirašote."
- Antspaudas (SVG, uždėtas ant `h1"): žiedinis tekstas „RAJONO LENTA · 18+" aplink centrinį „18+".
- Mygtukas: **„Iškabinti lapelį"** — atidaro modalą (CTA modelis, F10 priėjimas).

### N — Kodėl dabar (F17)

- `h2`: „Kodėl dabar"
- „Lenta pilnėja vakarais. Lapelis, pakabintas dabar, dažniausiai jau turi atsaką iki vidurnakčio — ne
  todėl, kad skubiname, o todėl, kad tada čia daugiausia žmonių."

### A — Kas iš tikrųjų kabo lentoje (F5, autentiškumas/moderavimas)

- `h2`: „Kas iš tikrųjų kabo lentoje"
- „Kiekvieną naujai iškabintą lapelį peržiūrime prieš jį paskelbdami. Tušti, pasikartojantys ir akivaizdžiai
  netikri lapeliai nuimami per valymą — dar prieš pasirodydami lentoje. Rankomis. Ne robotu."

### FORM-explainer — Kiek tai užima (F7, 2-as CTA taškas / F15)

- `h2`: „Kiek tai užima"
- „Vienas laukas dabar — tavo rajonas. Likę keturi laukai tame pačiame lange, iškart po to. Viso —
  mažiau nei minutę."
- Mygtukas: **„Iškabinti lapelį"** (tas pats veiksmas, antras priėjimo taškas).

### M — Kas vyksta po iškabinimo (F6)

- `h2`: „Kas vyksta po iškabinimo"
- Sąrašas:
  1. „Lapelis pasirodo lentoje per kelias minutes, kai tik praeina valymą."
  2. „Kai kaimynas nuplėšia tavo numerį, gauni pranešimą į savo el. paštą."
  3. „Atsakęs, pradedi pokalbį tiesiai lentoje — niekur kitur registruotis nereikia."
  4. „Lapelį gali nuimti pats, bet kada, vienu mygtuku."

### € — Kiek tai kainuoja (F8)

- `h2`: „Kiek tai kainuoja"
- „Lenta — už dyką. Lapelio iškabinimas, atsakas, pokalbis — viskas už dyką. Jei kada nors atsirastų
  mokamas lygis, pirmiausia apie tai parašytume čia, o ne po to, kai jau būtum įsitraukęs."

### Q — Kiek lentoje judesio (F4, negali sugriūti)

- `h2`: „Kiek lentoje judesio"
- „Kiekviename rajone — bent 15 aktyvių lapelių, dažniausiai daugiau. Jei kuriame nors rajone jų mažai,
  taip ir parašome — o ne pučiame skaičiaus."

### K — Kas mato tavo lapelį (F9, privatumas)

- `h2`: „Kas mato tavo lapelį"
- „Rodoma lentoje: pravardė, metai, rajonas. Niekada nerodoma: el. paštas, slaptažodis, tikras vardas.
  Netinka — nuimk lapelį, ir jo nebėra. Jokių laiškų mums, jokių paaiškinimų."

### D — Jei dar dvejoji (F16, 5 klausimai)

- `h2`: „Jei dar dvejoji"
1. **Ar tai tikri žmonės, ne robotai?** „Kiekvieną lapelį peržiūrime rankomis prieš iškabindami. Tušti ir
   pasikartojantys lapeliai į lentą nepatenka."
2. **Kiek tai kainuoja?** „Nieko. Lapelio iškabinimas, atsakas ir pokalbis — už dyką."
3. **Kas matys mano lapelį?** „Tik pravardė, metai ir rajonas. Nei el. paštas, nei tikras vardas niekada
   nerodomi."
4. **Kiek tai užtrunka?** „Mažiau nei minutę. Penki laukai, vienas langas, jokių žingsnių."
5. **Kaip nuimti lapelį?** „Vienu mygtuku, bet kada. Netinka — nuimk lapelį, ir jo nebėra."
- Po sąrašo: tekstinė nuoroda „Pasiruošęs? Iškabink lapelį." (atidaro tą patį modalą, papildomas ne
  konkuruojantis priėjimas prie to paties veiksmo).

### L — Teisinė poraštė (F11)

- „Lenta skirta tik pilnamečiams (18+). Iškabindamas lapelį patvirtini savo parašą — kad esi pilnametis
  ir sutinki su taisyklėmis."
- Nuorodos: „Taisyklės" · „Privatumo politika"
- „© 2026 Lenta."

### C — Slapukai (F14)

- „Naudojame būtinuosius slapukus, kad lenta veiktų. Analitikos slapukų be tavo sutikimo nenaudojame."
- Mygtukas: „Supratau" (uždaro juostą, įsimena `localStorage`).

### Modalas (F10, konversijos priemonė)

- Antraštė: „Iškabink savo lapelį"
- Laukai (tvarka): **Rajonas** (tekstas, pirmas laukas) → **Metai** (select, amžiaus grupė) →
  **Pravardė** (tekstas) → **El. paštas** → **Slaptažodis** → varnelė „Pasirašau, kad man 18+ ir sutinku
  su taisyklėmis ir privatumo politika" (parašas).
- Mygtukas: „Iškabinti lapelį"
- Klaidos (F12): tekstu po kiekvienu lauku, pvz. „Įrašyk rajoną — bent 2 raides." / „Slaptažodis — bent
  8 ženklai." / „Pažymėk, kad pasirašai — be to lapelio neiškabinsime."
- Sėkmės būsena (F13): „Lapelis iškabintas. Kai kas nors nuplėš tavo numerį, gausi pranešimą adresu
  [el. paštas]."

Jokio lorem ipsum, jokių žymeklių `[tekstas]` (išskyrus dinamiškai įterpiamą tikrą vartotojo el. paštą
JS metu), jokių tuščių frazių.

---

## Žingsnis 5 — Savikritika po kodo

Peržiūrėta 360px ir 1440px pločiu (CSS logika + skaičiavimai; breakpoint'ai 480/768/1024 patikrinti
per media užklausų taisykles).

**360px:** Antraštė lūžta į dvi eilutes (ženklas + grįžtančio nario nuoroda), `h1` dydis suvaromas per
`clamp()` iki ~40px, herojaus antspaudas suvaromas iki savo minimalaus 96px dydžio ir pozicionuotas
`position: absolute; top/right` viduje pozicionuoto `.offerboard` — negali išstumti turinio už viewport
ribos, nes matuojamas nuo dešiniojo krašto. `pinnote` pasukimo kampai ties `max-width: 480px` sumažinami
iki `0deg`, kad pasuktas kraštas niekada nekirstų 360px pločio ir nesukurtų horizontalaus scroll. Visi
`board-row--pair` blokai mobile'e dedami vienas po kito (be `flex-direction: row`, kuris įsijungia tik nuo
768px), taigi persidengimas mobile'e neveikia — jis yra tik desktop efektas, kaip ir numatyta wireframe'e.

**1440px:** `.board` turi `max-width: 78rem` (≈1248px) su centravimu, todėl 1440px lange lieka rami tuščia
paraštė iš abiejų pusių — tai suderinama su asimetrišku, ne pilno pločio tinkleliu (ašis 6). `pinnote`
poros (`board-row--pair`) sudėliojamos horizontaliai, o antspaudas persikelia į viršutinį dešinį kampą su
pilnu 176px dydžiu ir `translateY(-10%)` poslinkiu, kad geriau persidengtų su `h1` (kaip aprašyta principe
Nr. 1).

**Pašalintas vienas perteklinis dekoracijos elementas:** herojaus antspaudo SVG viduje buvusi antra,
punktyrinė vidinė apskritimo linija (`stroke-dasharray`). Ji buvo grynas dekoratyvinis sluoksnis virš jau
pakankamo antspaudo ženklo (ištisinis išorinis apskritimas + „18+" + „RAJONO LENTA"), o 96px dydyje
(360px ekranas) punktyrinė linija taptų vos įskaitomu vizualiniu triukšmu, nepridedančiu prasmės. Pašalinta
iš `index.html` `<svg>` bloko — liko vienas ištisinis apskritimas, kuris vienas pats jau nuskaito kaip
antspaudas.

**Priėmimo kriterijų savikritika (žr. `logs/build-02.done.md` pilną checklistą):** visi punktai įvykdyti;
vienintelis sąmoningas nukrypimas nuo bendro `03-statyba.md` šablono — JS įrašytas inline `index.html`,
o ne atskirame `assets/app.js`, nes `config/diferenciacijos-matrica.md` Ašis 14 šiai eilutei nurodo tik du
failus (`index.html`, `styles/main.css`). Tai — tikslus matricos laikymasis, ne nukrypimas nuo jos.
