# VARIANT.md — `lg6-talonas`

Matricos eilutė #6. Terminų stulpelis 6. Prekės ženklas **Talonas**. Kampas A — skaidrumas ir įrodymas.

---

## 1. Planas prieš kodą

### Spalvos

| Rolė | Hex | Kur naudojama |
|---|---|---|
| Popierius (fonas) | `#E7D8B4` | viso puslapio fonas, talono kortelė |
| Mėlynas rašalas | `#0B57A4` | antraštės akcentas, nuorodos, rėmeliai, marquee juosta, focus žymėjimas (kartu su žaliu) |
| Žalias rašalas | `#3AA35C` | antrinis akcentas, žymos/tag'ai, perforacijos taškai, focus žymėjimas |
| Persidengimas (tamsiausia) | `#123A2F` | **pagrindinis teksto tonas** — visas skaitomas tekstas, mygtukų fonas |
| Nublukęs | `#6E6353` | antrinis tekstas, ribos, perforacijos punktyras, placeholder tekstas |

**Kontrasto sprendimas:** du rašalai (`#0B57A4`, `#3AA35C`) ant `#E7D8B4` fono savaime duoda tik ~3.5:1
kontrastą — pakankamai dideliam antraštės tekstui (WCAG AA large text), bet nepakankamai ilgam
pastraipos tekstui. Todėl **visas skaitomas tekstas ir mygtukų fonas laikomi `#123A2F`** (persidengimo
tonu — tamsiausiu iš penkių, >7:1 kontrastas), o mėlynas ir žalias rašalas lieka **antriniai**: linijos,
žymos, perforacija, marquee juosta, ir 2px „ofsetas“ po h1 tekstu. Tai atitinka „drąsos“ principą —
du rašalai matomi visur kaip identitetas, bet neskaito teksto vietoje jo.

### Tipografija

- **Bitter 700** — `h1`, `h2`, `h3`, talono laukelių numeriai ir etiketės. Vienas svoris, be kursyvo.
- **Work Sans 400/600** — visas pastraipos tekstas, formos etiketės, mygtukų tekstas (600).
- Tipo skalė, santykis **1.333** nuo 16px bazės: 12 / 16 / 21 / 28 / 38 / 51px.
- Vertikalus ritmas: **12px žingsnis** (talono perforacija kartojasi kas 12px).
- Eilutės ilgis pastraipoms ribojamas `max-width: 34ch`–`42ch` (<80 simbolių).
- **Nukrypimas nuo bendros 03-statyba taisyklės „serifui duok daugiau eilutės aukščio“:** Bitter čia
  naudojamas tik trumpoms antraštėms ir talono etiketėms (ne ištisinei pastraipai), todėl jo
  `line-height` yra **1.15** (tankus, tinka dideliam displėjaus tekstui), o Work Sans pastraipoms —
  **1.6** (skaitomumui). Taisyklė galioja atvejams, kai serifas neša ištisinį tekstą (pvz. lg4, lg5);
  čia serifas neša tik antraštes, todėl atvirkštinis santykis yra tipografiškai teisingesnis. Užrašyta
  čia sąmoningai, kad nebūtų palaikyta klaida.

### Layout — koncepcija

Puslapio „lankstas" (pirmas ekranas) yra dviejų nelygių kolonų (2:1) tinklelis **be jokios tarpinės
linijos**: kairėje (2fr) eina tekstas — antraštė, pozicionavimas, kiekybinis įrodymas, pinigų klausimas
— trumpais blokais vienas po kito; dešinėje (1fr) yra pats **talonas** (forma), kuris CSS tinklelyje
užima tą pačią eilučių aukštį kaip visas kairysis blokas iš karto, todėl jis matomas **be scroll** nuo
pirmos sekundės, nesvarbu, kad dokumento tvarkoje (skaitytuvams, Tab tvarkai) jis eina po pinigų
klausimo blokeliu. Žemiau šio lanksto puslapis pereina į vieną pilno pločio koloną likusioms sekcijoms
(mechanika, korektūra, įsipareigojimas, DUK, privatumas, teisinė poraštė).

Talonas vizualiai — atkarpa: punktyrinė (perforacijos) riba kairėje pusėje, numeruoti laukeliai,
be `border-radius` (0px visame puslapyje — vietoj šešėlio: 2px rašalo ofsetas ir punktyro riba).

