# VARIANT.md — `lg3-pultas`

Prekės ženklas: **Pultas**. Kryptis: prietaisų skydelis — skalės, rodyklės, būsenų lemputės;
puslapis kaip stebimas pultas. Pozicionavimo kampas: **C — rezultatas ir momentumas**.
Matricos šaltinis: `config/diferenciacijos-matrica.md`, stulpelis **# 3** (visos 14 ašių) +
detalioji kortelė „## lg3 — `lg3-pultas`" dalyje 3.

---

## Žingsnis 1 — Planas

### Spalvos (paletė — matrica ašis 2, eilutė 3)

| Hex | Vardas | Vaidmuo |
|---|---|---|
| `#0A1628` | pultas | pagrindinis fonas (viršutinis gradiento galas) |
| `#071120` | gylis | fono gradiento apatinis galas, giliausias sluoksnis (footer, slapukų juosta) |
| `#12253F` | prietaisas | paviršiaus spalva — panelės, formos laukai, kortelės |
| `#D9E6F4` | skalės tekstas | pagrindinis teksto atspalvis ant tamsaus fono |
| `#3FD0E8` | signalas | vienintelis akcentas — rodyklė, fokusas, aktyvi būsena, nuorodos |
| `#6E8BA8` | nuslopintas | antrinis tekstas, ribos, neaktyvios būsenos, placeholder |

Fonas — **gradientinis**, principas iš ašies 3, eilutė 3: vertikalus perėjimas
`#0A1628` → `#071120`, be jokių dėmių, švytėjimų ar radialinių šviesų (tos uždraustos
`config/draudziamu-zodziu-sarasas.md` §7.1 p.13). Vienas signalinis tonas (`#3FD0E8`),
jokio antrinio violetinio ar neoninio dueto.

### Tipografija (ašis 4, eilutė 3)

- **Sora**, svoris 600 — `h1`, `h2`, skalių/rodmenų skaičiai.
- **IBM Plex Sans**, svoriai 400 (tekstas) / 500 (etiketės, mygtukai).
- Kraunama **tik** reikalingi svoriai (Sora 600; IBM Plex Sans 400,500) — sąmoningai
  **ne** keturi svoriai kiekvienai šeimai (tas modelis uždraustas §7.2 p.20).
- Tipo skalė **1.250** (ašis 5), bazė 16px: 16 / 20 / 25 / 31 / 39 / 49px.
- Vertikalus ritmas — **4px žingsnis** (tarpai ir skalės padalos kartotiniai 4px).
- Teksto eilutės ilgis ribojama `max-width: 62ch` pastraipoms.
- `line-height`: antraštės 1.15, tekstas (sans) 1.5, formos etiketės 1.3.

### Layout — koncepcija

Tinklelis (ašis 6, eilutė 3): **split 50/50** — kairė kolona (`pultas-feed`) slenka su
turiniu, dešinė kolona (`pultas-panel`) **sticky** per visą aukštį virš `pultas-feed`
konteinerio. Virš abiejų — trumpas pilno pločio įžanginis blokas (H1 + viena pastraipa),
kad pirmas ekranas visada rodytų ir pozicionavimą, ir gyvą prietaisą be scroll.

Mobiliajame lange (< 1024px) kolonos susilieja į vieną: DOM tvarka sąmoningai —
įžanga → panelė (forma, jau nebe sticky) → srautas (Q…D) → poraštė. Taip forma lieka
pasiekiama be scroll ir mobiliajame variante, nors vizualiai desktope ji stovi dešinėje
(išspręsta CSS `grid-template-areas`, ne DOM tvarkos lūžiu).

**ASCII wireframe — desktop (≥1024px):**

