# VARIANT.md — `lg1-matmuo`

Šaltiniai: `analize/sinteze.md`, `config/diferenciacijos-matrica.md` (eilutė #1), `config/terminu-zemelapis.md` (stulpelis 1), `config/draudziamu-zodziu-sarasas.md`.

---

## 1. Planas

### Spalvos (su vaidmenimis)

| Kintamasis | Hex | Vaidmuo |
|---|---|---|
| `--sheet-bg` | `#E9ECEF` | „lapas“ — viso puslapio fonas |
| `--sheet-text` | `#16181D` | „grafitas“ — pagrindinis tekstas |
| `--sheet-accent` | `#D5202C` | „kalibravimo raudona“ — CTA fonas, dideli/paryškinti skaičiai, ribos, žymos, fokuso kontūras |
| `--sheet-surface` | `#FDFDFD` | „paviršius“ — pakylėti paneliai (forma, FAQ, statistikos blokai) |
| `--sheet-line` | `#C4CAD1` | „tinklelio linija“ — 1px ribos, ruler brūkšneliai, skirtukai |

**Kontrasto patikra (skaičiuota rankiniu būdu, WCAG santykinis skaisčio metodas):**
- `--sheet-text` ant `--sheet-bg` ir ant `--sheet-surface`: tamsu ant šviesaus, > 12:1. Praeina laisvai.
- `--sheet-accent` ant `--sheet-surface` (`#FDFDFD`): santykis ≈ **5.06:1** → praeina AA įprastam tekstui.
- `--sheet-accent` ant `--sheet-bg` (`#E9ECEF`): santykis ≈ **4.24:1** → **nepraeina** AA 4.5:1 įprastam tekstui,
  bet praeina 3:1 stambiam/paryškintam tekstui (≥24px arba ≥19px bold) ir praeina 3:1 ne-teksto elementams
  (ribos, fokuso kontūras).
  → **Taisyklė kodui:** `--sheet-accent` kaip **įprasto dydžio tekstas** naudojamas TIK ant `--sheet-surface`
  paviršių (forma, statistikos, FAQ). Ant `--sheet-bg` jis naudojamas tik kaip (a) mygtuko fonas su šviesiu
  tekstu, (b) stambūs/paryškinti skaičiai ≥24px, (c) ribos / ruler / fokuso kontūras (ne tekstas).
- Baltas/paviršiaus tekstas ant `--sheet-accent` fono (mygtukai): santykis ≈ **5.06:1** → praeina.

### Tipografija

- **Chivo 700** — antraštės (`h1`–`h3`) ir visi matmenų skaičiai. `font-variant-numeric: tabular-nums;`
  kiekvienam elementui su skaičiais, kad kolonos lygiuotųsi.
- **Newsreader 400** — visas tekstas (pastraipos, etiketės, formos laukai, FAQ). `line-height: 1.65`
  (serifui daugiau nei sans-serif antraštėms — taip nurodyta žingsnyje 03-statyba.md).
- Tik po vieną svorį kiekvienai šeimai (700 / 400) — jokio keturių svorių modelio (draudžiama, sinteze p. 20).
- Tipo skalė: santykis **1.200**, bazė 16px. Vertikalus ritmas: **8px bazinis tinklelis**, kiekvienas
  tarpas — 8 kartotinis (8/16/24/32/40/48/64/80/96/128).
- Eilutės ilgis tekstiniuose blokuose ribojama `max-width: 62ch` (<80 simbolių reikalavimas).

### Layout

**Koncepcija:** puslapis kaip matavimo lapas. Griežtas 12 stulpelių tinklelis, visas turinys lygiuojamas
į kairę. Kairėje paliekama plati (2 stulpelių) tuščia paraštė, skirta matmenų išnašoms — SVG strėlėms ir
etiketėms, kurios „matuoja“ realius greta esančius elementus (h1 aukštį, formos lauko plotį, tarpų dydį).
Paraštė aktyvi nuo 1024px; žemiau — susilieja į turinį (išnašos lieka kaip smulkios eilutės virš elemento).

Kampai: **0px**, jokių šešėlių. Skyrimas — tarpais ir 1px `--sheet-line` linijomis. Vienas judesio momentas:
`h1` atsiskleidžia per horizontalią kaukę (clip-path juda iš kairės), vieną kartą, iškrovus puslapį.

**Sekcijų tvarka (matricos eilutė #1, tiksliai):**
H → P → Į → FORM(1 laukas) → € → M → A → Q → FORM(pilna)+sėkmė → D → L → C

- **H** `masthead` — ženklas „Matmuo“ + 18+ žyma + žemo prioriteto nuoroda grįžtantiems dalyviams.
- **P** `plate__heading` — `h1` + paantraštė (pozicionavimas).
- **Į** `plate__dims` — horizontali matmenų eilutė (laukų sk., trukmė, kaina) tiesiai po paantrašte.
- **FORM(1)** `plate__entry` — vienas pašto adreso laukas + mygtukas, perkeliantis reikšmę į pilną formą.
- **€** `spec` panelis — kaina, ar/kada atsiras mokamas lygis.
- **M** `panel` — kas vyksta po įrašymo (3 žingsniai) + sąžiningas „kodėl dabar“ (aktyvumo ritmas, be laikmačių).
- **A** `panel` — auditas prieš paskelbimą (kokybinis mechanizmas, atskiras nuo Q).
- **Q** `spec` panelis — apimties skaičiai (kiekybinis mechanizmas, statinis intervalas, negali rodyti nulio).
- **FORM(pilna)+sėkmė** `entry` — likę 4 laukai + deklaracija + klaidos/sėkmės būsena.
- **D** `faq` — 5 klausimai (tarp jų — matomumo/pasitraukimo tema) + pakartotinė nuoroda į formą (F15).
- **L** `legal` — pilnametystės deklaracija, taisyklės, privatumo politika, autorių teisės.
- **C** `consent` — slapukų juosta puslapio apačioje, nekintanti nuo įkėlimo (ne uždelsta plūduriuojanti kortelė).

### ASCII wireframe — desktop (≥1024px, 12 stulpelių)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [M] Matmuo  [18+]                          Jau turi duomenų lapą? →prisij.│ H
├──────────────────────────────────────────────────────────────────────────┤
│  ↕ h1: 1×   │  Prieš įrašydamas duomenis —                                │
│  (išnaša)   │  pamatuok, ką tiksliai gauni.                               │ P
│             │  Kitos programėlės žada jausmą. Čia — matmenys: kiek laukų, │
│             │  kiek trunka, kiek kainuoja, kiek dalyvių prisijungia parą. │
│             │                                                             │
│  ↔ 3 reikš. │  [ Laukų: 5 ]   [ Trukmė: ~70 s ]   [ Kaina: be mokesčio ]  │ Į
│             │                                                             │
│             │  Pašto adresas: [________________]  [Įrašyti pašto adresą] │ FORM(1)
├──────────────────────────────────────────────────────────────────────────┤
│             │  € Kaina šiandien                                          │ €
│             │  Duomenų lapo pildymas — be mokesčio. Mokamo lygio nėra.    │
├──────────────────────────────────────────────────────────────────────────┤
│             │  Kas vyksta po įrašymo                                     │ M
│             │  1. ... 2. ... 3. ...                                      │
│             │  Dažniausias sutapimų laikas — 20–23 val. kiekvieną vakarą.│
├──────────────────────────────────────────────────────────────────────────┤
│             │  Auditas prieš paskelbimą                                  │ A
│             │  Vidutinis audito laikas: 4 val. Atmetama: 12% lapų.        │
├──────────────────────────────────────────────────────────────────────────┤
│             │  Apimtis                                                   │ Q
│             │  Praėjusią parą: 40–65 nauji lapai. Sistemoje: 1200+.       │
├──────────────────────────────────────────────────────────────────────────┤
│             │  Pilnas duomenų lapas                                      │ FORM
│             │  Žymė [__] Kodas [__] Vietovė [__] Amžiaus intervalas [▾]  │ (pilna)
│             │  ☐ Deklaracija            [ Įrašyti duomenų lapą ]         │ +sėkmė
├──────────────────────────────────────────────────────────────────────────┤
│             │  Dažniausi klausimai (5)             ↑ grįžti prie lauko   │ D
├──────────────────────────────────────────────────────────────────────────┤
│             │  18+ · Taisyklės · Privatumo politika · © Matmuo           │ L
├──────────────────────────────────────────────────────────────────────────┤
│  Slapukai naudojami lankomumui matuoti.                    [ Supratau ] │ C
└──────────────────────────────────────────────────────────────────────────┘
   2 kol.              10 kol. (turinys)
```

### ASCII wireframe — mobile (360px, viena kolona)

```
┌────────────────────────────┐
│ [M] Matmuo        [18+]    │ H
│ Jau turi lapą? →prisij.    │
├────────────────────────────┤
│ Prieš įrašydamas duomenis— │ P
│ pamatuok, ką tiksliai      │
│ gauni.                     │
│ Kitos programėlės žada...  │
├────────────────────────────┤
│ Laukų: 5                   │ Į
│ Trukmė: ~70 s               │
│ Kaina: be mokesčio          │
├────────────────────────────┤
│ Pašto adresas               │ FORM(1)
│ [____________________]      │
│ [ Įrašyti pašto adresą ]    │
├────────────────────────────┤
│ € Kaina šiandien             │ €
│ ...                          │
├────────────────────────────┤
│ Kas vyksta po įrašymo        │ M
│ 1. 2. 3.                     │
├────────────────────────────┤
│ Auditas prieš paskelbimą     │ A
├────────────────────────────┤
│ Apimtis                      │ Q
├────────────────────────────┤
│ Pilnas duomenų lapas         │ FORM
│ Žymė                          │ (pilna)
│ Kodas                         │
│ Vietovė (nebūtina)            │
│ Amžiaus intervalas            │
│ ☐ Deklaracija                 │
│ [ Įrašyti duomenų lapą ]      │
├────────────────────────────┤
│ Dažniausi klausimai (5)      │ D
│ ↑ grįžti prie lauko           │
├────────────────────────────┤
│ 18+ · Taisyklės · Politika   │ L
│ © Matmuo                     │
├────────────────────────────┤
│ Slapukai... [ Supratau ]     │ C
└────────────────────────────┘
```
Kairė matmenų paraštė mobiliame ekrane dingsta (nėra vietos); jos vietą užima smulkios `↕`/`↔` etiketės,
įrašytos virš elemento, kurį jos matuoja.

### 3 unikalumo principai

1. **Kiekvienas teiginys turi vienetą.** Nė vienas sakinys apie kainą, trukmę, apimtį ar auditą neapsieina
   be skaičiaus, procento ar laiko vieneto — tai vienintelis puslapis dešimtyje, kur pasitikėjimas statomas
   ant matavimo, o ne ant pažado.
2. **Matmuo yra ir turinys, ir vizualas.** SVG išnašos su strėlėmis nėra dekoras — jos realiai matuoja
   gretimą elementą (h1 aukštį, lauko plotį, tarpo dydį), o matomas 8px tinklelis parodo tą patį principą,
   kuriuo tekstas kalba apie save.
3. **Vieno lauko įėjimas, o ne pažadas.** Herojuje yra vienas realus laukas (pašto adresas), kurio reikšmė
   fiziškai perkeliama į pilną formą žemiau — jokio „nuslenkimo prie formos“ imitacijos.

### Kur išleidžiama drąsa

Vienas įsimenamas elementas — matmenų išnašų sistema (SVG strėlės + etiketės, matuojančios tikrus elementus)
kartu su matomu 8px tinkleliu; visa kita (spalvos, tipografija, sekcijos) lieka tylu, funkcionalu ir be
papildomo dekoro.

---

## 2. Savikritika prieš kodą

**Klausimas:** „jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?“

**Pirmas atsakymas: iš dalies TAIP.** „Šveicariškas techninis“ briefas (pilkas fonas, grotesk antraštės,
raudonas akcentas, 12 stulpelių, 0px) yra gana nuspėjama numatytoji reikšmė — dešimt dizainerių, gavę tą
patį spalvų/šriftų/tinklelio rinkinį, tikriausiai padarytų švarų Swiss/International Style plakatą.

**Ką patikrinau ir pakeičiau prieš rašydamas kodą:**

1. **Rizika:** matmenų išnašos galėjo likti grynai dekoratyvios (SVG strėlytės „šalia“ teksto, nesusietos
   su realiu matavimu) — tai būtų tik šveicariško stiliaus kopija su papuošimu. **Sprendimas:** kiekviena
   išnaša kode nurodo tikrą, kodu apskaičiuotą reikšmę (pvz. h1 aukštį pikseliais, lauko plotį), o ne
   fiksuotą užrašą — jei turinys pasikeis, skaičius išnašoje irgi pasikeis (tai atitinka pačios krypties
   balso principą „jei kuris nors skaičius pasikeis, jis pasikeis ir čia“).
2. **Rizika:** dimensijų eilutė (Laukų/Trukmė/Kaina) galėjo tapti dar viena „meta eilute su vidurio taškais“
   (draudžiama §5/§7.5 forma „A · B · C“). **Sprendimas:** kiekviena reikšmė gauna savo atskirą etiketę
   `Laukų:` / `Trukmė:` / `Kaina:` su dvitaškiu, sudėta į atskirus `spec__row` blokus su matomais 1px
   skirtukais tarp jų — tai matavimo lentelė, ne meta eilutė.
3. **Rizika:** CTA tekstas galėjo nuslysti į draudžiamą „vieno tęsimo žodžio“ tarpinio mygtuko modelį
   (§7.6 p. 62) arba į bendrinį „Pradėti“ (draudžiamas žodis §2). **Sprendimas:** abu mygtukų tekstai
   apibūdina konkretų veiksmą su objektu („Įrašyti pašto adresą“ → „Įrašyti duomenų lapą“), abu dalijasi
   šaknimi „įraš-“ (registracijos terminas stulpelyje 1), veiksmo pavadinimas per srautą nesikeičia.
4. **Rizika:** kiekybinis aktyvumas (Q) galėjo pavirsti gyvu skaičiumi, kuris teoriškai gali sugriūti
   (rodyti 0). **Sprendimas:** Q rodo tik statinius intervalus atnaujinamus rankomis (pvz. „40–65“,
   „1200+“), niekada realaus laiko skaitiklio.

**Po šių pataisymų — antras atsakymas: NE.** Kitas dizaineris, gavęs vien spalvų/šriftų/tinklelio
specifikaciją, padarytų švarų minimalistinį plakatą su matmenų nuorodomis kaip papuošimu; jis nepadarytų
puslapio, kuriame kiekvienas matavimas yra funkcinis (realiai apskaičiuotas) ir kuriame informacinės
sekcijos (€/M/A/Q) sąmoningai įsiterpia TARP vieno lauko ir pilnos formos, o ne prieš/po jos vienu bloku.

---

## 3. Turinys

### Antraštė (masthead)

- Ženklas: **Matmuo** (monograma „M“ apvestame kvadrate + žodinis ženklas)
- Amžiaus žyma: **18+**
- Grįžtančio dalyvio nuoroda (žemo prioriteto, tekstinė): **„Jau turi duomenų lapą? Prisijungti“**

### H1 ir paantraštė (P)

**H1:** „Prieš įrašydamas duomenis — pamatuok, ką tiksliai gauni.“

**Paantraštė:** „Kitos programėlės žada jausmą. Čia — matmenys: kiek laukų reikia užpildyti, kiek tai
trunka, kiek kainuoja ir kiek naujų dalyvių prisijungia per parą.“

### Matmenų eilutė (Į)

- „Laukų: 5. Iš jų privalomų: 4.“
- „Trukmė: ~70 s“ (su paaiškinimu žemiau: „Tai užima tiek, kiek užima — vidutiniškai 70 sekundžių.“)
- „Kaina: be mokesčio“

### Vieno lauko forma (FORM 1)

- Etiketė: **„Pašto adresas“**
- Placeholder: `vardas@pastas.lt`
- Mygtukas: **„Įrašyti pašto adresą“**
- Pagalbinis tekstas po lauku: „Adresas perkeliamas į pilną duomenų lapą žemiau — nieko nesiunčiame, kol
  neįrašysi likusių laukų.“

### € — Kaina šiandien

**Antraštė (h2):** „Kaina šiandien“

**Tekstas:** „Duomenų lapo pildymas ir naudojimasis sistema — be mokesčio. Mokamo lygio šiuo metu nėra.
Jei jis kada nors atsirastų, ši eilutė pasikeistų pirmiau nei bet kuri kita puslapyje. Jei kuris nors
skaičius pasikeis, jis pasikeis ir čia.“

### M — Kas vyksta po įrašymo

**Antraštė (h2):** „Kas vyksta po įrašymo“

1. „Įrašius kodą, duomenų lapas patenka į auditą.“
2. „Po audito jis tampa matomas sistemoje pagal tavo pasirinktus matomumo nustatymus.“
3. „Kai įvyksta sutapimas, žinutę gauni pašto adresu ir sistemos viduje.“

**Kodėl dabar (sąžiningas, be laikmačio):** „Dažniausias sutapimų laikas šioje sistemoje — 20–23 val.
kiekvieną vakarą. Įrašęs duomenų lapą dabar, spėsi iki jo.“

### A — Auditas prieš paskelbimą

**Antraštė (h2):** „Auditas prieš paskelbimą“

**Tekstas:** „Kiekvienas naujas duomenų lapas pereina rankinį auditą, kol tampa matomas sistemoje.
Vidutinis audito laikas: 4 val. Per pastarąjį mėnesį atmesta: 12% naujų lapų — daugiausia dėl nepilnai
užpildytų laukų arba pasikartojančio turinio.“

### Q — Apimtis

**Antraštė (h2):** „Apimtis“

- „Praėjusią parą: 40–65 nauji duomenų lapai.“
- „Šiuo metu sistemoje: daugiau nei 1 200 aktyvių duomenų lapų.“
- „Vidutinis atsakymo į žinutę laikas: 6 val.“

### Pilnas duomenų lapas (FORM pilna)

**Antraštė (h2):** „Pilnas duomenų lapas“

Laukai (etiketės):
1. Pašto adresas — (perkelta iš viršaus, redaguojama)
2. Žymė — placeholder: `pvz. matininkas21`
3. Kodas — placeholder tuščias, `type="password"`, pagalbinis tekstas: „Bent 8 simboliai ir bent vienas
   skaičius.“
4. Vietovė *(nebūtina)* — placeholder: `pvz. Kaunas`
5. Amžiaus intervalas — `select`: „18–24“ / „25–34“ / „35–44“ / „45–54“ / „55+“
6. Deklaracija (checkbox): „Patvirtinu, kad man yra 18 ir daugiau metų, ir sutinku su taisyklėmis bei
   privatumo politika.“

**Pateikimo mygtukas:** „Įrašyti duomenų lapą“

**Klaidų pranešimai:**
- Pašto adresas: „Pašto adresas neatpažintas. Patikrink formatą — turi būti pvz. vardas@pastas.lt.“
- Žymė: „Žymė per trumpa. Reikia bent 3 simbolių.“
- Kodas: „Kodas per silpnas. Reikia bent 8 simbolių ir bent vieno skaičiaus.“
- Amžiaus intervalas: „Amžiaus intervalas nepasirinktas. Pasirink vieną iš sąrašo.“
- Deklaracija: „Deklaracija nepatvirtinta. Be jos duomenų lapo įrašyti negalime.“

**Sėkmės būsena:** „Duomenų lapas įrašytas.“ + „Auditas prasidės per artimiausias valandas. Apie rezultatą
pranešime pašto adresu, kurį įrašei.“

### D — Dažniausi klausimai (5)

1. **„Kiek laiko tai iš tikrųjų užtrunka?“**
   „Vidutiniškai 70 sekundžių pirmam laukui ir apie 3 minutes visam duomenų lapui, jei pildai visus 5
   laukus iš karto.“
2. **„Kas mato mano duomenų lapą?“**
   „Numatytieji matomumo nustatymai rodo tik žymę ir amžiaus intervalą. Pašto adresas, kodas ir tiksli
   vietovė niekada nerodomi viešai — juos matai tik tu.“
3. **„Ar vėliau atsiras mokestis?“**
   „Šiuo metu — ne. Jei tai pasikeistų, informacija pirmiausia atsirastų skyriuje „Kaina šiandien“ aukščiau,
   ne po registracijos.“
4. **„Kaip patikrinama, kad kitoje pusėje — tikras dalyvis?“**
   „Kiekvienas duomenų lapas pereina rankinį auditą prieš paskelbimą (vidutiniškai 4 val.). Tai atskiras
   žingsnis nuo bendro sistemos aktyvumo skaičiaus.“
5. **„Ką daryti, jei noriu išeiti iš sistemos?“**
   „Matomumo nustatymuose yra vienas mygtukas duomenų lapui paslėpti ir vienas — jam pašalinti visam laikui.
   Abu veikia be papildomo prašymo mums.“

**Pakartotinė nuoroda (F15):** „↑ Grįžti prie pašto adreso lauko“ (nukelia į FORM(1) sekciją).

### L — Teisinė poraštė

- „Sistema skirta asmenims nuo 18 metų.“
- Nuorodos: **Taisyklės** (`#`) · **Privatumo politika** (`#`)
- „Duomenų tvarkymas ir pasitraukimo tvarka aprašyti taisyklėse.“
- „© 2026 Matmuo.“

### C — Slapukų juosta

**Tekstas:** „Šis puslapis naudoja būtinuosius slapukus lankomumui matuoti.“
**Mygtukas:** „Supratau“

### SEO

- **Title (47 simb.):** „Matmuo — duomenų lapas su tiksliais matmenimis“
- **Description (≤155 simb.):** „Įrašyk duomenų lapą žinodamas kiekvieną matmenį iš anksto: laukų skaičių,
  trukmę, kainą ir sistemos apimtį. Be spėjimų, be paslėptų sąlygų.“

---

## 5. Savikritika po kodo

Peržiūrėta realiame naršyklės lange (Chromium/Playwright) 360 / 768 / 1024 / 1440px pločiu, patikrinta
klaviatūra ir konsolė. Rasti ir ištaisyti trys dalykai:

1. **Kontrastas.** Matmenų išnašų (`.callout`) etiketės iš pradžių buvo `--fs-000` (13px) — su
   `--sheet-accent` ant `--sheet-bg` tai duoda ~4.24:1, kas nepraeina AA mažam tekstui (reikia 4.5:1).
   Padidinau iki `--fs-200` (19.2px) paryškinto svorio — tai pasiekia „stambaus teksto“ ribą
   (≥18.66px bold, reikalaujama tik 3:1), todėl 4.24:1 dabar praeina. Rankomis paskaičiuota WCAG santykinio
   skaisčio formulė įrašyta `VARIANT.md` planе (1 dalis) ir kaip komentaras CSS faile.
2. **Slapukų juosta blokavo formą (F14 pažeidimas).** Pradinė versija naudojo `position: fixed` juostą
   apatiniame krašte. Realiame teste tai fiziškai persidengė su pilnos formos „Deklaracija“ lauku (patikrinta
   `elementFromPoint` — taškas ties varnele grąžindavo `#consent`, ne `#declaration`). Tai tiesioginis
   struktūrinės taisyklės F14 pažeidimas („neužstoja konversijos priemonės“). Pataisyta: juosta nebe
   `fixed`, o įprastame dokumento sraute (paskutinis elementas prieš `</body>`) — tokiu būdu ji fiziškai
   negali persidengti su jokiu kitu elementu, nepriklausomai nuo puslapio ilgio.
3. **Nereikalingas automatinis fokusavimas po herojaus formos.** Po pašto adreso perkėlimo kodas automatiškai
   fokusavo „Žymė“ lauką po `scrollIntoView`. Testuojant paaiškėjo, kad tai kartais sutrikdo tiesiog po to
   sekantį mygtuko paspaudimą (fokusas keičiasi tuo pat metu, kai vyksta sklandus slinkimas). Kadangi
   automatinis fokusavimas po slinkimo taip pat gali netikėtai iššaukti klaviatūrą mobiliajame įrenginyje,
   jis pašalintas visai — liko tik `scrollIntoView`, vartotojas pats pasirenka, kada spausti lauką.

**Pašalintas perteklinis dekoro elementas:** pradinėje versijoje `plate__dims` (matmenų eilutė) po savimi
turėjo antrą, vien dekoratyvią 1px brūkšnelių juostelę, dubliuojančią kairėje jau esantį 8px tinklelio
ruler'į be jokios papildomos funkcijos. Ji pašalinta — liko tik viena, funkcinė ruler juosta kairėje
matmenų paraštėje (`.plate .sheet__margin`), kuri realiai atkartoja 8px tinklelio žingsnį. Tai atitinka
principą „vienas įsimenamas elementas, visa kita — tylu“.