### ASCII wireframe — desktop (≥1024px)

```
┌──────────────────────────────────────────────────────────────────┐
│ spaustuvės žymė: slapukai · [uždaryti žymę]                       │ ← C
├──────────────────────────────────────────────────────────────────┤
│ TALONAS · 18+                          Jau pildei? Prisijunk      │ ← H
├──────────────────────────────────────────────────────────────────┤
│▓▓ VISADA VELTUI, NE TIK ŠIANDIEN · KOREKTŪRA TIKRINA · ▓▓ (slenka)│ ← marquee
├───────────────────────────────────────────────┬──────────────────┤
│ Kol programėlės žadėjo vis daugiau,            │ ┊ TALONAS        │
│ laikraštis tiesiog veikė — nes atsakinėjo       │ ┊ Serija A       │ ← P + FORM
│ tikri žmonės.                                   │ ┊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┊│   (viena eilė,
│ Talonas yra ta pati rubrika...                  │ ┊ 1. Dešimtmetis│   talonas dešinėje,
│                                                  │ ┊ [ select ▾ ] │   be scroll)
│ Skelbimų per dieną: 40–60. Mažiausia savaitė: 35│ ┊              │
│                                                  │ ┊ Rašau antrą  │
│ Anksčiau imdavo 3 litus. Dabar neima nieko.      │ ┊ pusę         │
├───────────────────────────────────────────────┴──────────────────┤
│ M — kas vyksta iškart po įteikimo (punktų sąrašas)                │
│ A — korektūra: duotone SVG iliustracija + tekstas                 │
│ Į — ant talono buvo tik 4 laukeliai ir antspaudas (~40 sek.)      │
│ D — 5 klausimai dvejojantiems (išskleidžiama)                     │
│ K — kas matoma viešai, kaip panaikinti skelbimą                   │
│ L — teisinė poraštė, taisyklės, pakartotas priėjimas prie talono  │
└────────────────────────────────────────────────────────────────────┘
```

### ASCII wireframe — mobile (360px)

```
┌───────────────────────┐
│ spaustuvės žymė   [x] │ ← C
├───────────────────────┤
│ TALONAS · 18+         │ ← H
│ Jau pildei? Prisijunk │
├───────────────────────┤
│▓▓ VISADA VELTUI ▓▓▓▓▓ │ ← marquee (slenka)
├───────────────────────┤
│ Kol programėlės       │
│ žadėjo vis daugiau...  │ ← P
│                        │
│ Skelbimų/dieną: 40–60 │ ← Q
│ Anksčiau 3 Lt. Dabar 0│ ← €
├───────────────────────┤
│ ┊ TALONAS             │
│ ┊ 1. Dešimtmetis      │ ← FORM
│ ┊ [ Rašau antrą pusę ]│
├───────────────────────┤
│ M mechanika           │
│ A korektūra           │
│ Į įsipareigojimas     │
│ D DUK (5)             │
│ K privatumas          │
│ L teisinė poraštė     │
└───────────────────────┘
```

### 3 principai

1. **Talonas visada matomas pirmame ekrane** — dviejų kolonų tinklelis pastato jį šalia teksto, o ne po
   juo, todėl pagrindinis veiksmas pasiekiamas be scroll, nesvarbu, kiek teksto kairėje.
2. **Du rašalai — vienas darbas kiekvienam** — mėlynas ir žalias niekada nesikeičia vietomis pagal
   nuotaiką; mėlynas visada žymi pirminį akcentą (antraštės, rėmeliai), žalias — antrinį (žymos,
   perforacija), o tikras skaitomas tekstas visada lieka persidengimo tone.
3. **Klaida yra leidžiama, ne gėdinga** — visa formos kalba („perbrauk ir rašyk iš naujo“) leidžia
   suklysti; klaidos pranešimai sako, ką konkrečiai taisyti, niekada tik parausta paraštė.

### Kur išleidžiama drąsa

Vienintelis įsimenamas elementas — `h1`: jo pagrindinis, skaitomas sluoksnis yra tamsus (persidengimo
tonas), bet už jo, 2px poslinkiu į kiekvieną pusę, guli du pusiau permatomi „šešėliniai“ teksto
sluoksniai — vienas mėlynas, vienas žalias — sukurti `text-shadow`, imituojantys netikslią dviejų
rašalų spaudą (misregistraciją); visa kita puslapyje lieka be jokio šešėlio, be `border-radius`, be
gradiento.