```
┌──────────────────────────────────────────────────────────────────┐
│ [pultas-ikona] 18+                    Jau abonentas? Prisijunk    │ H
├──────────────────────────────────────────────────────────────────┤
│  Eteris, kurį matai,                                              │ P (h1)
│  o ne kurį tau pažada.                                            │
│  Pultas rodo gyvus rodmenis iš eterio. Kanalą įjungi pats...      │
├─────────────────────────────────────┬────────────────────────────┤
│ pultas-feed (kairė, slenka)         │ pultas-panel (dešinė,       │
│                                       │ sticky per visą aukštį)    │
│  Q  Rodmenys nesustoja                │  ┌──────────────────────┐ │
│  M  Kas vyksta, kai įjungi kanalą     │  │  [SVG skalė + rodyklė]│ │
│  Į  Rodmuo prieš įjungimą             │  │  Zona: [ select ▾ ]   │ │
│  K  Rodymo lygis                      │  │  Pasirink vietovę —   │ │
│  A  Stebėjimas                        │  │  rodyklė persistums.  │ │
│  €  Be abonento mokesčio              │  │  [Atverti likusius    │ │
│  R  Grįžti prie pulto (nuoroda)       │  │   laukus]             │ │
│  D  Prieš įjungiant paklausk (5)      │  │  (2 etapas: paslėptas │ │
│                                       │  │   iki pasirinkimo)    │ │
├─────────────────────────────────────┴────────────────────────────┤
│  L  Teisinė dalis (18+, taisyklės, privatumo politika)             │
│  C  Slapukų būsena  [Priimti visus] [Tik būtinieji]                │
└──────────────────────────────────────────────────────────────────┘
```

**ASCII wireframe — mobile (360px):**

```
┌───────────────────────┐
│ ikona   18+            │ H
│ Jau abonentas? Prisij. │
├───────────────────────┤
│ Eteris, kurį matai,    │ P
│ o ne kurį tau pažada.  │
│ Pultas rodo gyvus...   │
├───────────────────────┤
│ pultas-panel (statinė, │ FORM (be scroll)
│ ne sticky)             │
│  [skalė]  Zona:[▾]     │
│  [Atverti likusius...] │
├───────────────────────┤
│ pultas-feed            │
│ Q · M · Į · K · A · €  │
│ R [Grįžti prie pulto]  │
│ D (5 klausimai)        │
├───────────────────────┤
│ L teisinė dalis        │
│ C slapukų juosta       │
└───────────────────────┘
```

Lygiavimas: viskas į kairę pagal tekstą (jokio centravimo antraštėse), panelės viduje —
laukai ir skalė centruoti savo pačių bloke.

### 3 principai

1. **Kairė pasakoja, dešinė rodo** — dvi kolonos niekada nesikeičia vaidmenimis per visą puslapį.
2. **Vienas gyvas rodmuo visame puslapyje** — rodyklė reaguoja tik į tai, ką vartotojas pats pasirinko, niekada į laiką ar užkrovimą.
3. **Kiekvienas teiginys turi rodmenį arba ribą** — jokio teiginio be skaičiaus, procento ar aiškios sąlygos.

### Kur išleidžiama drąsa

Dešinioji panelė yra tikras, interaktyvus prietaisas su savo skale ir rodykle, kuri
persistumia pasirinkus zoną dar prieš registraciją — tai vienintelė vieta, kur puslapis
rizikuoja, visa kita (spalvos, tipografija, tarpai) yra sąmoningai nuosaiku ir pakartojama.

---

## Žingsnis 2 — Savikritika prieš kodą

**Klausimas:** jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?

**Pirmas atsakymas: TAIP, iš dalies.** „Tamsus tech dashboard su žydra" yra atpažįstamas
numatytasis „dark SaaS" sprendimas, ir be papildomos disciplinos jis lengvai nuslystų į
švytinčias korteles ir neoninį dueto akcentą (tai jau užfiksuota ir ištaisyta pačioje
matricoje — žr. `diferenciacijos-matrica.md` dalis 5, lg3 įrašas). Perimu tuos sprendimus
ir pridedu tris savo:

- **(a) Failų konvencija.** Užduoties OUTPUT sąrašas nurodo generinį `assets/style.css` /
  `assets/app.js` — tai `promptai/03-statyba.md` bendra šablono formuluotė. Bet
  `config/diferenciacijos-matrica.md` ašis 14, eilutė 3, aiškiai priskiria man
  `static/panel.css` / `static/panel.js`, o ši ašis yra sąmoningai unikali kiekvienam
  variantui (jokia reikšmė nesikartoja) — jei naudočiau `assets/style.css`, tiksliai
  sutapčiau su `lg1-matmuo` failų vardais. Tai nėra matricos vidinis prieštaravimas
  (RIBOS numato stabdymą tik tam atvejui), o bendro OUTPUT šablono ir mano konkrečios
  eilutės neatitikimas — sprendžiu jį matricos naudai, nes ji yra specifiškesnė ir jos
  laikymasis tiesiogiai saugo nuo dešimties variantų panašumo. Užrašau čia, kad
  orkestratorius matytų sprendimą.
- **(b) Numeracija „M" sekcijoje.** Pirminis instinktas — sunumeruoti „kas vyksta po
  registracijos" kaip 01/02/03. Bet `diferenciacijos-matrica.md` dalis 4, p.8 aiškiai
  sako: numeracija leidžiama tik lg5/lg6/lg9, o **lg3 — vienas iš likusių septynių, kurie
  nenumeruoja nieko**. Pakeičiau į diagnostinius laiko žymenis („T+0", „T+iki 2 val.",
  „Kai atsiranda ryšys") — tai atitinka techninį toną ir neatrodo kaip 01/02/03 seka.
- **(c) Slaptažodžio laukas.** Norėjau pridėti rodyti/slėpti perjungiklį patogumui, bet
  `draudziamu-zodziu-sarasas.md` §7.4 p.46 draudžia būtent **tekstinį** dviejų būsenų
  perjungiklį be piktogramos. Kad nerizikuočiau atpažįstamu atitikmeniu, perjungiklio
  visai atsisakiau — laukas lieka paprastas `type="password"`, funkcionalus be papildomo
  UI elemento.
- **(d) Terminų žemėlapio vidinis prieštaravimas — rastas ir išspręstas lokaliai.**
  `config/terminu-zemelapis.md`, sąvoka 15 (privatumas/matomumas), stulpelis 3, priskiria
  man terminą **„prieigos lygis"**. Bet to paties failo skyrius „Papildomos taisyklės"
  draudžia naudoti bet kurio kito varianto prekės ženklo šaknį — ir tarp jų aiškiai
  įvardyta **„Prieiga"**, kuri yra `lg9-prieiga` prekės ženklas. „Prieigos lygis" yra
  tiksliai ta pati šaknis. Tai yra failo vidinis prieštaravimas (priskirtas terminas
  pažeidžia to paties failo kryžminio draudimo taisyklę), ne mano interpretacijos
  klausimas. Kadangi neturiu teisės rašyti į `config/`, o RIBOS numato pranešti
  orkestratoriui ir nekeisti savavališkai reikšmingų sprendimų, pasielgiau taip: **savo
  tekste vietoj „prieigos lygis" naudoju „rodymo lygis"** — patikrinau, kad šis žodis
  nesikartoja nė viename iš 10 terminų stulpelių ir nesutampa su jokiu prekės ženklu —
  ir šį prieštaravimą aiškiai užrašiau `logs/build-03-BLOCKED.md`, kad orkestratorius
  atnaujintų `config/terminu-zemelapis.md` autoritetingai. Tai vienintelė ašis, kurioje
  nukrypau nuo pažodinio matricos/žemėlapio įrašo, ir nukrypau ne dizaino, o vardažodžio
  lygmeniu, tiksliai dėl to, kad pačios reikšmės laikymasis pažeistų griežtesnę to paties
  dokumento taisyklę.

**Antras atsakymas: NE.** Po šių keturių pataisymų kitas dizaineris, gavęs tą patį briefą,
greičiausiai padarytų švarų tamsų dashboard'ą su korteles ir švytėjimu po herojumi — ne
puslapį, kuriame dešinioji kolona yra vienintelis prietaisas su realia trigonometrija už
rodyklės pasukimo, o kairė kolona niekada nenumeruoja nieko ir kiekvienas sakinys neša
rodmenį ar ribą.

---

## Žingsnis 3 — Turinys

### Antraštė (header)

- Ženklas: **Pultas** (SVG skalės/rodyklės ikona, be gradiento, kontūras signalo spalva)
- Amžiaus žyma: **18+**
- Grįžtančio abonento nuoroda (žemo prioriteto, tekstinė): **„Jau abonentas? Prisijunk"**

### Įžanga (P)

- **H1:** „Eteris, kurį matai, o ne kurį tau pažada."
- **Paantraštė:** „Pultas rodo gyvus rodmenis iš eterio. Kanalą įjungi pats, o skalę matai
  dar prieš įjungdamas."

### Panelė — gyvas pultas + forma (P+FORM, sticky)

- Antraštė virš skalės: „Zona"
- Instrukcija: „Pasirink vietovę — rodyklė persistums."
- Laukas: `<select>` „Zona" — Vilniaus zona, Kauno zona, Klaipėdos zona, Šiaulių zona,
  Panevėžio zona, Kita zona (kiekviena su savo rodmens verte).
- Skaitmeninis rodmuo šalia skalės: „NN % · žemas / vidutinis / aukštas"
- Mygtukas (1 etapas → 2 etapas): **„Atverti likusius laukus"**
- 2 etapo laukai:
  - **Šaukinys** (min. 3 ženklai)
  - **Diapazonas** — 26–30 / 31–35 / 36–40 / 41+
  - **Grįžtamasis adresas** (el. paštas, `type="email"`)
  - **Raktas** (slaptažodis, min. 8 ženklai)
  - Varnelė: „Patvirtinu, kad esu 18 m. ar vyresnis ir sutinku su Pultas taisyklėmis bei
    privatumo politika."
- CTA mygtukas: **„Įjungti kanalą"**
- Klaidų pranešimai (rodomi tekstu, ne vien spalva):
  - „Pasirink zoną — be jos rodyklė neturi kur rodyti."
  - „Įrašyk šaukinį — bent 3 ženklus."
  - „Pasirink diapazoną."
  - „Šis adresas neatrodo teisingas — patikrink formatą."
  - „Raktas per trumpas — reikia bent 8 ženklų."
  - „Be leidimo kanalo įjungti negalime."
- Sėkmės būsena: **„Kanalas įjungtas."** + „Sekantis rodmuo pasirodys per stebėjimo
  langą — gausi žinutę liniją pradėti, kai atsiras ryšys."

### Q — Rodmenys nesustoja (kiekybinis aktyvumas, F4 + F17)

„Rodmenys nesustoja"
- „Eteryje dabar šviečia virš 1200 aktyvių šaukinių — skalė niekada nerodo tuščios vietos."
- „Aukščiausia padala parą: 21–23 val. — apie 90 % skalės."
- „Kai skalė nukrenta žemiau vidurio, mes to neslepiame. Žemiausia užfiksuota riba: 38 %.
  Žemiau nerodome, nes žemiau nebūna."

### M — Kas vyksta, kai įjungi kanalą (F6)

„Kas vyksta, kai įjungi kanalą"
- **T+0** — „Kanalas įjungtas, matomas prietaise ir savo zonoje."
- **T+iki 2 val.** — „Stebėjimas patvirtina leidimą ir šaukinį."
- **Kai atsiranda ryšys** — „Gauni žinutę liniją pradėti."

### Į — Rodmuo prieš įjungimą (F7)

„Rodmuo prieš įjungimą"
- „Laukai: 5. Leidimų: 1. Trukmė: apie 50 sekundžių nuo pirmo pasirinkimo iki paskutinio
  rakto simbolio."

### K — Rodymo lygis (F9)

„Rodymo lygis"
- „Viešai matoma tik: šaukinys ir zona. Niekam nerodoma: grįžtamasis adresas, raktas,
  tiksli vietovė."
- „Rodymo lygį keiti bet kada nustatymuose, o kanalą išjungi vienu mygtuku — įrašai
  dingsta per 24 valandas."

### A — Stebėjimas (F5, atskiras mechanizmas nuo Q)

„Stebėjimas"
- „Kiekvienas naujas kanalas pereina du patikrinimus: grįžtamojo adreso patvirtinimą ir
  rankinį stebėjimą per pirmąsias valandas. Abu turi įvykti, kol šaukinys tampa matomas
  kitiems."

### € — Be abonento mokesčio (F8)

„Be abonento mokesčio"
- „Kanalas įjungiamas be abonento mokesčio. Jei kada nors atsirastų papildomas mokamas
  lygis, jis bus pažymėtas čia, prietaise — dar prieš įjungiant, ne po."

### R — Grįžti prie pulto (F15, pakartotinis CTA taškas)

- „Pakeitei nuomonę dėl zonos? Rodyklę gali perstumti dar kartą."
- Nuoroda: **„Grįžti prie pulto"** (nukelia į panelę)

### D — Prieš įjungiant paklausk (F16, 5 klausimai)

„Prieš įjungiant paklausk"

1. **„Ar zona rodo tikslią gyvenamąją vietą?"**
   „Ne. Zona yra platesnis rėžis, ne adresas — tikslią vietą prietaisas niekada nerodo
   kitiems. Jei nori patikrinti, grįžk prie pulto ir pasirink zoną dar kartą."
2. **„Ką daryti, jei mano zonoje rodmuo žemas?"**
   „Nieko papildomo. Kanalas veikia visame eteryje, ne tik vienoje zonoje, o rodyklė tik
   parodo dabartinę būklę — ne ribą. Įjunk kanalą, ir stebėjimas pats susies tave su
   kitomis zonomis."
3. **„Ar reikės mokėti už kanalą?"**
   „Ne. Kanalas veikia be abonento mokesčio. Jei tai kada nors pasikeis, pamatysi tai
   prietaise dar prieš mokėjimą, o ne po jo. Gali įjungti kanalą žinodamas šitą iš anksto."
4. **„Iš kur žinosite, kad kitoje pusėje tikras abonentas?"**
   „Kiekvienas kanalas pereina grįžtamojo adreso patvirtinimą ir rankinį stebėjimą —
   abu prieš tampant matomam kitiems. Tai atskiras žingsnis nuo aktyvumo rodmens ir
   vyksta visada."
5. **„Kaip išjungti kanalą, jei persigalvosiu?"**
   „Vienu mygtuku nustatymuose. Įrašai dingsta per 24 valandas, ir niekas iš mūsų pusės
   to nepratęsia. Jei dar neįjungei — gali tiesiog grįžti prie pulto ir pabaigti vėliau."

### L — Teisinė dalis (F11)

- „Pultas veikia tik pilnametystės sulaukusiems abonentams."
- Nuorodos: „Taisyklės", „Privatumo politika"
- „© Pultas."

### C — Slapukų būsena (F14)

- Antraštė: „Slapukų būsena"
- Tekstas: „Naudojame tik būtinuosius slapukus puslapio veikimui ir statistikos slapukus,
  kuriuos gali atsisakyti."
- Mygtukai: „Priimti visus", „Tik būtinieji"

---

## Žingsnis 5 — Savikritika po kodo (360px / 1440px peržiūra)

Peržiūrėjau šaltinį 360px ir 1440px pločio kontekste (CSS grid/flex ribos, `clamp()`
reikšmės, `overflow-x` rizikos taškai — select ilgi variantų pavadinimai, SVG
`viewBox` responsyvumas).

**Pašalintas elementas:** SVG skalėje prie rodyklės ašies buvo papildomas centrinis
apskritimas (`<circle cx="120" cy="120" r="6">`) — grynai dekoratyvi ašies dangtelio
imitacija, kuri nieko naujo neprideda: rodyklės linija ir padalos jau pakankamai aiškiai
rodo pasukimo tašką. Pašalinta iš `index.html` (skalės SVG), kad prietaisas liktų tik iš
funkcinių elementų: takelio lanko, padalų, skaičiuojamo rodmens ir pačios rodyklės.