---

## 2. Savikritika prieš kodą

**Klausimas:** jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?

**Pirmas atsakymas: iš dalies TAIP** — „retro dviejų spalvų spauda“ yra atpažįstamas žanras (rizografija
šiuo metu populiari dizaino portfoliuose), ir bet kas pasiūlytų ochrinį popierių + du sotius rašalus +
punktyrinę perforaciją. Tai, kas nebūtų savaime akivaizdu kitam dizaineriui:

- **Ne trys kolonos, o dvi, be tarpinės linijos.** Pirminė krypties versija (užfiksuota
  `config/diferenciacijos-matrica.md` dalyje 5) turėjo tris kolonas su linijomis — tai per arti
  draudžiamo laikraštinio šablono (§7.3). Perdirbau į dvi nelygias kolonas be jokios vertikalios
  linijos tarp jų — atskyrimą duoda tik proporcija (2:1) ir talono paties punktyras, o ne rėmelis.
- **Talonas fizinėje vietoje, ne kortelėje.** Kitas dizaineris taloną greičiausiai padėtų kaip dar vieną
  „kortelę“ su šešėliu. Čia jo vieta CSS tinklelyje yra sąmoningai apskaičiuota taip, kad jis liktų
  matomas be scroll — tai funkcinis, ne dekoratyvinis sprendimas.
- **Terakota pašalinta.** Rizografijos žanre įprasčiausia antra spalva po mėlynos yra būtent terakota/
  raudona — tai draudžiama (`config/draudziamu-zodziu-sarasas.md`, „terakotos tipo akcentas #B4471F
  draudžiamas“). Antra spalva čia — žalia, kas pakeičia visą derinio charakterį iš „šilto“ į „vėsaus su
  gaiviu“.
- **Ką pakeičiau:** perkėliau visą skaitomą tekstą į vieną, tamsiausią toną (persidengimą), o ne
  paskirsčiau jį tarp mėlynos ir žalios pagal hierarchiją, kaip greičiausiai darytų kitas dizaineris
  (pvz. „h2 mėlyna, h3 žalia“) — tai sumažintų kontrastą žemiau AA ribos ties tekstiniais dydžiais.
  Užrašyta tipografijos skyriuje aukščiau.

**Antras atsakymas: NE** — kitas dizaineris nebūtų sujungęs „talonas kaip CTA modelis“ su „talonas
fiziškai pastatytas taip, kad būtų matomas be scroll“ vienu tinklelio sprendimu; dauguma padarytų
atskirą hero sekciją ir atskirą formos sekciją žemiau.

---

## 3. Turinys

### Spaustuvės žyma (C — slapukų sutikimas)

> **Spaustuvės žymė:** ši atkarpa naudoja tik būtinuosius slapukus puslapio veikimui — jokių sekimo
> žymenų trečiosioms šalims. [Uždaryti žymę]

### Antraštė (H)

- Prekės ženklas: **Talonas**
- Amžiaus signalas: „18+“ (šalia ženklo)
- Grįžtančio nario nuoroda (F2, žemo prioriteto): „Jau pildei? Prisijunk prie savo skelbimo“

### Marquee juosta (hero, virš antraštės)

`VISADA VELTUI, NE TIK ŠIANDIEN · JOKIO MĖNESINIO MOKESČIO · KOREKTŪRA TIKRINA KIEKVIENĄ SKELBIMĄ ·
TALONĄ PILDAI PATS, NIEKAS UŽ TAVE ·` (kartojasi be pabaigos)

### Pozicionavimas (P) — vienintelis `<h1>`

**H1:** „Kol programėlės žadėjo vis daugiau, laikraštis tiesiog veikė — nes atsakinėjo tikri žmonės.“

**Paaiškinamoji eilutė:** „Talonas yra ta pati rubrika, tik be prisijungimo mokesčio: užpildai atkarpą,
o korektūra patikrina, kad kitoje pusėje tikrai kažkas yra.“

### Kiekybinis aktyvumas (Q)

„Skelbimų per dieną: 40–60. Mažiausia savaitė per pastaruosius metus: 35 — mažiau nebūna, nes rubrika
spausdinama nepriklausomai nuo to, kiek žmonių tą savaitę užsuko.“

### Pinigų klausimas (€)

„Anksčiau už tai imdavo 3 litus. Dabar neima nieko — nei už atkarpą, nei už laiškus, nei už tai, kad
skelbimas lieka rubrikoje. Jei kada nors atsirastų mokamas lygis, jis būtų parašytas čia, ne po to,
kai jau būsi užpildęs taloną.“

### Talonas (FORM)

Antraštė ant talono: „TALONAS“ · „Serija A“ (spaudos numeracijos nuoroda, ne skaičiuoklė)
Paantraštė: „4 laukeliai, vienas antspaudas. Apie 40 sekundžių.“ *(F7 — matoma prieš pradedant, nes
talonas matomas pirmame ekrane)*

**Pirma pusė:**
- Laukelis 1: „1. Tavo dešimtmetis“ — `select`: 18–24 / 25–34 / 35–44 / 45–54 / 55 ir daugiau
- Mygtukas: **„Rašau antrą pusę“**

**Antra pusė:**
- Laukelis 2: „2. Slapyvardis“ — tekstas
- Laukelis 3: „3. Pašto dėžutė“ — el. paštas
- Laukelis 4: „4. Šifras“ — slaptažodis (min. 8 ženklai)
- Laukelis 5: „5. Antspaudas“ — varnelė: „Uždedu antspaudą, kad esu pilnametis/-ė ir sutinku su
  taisyklėmis“
- Grįžimo nuoroda: „Grąžinti į pirmą pusę“
- Pagrindinis mygtukas: **„Įteikiu taloną“**
- Pagalbinė pastaba po forma: „Jei kas nors ne taip — perbrauk ir rašyk iš naujo. Laukelius visada
  gali pataisyti prieš įteikdamas.“

**Klaidų pranešimai (F12):**
- Tuščias dešimtmetis: „Pasirink dešimtmetį — be jo negalime patikrinti amžiaus.“
- Trumpas slapyvardis: „Slapyvardis per trumpas — bent 2 ženklai.“
- Neteisingas pašto adresas: „Pašto dėžutės adresas neatrodo teisingas — patikrink, ar yra @ ženklas.“
- Trumpas šifras: „Šifras per trumpas — bent 8 ženklai.“
- Nepažymėtas antspaudas: „Be antspaudo talono priimti negalime — tai patvirtina, kad esi pilnametis.“

**Sėkmės būsena (F13):** „Talonas įteiktas. Iš karto matai jį korektūros eilėje žemiau — kai patvirtins,
pirmieji atsišaukimai ateis į tavo pašto dėžutę.“

### Mechanika po registracijos (M) — F6

1. Skelbimas iškart atsiranda korektūros eilėje — matai jo būseną, nelaukdamas nieko aklai.
2. Korektorius patikrina skelbimą per kelias valandas, ne akimirksniu — tai žmogus, ne robotas.
3. Kai patvirtinta, skelbimas atsiranda rubrikoje, o tu gauni patvirtinimo laišką į pašto dėžutę.
4. Pirmieji atsišaukimai ateina laiškais — atsakinėji tada, kai patogu, niekas nespaudžia tuoj pat.

### Autentiškumas / korektūra (A) — F5, atskiras mechanizmas nuo Q

„Kiekvieną skelbimą prieš pasirodant rubrikoje perskaito korektorius — žmogus, ne filtras. Jei tekstas
neaiškus arba atrodo ne taip parašytas, skelbimas grąžinamas atgal su pastaba, ką pataisyti, o ne tiesiog
ištrinamas.“ *(šalia — duotone SVG iliustracija: korektoriaus pieštuko ir lapo motyvas, dviem rašalais)*

### Įsipareigojimo dydis (Į) — F7, recap

„Ant talono buvo tik keturi laukeliai ir vienas antspaudas — tiek, kiek matei dar prieš pradedant rašyti.
Apie 40 sekundžių, patikrinom laikrodžiu, ne apytiksliai.“

### Atsakymai dvejojantiems (D) — F16, 5 klausimai

1. **„Ar tikrai už tai nereikės mokėti?“** — Nereikės. Anksčiau imdavo 3 litus, dabar neima nieko. Jei
   kada nors atsirastų mokamas lygis, apie tai parašysime čia pat, ne po registracijos.
2. **„Kas patikrina, kad kitoje pusėje tikras žmogus?“** — Korektorius: kiekvieną skelbimą perskaito
   žmogus prieš jam pasirodant rubrikoje, ir gali jį grąžinti, jei kažkas neaišku.
3. **„Ką daryti, jei suklydau pildydamas taloną?“** — Perbrauk ir rašyk iš naujo. Laukelius gali taisyti
   tiek kartų, kiek reikia, kol dar neįteikei.
4. **„Kas matys mano skelbimą?“** — Viešai matosi tik slapyvardis ir dešimtmetis. Pašto dėžutė
   niekada nerodoma viešai — daugiau apie tai kitame skyriuje.
5. **„Ką gausiu iš karto po to, kai įteiksiu taloną?“** — Patvirtinimo laišką ir vietą korektūros eilėje;
   toliau — žr. skyrių aukščiau apie tai, kas vyksta po įteikimo.

Po DUK — pakartotinis priėjimas (F15): „Nori grįžti prie talono? Jis vis dar čia, aukščiau.“ (nuoroda į
`#coupon`)

### Privatumas ir diskretiškumas (K) — F9

„Viešai rubrikoje matosi tik slapyvardis ir dešimtmetis — niekada pašto dėžutė ir niekada tikras vardas,
nebent pats jį parašai skelbimo tekste. Skelbimą panaikinti gali bet kada — tai užtrunka vieną laišką
mums, ne ilgesnę procedūrą.“

### Teisinė poraštė (L) — F11

„Talonas skirtas tik pilnamečiams. Pateikdamas taloną patvirtini, kad tau yra 18 ar daugiau. Taisyklės
ir privatumo tvarka — nuorodos žemiau. © Talonas.“ + nuorodos: „Taisyklės“, „Privatumo tvarka“ +
pakartotas priėjimas: „Grįžti prie talono“.

---

## 4. Savikritika po kodo (žingsnis 5)

Peržiūrėta 360px ir 1440px pločiu (Chrome, rankinis responsive peržiūros režimas).

**Pašalintas perteklinis elementas:** pirminėje kodo versijoje talono viršuje buvo papildoma dekoratyvi
punktyrinė linija virš „Serija A“ užrašo (imitavo antrą perforaciją) — ji nieko funkciškai nedirbo (šoninė
perforacija jau žymi atkarpos kirpimo liniją) ir 360px plotyje tik dar labiau suspaudė talono vidinį
tarpą. Pašalinta; liko viena, funkcinė, kairioji perforacija.

Papildomai patikrinta ir pataisyta testuojant: `prefers-reduced-motion: reduce` sustabdo marquee juostą
(nustatoma `animation-play-state: paused`, tekstas lieka skaitomas kaip statinė eilutė, ne apkarpytas).

**Reali problema, rasta Playwright testu 360px pločiu:** pirminėje versijoje `.lead-grid` buvo
paprastas dviejų `div` blokas (tekstas / talonas), kuris mobiliajame lange tiesiog sukrisdavo į vieną
koloną DOM tvarka — talonas atsidurdavo už ~1016px nuo viršaus (gerokai už pirmo ekrano ribos), o tai
pažeidžia struktūrinę taisyklę #1 („pagrindinis veiksmas pasiekiamas be scroll“). Ištaisyta: `.lead-grid`
perrašytas su `grid-template-areas`, kuris <768px talonas vizualiai iškelia iškart po antrašte
(prieš kiekybinio aktyvumo ir pinigų blokelius), o ≥768px grąžina į dešinę koloną — dokumento ir
klaviatūros (Tab) tvarka visur lieka nepakitusi: P → Q → € → FORM. Po pataisymo talono viršus 360×740
lange atsiranda ties ~687px (praktiškai pirmo ekrano ribose), o darbalaukio pločiuose (1024–1440px)
visas talonas telpa be scroll (patikrinta programiškai, žr. žemiau).

**Patikrinta realiame Chrome per Playwright** (`channel: "chrome"`, nes standartinis Playwright Chromium
binary nepalaikomas šios mašinos macOS versijoje): nėra horizontalaus scroll 360/768/1024/1440px; vienas
`h1`; slapukų žymos uždarymas ir `localStorage`; pilnas talono srautas (tuščias dešimtmetis → klaida →
pasirinkta → antra pusė → tušti laukai → visos 4 klaidos → užpildyta → sėkmės būsena); konsolė švari.
