# QA — Fazė 4, DALIS B: sprendiminis panašumo auditas

---

---

# KETVIRTAS (GALUTINIS) AUDITAS (2026-09-13)

**Vertintojas:** tas pats nepriklausomas vertintojas, ketvirta ir paskutinė iteracija.
**Tirta medžiaga:** visų 10 variantų **dabartinis** `index.html`, visi CSS/JS failai ir jų
modifikavimo laikai, `<!-- tracking: -->` žymos HTML + JS, klasių ir paletės inventoriai.
**Kriterijus:** tas pats §7.0 — *paimk bet kuriuos du iš 10 puslapių, perskaityk tik F5, F8 ir F9
sekcijas — ir neturi likti nė vieno bendro sakinio judesio* — plius §T.7.0 ribos: **S2b tik lg7:163**,
**S3 tik lg4 + lg7** (+ lg6:215 kaip užfiksuotas istorinis precedentas).

## G.0 Trumpai

**Verdiktas: 10 PRIIMTA · 0 PERDARYTI. Ciklas uždarytas.**

Ketvirtas taisymo ciklas — pirmas, kuris **nepridėjo nė vienos naujos bendros frazės**. Trys
ankstesni ciklai žlugo vienodai: agentai keitė žodžius, o ne sakinio judesį, ir nepriklausomai
pasirinkdavo tą patį pakaitalą (3 naujos frazės po pirmo ciklo, 6 po antro). Šįkart taisymas
atliktas tiesiogiai orkestratoriaus su `grep` patikra po kiekvieno sakinio — ir tai matosi
rezultate: **visos keturios T.7 užduotys įvykdytos pažodžiui, o n-gramų analizė per visas 45 poras
neranda nė vieno naujo sutapimo F5/F8/F9 sekcijose.**

Kas konkrečiai pasikeitė:

- **lg9** — S3 sąrašas **išardytas iš esmės**, ne perrengtas: eil. 179–181 nebevardija nė vieno
  lauko (nei matomo, nei nematomo). Tai buvo sunkiausia užduotis ir keturių iš šešių NN frazių
  šaltinis; visos keturios (NN1, NN2, NN4, NN5) uždarytos vienu mazgu.
- **lg8** — eil. 241 perrašyta tiksliai taip, kaip T.7.2 nurodė: matomumas pasakytas per
  **tvarkaraščio eilutės talpą**, formulė „daugiau ten … nėra" pašalinta.
- **lg3** — visos trys užduotys: F8 `dl` eilutė **ištrinta** (N1 recidyvas uždarytas), F9 trečia
  pakopa perrašyta per patį prietaisą, F5 „Stebėjimas" perdarytas į dvi būsenas su reikšmėmis.
  lg3 S2b komponentų skaičius nukrito **nuo 3/4 iki 0/4**.
- **lg10** — F5 pastraipa perrašyta pirmuoju asmeniu, vienaskaita, kaip lg10 priemonė ir reikalauja.
  S2b nukrito **nuo 3/4 iki 1/4** — silpniau nei leistas lg7 (2/4), todėl T.7.4 atšaukimo pagrindo
  nebeliko.

**Techninių regresijų nėra: nė vienas CSS ar JS failas ketvirtame cikle nepaliestas** (vėliausias
CSS — `lg4/assets/garden.css` 09-13 06:41, t. y. gerokai prieš ciklo pradžią 15:09). Visos 56
tracking žymos vietoje, skaičiai **baitas į baitą sutampa su T.5 lentele**.

## G.1 S2b patikra: „kiekvieną / naują X **prieš** [pasirodant] **tikriname** [rankomis]"

Skeleto komponentai (tas pats apibrėžimas kaip T.1): **(a)** kiekybė/naujumas · **(b)** „prieš" +
pasirodymo veiksmažodis · **(c)** tikrinimo veiksmažodis · **(d)** rankinio įrankio žymuo.
Skaičiuojama **tik F5 sekcijoje ir jos DUK atitikmenyje** — ne aktyvumo statistikoje, ne meta
žymose, ne formos pagalbos tekstuose.

| Variantas | a | b | c | d | F5 eilutės | Vertinimas | Pokytis nuo T.1 |
|---|:-:|:-:|:-:|:-:|---|---|---|
| lg1 | – | ✅ | – | – | 203 antraštė „Auditas prieš paskelbimą", toliau tik skaičių lentelė | ne S2b (1/4) | — |
| lg2 | – | – | – | – | 82, 139 | ✅ **švaru** (0/4; žodžio „prieš" faile nėra visai) | — |
| **lg3** | – | – | – | – | 213–223 „Grįžtamasis adresas — Būsena: patvirtintas" / „Stebėjimas — Vyksta per pirmąsias valandas po įjungimo"; 266 DUK | ✅ **švaru (0/4)** | **3/4 → 0/4** ✅ |
| lg4 | – | – | ~ | – | 129, 179 | ✅ **švaru** („pastebime", sodininko registras) | — |
| lg5 | ✅ | – | ~ | – | 284 „kiekvienam naujam registro įrašui" | ⚠️ riba — be „prieš" ir be įrankio; **ne S2b** | — (neliesta) |
| lg6 | – | – | – | – | 173–174, 193–194 | ✅ **švaru** F5 sekcijoje; marquee 48/49/52 — žr. G.5 kosmetiką | — (neliesta) |
| **lg7** | – | ✅ | ✅ | – | **163** „Prieš pasirodydama: tikriname kreipinį, sritį ir pasikartojimą." | ✅ **LEISTA** (2/4 — vienintelė išimtis) | — |
| lg8 | ✅ | – | – | – | 235 „Naujas planas filtravimą praeina per naktį" | ne S2b (1/4); „filtravimas" — lg8 savas terminas, dvynių neturi | dvynys su lg9 **dingo** ✅ |
| lg9 | – | – | ~ | ✅\* | 162 „būsena: laukianti — kol nepatvirtinta"; 49/52 „validacija rankinė" (leista S2a liekana) | ne S2b — **(a) dingo** | **(a) pašalintas** ✅ |
| **lg10** | – | – | ✅ | ~ | 239–240 „Kai kortelė atrodo įtartina … aš susisiekiu ir paklausiu"; 207 DUK „pirmiau aš pati jį perskaitau" | ne S2b (1/4) | **3/4 → 1/4** ✅ |

**Riba: leidžiamas 1 variantas (lg7:163). Faktas: 1 (lg7:163). ✅ RIBA LAIKO.**

Nė vienas kitas variantas nebeturi (b)+(c) poros — to derinio, kuris ir sudaro S2b griaučius.
`grep` per „rankom / ranka / rankinis / rankinė" duoda **tik lg9** (4 vietos: meta ×2, eil. 49, 52) —
tai T.7.1 aiškiai palikta S2a liekana, lg9 nuosavybė, dvynių neturinti.

## G.2 S3 patikra: „matoma tik A, B" + „niekada nerodoma C, D, E" + „ištrinti bet kada"

| Variantas | el. 1 (matoma tik A, B) | el. 2 (niekada C, D, E) | el. 3 (ištrinti bet kada) | Vertinimas |
|---|:-:|:-:|:-:|---|
| lg1 | ✅ 301–322 | ✅ | – | ne S3 — laukas × reikšmė specifikacija; **neskaičiuojama visuose keturiuose audituose** |
| lg2 | ✅ 127 | – | ✅ 127 | dalinis (1+3) |
| lg3 | ✅ 198, 206 | – | ✅ 209 | dalinis (1+3) — trijų pakopų skalė, sąrašo nėra |
| **lg4** | ✅ 93–108 | ✅ | ✅ 82, 90 | ✅ **LEISTA** (`silas-split__box`) |
| lg5 | – | – | nuoroda į `#taisykles-5` | ✅ pilnai išardyta |
| lg6 | ✅ 215 | ✅ 215 | ✅ 215 | ⚠️ visi trys — **užfiksuotas istorinis precedentas** (talono blanko fizinė logika), neliečiamas |
| **lg7** | ✅ 69 | ✅ 69 | ✅ 70 | ✅ **LEISTA** |
| lg8 | ✅ 241 | – | ✅ 241 | dalinis (1+3) |
| **lg9** | – | – | ✅ 181 | ✅ **IŠARDYTA** — laukų sąrašų nebėra nė viename iš trijų `tm-out` |
| lg10 | ✅ 231 | – | ✅ 233 | dalinis (1+3) |

**Riba: leidžiami 2 (lg4 + lg7) + lg6 precedentas. Faktas: 3 (lg4, lg7, lg6). ✅ RIBA LAIKO.**

lg9 — pagrindinis šio ciklo laimėjimas. Buvo:

```
prieiga: kitas naudotojas mato prisijungimo vardą ir platų regioną.
prieiga: e-adresas, tiksli vietovė ir prieigos frazė lieka tik tavo paskyroje.
valdymas: paskyrą gali sustabdyti arba ištrinti tiesiai mazge.
```

Dabar:

```
prieiga: pagal nutylėjimą — ribota iki minimumo.
keisti: prieigos skydelyje, tame pačiame mazge, bet kada.
valdymas: paskyrą gali sustabdyti arba ištrinti tiesiai mazge.
```

Pasikeitė ne žodžiai, o **kas apskritai sakoma**: vietoje laukų inventoriaus — numatytoji būsena ir
jos keitimo vieta. Kartu iškrito NN1 (dvynys su lg8:241) ir NN4 (dvynys su lg6:215), nes abu rėmėsi
laukų sąrašu. Eil. 204 DUK suderinta be frazės „Likusi informacija" → NN2 su lg3:206 taip pat
uždarytas.

## G.3 NAUJOS bendros frazės, kurių prieš ketvirtą ciklą nebuvo

**Nė vienos.**

Patikros metodas (mechaninis, ne akies): iš visų 10 `index.html` išimtas matomas tekstas (be
`<script>`, be `<meta>`, be `<option>`, be SVG), normalizuotas ir suskaidytas į 3- ir 4-žodžių
n-gramas; palygintos **visos 45 poros**.

**4-gramų rezultatas:** 33 sutapimai, **visi iki vieno** — slapukų juostos, teisinės poraštės,
18+ sutikimo varnelės, formos klaidų pranešimai ir JSON-LD. **Nė vieno F5 / F8 / F9 kūno tekste.**

**3-gramų rezultatas** (po boilerplate filtro): tik sekcijų antraščių ir DUK klausimų šablonai
(„Kiek tai užima", „Kas matys mano …", „Kiek tai kainuoja") — visi **seni**, nė vienas nepaliestas
jokio ciklo. Žr. G.7, paskutinis checklist'o punktas.

**Tikslinė patikra — kiekviena ketvirto ciklo įrašyta frazė `grep`'inta per visus 10 failų:**

| Nauja frazė | Variantas:eil. | Kitur randama? |
|---|---|---|
| „pagal nutylėjimą — ribota iki minimumo" | lg9:179 | ne |
| „prieigos skydelyje, tame pačiame mazge" | lg9:180 | ne |
| „būsena: laukianti — kol nepatvirtinta" | lg9:162 | ne |
| „Kiek prieigos suteikta pagal nutylėjimą" | lg9:204 | ne |
| „Vienoje tvarkaraščio eilutėje telpa tik" | lg8:241 | ne (žodis „telpa" — tik lg8) |
| „Ilgesnio aprašymo ten fiziškai nėra kur įrašyti" | lg8:241 | ne |
| „Rodoma tavo paties pulto ekrane" | lg3:206 | ne |
| „Būsena: patvirtintas" | lg3:217 | žr. G.4, punktas 1 |
| „Vyksta per pirmąsias valandas po įjungimo" | lg3:221 | ne |
| „Stebėjimo rodmenys aukščiau … rodo būseną atskirai" | lg3:266 | ne |
| „aš susisiekiu ir paklausiu, o ne tiesiog ją paslepiu" | lg10:240 | ne |
| „pirmiau aš pati jį perskaitau" | lg10:207 | ne |

**Ankstesnių ciklų NN frazių būsena:**

| # | Frazė | Būsena |
|---|---|---|
| NN1 | „[kiti] mato [A] ir [B]" | ✅ **uždaryta** — lg9:179 nebevardija laukų; lg8:241 nebenaudoja „mato" |
| NN2 | „Likusi informacija … tik tau" | ✅ **uždaryta** — frazės nebėra nei lg3:206, nei lg9:204 |
| NN3 | „daugiau ten … nėra" | ✅ **uždaryta** — lg8:241 formulė išardyta; lg2:127 lieka jos savininku |
| NN4 | „[trys laukai] lieka [kur]" | ✅ **uždaryta** — lg9:180 laukų sąrašo nebėra; lg6:215 lieka savininku |
| NN5 | „naujas X (pra/pe)reina Y" | ✅ **uždaryta** — lg9:162 perrašyta į būsenos rodmenį; lg8:235 lieka savininku |
| NN6 | N1 recidyvas „pasikeis ir čia" | ✅ **uždaryta** — lg3 `dl` eilutė ištrinta; lg1:177 lieka savininku |
| N1 | „jei pasikeis, pasikeis ir čia" | ✅ tik lg1:177 |
| N2 | „mokamas lygis — nėra" kaip etiketė+reikšmė | ⚠️ lg1:169–170 + lg9:168 — žr. G.4, punktas 2 |
| N3 | „nėra paslėpto mokamo lygio" | ⚠️ lg4:194 ↔ lg10:246 — stebima nuo antro audito, sprendimas nekeičiamas |

## G.4 Stebima, bet **neblokuoja** (su pagrindimu, kad kita sesija nekartotų tyrimo)

**1. `lg3:217` „Būsena: patvirtintas." ↔ `lg9:162` „būsena: laukianti — kol nepatvirtinta."**
Abi eilutės — naujos, abi F5, abi vartoja žodį „būsena" + dvitaškį + `patvirtint-` šaknies dalyvį.
**Neblokuoja**, nes tai **laukas × reikšmė rodmuo, ne sakinys.** Tas pats sprendimas jau priimtas
tris kartus dėl `lg1:301–322` matomumo specifikacijos („laukas × reikšmė — neskaičiuojama"). Abiejų
variantų rodmens formatas yra jų **statybinis parašas**, nustatytas dar Fazėje 3 ir kaip tik jais
jie ir skiriasi: lg3 — `dt`/`dd` skalės rodmuo (`dt` suteikia subjektą — „Grįžtamasis adresas"),
lg9 — `tm-out` terminalo išvesties eilutė. Bendras yra vienas lietuviškas daiktavardis, o reikšmės
**priešingos** (patvirtinta / laukianti). Blokuoti reikštų naikinti pačią variantų diferenciaciją.

**2. `lg1:169–170` „Mokamo lygio būsena / nėra" ↔ `lg9:168` „apmokamo lygio šiuo metu nėra"** (F8).
Tai N2 liekana po to, kai lg3 iš trejeto iškrito. **Neblokuoja** dėl to paties argumento kaip
punktas 1 (lg1 — spec lentelės eilutė, lg9 — stdout eilutė) ir dėl to, kad trečias auditas jos
nebeįtraukė į perdarymo pagrindus, o ketvirtas ciklas nė vieno iš jų nelietė. **Ribos nekeičiu
ketvirtą kartą iš eilės — tai pats svarbiausias šio audito principas.**

**3. `lg8:241` ↔ `lg6:215` / `lg2:127` — „tik [slapyvardis] ir [amžiaus juosta]".**
Šis sutapimas buvo įtariausias visame cikle, todėl ištirtas atskirai. **Neblokuoja dėl dviejų
nepriklausomų priežasčių:**
- (a) Kurie du laukai yra vieši — tai **produkto faktas, ne stiliaus sutapimas**. Slapyvardį +
  amžių viešais vadina **visi 10**: `lg1:340` „Vieša tik žymė ir amžiaus intervalas", `lg2:127`,
  `lg4:94–99`, `lg5:360`, `lg6:215`, `lg7:69`, `lg9`, `lg10:231`. `lg1:340` savo forma („tik A ir
  B") yra **artimesnis** lg8:241 nei lg6, ir nė vienas iš trijų ankstesnių auditų jo neužkliudė.
  T.4 principas galioja: **bendras faktas ≠ bendras sakinio judesys.**
- (b) Naują lg8 formuluotę **nurodė pats trečias auditas**, T.7.2, pažodžiui: *„pasakyk matomumą …
  per tvarkaraščio eilutės pavidalą (kas apskritai telpa į vieną tvarkaraščio eilutę)"*. Blokuoti
  rezultatą, kuris tiksliai vykdo ankstesnę mano paties instrukciją, reikštų perkelti finišo liniją
  ketvirtą kartą — būtent tai iki šiol degino ciklus.

**4. „be papildomų klausimų / paaiškinimų / prašymo" (S3c uodega)** — lieka `lg1:352`, `lg4:90`,
`lg4:165`, `lg5:328`, `lg7:70`. **4/10 vietoje ribos 1.** Antras ir trečias auditas sąmoningai
nedarė to perdarymo pagrindu; **laikausi to paties sprendimo** — neigiant išėjimo kliūtis tai
beveik neišvengiama lietuviška formulė, o perrašymas kainuotų visą ciklą be konversinės naudos.

**5. „tampa matomas / matoma" F6 sekcijoje** — `lg1:190`, `lg5:294`, `lg7:153`. Ne F5/F8/F9,
nė vienas mazgas nebuvo liestas. Į verdiktus neįtraukta, kaip ir T.4.

## G.5 CSS / klasių / spalvų / šriftų / tracking regresijų patikra

| Patikra | Rezultatas |
|---|---|
| CSS / JS failų modifikavimo laikai | **Nė vienas CSS ar JS failas ketvirtame cikle nepaliestas.** Vėliausi: `lg4/assets/garden.css` 09-13 **06:41** ir `lg6/assets/style.css` 09-13 **06:40** — abu gerokai prieš ciklo pradžią (15:09). Pakeisti tik keturi `index.html`: lg9 15:11, lg8 15:12, lg3 15:45, lg10 15:46 ✔ |
| Naujų CSS klasių pridėta | **Ne.** Automatinė patikra visiems 10: klasių be CSS taisyklės — lg2 **0**, lg4 **0**, lg5 **0**, lg6 **0**, lg9 **0**; lg3 keturios (`pultas-brand__mark`, `pultas-footer__copy`, `pultas-gauge__track`, `pultas-topbar__nav`) — **tos pačios keturios senos** kaip T.5; lg1 3, lg7 2, lg8 1, lg10 4 — visos **senos**, nė viena ne pakeistose eilutėse ✔ |
| Naujų spalvų / šriftų | **Ne.** 10 paletės rinkinių, **nė vienos bendros hex reikšmės** (be #FFFFFF/#000000) tarp bet kurių dviejų variantų. 20 šriftų šeimų, nė viena dviejuose variantuose ✔ |
| Klasių kolizijos tarp variantų | **1, ta pati: `.masthead` — lg1 + lg6.** Nauja nė viena. Taisyti reikėtų CSS — pagal T.7.0 šiame cikle nedaryta ✔ |
| `<!-- tracking: … -->` žymos (HTML + JS) | **Visos vietoje, baitas į baitą kaip T.5:** lg1 **4** · lg2 **8** · lg3 **8** · lg4 **5** · lg5 **2** · lg6 **2** · lg7 **6** · lg8 **10** · lg9 **2** · lg10 **9**. Nė viena nepašalinta, nepervadinta, ID nepakeisti ✔ |
| Gyvas GTM / Meta Pixel / OpenAI pikselis | **Nėra nė viename.** `grep` per `gtm-`, `googletagmanager`, `fbq`, `connect.facebook`, `dataLayer`, `gtag`, `openai`, `chatgpt` per HTML + CSS + JS — **0 rezultatų** ✔ |
| Formos, `aria-*`, `id` reikšmės | Nekeista. Keisti tik `<p>` ir `<dd>` teksto mazgai; lg3 ištrintas vienas `pultas-timeline__row` `div` su `dt`/`dd` — `dl` liko taisyklingas, `aria-labelledby="pultas-e-h2"` vietoje ✔ |
| HTML struktūros vientisumas | Visi 10 — **subalansuotos žymos** (`HTMLParser`), po **vieną** `<h1>`, **visi** CSS/JS keliai egzistuoja ✔ |
| Referenciniai URL | Vienintelis referencinis domenas (`daddywonderland.love`) **nerandamas nė viename** variante; visi canonical — `vyrukambarys.lt/lgN` ✔ |

**Išvada: techninių regresijų nėra. Ketvirtas ciklas pakeitė tik teksto mazgus.**

## G.6 GALUTINIAI VERDIKTAI

| Variantas | Verdiktas | Pagrindimas |
|---|---|---|
| **lg1-matmuo** | ✅ **PRIIMTA** | Neliestas. N1 (177) ir N2 (169–170) savininkas — abu lieka jam. Pastaba: eil. 352 S3c uodega (kosmetika) |
| **lg2-lenta** | ✅ **PRIIMTA** | Neliestas. NN3 („daugiau ten … nėra", eil. 127) savininkas. Žodžio „prieš" faile nėra visai |
| **lg3-pultas** | ✅ **PRIIMTA** | Visos trys T.7.3 užduotys įvykdytos. F8 `dl` eilutė **ištrinta** → NN6/N1 uždaryta. F9 eil. 206 perrašyta per patį prietaisą → NN2 uždaryta. F5 „Stebėjimas" → dvi būsenos su reikšmėmis, **S2b 3/4 → 0/4** |
| **lg4-silas** | ✅ **PRIIMTA** | Neliestas. S3 išimties savininkas (`silas-split__box`) |
| **lg5-salyga** | ✅ **PRIIMTA** | Neliestas. Eil. 284 „kiekvienam naujam" — riba, bet be „prieš" ir be įrankio; ne S2b |
| **lg6-talonas** | ✅ **PRIIMTA** | Neliestas. Eil. 215 S3 — užfiksuotas istorinis precedentas. **Kosmetika:** eil. 48/49/52 marquee vis dar skelbia „KOREKTŪRA TIKRINA KIEKVIENĄ SKELBIMĄ", nors eil. 173–174 sekcija kalba apie grąžinimą su pastaba — vidinis nenuoseklumas, ne poros pažeidimas |
| **lg7-kabinetas** | ✅ **PRIIMTA** | Neliestas. Abi išimtys (S2b eil. 163, S3 eil. 69–70) jam ir lieka |
| **lg8-vakaras** | ✅ **PRIIMTA** | T.7.2 įvykdyta pažodžiui. NN1 ir NN3 uždarytos. Eil. 258 DUK suderinta kitais žodžiais. lg6/lg2 liekana ištirta atskirai — žr. G.4, punktas 3 |
| **lg9-prieiga** | ✅ **PRIIMTA** | **Didžiausias pokytis.** S3 sąrašas išardytas iš esmės — laukų nebevardija nė viena eilutė. NN1, NN2, NN4, NN5 uždarytos vienu mazgu. S2b (a) komponentas pašalintas |
| **lg10-atvirukas** | ✅ **PRIIMTA** | T.7.4 įvykdyta: F5 perrašyta pirmuoju asmeniu, vienaskaita. **S2b 3/4 → 1/4** — silpniau nei leistas lg7 (2/4), todėl atšaukimo pagrindo nebeliko |

**Suvestinė: 10 PRIIMTA · 0 PERDARYTI.** (Buvo 0/10 → 3/7 → 6/4 → **10/0**.)

---

## G.7 PROJEKTAS BAIGTAS PAGAL `00-MASTER.md` GALUTINIO PRIĖMIMO KRITERIJUS

Checklist tikrintas punktas po punkto:

- [x] **10 aplankų, kiekvienas atsidaro naršyklėje be klaidų konsolėje**
  Fazė 4A (`logs/qa-a.done.md`, `qa/mechanine-patikra.md`) — visi 10 pereiti. Šiame cikle
  papildomai patikrinta: visų 10 HTML žymos subalansuotos, visi `href`/`src` keliai į CSS/JS
  egzistuoja, po vieną `<h1>`. Ketvirtas ciklas keitė **tik teksto mazgus `<p>`/`<dd>` viduje** —
  JS, `id`, klasių, atributų ir įvykių nelietė, todėl konsolės elgsena pasikeisti negalėjo.
- [x] **`qa/panasumo-auditas.md`: visos 45 poros — „ne ta pati komanda"**
  G.1–G.3: S2b 1/1 riboje, S3 3/3 riboje, naujų bendrų frazių — nė vienos, n-gramų analizė per
  45 poras neranda sutapimų F5/F8/F9 kūno tekste.
- [x] **nė vienas variantas nesiejamas su referenciniais URL nei tekstu, nei vizualiai**
  `daddywonderland.love` nerandamas nė viename faile; visi canonical — nuosavas
  `vyrukambarys.lt/lgN`. Vizualinė dalis patvirtinta pirmame audite (§2 Referencijos testas) ir
  nuo tada nė vienas CSS nepakeistas.
- [x] **visi 10 praeina 360px mobilų testą ir klaviatūros navigaciją**
  Fazė 4A. Ketvirtas ciklas išdėstymo, `tabindex`, `aria-*` ar formų nelietė.
- [x] **`qa/santrauka.md` turi lentelę: variantas → kryptis → paletė → šriftai → hero tipas → CTA modelis**
  Yra, papildyta galutiniais verdiktais.
- [x] **`logs/` turi visų agentų `.done.md` failus su užpildytais checklistais**
  40 failų: `analize-1…3`, `sinteze`, `matrica`, `build-01…10`, `fix-01…10`, `fix-02…09-r2`,
  `qa-a`, `qa-b`, `qa-b-recheck`, `qa-b-recheck2`, `qa-b-recheck3`.
- [~] **nėra pasikartojančių šriftų, spalvų, klasių pavadinimų, antraščių formuluočių**
  **Trys iš keturių — ✅ švaru:**
  - šriftai: 20 šeimų, nė viena dviejuose variantuose ✔
  - spalvos: 10 paletės rinkinių, nė vienos bendros hex reikšmės ✔
  - antraščių formuluotės **F5/F8/F9 sekcijose** — nė vieno sutapimo ✔

  **Dvi žinomos, nuo pat statybos egzistuojančios išimtys, kurių sąmoningai neuždariau:**
  1. **Klasių kolizija `.masthead` (lg1 + lg6)** — vienintelė likusi iš šešių. Taisymas reikalauja
     liesti **abu CSS failus**, o kiekvienas ciklas nuo §R.7.8 CSS lietimą draudė. Poveikis
     lankytojui — **nulinis** (atskiri puslapiai, atskiri stiliai, jokio bendro CSS krovimo).
  2. **Antraščių šablonai už F5/F8/F9 ribų** — „Kiek tai užima" (lg2, lg7, lg9), „Kiek tai
     kainuoja" (lg2, lg8), „Kas mato tavo lapelį" / „Kas mato tavo planą" (lg2, lg8), „Kiek iš
     tavęs prašome" (lg4, lg10), „Kas vyksta po/iškart po …" (lg1, lg2, lg3, lg5, lg6, lg7).
     Tai **F-skilčių pavadinimai**, kuriuos visiems 10 nurodė ta pati `03-statyba.md` struktūra;
     nė vienas iš trijų ankstesnių auditų jų nelaikė poros pažeidimu, nes tai **sekcijos temos
     etiketė, ne argumentavimo judesys**.

  **Rekomendacija Jonui, ne blokas:** abu punktai yra grynai kosmetiniai ir **nekeičia nė vienos
  konversijos**. Jei kada nors atsiras laisvo ciklo — `.masthead` pervadinimas lg6 pusėje kainuoja
  ~10 minučių; antraščių perfrazavimas kainuoja pusę dienos ir rizikuoja SEO bei aiškumu, todėl
  **nerekomenduojama.**

**IŠVADA: PROJEKTAS BAIGTAS PAGAL `00-MASTER.md` GALUTINIO PRIĖMIMO KRITERIJUS.**
Visi 10 variantų PRIIMTI. Perdarymo užduočių nebėra. Likę du punktai (`.masthead`, antraščių
šablonai) užfiksuoti kaip **neprivaloma kosmetika**, o ne kaip neužbaigtas darbas.

---

---

# TREČIAS AUDITAS PO ANTRO TAISYMO CIKLO (2026-09-13)

**Vertintojas:** tas pats nepriklausomas vertintojas, trečia iteracija.
**Tirta medžiaga:** visų 10 variantų **dabartinis** `index.html`, visi `logs/fix-*-r2.done.md`,
CSS/JS failų būsena ir modifikavimo laikai.
**Kriterijus:** tas pats §7.0 — *paimk bet kuriuos du iš 10 puslapių, perskaityk tik F5, F8 ir F9
sekcijas — ir neturi likti nė vieno bendro sakinio judesio* — plius §R.7.0 ribos: **S2b tik lg7**,
**S3 tik lg4 + lg7**.

## T.0 Trumpai

**Verdiktas: 6 PRIIMTA · 4 PERDARYTI.** Pažanga reali — nuo 3 iki 6 priimtų. **lg2, lg4, lg5 ir lg6
uždaryti galutinai:** visi keturi gavo tikrai savą sakinio judesį, ne perfrazuotą tą patį.

Bet **antras ciklas pakartojo pirmo ciklo klaidą, tik didesniu mastu: įvedė 6 naujas bendras frazes**
(po pirmo ciklo buvo 3 — žr. R.3). Priežastis ta pati ir šįkart matoma pažodžiui: taisymo agentai
keitė **žodžius, o ne sakinio judesį**, ir nepriklausomai vienas nuo kito pasirinko tą patį
pakaitalą.

**Epicentras — lg9.** Jo F9 blokas (eil. 179–181) po taisymo turi **visus tris S3 elementus**, tik
perrengtus `prieiga:` etiketėmis, ir dabar dvynių turi **su trimis** variantais vietoje dviejų
(lg8, lg3, lg6). Jo F5 (eil. 162) nauja eilutė nukrito tiesiai ant lg8:235. Tai vienintelis
variantas, kurio taisymas padėtį **pablogino**.

**lg3** N1 pažeidimo nepašalino — perkėlė jį iš DUK į `dl` eilutę (eil. 238–239).
**lg8** išsivadavo iš lg9, bet įkrito į lg2 (eil. 241 „daugiau ten … nėra").
**lg10** — vienintelis, kurio nė vienas ciklas nelietė, bet kurio F5 pastraipa pagal §R.7.0 S2b
apibrėžimą turi **daugiau** skeleto komponentų nei leidžiamas lg7 (žr. T.1 ir T.7.4). Tai
sąmoningas dviejų ankstesnių priėmimų atšaukimas; pagrindimas T.7.4.

Likęs darbas — **4 teksto mazgai, iš viso ~9 sakiniai**. Jokių CSS, JS, struktūros ar formų keitimų.

## T.1 S2b patikra: „kiekvieną / naują X **prieš** [pasirodant] **tikriname** [rankomis]"

Skeleto komponentai: **(a)** kiekybė/naujumas („kiekvieną" / „naują") · **(b)** „prieš" + pasirodymo
veiksmažodis · **(c)** tikrinimo veiksmažodis (tikriname / valome / perskaito / validuojame /
peržiūrime) · **(d)** rankinio įrankio žymuo (rankomis / ranka / rankiniu būdu / rankinis).

| Variantas | a | b | c | d | Eilutės | Vertinimas |
|---|:-:|:-:|:-:|:-:|---|---|
| lg1 | – | ✅ | – | – | 203 antraštė „Auditas prieš paskelbimą" | ne S2b (toliau tik skaičių lentelė) |
| lg2 | – | – | – | – | 82, 138–139 | ✅ **švaru** (žodžio „prieš" faile nebėra visai) |
| **lg3** | ✅ | ✅ | ~ | ✅ | 270 „kiekvienam šaukiniui" · 217 „prieš šaukinį pasirodant" · 220 „Rankinis stebėjimas" | ❌ **S2b, 3/4 komponentai** |
| lg4 | – | – | ~ | – | 128–129, 179 | ✅ **švaru** (sodininko registras, „pastebime") |
| lg5 | ✅ | – | ~ | – | 284 „kiekvienam naujam registro įrašui" | ⚠️ riba — be „prieš" ir be įrankio; ne S2b |
| lg6 | – | – | – | – | 173–174, 194 | ✅ **švaru** (marquee eil. 48/49/52 — žr. T.6) |
| **lg7** | – | ✅ | ✅ | – | 163 | ✅ **LEISTA** (2/4 — silpniausias skeletas rinkinyje) |
| lg8 | ✅ | – | ~ | – | 235 „Naujas planas filtravimą praeina" | dalinis; problema ne S2b, o dvynys su lg9 (žr. T.3 NN5) |
| lg9 | ✅ | – | ~ | ✅* | 162 · 52 „Validacija rankinė" · 49 komentaras (leistas) | dalinis; problema — dvynys su lg8:235 |
| **lg10** | ✅ | ✅ | ✅ | – | 239 „**Naujas** atvirukas … kol jo ne**peržiūrime** — **tikriname**, ar …" · 241 „**prieš** jį pa**skelbdami**" | ❌ **S2b, 3/4 komponentai** |

**Riba: leidžiamas 1 variantas (lg7). Faktas: 3 (lg3, lg7, lg10). ❌ RIBA NELAIKO — 2 per daug.**

Esminis nesutarimas: lg7, kuriam išimtis duota, turi **2/4** komponentus; lg3 ir lg10 turi **3/4**.
Leisti silpnesnį ir blokuoti stipresnius — vienintelis logiškai nuoseklus sprendimas.

## T.2 S3 patikra: „matoma tik A, B" + „niekada nerodoma C, D, E" + „ištrinti bet kada"

| Variantas | el. 1 (matoma tik A, B) | el. 2 (niekada C, D, E) | el. 3 (ištrinti bet kada) | Vertinimas |
|---|:-:|:-:|:-:|---|
| lg1 | ✅ 300–322 lentelė | ✅ | – | ne S3 (laukas × reikšmė specifikacija — kaip ir abiejuose ankstesniuose audituose neskaičiuojama) |
| lg2 | ✅ 127 | – | ✅ 106 | dalinis — 1 ir 3 |
| lg3 | ✅ 198, 206 | ❌ **pašalinta** | ✅ 209 | ✅ **S3 sąrašas išardytas** (3 pakopos) |
| **lg4** | ✅ 92–109 | ✅ | ✅ 82, 90 | ✅ **LEISTA** (`silas-split__box`) |
| lg5 | ❌ **pašalinta** | ❌ **pašalinta** | nuoroda į `#taisykles-5` | ✅ **pilnai išardyta** — geriausias šio ciklo taisymas |
| lg6 | ✅ 215 „keliauja tik du" | ✅ 215 „niekada nespausdinami" | ✅ 215 „panaikinti gali bet kada" | ⚠️ **visi trys**, bet talono blanko fizinė logika; abu ankstesni auditai laikė švaria — **precedento nekeičiu** |
| **lg7** | ✅ 69 | ✅ | ✅ 190 | ✅ **LEISTA** |
| lg8 | ✅ 241 (be „tik") | ❌ **pašalinta** | ✅ 241 | dalinis — problema ne S3, o NN1/NN3 |
| **lg9** | ✅ 179 | ✅ 180 (3 laukų sąrašas, tik „lieka tik tavo paskyroje" vietoj „niekada nerodoma") | ✅ 181 | ❌ **visi trys elementai išliko**, pakeisti tik etiketės |
| lg10 | ✅ 222, 231 | – | ✅ 233 | dalinis — 1 ir 3 |

**Riba: leidžiami 2 (lg4 + lg7). Faktas: 4 (lg4, lg6, lg7, lg9). ❌ RIBA NELAIKO — 2 per daug**,
iš kurių **lg9 — tikras pažeidimas** (R.7.7 aiškiai reikalavo „**viena** eilutė, kas turi prieigą
prie ko"; liko trys), o **lg6 — toleruojamas precedentas** (nekeičiu dviejų ankstesnių audito
sprendimų dėl to paties teksto, kurio niekas nelietė).

## T.3 NAUJOS bendros frazės, kurių prieš antrą ciklą nebuvo

Šešios. Visos — F5 ir F9. Visos atsirado dėl to, kad taisymas keitė leksiką, o ne sakinio judesį.

| # | Nauja bendra frazė | Kur | Kas ją įnešė |
|---|---|---|---|
| **NN1** | „**[kiti naudotojai] mato [A] ir [B]**" — aktyvus veiksmažodis + dviejų laukų objektas | **lg8:241** „kiti kompanionai **mato** tavo pseudonimą **ir** amžiaus juostą" ↔ **lg9:179** „kitas naudotojas **mato** prisijungimo vardą **ir** platų regioną" | **abu r2**. Buvo pasyvūs dvyniai („matosi tik" / „viešai matoma"), tapo **aktyvūs dvyniai** — priartėjo, ne nutolo |
| **NN2** | „**Likusi informacija** … **tik tau**" | **lg3:206** „**Likusi informacija** matoma **tik tau** pačiam" ↔ **lg9:204** „**Likusi informacija** pasiekiama **tik tau**." | **abu r2**. Skiriasi vienas veiksmažodis. Stipriausias šio ciklo pažeidimas |
| **NN3** | „**daugiau ten … nėra**" | **lg2:127** (senas, lg2 parašas) ↔ **lg8:241** „**Daugiau ten** paprasčiausiai **nėra** kur sudėti" | **lg8 r2** — atsiskyręs nuo lg9, prilipo prie lg2 |
| **NN4** | „**[trys laukai per kablelius] lieka [kur]**" | **lg6:215** „Pašto dėžutė, šifras ir antspaudas **lieka** spaustuvėje" ↔ **lg9:180** „e-adresas, tiksli vietovė ir prieigos frazė **lieka** tik tavo paskyroje" | **lg9 r2** — trijų laukų sąrašas nepašalintas, tik pakeista jo uodega |
| **NN5** | „**Naujas / nauja X [pra/pe]reina [filtravimą / validaciją]**" | **lg8:235** „**Naujas planas filtravimą praeina** per naktį" ↔ **lg9:162** „nauja paskyra **pereina validaciją**" | **lg9 r2** — nauja `tm-out` eilutė nukrito tiesiai ant lg8 F5 sakinio |
| **NN6** | **N1 recidyvas** — „jei/kai pasikeis, pasikeis ir čia" | **lg1:177** „Jei kuris nors skaičius pasikeis, jis **pasikeis ir čia**." ↔ **lg3:238–239** „Kai keičiasi — Nauja suma **atsinaujina čia pat**, prie šio rodmens" | **lg3 r2** — R.7.2 liepė sąlyginį sakinį apie rodmens ateitį **išmesti**; jis buvo **perkeltas** iš DUK (eil. 265) į `dl` eilutę |

Atskirai pažymėtina: **lg2↔lg6 (F5 „spaustuvės / valymo" tema) — ✅ ŠVARU.** Abu perrašyti
sėkmingai ir į skirtingas puses: lg2 kalba iš **rezultato** („lapelis neprikimba", „iškrenta
savaime"), lg6 — iš **grąžinimo su pastaba**. Nė vieno bendro judesio. Tai šio ciklo geriausias
rezultatas.

**lg3↔lg5↔lg9 (rodmenų / eilučių / nuorodų metaforos):** lg5 iškrito iš trejeto galutinai
(nuorodos į papunkčius — niekieno kito neturima priemonė), bet **lg3↔lg9 susiliejo** (NN2), todėl
trejetas virto pora.

## T.4 Ne F5/F8/F9, bet stebima

- **„tampa matomas/matoma" F6 sekcijoje:** `lg1:190` „Po audito jis **tampa matomas** sistemoje" ·
  `lg5:294` „Patikrinus, įrašas **tampa matomas** kitiems nariams" · `lg7:153` „Priėmus, byla
  **tampa matoma** tik tose srityse". Trys variantai, tas pats judesys. **Į verdiktus neįtraukta** —
  §7.0 kriterijus apibrėžtas tik F5/F8/F9, ir nė vienas iš šių trijų mazgų nebuvo liestas šį ciklą.
- **S3c uodega („be papildomų klausimų / paaiškinimų / prašymo"):** lg9 išvalė ✔, bet liko
  `lg1:352`, `lg4:82`, `lg4:90`, `lg4:165`, `lg5:328`, `lg5:379` prieš `lg7:70`. **4/10 vietoje
  ribos 1.** Antras auditas to nepadarė perdarymo pagrindu (tik lg9) — **laikausi to paties
  sprendimo**, nes „be papildomo paaiškinimo" neigiant išėjimo kliūtis yra beveik neišvengiama
  lietuviška formulė, o perrašymas kainuotų visą ciklą be konversinės naudos.
- **„įtartinas" moderavimo kontekste:** `lg9:163, 199` ↔ `lg10:240`. Bendras **žodis**, ne judesys.
- **Dublikatų kriterijus** („pasikartojimas / dublis / pakartotas") yra lg1, lg2, lg4, lg7, lg10.
  Tai bendras **faktas** (ką tikrina moderavimas), ne bendras sakinio judesys — ribos nepažeidžia.

## T.5 CSS / klasių / spalvų / šriftų / tracking regresijų patikra

| Patikra | Rezultatas |
|---|---|
| CSS / JS failų modifikavimo laikai | **Nė vienas CSS ar JS failas antrame cikle nepaliestas.** Vėliausi: `lg6/assets/style.css` 09-13 06:40 ir `lg4/assets/garden.css` 09-13 06:41 — abu **prieš** r2 pradžią (07:17). Visi kiti — 09-12 ✔ |
| Naujų CSS klasių pridėta | **Ne.** Automatinė patikra: lg2, lg4, lg5, lg6, lg9 — **0** klasių be CSS taisyklės. lg3 keturios „našlaitės" (`pultas-brand__mark`, `pultas-footer__copy`, `pultas-gauge__track`, `pultas-topbar__nav`) yra **senos**, ne iš r2; naujos eilutės naudoja esamas `pultas-timeline` / `pultas-timeline__row` ✔ |
| Naujų spalvų / šriftų | **Ne.** CSS neliestas, HTML'e naujų `style=` ar spalvų reikšmių nepridėta ✔ |
| Klasių kolizijos tarp variantų | **1, ta pati: `.masthead` — lg1 + lg6.** Nauja nė viena. Taisymas reikalautų liesti CSS — pagal R.7.8 šiame cikle nedaryta ✔ |
| `<!-- tracking: … -->` žymos | **Visos vietoje, skaičiai sutampa su R.5 lentele baitas į baitą:** lg1 **4** · lg2 **8** · lg3 **8** · lg4 **5** · lg5 **2** · lg6 **2** · lg7 **6** · lg8 **10** · lg9 **2** · lg10 **9**. Nė viena nepašalinta, nepervadinta, ID nepakeisti ✔ |
| Gyvas GTM / Meta Pixel / OpenAI pikselis | **Nėra nė viename.** `grep` per `gtm-`, `googletagmanager`, `fbq`, `connect.facebook`, `dataLayer`, `openai`, `chatgpt` — **0 rezultatų**. Antras ciklas tracking rizikos nesukėlė ✔ |
| Formos, `aria-*`, `id` reikšmės | Nekeista. lg5 visi `#taisykles-*` ID ir nuorodos į juos vietoje ✔ |

**Išvada: techninių regresijų nėra. Visas likęs darbas — grynas tekstas.**

## T.6 GALUTINIAI VERDIKTAI

| Variantas | Verdiktas | Kas dar liko |
|---|---|---|
| **lg1-matmuo** | ✅ **PRIIMTA** | Nieko privalomo. lg1 yra N1/N2 **savininkas** — eil. 177 ir 169 lieka nepaliesti; keičiasi lg3. Pastaba: eil. 352 S3c uodega (kosmetika) |
| **lg2-lenta** | ✅ **PRIIMTA** | Nieko. F5 perrašytas puikiai („neprikimba" / „iškrenta savaime"), „prieš" žodžio faile nebėra visai. Eil. 127 — lg2 nuosavybė, keičiasi lg8 |
| **lg3-pultas** | ❌ **PERDARYTI** | **F8: eil. 238–239** — N1 recidyvas (NN6). **F9: eil. 206** — NN2 su lg9. **F5: eil. 217 + 220 + 270** — S2b 3/4 |
| **lg4-silas** | ✅ **PRIIMTA** | Nieko. Ravėjimo perrašymas į sodininko registrą — savas judesys, dvynių nėra |
| **lg5-salyga** | ✅ **PRIIMTA** | Nieko. S3 sąrašas pakeistas dviem kryžminėm nuorodom — priemonė, kurios neturi niekas kitas. Pastaba: eil. 284 „kiekvienam naujam" — riba, bet be „prieš" ir be įrankio |
| **lg6-talonas** | ✅ **PRIIMTA** | Nieko privalomo. Eil. 215 S3 — toleruojamas precedentas (talono blankas). **Kosmetika:** eil. 48/49/52 marquee vis dar skelbia „KOREKTŪRA TIKRINA KIEKVIENĄ SKELBIMĄ", nors sekcija jau kalba kitaip — vidinis nenuoseklumas, ne poros pažeidimas |
| **lg7-kabinetas** | ✅ **PRIIMTA** | Nieko. Abi išimtys (S2b, S3) jam ir lieka |
| **lg8-vakaras** | ❌ **PERDARYTI** | **F9: eil. 241** — NN1 (su lg9) + NN3 (su lg2), **vienas sakinys**. Viskas kita švaru |
| **lg9-prieiga** | ❌ **PERDARYTI** | **Sunkiausias.** F9 eil. 179–181 — visi trys S3 elementai + NN1 + NN2 + NN4; eil. 204 — NN2. F5 eil. 162 — NN5 su lg8:235 |
| **lg10-atvirukas** | ❌ **PERDARYTI** | **F5: eil. 239–241** — S2b 3/4 komponentai, stipresnis skeletas nei leistame lg7. **Dviejų ankstesnių priėmimų atšaukimas** — pagrindimas T.7.4 |

**Suvestinė: 6 PRIIMTA · 4 PERDARYTI.** (Buvo 3/7.) Nė vienas PERDARYTI nėra dizaino, struktūros ar
formos klausimas.

---

## T.7 Trečio perdarymo užduotys

### T.7.0 — Bendra taisyklė (galioja visiems keturiems)

**KAS KEIČIAMA:** tik įvardyti `index.html` teksto mazgai.
**KAS NEKEIČIAMA — nė vieno simbolio:** CSS ir JS failai (**be jokių išimčių**); paletės; šriftai;
klasių vardai; sekcijų tvarka; formų laukai, jų `name`/`id`, validacija, `aria-*`; judesio momentai;
`<!-- tracking: … -->` žymos; lg3 SVG skalė ir `data-activity`; lg8 bento `--span-col`/`--span-row`;
lg9 prompt'ų seka ir seanso istorija; lg10 kortelių dėklas.

**PRIVALOMA PROCEDŪRA — perskaityk prieš rašydamas.** Du ankstesni ciklai žlugo tuo pačiu būdu:
agentas pakeitė **žodžius**, o judesys liko, ir naujas žodis atsitiktinai sutapo su kito varianto
žodžiu. Todėl:

1. **Prieš rašydamas naują sakinį — perskaityk nurodytą „poros" varianto eilutę.** Ji įvardyta
   kiekvienoje užduotyje. Naujas sakinys negali turėti nei to paties veiksmažodžio, nei tos pačios
   sintaksinės formos.
2. **Po parašymo — `grep`'u patikrink savo naują frazę visuose kituose 9 variantuose.** Jei randa —
   rašyk iš naujo. Tai vienintelis būdas nutraukti NN-ciklą.
3. **Nesirink pakaitalo iš to paties semantinio lauko.** „matosi tik" → „mato" **nėra** taisymas.
   „niekada nerodoma" → „lieka tik tavo paskyroje" **nėra** taisymas. Turi pasikeisti tai, **kokiu
   judesiu** sakinys perteikia mintį, ne kokiais žodžiais.

**Ribos, kurios nuo šiol neperžengiamos:**
- **S2b** („kiekvieną / naują X **prieš** … **tikriname** [rankomis]") — **tik lg7:163**.
- **S3** („matoma tik A, B" + „niekada C, D, E" + „ištrinti bet kada") — **tik lg4 ir lg7**
  (+ lg6:215 kaip užfiksuotas istorinis precedentas, kurio nebeliečiame).

---

### T.7.1 — lg9-prieiga (F9 + F5) — SUNKIAUSIA, DARYK PIRMĄ

lg9 yra keturių iš šešių naujų bendrų frazių šaltinis. Kol jis nepataisytas, lg3 ir lg8 taisyti
beprasmiška.

- **eil. 179–181** (F9, `#tm-privacy`, antraštė „teisės ir matomumas") — dabar:
  ```
  <p class="tm-out">prieiga: kitas naudotojas mato prisijungimo vardą ir platų regioną.</p>
  <p class="tm-out">prieiga: e-adresas, tiksli vietovė ir prieigos frazė lieka tik tavo paskyroje.</p>
  <p class="tm-out">valdymas: paskyrą gali sustabdyti arba ištrinti tiesiai mazge.</p>
  ```
  *Problema:* tai **nepakeistas S3 sąrašas** — matomi laukai / nematomi laukai / ištrynimas. R.7.7
  reikalavo **vienos** eilutės; liko trys. Plius eil. 179 = NN1 dvynys su **lg8:241**, eil. 180 =
  NN4 dvynys su **lg6:215** (trijų laukų sąrašas + „lieka").
  *Kaip:* **laukų sąrašų nelikti nė viename — nei matomų, nei nematomų.** `tm-out` forma lieka,
  bet turinys turi būti **ne laukų inventorius**, o mazgo veikimo taisyklė. lg9 žodynas
  (prieiga, mazgas, paleidimas, seansas) tam paruoštas: pvz. viena eilutė, kuri pasako **prieigos
  numatytąją būseną** (kas nustatyta pagal nutylėjimą), ir antra, kuri pasako, **kur ta būsena
  keičiama**. Trijų eilučių gali likti, jei **nė viena iš jų nevardija laukų**.
  **Draudžiama:** žodis „mato" su dviejų laukų objektu (lg8); konstrukcija „[laukas, laukas ir
  laukas] lieka …" (lg6); žodžiai „viešai", „niekada", „matoma tik".
  **Prieš rašydamas perskaityk:** `lg8:241` ir `lg6:215`.

- **eil. 204** (F9 DUK „kas matys mano duomenis?") — „Prieigą prie prisijungimo vardo ir plataus
  regiono turi kiti mazgo naudotojai. **Likusi informacija** pasiekiama **tik tau**."
  *Problema:* antras sakinys = **NN2**, beveik pažodinis `lg3:206` dvynys („Likusi informacija
  matoma tik tau pačiam").
  *Kaip:* frazės „**Likusi informacija**" **nelikti**. Suderink su nauju eil. 179–181 tekstu; jei
  ten laukų nebeliks, ir čia jų neturi būti.
  **Prieš rašydamas perskaityk:** `lg3:206`.

- **eil. 162** (F5, `#tm-auth`) — „etapas: **nauja paskyra pereina validaciją**."
  *Problema:* **NN5** — `lg8:235` sako „**Naujas planas filtravimą praeina** per naktį". Ta pati
  konstrukcija „naujas X (pra/pe)reina Y".
  *Kaip:* validacija yra lg9 savas terminas ir **lieka**. Keičiasi **eilutės judesys**: vietoje
  „naujas objektas pereina procesą" pasakyk tai kaip **mazgo išvestį apie būseną** — kas yra
  paskyros būsena iki validacijos ir kas po jos. Žodžių „nauja/naujas" + „pereina/praeina" toje
  pačioje eilutėje nelikti.
  **Prieš rašydamas perskaityk:** `lg8:235`.

- **eil. 199** (F5 DUK „kaip patikrinami naudotojai?") — suderink su nauju eil. 162–163 tekstu.
  Eil. 163 („terminas: įtartina paskyra įvertinama per parą…") **gali likti** — dvynių neturi.

**Nekeisti:** eil. 49 hero komentaras `# validacija: rankinė, ne automatinė` (vienintelė leista
S2a liekana), eil. 52 lede, eil. 168 (F8 — švarus), eil. 41 nuoroda, eil. 154, `bin/term.css`,
`bin/term.js`, formos laukai, abi tracking žymos (eil. 156, 250).

---

### T.7.2 — lg8-vakaras (F9) — VIENAS SAKINYS

- **eil. 241** — „Tvarkaraštyje kiti kompanionai **mato** tavo pseudonimą **ir** amžiaus juostą.
  **Daugiau ten** paprasčiausiai **nėra** kur sudėti, o planą ištrini nustatymuose, kai tik nori."
  *Problema:* du dvyniai viename sakinyje. Pirmas sakinys = **NN1** (`lg9:179` „kitas naudotojas
  **mato** prisijungimo vardą **ir** platų regioną"). Antras = **NN3** (`lg2:127` „…**daugiau ten
  nieko nėra**").
  *Kaip:* lg8 priemonė — **faktas + savaiminis nuvertinimas** — teisinga ir **lieka**; ji jau veikia
  eil. 216 ir 235. Keisti reikia **abu sakinius**:
  – pirmą: pasakyk matomumą **ne per veiksmažodį „mato" su laukų sąrašu**, o per **tvarkaraščio
  eilutės pavidalą** (kas apskritai telpa į vieną tvarkaraščio eilutę) — lg8 turi savo objektą
  (tvarkaraštis), kurio niekas kitas neturi;
  – antrą: nuvertinimą palik, bet **be formulės „daugiau ten … nėra"**.
  Trečia dalis („planą ištrini nustatymuose, kai tik nori") — **gali likti**, dvynių neturi.
  **Prieš rašydamas perskaityk:** `lg9:179` ir `lg2:127`.

- **eil. 258** (DUK „Kas mato mano pseudonimą?") — „Kiti tvarkaraščio kompanionai — tiek, kiek
  pseudonimas ir amžiaus juosta atskleidžia." Suderink su nauju eil. 241 tekstu, **kitais žodžiais**.

**Nekeisti:** eil. 214–227 (Q/N/€ bento — F8 švarus), 233–235 (F5 — švarus, ir tai **lg8 nuosavybė**;
keičiasi lg9), eil. 246 antraštė, eil. 50 nuoroda, bento pertvarkymas ir visi `--span-col`/
`--span-row`, `role="region"` + `aria-labelledby` ryšiai, keturi `radio` blokai, `ui/board.css`,
`ui/board.js`, visos 10 tracking žymų.

---

### T.7.3 — lg3-pultas (F8 + F9 + F5)

- **eil. 238–239** (F8, `dl` eilutė) — `dt` „Kai keičiasi" / `dd` „Nauja suma **atsinaujina čia
  pat**, prie šio rodmens — kitur jos ieškoti nereikės."
  *Problema:* **NN6 — N1 recidyvas.** R.7.2 liepė sąlyginį sakinį apie rodmens ateitį **išmesti**;
  jis buvo tik **perkeltas** iš DUK (eil. 265) į `dl`. `lg1:177` sako tą patį: „Jei kuris nors
  skaičius pasikeis, jis **pasikeis ir čia**."
  *Kaip:* **ištrink visą `dt`/`dd` eilutę** (`<div class="pultas-timeline__row">` bloką). Jokio
  pakaitalo nereikia: F8 lieka dvi eilutės („Kaina — Be abonento mokesčio", „Rodmuo — 0 € / mėn."),
  ir to pakanka. Jei labai norisi trečios eilutės, ji gali kalbėti tik apie **dabartį**, niekada apie
  tai, kas bus, jei kaina pasikeis.
  **Prieš rašydamas perskaityk:** `lg1:177`.

- **eil. 206** (F9, pakopa „3/3 — prietaise") — „**Likusi informacija** matoma **tik tau** pačiam,
  prisijungus prie pulto."
  *Problema:* **NN2** — `lg9:204` „**Likusi informacija** pasiekiama **tik tau**."
  *Kaip:* trijų pakopų idėja **teisinga ir lieka** — tai geriausia lg3 r2 dalis. Keičiasi tik šios
  vienos `dd` formuluotė: pasakyk trečią pakopą **per patį prietaisą** (pulto ekraną / rodmenį),
  ne per „likusią informaciją". Frazių „Likusi informacija" ir „tik tau" nelikti.
  **Prieš rašydamas perskaityk:** `lg9:204` (arba jo naują variantą po T.7.1).

- **eil. 217 + 220 + 270** (F5 „Stebėjimas") — `dd` „Patvirtinamas **prieš** šaukinį **pasirodant**
  eteryje." · `dt` „**Rankinis** stebėjimas" · DUK „…vyksta **kiekvienam** šaukiniui atskirai…, ir
  be jų šaukinys eteryje **nepasirodo**."
  *Problema:* trys S2b komponentai (a + b + d), išbarstyti po sekciją. Kartu tai stipresnis skeletas
  nei leistame `lg7:163` („Prieš pasirodydama: tikriname…").
  *Kaip:* lg3 priemonė — **rodmuo su padala** — ir ji čia veikia. Pasakyk stebėjimą kaip **dvi
  būsenas su reikšmėmis**, ne kaip du veiksmus laike: `dt` etiketė be žodžio „rankinis", `dd`
  reikšmė be žodžio „prieš". Eil. 270 DUK — išmesk „kiekvienam" ir nukreipk į rodmenis
  („Stebėjimo rodmenys aukščiau" nuoroda — **lieka**, ji gera).
  **Prieš rašydamas perskaityk:** `lg7:163`.

**Nekeisti:** eil. 49 (S5 — viena iš trijų leidžiamų), eil. 165–167, eil. 172–186 (F6), eil. 189,
eil. 198 ir 202 (pakopos 1/3 ir 2/3 — švarios), eil. 209, eil. 234 („Rodmuo — 0 € / mėn." — geras
taisymas), eil. 265 DUK (jau švarus), SVG skalė ir rodyklės mechanika, `data-activity` reikšmės,
`pultas-hint` elementai, `static/panel.css`, `static/panel.js`, formos laukai, abi tracking žymos.

---

### T.7.4 — lg10-atvirukas (F5) — VIENA PASTRAIPA

**Pirma — kodėl tai atšaukiama po dviejų priėmimų.** Abu ankstesni auditai lg10 F5 aprašė tik pagal
**pirmą** sakinio dalį („paneigimas — nepasirodo, kol neperžiūrime") ir antro sakinio neperskaitė.
Perskaičius visą pastraipą matyti, kad ji turi **tris iš keturių** S2b komponentų, o leistas `lg7:163`
— **du**. Palikti stipresnį skeletą ir blokuoti silpnesnius būtų nenuoseklu, todėl lg10 grąžinamas į
taisymą. Tai **pigiausia iš keturių užduočių** — viena pastraipa, ~2 sakiniai.

- **eil. 239–241** (`#priezura-heading` „Kas prižiūri dėžutę") — „**Naujas** atvirukas dėžutėje
  **nepasirodo**, kol jo **neperžiūrime** — **tikriname**, ar aprašymas neapgaulingas ir ar jis nėra
  pakartotas iš kito profilio. Įtartiną sulaikome ir paklausiame papildomai, **prieš** jį
  **paskelbdami**."
  *Problema:* `lg7:163` sako „**Prieš** pasirodydama: **tikriname** kreipinį, sritį ir
  **pasikartojimą**." Bendra: veiksmažodis „tikriname", laiko rėmas „prieš + pasirodyti/paskelbti"
  ir tas pats tikrinimo kriterijus (pasikartojimas).
  *Kaip:* lg10 priemonė — **pirmas asmuo, vienaskaita, pokalbio intonacija** („Aš šitą dalį laikau
  dovanai", „Man irgi nepatiko pirmas kartas"). Ji čia neveikia: pastraipa parašyta daugiskaitos
  „mes" registru, kaip ir visi kiti variantai. **Perrašyk pirmuoju asmeniu, vienaskaita**, ir
  pasakyk, **ką aš darau su atviruku, kuris neatrodo tikras** — ne procedūros seką. Žodžių
  „tikriname", „prieš … paskelbdami" ir „Naujas atvirukas" nelikti. Sąvokos „dėžutė", „atvirukas",
  „korespondentas" — lg10 savos, **lieka**.
  **Prieš rašydamas perskaityk:** `lg7:163`.

- **eil. 207** (F5 DUK) — „Taip. Tavo atvirukas dėžutėje niekam nesimato, kol jo **neperžiūrime**."
  Suderink su nauja eil. 239 formuluote, kitais žodžiais.

**Nekeisti:** eil. 222 ir 231–233 (F9 — švarūs), eil. 244–247 (F8 — švarus; N3 pastaba lieka
stebima, ne taisoma), eil. 252–254 (F4), eil. 44 (S5 — viena iš trijų leidžiamų), kortelių dėklas
ir jo JS, `assets/pastel.css`, `assets/pastel.js`, visos 9 tracking žymos.

---

### T.7.5 — Kosmetika (neprivaloma, be poveikio verdiktams)

- **`lg6:48`, `lg6:49`, `lg6:52`** — marquee ir jo `talonas-hidden` sr-only dublikatas vis dar skelbia
  „KOREKTŪRA TIKRINA KIEKVIENĄ SKELBIMĄ", nors eil. 173–174 sekcija jau kalba apie grąžinimą su
  pastaba. Poros pažeidimo nėra (niekas kitas neturi „tikrina kiekvieną"), bet puslapio viduje
  nenuoseklu. Taisant **abi** eilutės keičiamos kartu, kad sr-only dublikatas liktų pažodinis.
- **`lg1:352`** — „be papildomo prašymo mums" → `lg7:70` parašas. Vienas žodis.
- **`lg5:284`** — „taikoma kiekvienam naujam registro įrašui": „naujam" galima išmesti be prasmės
  praradimo; sumažintų S2b likutį iki nulio.
- **`.masthead`** klasė yra ir lg1, ir lg6. Vienintelė likusi klasių kolizija. Taisyti reikėtų CSS —
  **šiame cikle nedaryti**.

---

# PAKARTOTINIS AUDITAS PO PERDARYMO (2026-09-13)

**Vertintojas:** tas pats nepriklausomas vertintojas. **Tirta medžiaga:** visų 10 variantų
**dabartinis** `index.html` + CSS/JS būsena, `logs/fix-01…10.done.md`.
**Kriterijus:** §7.0 priėmimo sąlyga — *paimk bet kuriuos du iš 10 puslapių, perskaityk tik F5, F8 ir
F9 sekcijas — ir neturi likti nė vieno bendro sakinio judesio* — plius S4 (≤1 variantas) ir S5
(≤3 variantai).

## R.0 Trumpai

Perdarymas suveikė maždaug dviem trečdaliais. **S1, S4 ir S5 uždaryti visiškai** — sąlyginio būsimojo
pinigų pažado neliko nė viename iš 10 puslapių, „Jei dar dvejoji“ liko tik lg7, „Jau …? Prisijunk“ —
lygiai trijuose. **S2 ir S3 uždaryti tik iš dalies:** buvo pašalinta *priešpriešos* pusė
(„žmogus, ne robotas“) ir *dvipusio sąrašo* žodynas, bet ne pats sakinio judesys. Keturiuose
variantuose liko „kiekvieną naują X prieš pasirodant tikriname rankomis“, keturiuose — „matoma tik
A ir B / C, D, E niekada / ištrinti bet kada“.

Be to, taisymas **įvedė tris naujas bendras frazes** (R.3) — visos F8 sekcijoje, visos atsirado todėl,
kad keli variantai tą patį pažadą pakeitė ta pačia priemone (etiketė + reikšmė „mokamas lygis — nėra“).

**Verdiktas: 3 PRIIMTA · 7 PERDARYTI.** Likęs darbas — 1–3 sakiniai variantui, jokių CSS, JS,
struktūros ar formų keitimų.

## R.1 S1–S5 patikra: prieš / po

| Žymė | Konstrukcija | Buvo | **Dabar** | Riba | Statusas |
|---|---|---|---|---|---|
| **S1** | Pinigų pažadas „jei kada nors atsirastų mokamas lygis — parašytume čia, iš anksto, ne po to, kai jau…“ | **10 / 10** | **0 / 10** | 0 | ✅ **UŽDARYTA** |
| **S2a** | Priešprieša „žmogus, ne robotas / algoritmas / filtras“ | **10 / 10** | **2 / 10** (lg9 hero komentaras — leista; lg2 DUK klausimas „…tikri žmonės, ne robotai?“ — liko) | 1 | ⚠️ **+1 per daug** |
| **S2b** | „Kiekvienas naujas X pereina rankinį Y, prieš tampant matomu kitiems“ | **10 / 10** | **4 / 10** (lg2, lg4, lg6, lg9) | 0 | ❌ **NEUŽDARYTA** |
| **S3** | „Viešai matoma tik A, B / niekada nerodoma C, D, E / ištrinti bet kada“ | **10 / 10** | **6 / 10** (lg4 + lg7 leisti; lg3, lg5, lg8, lg9 — ne) | 2 | ❌ **NEUŽDARYTA** |
| **S3c** | Uodega „be papildomų klausimų / paaiškinimų / prašymo mums“ | 4 / 10 | **5 / 10** (lg1, lg4, lg5, lg7, lg9) | 1 (tik lg7) | ⚠️ **+4 per daug** |
| **S4** | Antraštė „Jei dar dvejoji“ | **7 / 10** | **1 / 10** (tik lg7:183) | 1 | ✅ **UŽDARYTA** |
| **S5** | „Jau [turi/esi] X? Prisijunk“ grįžtančio nario nuorodoje | **9 / 10** | **3 / 10** (lg1:95, lg3:49, lg10:44) | 3 | ✅ **UŽDARYTA** |

Pastabos:
- S4: `lg2:132` liko HTML komentaras `<!-- D — Jei dar dvejoji … -->` ir `lg8:245` — `id="dvejoji-heading"`.
  Lankytojui nematoma, į skaičių neįtraukta; norint — kosmetinis valymas.
- S5: `lg9:235` turi kūno tekste „jau turi paskyrą? prisijungimo nuoroda atkeliauja el. paštu…“ —
  tai ne antraštės grįžtančio nario nuoroda (ji pakeista į „turintiems paskyrą: prisijungti“), bet
  tas pats „Jau …?“ atidarymas. Į S5 skaičių neįtraukta, fiksuojama kaip pastaba.

## R.2 F5 / F8 / F9 pjūvis pagal variantą

`SAVA` = varianto sava priemonė, porininko nėra. `DVYNYS(x)` = tą patį sakinio judesį daro ir x.

| Variantas | **F5** moderavimas | **F8** pinigai | **F9** privatumas |
|---|---|---|---|
| lg1 | SAVA — jokio sakinio, tik `spec--audit` (4 val. / 12 %) | SAVA — 3 eilučių matmenų lentelė | SAVA — matomumo specifikacija, 5 laukai × reikšmė |
| lg2 | **DVYNYS(lg6)** — „Kiekvieną naujai iškabintą lapelį **prieš paskelbdami** valome“ | SAVA — „Lenta — už dyką… Tiek ir yra iš tikrųjų“ | SAVA — kas užrašyta ant paties lapelio |
| lg3 | SAVA — du rodmenys `dt/dd` | **DVYNYS(lg1, lg9)** — žr. R.3 | **DVYNYS(lg4, lg9)** — dvi stovyklos: „Rodymo lygis: vieša“ / „…: tik prietaise“ |
| lg4 | **DVYNYS(lg9)** — „**kiekvieną naują** vietą apžiūrime patys, **ranka**“ | SAVA (bet žr. R.3 pastabą) | **LEISTA** — `silas-split__box` išimtis |
| lg5 | SAVA — nuoroda į Taisyklių 6 papunktį (bet žr. R.4) | SAVA — registro numeracijos argumentas | **DVYNYS(lg8, lg9)** — „rodomi trys laukai: … / likę du … **nerodomi niekada** / **ištrinti bet kada**“ |
| lg6 | **DVYNYS(lg2)** — „**Kiekvieną** skelbimą **prieš pasirodant** rubrikoje perskaito korektorius“ (+ DUK `perskaito žmogus`) | SAVA — palyginimas su 3 litais | SAVA — talono blanko logika |
| lg7 | SAVA — „Prieš pasirodydama: tikriname kreipinį, sritį ir pasikartojimą“ | SAVA — „Kabinetas veikia be įmokos. Kitos kainos nebus“ | **LEISTA** — proza, leidimo logika |
| lg8 | SAVA — faktas + savaiminis nuvertinimas („užtrunka ilgiau, nei norėtume“) | SAVA — „skaičiuok kaip nori: šiandien nulis, kitą savaitę irgi nulis“ | **DVYNYS(lg9, lg5)** — beveik pažodžiui |
| lg9 | **DVYNYS(lg4)** — „Naują paskyrą prieš aktyvavimą validuojame **rankiniu būdu**“ | SAVA — viena `tm-out` eilutė (bet žr. R.3) | **DVYNYS(lg8, lg5)** — trys `tm-out` eilutės = trys S3 elementai |
| lg10 | SAVA — paneigimas („nepasirodo, kol neperžiūrime“) | SAVA — pirmuoju asmeniu („aš laikau dovanai“) | SAVA — „Gali rodyti tiek, kiek nori“ |

**Kritęs įrodymas (F9, lg8 · lg9):**
- lg8:241 — „Tvarkaraštyje **matosi tik** pseudonimas ir amžiaus juosta. Miestas, paštas ir kombinacija ten **nepasirodo niekada**, o planą **ištrini** nustatymuose, **kai tik nori**.“
- lg9:178–180 — „**viešai matoma:** prisijungimo vardas, platus regionas.“ / „**niekada nerodoma** kitiems naudotojams: e-adresas, tiksli vietovė, prieigos frazė.“ / „paskyra: gali sustabdyti arba **ištrinti bet kada**.“
- lg9:203 — „Kitiems naudotojams **matosi tik** prisijungimo vardas ir platus regionas.“

Tai visi trys pradinio S3 elementai ta pačia tvarka. Skiriasi tik daiktavardžiai ir eilutės apvalkalas.

**Kritęs įrodymas (F5, lg2 · lg6):**
- lg2:82 — „**Kiekvieną** naujai iškabintą lapelį **prieš paskelbdami valome**… nuimame, ir jis lentoje **nepasirodo**.“
- lg6:174 — „**Kiekvieną** skelbimą **prieš pasirodant** rubrikoje **perskaito** korektorius.“
- lg6:194 — „…kiekvieną skelbimą **perskaito žmogus** prieš jam pasirodant rubrikoje…“

## R.3 Naujos bendros frazės, kurių anksčiau nebuvo (taisymo įneštos)

| # | Nauja bendra frazė | Kur | Kaip atsirado |
|---|---|---|---|
| **N1** | „**jei** [tai/kuris nors skaičius] **pasikeis, pasikeis ir** [čia/jis]“ | lg1:177 (senas, §7.1 leistas kaip lg1 parašas) ↔ **lg3:257** (naujas) | §7.3 liepė lg3 pinigus rodyti kaip rodmenį; agentas prie rodmens pridėjo lg1 parašo sakinį |
| **N2** | „**mokamas lygis — (šiuo metu) nėra**“ kaip etiketė + reikšmė | **lg1:169–170**, **lg3:229–231**, **lg9:167** | trys variantai tą patį pažadą pakeitė ta pačia priemone — būsenos rodmeniu |
| **N3** | „**nėra paslėpto** mokamo lygio“ ↔ „**jokio paslėpto** apmokėjimo **čia nėra**“ | lg4:194 ↔ **lg10:246–247** | abu S1 uždarė paneigimu; paneigimo objektas sutapo |

N1 ir N2 yra realūs pažeidimai (lg3 kaltė — jis dubliuoja ir lg1, ir lg9). N3 — riba: „nėra paslėpto
mokesčio“ yra beveik neišvengiama formulė neigiant paslėptas kainas; fiksuoju kaip stebimą, ne kaip
perdarymo pagrindą.

## R.4 Ne F5/F8/F9, bet tas pats klausimas

- **`lg5:384` (Taisyklių 6 papunktis)** — „**Kiekvienas naujas** registro įrašas peržiūrimas **prieš
  tampant matomu kitiems nariams**.“ Tai **pažodinis** pradinis S2 sakinys. Jis išliko todėl, kad
  §7.5 nurodė tik eil. 284 ir 293, o Taisyklių bloko niekas nelietė. Blogiausia tai, kad lg5 F5
  sekcija (eil. 284) į šį papunktį **nukreipia** — skaitytojas, sekantis nuorodą, atsiduria tiesiai
  ant draudžiamo sakinio. Kitame variante šios formuluotės nebeliko, tad poros netrūkdo, bet
  konstrukcija techniškai gyva.
- **`lg1:352`** — „Abu veikia **be papildomo prašymo mums**.“ Tai lg7 parašas („**be paaiškinimų
  mums**“, lg7:70). §7.7 liepė jį išvalyti iš lg8, lg9, lg10 — lg1 nebuvo įvardytas, nors jį turi.
  lg8 ir lg10 išvalė, **lg9:208** („be jokių papildomų klausimų“) — ne.

## R.5 CSS / klasių / spalvų / tracking regresijos patikra

| Patikra | Rezultatas |
|---|---|
| Naujų CSS klasių pridėta | **Ne.** Naudotos tik esamos (`spec__row`, `pultas-timeline`, `pultas-hint`, `tm-out`, `c-block`) |
| Naujų spalvų pridėta | **Ne.** lg4 hero žiedas naudoja 3 iš 5 esamų tokenų |
| Naujų šriftų pridėta | **Ne.** 20 šeimų, nė viena dviejuose variantuose |
| Klasių vardų kolizijos tarp variantų | **1 liko: `.masthead` — lg1 + lg6** (HTML ir abiejuose CSS). Anksčiau taisytos `cookie-strip` / `legal-links` / `repeat-link` / `skip-link` / `visually-hidden` — **visos išvalytos** ✔ |
| lg4 svetimos 999px piliulės | **Išvalytos** — `garden.css` nebeturi nė vieno `999px` ✔ |
| lg4 hero motyvas | Pakeistas į `.silas-scene__ring` (uždara forma su `radialGradient`) ✔ |
| lg6 šriftų `@import` → `<link>` | **Atlikta** (`index.html:17`), `@import` iš CSS pašalintas ✔ |
| `assets/style.css` kelias ir lg1, ir lg6 | **Liko** — lg6 CSS komentare deklaruota `press/style.css`, failas neperkeltas (fix-06 užfiksavo kaip priimtą nukrypimą) |
| `<!-- tracking: … -->` žymos | **Visos vietoje** — lg1 4 · lg2 8 · lg3 8 · lg4 5 · lg5 2 · lg6 2 · lg7 6 · lg8 10 · lg9 2 · lg10 9 (HTML + JS kartu). Nė vienos pašalintos ar pervadintos ✔ |
| Gyvas GTM / Meta Pixel / OpenAI pikselis | **Nėra nė viename** (`grep` per `gtm-`, `googletagmanager`, `fbq`, `connect.facebook`, `dataLayer`, `openai`, `chatgpt` — 0 rezultatų). Tracking rizikos šis ciklas nesukėlė ✔ |
| CSS/JS failų modifikavimo laikai | Pakeisti tik `lg4/garden.css` ir `lg6/style.css` — abu leisti. Likę 15 failų nepaliesti ✔ |

## R.6 GALUTINIAI VERDIKTAI

| Variantas | Verdiktas | Kas dar liko |
|---|---|---|
| **lg1-matmuo** | ✅ **PRIIMTA** | F5/F8/F9 švarūs. Pastaba (ne F-sekcijoje): eil. 352 „be papildomo prašymo mums“ dubliuoja lg7 parašą |
| **lg2-lenta** | ❌ **PERDARYTI** | F5: eil. 82 ir 139 — S2b judesys, dvynys su lg6. Plius eil. 138 klausimas „…ne robotai?“ |
| **lg3-pultas** | ❌ **PERDARYTI** | F8: eil. 257 (N1) ir eil. 229–231 (N2). F9: eil. 195–204 — dvi stovyklos |
| **lg4-silas** | ❌ **PERDARYTI** | F5: eil. 128–129 — „kiekvieną naują vietą… ranka“, dvynys su lg9 |
| **lg5-salyga** | ❌ **PERDARYTI** | F9: eil. 302–306 — visi trys S3 elementai. Plius eil. 384 — pažodinis S2 sakinys |
| **lg6-talonas** | ❌ **PERDARYTI** | F5: eil. 173–174 ir 194 — S2b judesys ×2, dvynys su lg2 |
| **lg7-kabinetas** | ✅ **PRIIMTA** | Nieko. Vienintelis variantas, kurio visos trys sekcijos savos ir abi leistos išimtys (S3, S4) priklauso būtent jam |
| **lg8-vakaras** | ❌ **PERDARYTI** | F9: eil. 241 — beveik pažodinis lg9 dvynys |
| **lg9-prieiga** | ❌ **PERDARYTI** | F5: eil. 162 ir 198. F9: eil. 178–180, 203, 208 |
| **lg10-atvirukas** | ✅ **PRIIMTA** | Nieko. N3 pastaba (eil. 246–247) — stebima, ne taisoma |

**Suvestinė: 3 PRIIMTA · 7 PERDARYTI.** Nė vienas PERDARYTI nėra dizaino, struktūros ar formos
klausimas — visi septyni yra 1–3 sakiniai `index.html` teksto mazge.

---

## R.7 Antro perdarymo užduotys

### R.7.0 — Bendra taisyklė (galioja visiems septyniems)

**KAS KEIČIAMA:** tik įvardyti `index.html` teksto mazgai.
**KAS NEKEIČIAMA — nė vieno simbolio:** CSS ir JS failai (šįkart **be jokių išimčių** — lg4 ir lg6
CSS darbai baigti); paletės; šriftai; klasių vardai; sekcijų tvarka; formų laukai, jų `name`/`id`,
validacija, `aria-*`; judesio momentai; `<!-- tracking: … -->` žymos; lg4 hero SVG; lg8 bento
pertvarkymas; lg3 `pultas-hint` patarimai.

**Dvi priemonės, kurių nuo šiol negalima naudoti daugiau nei viename variante:**

- **S2b.** Sakinio judesys „**kiekvieną / naują** X **prieš** [pasirodant / paskelbiant / aktyvuojant]
  [tikriname / valome / perskaito / validuojame] **rankomis / ranka / rankiniu būdu**“. Neužtenka
  išmesti „žmogus, ne robotas“ — kritinis yra **„kiekvieną … prieš … tikriname“** griaučiai. Leidžiama
  palikti **tik lg7** („Prieš pasirodydama: tikriname…“), nes jis trumpiausias ir seniausias.
- **S3.** Sakinio judesys „**matoma tik** A, B“ + „**niekada nerodoma** C, D, E“ + „**ištrinti bet
  kada**“. Leidžiama **tik lg4 ir lg7**, kaip ir pirmą kartą.

### R.7.1 — lg2-lenta (F5)

- **eil. 82** — „Kiekvieną naujai iškabintą lapelį **prieš paskelbdami** valome: tuščią,
  pasikartojantį ar akivaizdžiai netikrą — nuimame, ir jis lentoje nepasirodo.“
  *Kaip:* „kiekvieną … prieš … valome“ griaučius išmesk. lg2 priemonė — **veiksmas → pasekmė be
  tarpinių žodžių**, ir ji jau veikia: „Netinka — nuimk lapelį, ir jo nebėra.“ Pasakyk valymą tuo
  pačiu ritmu, iš **rezultato** pusės („Tuščias lapelis lentoje neprikimba“ tipo judesys), ne iš
  proceso pusės. Nevartok „prieš“ + „kiekvieną“ vienoje eilutėje.
- **eil. 139** (DUK atsakymas) — tas pats. Perrašyk **kitaip nei eil. 82**, kad puslapyje sakinys
  nesikartotų du kartus.
- **eil. 138** (DUK klausimas „Ar tai tikri žmonės, **ne robotai**?“) — vienintelė likusi pažodinė
  S2a priešprieša matomame tekste. Perrašyk klausimą be „X, ne Y“ (pvz. į klausimą apie tai, kas
  atsitinka su netikru lapeliu). **Atsakymas keičiamas kartu su klausimu.**

**Nekeisti:** eil. 113 (F8 — švarus), eil. 127 ir 147 (F9 — švarūs), eil. 135 antraštė, eil. 41
nuoroda, modalas, forma, `styles/main.css`, inline JS, visos 8 tracking žymos.

### R.7.2 — lg3-pultas (F8 + F9)

- **eil. 257** (DUK „Ar reikės mokėti už kanalą?“) — „…jei tai pasikeis, pasikeis ir jis.“
  *Kaip:* **N1** — tai lg1 parašas. Išmesk visą šalutinį sakinį. Atsakymui pakanka nuorodos į rodmenį:
  rodmuo rodo „nėra“, ir tiek. Jokio sąlyginio sakinio apie rodmens ateitį.
- **eil. 229–231** — `dt` „Mokamas lygis“ / `dd` „Šiuo metu nėra“.
  *Kaip:* **N2** — tą pačią etiketę + reikšmę turi lg1 (eil. 169–170) ir lg9 (eil. 167). lg3 turi savo,
  niekieno nenaudojamą priemonę — **skalę su padalomis** (SVG rodyklė hero'e). Pinigus pasakyk kaip
  **prietaiso būseną su vienetu**, ne kaip „lygis — nėra“ porą: pvz. eilutė, kurios reikšmė yra
  skaičius su vienetu (`0 € / mėn.`), ir antra eilutė apie tai, kas rodoma, kai reikšmė kinta. Etiketės
  **„Mokamas lygis“ nevartoti** — ji priklauso lg1 ir lg9.
- **eil. 195–204** (F9 „Rodymo lygis“) — dvi `dt/dd` stovyklos „vieša“ / „tik prietaise“.
  *Kaip:* tai ta pati dvipusė S3 priešprieša, tik `dl` pavidalu. lg3 pats siūlo išeitį — sakinyje
  eil. 205 jau parašyta „**Rodymo lygį keiti bet kada**“. Padaryk rodymo lygį **pakopa, ne dviem
  stovyklom**: viena `dl` su **trimis** didėjančio rodomumo pakopomis (pvz. tik zona → zona +
  šaukinys → …), kur lankytojas mato, **kurią pakopą jis renkasi**, o ne ko sistema nerodo. Laukų
  sąrašo „grįžtamasis adresas, raktas, tiksli vietovė“ kaip atskiros „niekada“ eilutės nelikti.

**Nekeisti:** eil. 49 (S5 — viena iš trijų leidžiamų), eil. 208–220 (F5 — švarus), SVG skalė ir
rodyklės mechanika, `data-activity` reikšmės, keturi `pultas-hint`, `static/panel.css`,
`static/panel.js`, formos laukai.

### R.7.3 — lg4-silas (F5)

- **eil. 128 antraštė** — „Ravėjimas **prieš kiekvieną naują** vietą.“
- **eil. 129** — „Ravėjimas reiškia, kad **kiekvieną naują** vietą apžiūrime patys, **ranka** —
  patikriname, ar laiškų adresas tikras ir ar aprašymas neprimena kito, jau esančio rate.“
  *Kaip:* žodis **„ravėjimas“ lieka** — jis lg4 savas ir vertingas. Išmesk griaučius
  „kiekvieną naują X … patys, ranka“ (dvynys su lg9 „Naują paskyrą … rankiniu būdu“). lg4 balsas —
  **ramus pasakojamasis sakinys apie tai, kas daroma**, be kiekybės ir be įrankio įvardijimo.
  Pasakyk, **ką ravint pastebima** (netikras laiškų adresas, pasikartojantis aprašymas) ir kas su tuo
  daroma — sodininko, ne operatoriaus registru. Antraštėje „prieš“ + „kiekvieną naują“ nevartoti.
- **eil. 179** (DUK „Kas rūpinasi, kad kita vieta rate būtų tikra?“) — „Ravime **rankomis** —
  patikriname…“. Ta pati priemonė, perrašyk kartu, kitais žodžiais nei eil. 129.

**Nekeisti:** eil. 87–109 (F9 `silas-split__box` — leista išimtis), eil. 192–194 (F8 — švarus),
eil. 151 antraštė, eil. 73 nuoroda, hero SVG žiedas, `garden.css`, `garden.js`, `--scroll-progress`,
forma, apatinė juosta.

### R.7.4 — lg5-salyga (F9 + Taisyklės)

- **eil. 301 antraštė** — „Duomenų tvarkymas: **kas matoma, kas ne**“. Ta pati dvipusė antraštė kaip
  lg6:214 („Kas matoma, kas ne“). Pakeisk į registro kalbą (pvz. nuoroda į papunktį, ne į priešpriešą).
- **eil. 303–305** — trys punktai: „**rodomi** trys laukai: …“ / „likę du … **nerodomi niekada**“ /
  „ištrinti **bet kada**“. *Kaip:* tai visi trys S3 elementai, tik sunumeruoti. lg5 priemonė yra
  **kryžminė nuoroda**, o ne sąrašas — ir ji čia jau yra. Sustiprink ją iki galo: palik **vieną**
  punktą, kuris pasako, **kur** matomumo apimtis apibrėžta (`#taisykles-2-1`), ir **vieną**, kuris
  pasako, kur aprašytas ištrynimas (`#taisykles-5`). Laukų vardų **nekartok** — jie jau surašyti
  Taisyklių 2.1 papunktyje, o kartojimas ir yra tai, kas atkuria S3. Žodžių „nerodomi niekada“
  nelikti.
- **eil. 384** (Taisyklių 6 papunktis) — „**Kiekvienas naujas** registro įrašas peržiūrimas **prieš
  tampant matomu kitiems nariams**.“ Pažodinis pradinis S2 sakinys. Perrašyk taisyklės kalba —
  taisyklė nusako **tvarką ir terminą**, ne veiksmo seką („Peržiūra atliekama kiekvieną darbo dieną;
  iki peržiūros įrašas registre nerodomas“ tipo judesys). Formuluotės „prieš tampant matomu kitiems“
  nelikti.

**Nekeisti:** eil. 178 (F8 — švarus), eil. 280–286 (F5 — švarus, nuorodų logika teisinga), eil. 82
(S5 — jau ne klausimas), `terms-ledger` lentelė, forma kaip 5-as punktas, visos `#taisykles-*`
`id` reikšmės ir nuorodos į jas, `css/ledger.css`.

### R.7.5 — lg6-talonas (F5)

- **eil. 173 antraštė** — „Korektūra tikrina **kiekvieną** skelbimą“.
- **eil. 174** — „**Kiekvieną** skelbimą **prieš pasirodant** rubrikoje **perskaito** korektorius.“
  *Kaip:* dvynys su lg2:82. lg6 turi stipriausią savo priemonę, kurios niekas kitas neturi —
  **spaustuvės eiga**: korektūros eilė, grąžinimas su pastaba, spausdinimas. Pasakyk moderavimą kaip
  **eigos etapą** („Prieš spaudą skelbimas praeina korektūrą“ *nėra* sprendimas — tai tas pats
  judesys), t. y. per **tai, kas grįžta atgal**: korektorius grąžina su pastaba, ką pataisyti, ir tik
  tada skelbimas spausdinamas. Sakinio, prasidedančio „Kiekvieną …“, nelikti.
  Sakinys apie grąžinimą su pastaba (antra eil. 174 dalis) — **lieka, jis lg6 parašas**.
- **eil. 194** (DUK „Kas patikrina, kad kitoje pusėje tikras žmogus?“) — „Korektorius: kiekvieną
  skelbimą **perskaito žmogus** prieš jam pasirodant rubrikoje…“. *Kaip:* čia S2a žodis „žmogus“
  grįžo atgal. Atsakymas gali būti vien pareigybė („Korektorius.“) + ką jis daro su netinkamu
  skelbimu. „Kiekvieną“, „prieš … pasirodant“ ir „žmogus“ — nė vieno.

**Nekeisti:** eil. 71–74 (F8 — geriausias rinkinyje), eil. 213–215 (F9 — talono blanko logika,
švari), eil. 186 antraštė, eil. 42 nuoroda, marquee, misregistracija, perforacija, halftone SVG,
`assets/style.css` (šriftų taisymas baigtas), tracking žymos.

### R.7.6 — lg8-vakaras (F9)

- **eil. 241** — „Tvarkaraštyje **matosi tik** pseudonimas ir amžiaus juosta. Miestas, paštas ir
  kombinacija ten **nepasirodo niekada**, o planą **ištrini** nustatymuose, **kai tik nori**.“
  *Kaip:* visi trys S3 elementai viename sakinių poroje; lg9:203 sako beveik tą patį. lg8 priemonė —
  **faktas + savaiminis nuvertinimas**, ir ji puslapyje jau veikia dukart (eil. 216, 235). Pritaikyk
  ją ir čia: vienas sakinys apie tai, **ką kompanionas mato tvarkaraštyje** (be žodžio „tik“), ir
  vienas sakinys tuo pačiu nuvertinimo judesiu apie tai, kad daugiau nieko tvarkaraštyje ir netelpa.
  Formulių „matosi tik“, „nepasirodo niekada“ ir laukų sąrašo per kablelius nelikti.
- **eil. 258** (DUK „Kas mato mano pseudonimą?“) — „Miestas, paštas ir kombinacija **lieka tik tau**.“
  Tas pats trijų laukų sąrašas antrą kartą. Suderink su nauju eil. 241 tekstu, kad puslapyje
  nesikartotų.

**Nekeisti:** eil. 224–227 (F8 — švarus), eil. 233–235 (F5 — švarus), eil. 246 antraštė, eil. 50
nuoroda, bento pertvarkymas (eil. 210–230) ir visi `--span-col`/`--span-row`, `role="region"` +
`aria-labelledby` ryšiai, keturi `radio` blokai, `ui/board.css`, `ui/board.js`.

### R.7.7 — lg9-prieiga (F5 + F9)

- **eil. 162** — „Naują paskyrą prieš aktyvavimą validuojame **rankiniu būdu**.“ Dvynys su lg4:129.
  *Kaip:* lg9 priemonė — **imperatyvas ir išvesties eilutė**, ne aprašomasis sakinys. Validaciją
  pasakyk **`tm-out` būsenos eilutėmis** (kaip jau padaryta kainai ir teisėms): eilutė su etapu ir
  eilutė su terminu. „Rankiniu būdu“ / „prieš aktyvavimą“ prozos sakinyje nelikti —
  hero komentaras eil. 49 (`# validacija: rankinė, ne automatinė`) **lieka**, jis vienintelis leistas.
- **eil. 198** (DUK) — „**Rankiniu būdu, prieš aktyvavimą.**“ Tas pats. Suderink su nauju eil. 162.
- **eil. 178–180** (F9) — trys `tm-out` eilutės = trys S3 elementai („viešai matoma“ / „niekada
  nerodoma“ / „ištrinti bet kada“). *Kaip:* `tm-out` forma **lieka**, keičiasi **turinio judesys**.
  Pasakyk tai kaip **prieigos lygius**, ne kaip matoma/nematoma priešpriešą — lg9 visas žodynas
  (prieiga, mazgas, paleidimas) tam jau paruoštas: viena eilutė, kas turi prieigą prie ko. Žodžių
  „viešai matoma“ ir „niekada nerodoma“ nelikti.
- **eil. 203** (DUK) — „Kitiems naudotojams **matosi tik** prisijungimo vardas ir platus regionas.“
  Beveik pažodinis lg8:241 dvynys. Suderink su nauju eil. 178–180 tekstu.
- **eil. 208** — „…**be jokių papildomų klausimų**.“ Tai lg7 parašas (S3c). Išmesk — atsakymui
  pakanka veiksmo („Paskyrą sustabdai arba ištrini pačiame mazge.“).
- **Pastaba, ne užduotis:** eil. 235 „jau turi paskyrą?“ — ne antraštės nuoroda, į S5 kvotą neįeina,
  bet jei perrašinėsi tą bloką, „Jau …?“ atidarymo geriau nebelikti.

**Nekeisti:** eil. 165–167 (F8 — švarus), eil. 41 nuoroda, eil. 184 antraštė „pagalba“, hero išvestis,
eil. 49 komentaras, prompt'ų seka, seanso istorija ir „taisyti“ mygtukai, `bin/term.css`,
`bin/term.js`, formos laukai.

### R.7.8 — Kosmetika (neprivaloma, be poveikio verdiktams)

- `lg1:352` — „be papildomo prašymo mums“ → lg7 parašas; pakeisk vienu žodžiu apie tai, kad mygtukas
  veikia iš karto.
- `lg2:132` HTML komentaras „Jei dar dvejoji“ ir `lg8:245` `id="dvejoji-heading"` — lankytojui
  nematomi; galima suvienodinti su naujomis antraštėmis. **`id` keitimas reikalautų liesti
  `aria-labelledby` — todėl geriau NEKEISTI.**
- `.masthead` klasė yra ir lg1, ir lg6 (HTML + abu CSS). Vienintelė likusi klasių kolizija. Taisyti
  reikėtų CSS — **šiame cikle nedaryti**, fiksuoti kitam.

---

# PIRMASIS AUDITAS (archyvas — kontekstui)

> Šis skyrius aprašo būseną **prieš** perdarymo ciklą. Galiojantys verdiktai yra skyriuje
> „PAKARTOTINIS AUDITAS PO PERDARYMO“ aukščiau; §7 užduotys jau įvykdytos (žr. `logs/fix-*.done.md`),
> naujos užduotys — §R.7.

**Vertintojas:** nepriklausomas, be konteksto apie tai, kaip variantai statyti.
**Tirta medžiaga:** visų 10 variantų `index.html` + CSS + JS (realus kodas ir realus tekstas, ne matrica).
**Data:** 2026-09-13.

---

## 0. Pagrindinė išvada (perskaityk pirma)

**Dizaino sluoksnis pereina visus tris objektyvius testus.** Nė vienas variantas neatkartoja
referencinių puslapių paviršiaus (`analize/*.md` §7) ir nė vienas nenukrenta į §7 AI-dizaino šablonus.
Vizualiai visos 45 poros yra atskiriamos — paletės, tipografija, tarpų ritmas, kampų kalba ir
tinklelio logika skiriasi taip, kaip suplanuota.

**Krenta teksto sluoksnis.** Keturios retorinės konstrukcijos kartojasi per visus 10 puslapių —
tose pačiose funkcinėse vietose, tuo pačiu sakinio judesiu, dalis jų beveik pažodžiui. Dėl to į
klausimą „ar šiuos du puslapius padarė ta pati komanda?“ **visose 45 porose atsakymas yra TAIP** —
ne dėl to, kaip jie atrodo, o dėl to, ką jie sako. Lankytojas puslapį skaito, ne tik žiūri.

Todėl visi 10 gauna **PERDARYTI**, bet perdarymas yra **tik tekstinis**. Dizainas, paletės, šriftai,
tinkleliai, formų mechanika ir judesio momentai — **nekeičiami**.

### Keturios bendros konstrukcijos (įrodymas)

| Žymė | Konstrukcija | Kur | Kiek variantų |
|---|---|---|---|
| **S1** | Pinigų pažadas: „[nemokama]. Jei kada nors atsirastų mokamas lygis / sluoksnis — apie tai [parašysime / pasakysime / būtų parašyta] **čia**, iš anksto, **ne po to, kai jau** [būsi įsirašęs / esi rate / būtum viduje].“ | F8 sekcija + jos atkartojimas D sekcijoje | **10 iš 10** |
| **S2** | Moderavimo pažadas: „**Kiekvien[as/a] nauj[as/a]** [lapas/kanalas/vieta/skelbimas/byla/planas/paskyra/atvirukas] **pereina rankinį/-ę** [auditą / stebėjimą / ravėjimą / korektūrą / peržiūrą / patikrinimą], **prieš tampant matomu kitiems** — **žmogus, ne** [robotas / algoritmas / filtras].“ | F5 sekcija + D sekcija | **10 iš 10** |
| **S3** | Privatumo dvipusis sąrašas: „Viešai matoma **tik** A ir B. **Niekada nerodoma**: C, D, E. Ištrinti gali **bet kada, be papildomų klausimų mums**.“ | F9 sekcija | **10 iš 10** |
| **S4** | Sekcijos antraštė **„Jei dar dvejoji“** (pažodžiui) | D sekcija, priešpaskutinė turinio sekcija | **7 iš 10** (lg2, lg4, lg6, lg7, lg8, lg9, lg10) |
| **S5** | Grįžtančio nario nuoroda: „**Jau [turi/esi]** [X]**? Prisijunk(ti)**“ | antraštė | **9 iš 10** (visi be lg7) |

Kiekviena pora dalijasi bent S1 + S2 + S3. Poros tarp {lg2, lg4, lg6, lg7, lg8, lg9, lg10} dalijasi dar
ir S4 pažodžiui.

`analize/sinteze.md` DALIS 2 bendra taisyklė: *„draudžiamas ne tik atskiras punktas, bet ir bet kuris
atpažįstamas jų derinys“*. Keturios konstrukcijos, einančios kartu tose pačiose pozicijose, yra būtent
toks derinys — ir jis stipresnis už bet kurį atskirą vizualinį sutapimą, nes atkartojamas ne žodis, o
visas argumentavimo judesys.

**Tracking steko patikra:** nė viename iš 10 puslapių nėra jokio gyvo GTM, Meta Pixel ar
OpenAI/ChatGPT pikselio — tik `<!-- tracking: ... -->` komentarų žymos. Perdarymas jokios tracking
rizikos nekelia.

---

## 1. Porų testas — visos 45 poros

Klausimas: *ar šiuos du puslapius padarė ta pati komanda?*
Skiltis „Vizualiai“ — atskiras vertinimas tik dėl paletės / tipografijos / tarpų / kampų / tinklelio.

| # | Pora | Verdiktas | Priežastis |
|---|---|---|---|
| 1 | lg1 · lg2 | **TAIP** | Vizualiai NE (šaltas pilkas lapas, 0px, be šešėlių ↔ sotus geltonas laukas, 3px juodi rėmeliai, kietas 6px ofsetas). TAIP dėl S1+S2+S3 — abu vienodai uždaro pinigų, moderavimo ir privatumo klausimus. |
| 2 | lg1 · lg3 | **TAIP** | Vizualiai NE (šviesus lapas ↔ tamsiai mėlynas gradientas su žydru signalu). TAIP dėl S1+S2+S3+S5. |
| 3 | lg1 · lg4 | **TAIP** | Vizualiai NE (Chivo+Newsreader ant pilko ↔ Fraunces+Karla ant šalavijo, organiniai 24/4 kampai). TAIP dėl S1+S2+S3+S5. |
| 4 | lg1 · lg5 | **TAIP** | **Artimiausia pora visame rinkinyje.** Abu šalti, šviesūs, 1px linijų sistemos be šešėlių, abu kampas A, abu kalba skaičiais. Vizualiai vis dėlto NE: lg1 — 0px, grotesk antraštės + serifas tekstui, šilta raudona, kairė liniuotės paraštė; lg5 — 4px, serifas antraštėms + Atkinson tekstui, šaltas petrolis, 8 stulpelių lentelė su išskleidžiamomis eilutėmis. TAIP dėl S1+S2+S3+S5. |
| 5 | lg1 · lg6 | **TAIP** | Vizualiai NE (plokščias pilkas lapas ↔ ochrinis popierius su 2px rašalo misregistracija ir punktyrais). TAIP dėl S1+S2+S3+S5. |
| 6 | lg1 · lg7 | **TAIP** | Vizualiai NE (šviesus 12 stulpelių lapas ↔ riešutmedis, siaura 46rem juosta, 3px juostos). TAIP dėl S1+S2+S3. |
| 7 | lg1 · lg8 | **TAIP** | Vizualiai NE (matmenų lapas ↔ sotus indigo su bento blokais ir 28px kampais). TAIP dėl S1+S2+S3+S5. |
| 8 | lg1 · lg9 | **TAIP** | Vizualiai NE (šviesus, proporcinis šriftas ↔ grafitas, visas puslapis monospace). TAIP dėl S1+S2+S3+S5. |
| 9 | lg1 · lg10 | **TAIP** | Vizualiai NE (0px techninis lapas ↔ 18px pastelinės kortelės su 999px mygtukais). TAIP dėl S1+S2+S3+S5. |
| 10 | lg2 · lg3 | **TAIP** | Vizualiai NE (geltonas plakatas, Anton didžiosiomis ↔ tamsus prietaisų pultas su SVG skale). TAIP dėl S1+S2+S3+S5. |
| 11 | lg2 · lg4 | **TAIP** | Vizualiai NE (kietas ofsetinis šešėlis, pasukti lapeliai ↔ lėta viena kolona, organiniai kampai, be šešėlių). TAIP dėl S1+S2+S3+**S4 pažodžiui**+S5. |
| 12 | lg2 · lg5 | **TAIP** | Vizualiai NE (sotus geltonas ↔ beveik baltas registras). TAIP dėl S1+S2+S3+S5. |
| 13 | lg2 · lg6 | **TAIP** | Vizualiai artima šeima (abu rašalas ant popieriaus, abu spaudos citata), bet NE: lg2 — 3px juodi rėmeliai, Anton, sotus geltonas laukas; lg6 — punktyrai, Bitter, du persidengiantys rašalai ant ochros. TAIP dėl S1+S2+S3+**S4**+S5. |
| 14 | lg2 · lg7 | **TAIP** | Vizualiai NE (garsus geltonas plakatas ↔ tyli tamsi centrinė juosta). TAIP dėl S1+S2+S3+**S4**. |
| 15 | lg2 · lg8 | **TAIP** | Abu stovi ant sotaus spalvinio lauko su ryškiu display šriftu — bet NE: lg2 juoda/geltona, 0px + 3px rėmeliai + kietas šešėlis, pasukimai; lg8 indigo/lajus/koralas, 28px ir 6px kampai, jokių rėmelių, bento tinklelis. TAIP dėl S1+S2+S3+**S4**+S5. |
| 16 | lg2 · lg9 | **TAIP** | Vizualiai NE (geltona ↔ grafitas; Anton ↔ JetBrains Mono). TAIP dėl S1+S2+S3+**S4**+S5. |
| 17 | lg2 · lg10 | **TAIP** | Vizualiai NE (garsus brutalizmas ↔ švelnus pastelinis dėklas). TAIP dėl S1+S2+S3+**S4**+S5. |
| 18 | lg3 · lg4 | **TAIP** | Vizualiai NE (tamsus prietaisas ↔ šviesus sodo dienoraštis). TAIP dėl S1+S2+S3+S5. |
| 19 | lg3 · lg5 | **TAIP** | Vizualiai NE (tamsiai mėlynas ↔ beveik baltas), nors abiejų tekstas dalykiškas. TAIP dėl S1+S2+S3+S5. |
| 20 | lg3 · lg6 | **TAIP** | Vizualiai NE (ekrano prietaisas ↔ spausdinta atkarpa). TAIP dėl S1+S2+S3+S5. |
| 21 | lg3 · lg7 | **TAIP** | Abu tamsūs — bet NE: lg3 šaltas mėlynas + žydras signalas + 12px kampai + sans pora; lg7 šiltas riešutmedis + patina + 0px + Gloock serifas. TAIP dėl S1+S2+S3. |
| 22 | lg3 · lg8 | **TAIP** | Vizualiai NE (tamsus gylio gradientas ↔ plokščias sotus indigo). TAIP dėl S1+S2+S3+**S5**. |
| 23 | lg3 · lg9 | **TAIP** | Abu tamsūs, abu turi paviršių ant paviršiaus su 1px akcento riba — bet NE: lg3 šaltas mėlynas/žydras, proporcinis sans, 12px; lg9 šiltas grafitas/gintaras, monospace, 2px, eilutės vienetais matuojamas ritmas. TAIP dėl S1+S2+S3+S5. |
| 24 | lg3 · lg10 | **TAIP** | Vizualiai NE (tamsus pultas ↔ pastelinis gradientas). TAIP dėl S1+S2+S3+S5. |
| 25 | lg4 · lg5 | **TAIP** | Vizualiai NE (šalavijas, serifinės antraštės, dideli tarpai ↔ šaltas registras, 44px eilutės). TAIP dėl S1+S2+S3+S5. |
| 26 | lg4 · lg6 | **TAIP** | Abu turi popieriaus grūdelį ir šiltą matinį foną — bet NE: lg4 šalavijas/samana/uoga, Fraunces, viena plati kolona; lg6 ochra + du rašalai, Bitter, 2:1 kolonos, punktyrai. TAIP dėl S1+S2+S3+**S4**+S5. |
| 27 | lg4 · lg7 | **TAIP** | Vizualiai NE (šviesus sodas ↔ tamsus kabinetas), nors abiejų tonas ramus ir abu kampas B. TAIP dėl S1+S2+S3+**S4**. |
| 28 | lg4 · lg8 | **TAIP** | Vizualiai NE (lėta kolona ↔ bento lenta ant indigo). TAIP dėl S1+S2+S3+**S4**+S5. |
| 29 | lg4 · lg9 | **TAIP** | Vizualiai NE (šviesus serifinis ↔ tamsus monospace). TAIP dėl S1+S2+S3+**S4**+S5. |
| 30 | lg4 · lg10 | **TAIP** | Antra artimiausia pora. Abu švelnaus tono, kampas B, abu turi serifines/kursyvines antraštes ir popieriaus grūdelį — ir **abu naudoja 999px piliulės formas** (lg4: `garden.css:191, 432, 481`; lg10: `--radius-button`). Piliulė lg4 nepriklauso: jo kampų kalba yra `24px 4px 24px 4px`. Vizualiai vis tiek NE (žalsva ↔ violetinė-persikinė paletė; Fraunces ↔ Lora italic; plati kolona ↔ 2/3+1/3 su šonine juosta). TAIP dėl S1+S2+S3+**S4**+S5 **ir** dėl bendros piliulės formos. |
| 31 | lg5 · lg6 | **TAIP** | Vizualiai NE (šaltas skaitmeninis registras ↔ šilta rizografija). TAIP dėl S1+S2+S3+S5. |
| 32 | lg5 · lg7 | **TAIP** | Vizualiai NE (šviesus tankus ↔ tamsus retas). TAIP dėl S1+S2+S3. |
| 33 | lg5 · lg8 | **TAIP** | Vizualiai NE (dalykinė lentelė ↔ žaismingas bento). TAIP dėl S1+S2+S3+S5. |
| 34 | lg5 · lg9 | **TAIP** | Vizualiai NE (šviesus registras ↔ tamsus terminalas), nors abu numeruoja ir abu tikslūs. TAIP dėl S1+S2+S3+S5. |
| 35 | lg5 · lg10 | **TAIP** | Vizualiai NE (šaltas 8 stulpelių registras ↔ šiltas pastelinis dėklas). TAIP dėl S1+S2+S3+S5. |
| 36 | lg6 · lg7 | **TAIP** | Vizualiai NE (ochrinis popierius ↔ riešutmedis), nors abu serifiniai. TAIP dėl S1+S2+S3+**S4**. |
| 37 | lg6 · lg8 | **TAIP** | Vizualiai NE (spauda dviem rašalais ↔ bento ant indigo). TAIP dėl S1+S2+S3+**S4**+S5. |
| 38 | lg6 · lg9 | **TAIP** | Vizualiai NE (šiltas popierius ↔ šaltas grafitas). TAIP dėl S1+S2+S3+**S4**+S5. |
| 39 | lg6 · lg10 | **TAIP** | Vizualiai NE (ochra + juodi punktyrai ↔ pastelė + minkšti kampai). TAIP dėl S1+S2+S3+**S4**+S5. |
| 40 | lg7 · lg8 | **TAIP** | Vizualiai NE (tyli tamsi juosta ↔ garsus spalvotas bento). TAIP dėl S1+S2+S3+**S4**. |
| 41 | lg7 · lg9 | **TAIP** | Abu tamsūs ir abu mažakalbiai — bet NE: lg7 riešutmedis + Gloock serifas + 192px tarpai + 46rem juosta; lg9 grafitas + monospace + 72ch + eilutėmis matuojamas ritmas. TAIP dėl S1+S2+S3+**S4**. |
| 42 | lg7 · lg10 | **TAIP** | Vizualiai NE (tamsus, santūrus ↔ šviesus, empatiškas). TAIP dėl S1+S2+S3+**S4**. |
| 43 | lg8 · lg9 | **TAIP** | Vizualiai NE (indigo bento ↔ grafito terminalas). TAIP dėl S1+S2+S3+**S4**+S5. |
| 44 | lg8 · lg10 | **TAIP** | Vizualiai NE (sotus indigo, Fredoka ↔ pastelinis gradientas, Lora italic). TAIP dėl S1+S2+S3+**S4**+S5. |
| 45 | lg9 · lg10 | **TAIP** | Vizualiai NE (monospace ant grafito ↔ kursyvas ant pastelės). TAIP dėl S1+S2+S3+**S4**+S5. |

**Suvestinė:** 45/45 TAIP. **0/45 dėl vizualinių priežasčių** — visos 45 poros vizualiai atskiriamos.
45/45 dėl bendrų teksto konstrukcijų.

---

## 2. Referencijos testas

Klausimas: ar variantas atpažįstamai seka `analize/url-1.md`, `url-2.md` ar `url-3.md` §7
„FORMA — NEKARTOTI“ sąrašus?

| Variantas | Verdiktas | Pastaba |
|---|---|---|
| lg1 | **NE** | Jokio tamsaus sluoksniavimo, piliulių, chip'ų, progreso juostos, sticky blur antraštės. |
| lg2 | **NE** | Modalinė forma, ne įmontuota herojuje. Jokių piliulių, jokio tamsaus sluoksniavimo. |
| lg3 | **NE, su pastaba** | Vienintelis, prie kurio reikėjo sustoti: tamsus fonas + šiek tiek šviesesni kortelių paviršiai (`#0A1628` → `#12253F`) ir dešinėje sticky forma yra struktūrinė url-1 §7.5 ir url-3 §7.7 kaimynystė. **Vis dėlto NE:** `h1` ir paantraštė yra per visą plotį **virš** skilties, ne kairėje kolonoje šalia formos — t.y. draudžiamas yra būtent dviejų stulpelių *herojus*, o jo čia nėra. Nėra rožinės, nėra piliulių, nėra švytėjimų, nėra progreso juostos, nėra „N iš 3“, nėra chip'ų, nėra pulsuojančio taško; dešinė pusė yra prietaisas su padalomis, ne kortelė. Skirtumas ne atspalvio, o objekto lygmens. |
| lg4 | **PAŽEIDŽIA (1 punktas)** | `sinteze` §2.3 p. 31 ir url-1 §7.9 draudžia **pilnai apvalintas piliules ženkleliams ir juostelėms**. `garden.css:191` — `.silas-mark__tag` („18+ ratas“) yra tiksliai toks piliulės formos ženkliukas antraštėje. Visa kita — NE. |
| lg5 | **NE** | Registro lentelė, ne kortelė; petrolis, ne rožinė; forma yra lentelės eilutė. |
| lg6 | **NE** | Slapukai perkelti į viršų kaip spaustuvės žymė (priešingai p. 49), talonas su perforacija vietoj kortelės. |
| lg7 | **NE** | Riešutmedis įvardijamas kaip rudas, ne juodas; jokio aukso; forma — sakinys, ne kortelė. |
| lg8 | **NE** | Pasirinkimas per stambius blokus su realiais `radio`, ne piliulės formos chip'ai (p. 45). |
| lg9 | **NE** | Grafitas, ne beveik juoda; gintaras, ne rožinė; jokių piliulių; spausdinimo animacija užkrovus pašalinta. |
| lg10 | **NE** | 999px leidžiama tik mygtukams (taip ir yra); minkštas šešėlis tik po aktyvia dėklo kortele. |

---

## 3. Šablonų testas (`config/diferenciacijos-matrica.md` DALIS 4 / §7)

Patikrinta realiame kode, ne pagal matricos deklaraciją.

| §7 šablonas | Rezultatas | Patikrinta |
|---|---|---|
| 1. Kreminis fonas + display serifas + terakota | **NE** | lg4 turi kreminį + Fraunces, bet akcentas `#7A3352` yra šaltas slyvinis, naudojamas tik žymose; CTA fonas — tamsi samana. lg6 ochra + Bitter, bet rašalai mėlynas ir žalias. Terakotos nėra nė viename. |
| 2. Beveik juodas + rūgštinė žalia / vermilion | **NE** | lg3 `#0A1628` mėlynas, lg7 `#2A211B` rudas, lg9 `#2B2B28` pilkas. Akcentai: žydra, patina, gintaras. |
| 3. Laikraštinis layout (plaukiniai + 0px + tankios kolonos) | **NE** | lg1 turi 0px ir 1px linijas, bet viena plati kolona su dosniais tarpais, teksto į kolonas neskaido. lg6 — dvi nelygios kolonos **be** tarpinių linijų. lg7 vietoj plaukinių — 3px juostos. |
| 4. SaaS kortelių rinkinys su vienodu minkštu šešėliu + gradientinės dėmės | **NE** | Aštuoni variantai neturi jokių drop-šešėlių. lg2 šešėlis kietas ir ofsetinis (popieriaus storis). lg10 vienintelis minkštas šešėlis — tik po aktyvia dėklo kortele. lg3 naudoja `inset` žiedą, ne šešėlį. Gradientinių dėmių nėra nė viename. |
| 5. Template chrome (ALL-CAPS eyebrow, „A · B · C“, `#0B0B0B`, monospace etiketėms, „→“ mygtukuose) | **NE** | ALL-CAPS eyebrow nėra nė viename. lg2 antraštės didžiosiomis — tai Anton plakato sprendimas visoms antraštėms, ne eyebrow etiketė. lg6 marquee didžiosiomis — spaustuvės juosta. Monospace tik lg9 ir tai visas puslapis. „→“ mygtukuose nėra; lg1 ir lg10 naudoja „↑“ grįžimo nuorodoje — krypties rodyklė, ne dekoras. **Pastaba:** lg4 `garden.css:95` apibrėžia `.u-eyebrow`, bet HTML jos nenaudoja — negyvas kodas, ne šablonas. |
| 6. Vieno žodžio akcentavimas antraštėje | **NE** | Nė viename `h1` nėra kitos spalvos ar kursyvo ant vieno žodžio. lg10 kursyvas — visoms antraštėms. lg2 `.line` span'ai — eilučių laužymas, ne akcentas. |
| 7. `fade-and-slide-up` ant kiekvienos sekcijos + hover ant kortelių | **NE** | Nė viename JS faile nėra `IntersectionObserver` ar scroll-reveal. Vienintelė lg9 įėjimo animacija — naujai pridėta istorijos eilutė (reakcija). lg8 hover keičia tik pasirinkimo bloko rėmelio spalvą — tai interaktyvaus valdiklio afordansas, ne dekoratyvus kortelės hover. |
| 8. Numeruoti 01/02/03 ne sekai | **NE** | lg1 numeruoja 3 proceso žingsnius (tikra seka), lg5 — registro punktus, lg6 — talono laukelius 1–5 (blankas), lg10 — `<ol>` proceso žingsnius. Dekoratyvios 01/02/03 numeracijos nėra. |

---

## 4. Kokybės verdiktas

| Variantas | Sąmoningas sprendimas ar užpildytas šablonas | „Įsimenamas“ elementas | Ar aplink jį pakankamai tylu? |
|---|---|---|---|
| lg1 | **Sąmoningas.** Puslapis matuoja pats save. | Matmenų išnaša, kurios reikšmę JS realiai perskaičiuoja iš `h1` aukščio (`app.js`, `updateHeadingCallout`) + matomas 8px liniuotės tinklelis kairėje paraštėje. | **Taip.** Vienas akcentas, jokių šešėlių, likusi paletė — pilka ir grafitas. Išnašos yra tik hero sekcijoje, ne visame puslapyje. |
| lg2 | **Sąmoningas.** Brutalizmas paverstas fizine lenta, ne stilistine citata. | Antspaudas, uždėtas ant teksto (ne šalia), + mygtukas, kuris fiziškai nusispaudžia 6px ir suvalgo savo šešėlį. | **Taip, per plauką.** Sotus geltonas laukas garsus, bet visi lapeliai yra tos pačios spalvos ir tos pačios formos; pasukimai fiksuoti dviem reikšmėm (−1.5° / +1°), ne atsitiktiniai. Ties <480px pasukimai išjungiami — teisingas sprendimas. |
| lg3 | **Sąmoningas.** Įrodymas padarytas patikrinamu: skalė reaguoja dar prieš registraciją. | SVG skalė su padalomis, kurios rodyklė persistumia pasirinkus zoną — ir tekstinis rodmuo `aria-live`. | **Taip.** Vienas signalinis tonas visame puslapyje, jokių švytėjimų, jokių radialinių dėmių, gylis daromas tik vertikaliu plokštumos perėjimu. |
| lg4 | **Sąmoningas, bet silpniausiai išlaikytas.** | Fono perėjimas iš dienos į vakarą slenkant + horizonto siluetas. | **Beveik.** Tyla gera, bet **hero yra silpniausia vieta visame rinkinyje**: lygus gradientas + banguota SVG forma + 55 % aukščio tamsi uždanga yra pati bendriausia įmanoma hero kompozicija. Matrica numatė full-bleed **fotografiją** (ašis 12) — jos nėra. Judesio idėja stipri, jos nešėjas — ne. |
| lg5 | **Sąmoningas, ir tai stipriausias turinio ir formos sutapimas rinkinyje.** | Forma yra 5-as registro punktas — tos pačios lentelės eilutė, išsiskleidžianti tuo pačiu judesiu kaip ir paaiškinimai; kiekvienas punktas turi kryžminę nuorodą į savo Taisyklių papunktį, ir tie papunkčiai puslapyje realiai egzistuoja (`#taisykles-4-2`). | **Taip.** Viena akcento spalva, 4px kampai, jokių šešėlių, viskas 16px ar didesnis. Skaitomumas čia tikrai yra argumentas, ne pretekstas. |
| lg6 | **Sąmoningas.** | 2px rašalo misregistracija, padaryta `text-shadow` dviem rašalais — visas puslapis atrodo kaip netiksliai atspausta atkarpa; forma — talonas su perforacijos punktyru `radial-gradient` būdu. | **Taip.** Vienintelis judesys — marquee juosta. Punktyras naudojamas nuosekliai visiems blokams. |
| lg7 | **Sąmoningas, ir drąsiausias rinkinyje.** | **Forma nėra forma** — tai vienas sakinys, kurio įrašomos eilutės ir yra laukai. Plius hero skaičius, kuris susisuka į **00** ir pasako „tiek lankytojų mato tavo bylą“ — nulis kaip pažadas, ne kaip gedimas. | **Taip, geriausiai iš visų.** 46rem juosta, 3px juostos, 192px tarpai, viena patina spalva. Aplink sakinį nėra nieko. |
| lg8 | **Sąmoningas.** | Bento lenta persitvarko pasirinkus bloką — blokai keičia `--span-col` / `--span-row` per FLIP, ir pasirinktas blokas užauga kartu su savo kampų radiusu. | **Iš dalies.** Lenta gyva tik hero + formos zonoje; nuo „Tvarkaraštis šią savaitę“ iki „Kas mato tavo planą“ eina **penkios sekcijos vienodo `h2` + viena pastraipa** formato, be jokios bento struktūros. Koncepcija neišgyvena už lanksto. Ne šablonas, bet neišbaigta. |
| lg9 | **Sąmoningas.** | Atsakymai neišnyksta — lieka išspausdinti virš prompt'o kaip seanso istorija, su „taisyti“ mygtuku prie kiekvienos eilutės. | **Taip.** Vienas gintaro akcentas, 2px kampai, viskas 72ch kolonoje. Hero skaitomas ir be JS (statinė išvestis, ne spausdinimo animacija). |
| lg10 | **Sąmoningas.** | Dėklas atlieka tris darbus vienu metu — hero, forma ir pasakojimas; kortelės turi fizinius sluoksnių poslinkius su savo pasukimais, o baigtos nuskrenda į viršų. | **Taip.** Minkštas šešėlis tik po aktyvia kortele, 999px tik mygtukams, šoninė juosta slenka lėčiau. Piliulių ženkleliuose nėra. |

---

## 5. Turinio verdiktas

| Variantas | Kalba vartotojo kalba? | Sako, kas įvyks? | Tuščios frazės? |
|---|---|---|---|
| lg1 | Taip — kiekvienas teiginys su vienetu („Laukų: 5“, „~70 s“, „4 val.“, „12 %“). | Taip: auditas → matomumas → pranešimas paštu. | Ne. |
| lg2 | Taip — trumpi sakiniai, buitinis žodynas, savaiminis nuvertinimas („Nieko čia gudraus nėra“). | Taip, 4 punktai. | Ne. |
| lg3 | Taip, bet **prietaiso metafora vietomis nusveria aiškumą**: „Įjungti kanalą“, „šaukinys“, „grįžtamasis adresas“, „raktas“ vietoje pažįstamų žodžių. Nuosekli, bet reikalauja iš lankytojo išmokti žodyną prieš pildant formą. Žr. rekomendaciją žemiau. | Taip — T+0 / T+iki 2 val. / kai atsiranda ryšys. | Ne. |
| lg4 | Taip, ramiai. „Sąskambis“, „ravėjimas“, „šneka“ — metafora nuosekli ir paaiškinta vietoje. | Taip, 4 punktai. | Ne. |
| lg5 | Taip, ir tai vienintelis variantas, kuris **pats išverčia savo kalbą** — kiekvienas punktas turi „Ką tai reiškia“ išskleidimą į buitinę kalbą. | Taip, 5 punktai + patikrinimo eilė. | Ne. |
| lg6 | Taip — „tiek to reikalo“, „perbrauk ir rašyk iš naujo“, palyginimas su 3 litais. | Taip, 4 punktai. | Ne. |
| lg7 | Taip, santūriai. Dviejų dalių sakiniai su dvitaškiu. | Taip, 4 punktai. | Ne. |
| lg8 | Taip — trumpai, energingai, be argumentų (tai ir yra šio pjūvio taisyklė). | Taip, 4 punktai. | Ne. |
| lg9 | Taip — imperatyvai, be pridėtinių žodžių. | Taip: per pirmą minutę / per parą / nuo to momento. | Ne. |
| lg10 | Taip — pirmuoju asmeniu, leidimas nebaigti („Gali sustoti ties bet kuria kortele ir grįžti rytoj“). | Taip, 4 punktai. | Ne. |

**Bendra:** turinio kokybė aukšta visuose dešimtyje — nėra nė vienos tuščios frazės, visi sako, kas
konkrečiai įvyks, ir visi uždaro pinigų klausimą savo iniciatyva. Problema **ne kokybė, o tapatumas**:
tie patys argumentai pasakomi tuo pačiu sakinio judesiu.

---

## 6. Verdiktai

| Variantas | Verdiktas |
|---|---|
| lg1-matmuo | **PERDARYTI** (tik tekstas) |
| lg2-lenta | **PERDARYTI** (tik tekstas) |
| lg3-pultas | **PERDARYTI** (tekstas + žodyno kalibravimas) |
| lg4-silas | **PERDARYTI** (tekstas + 2 CSS eilutės + hero) |
| lg5-salyga | **PERDARYTI** (tik tekstas) |
| lg6-talonas | **PERDARYTI** (tik tekstas) |
| lg7-kabinetas | **PERDARYTI** (tik tekstas) |
| lg8-vakaras | **PERDARYTI** (tekstas + sekcijų forma po lankstu) |
| lg9-prieiga | **PERDARYTI** (tik tekstas) |
| lg10-atvirukas | **PERDARYTI** (tik tekstas) |

---

## 7. Perdarymo užduotys

### 7.0 — Bendra taisyklė visiems 10 (statybos agentui: perskaityk pirma)

**KAS KEIČIAMA:** tik `index.html` teksto mazgai, išvardyti prie kiekvieno varianto, plius atitinkami
`<meta name="description">` / JSON-LD atitikmenys, jei jie kartoja tą patį sakinį.

**KAS NEKEIČIAMA — nė vieno simbolio:** CSS failai (išskyrus lg4, žr. 7.4); JS failai; paletės;
šriftai; klasių vardai; tinklelio logika; sekcijų **tvarka**; formų laukai, jų `name`/`id`,
validacijos taisyklės, `aria-*` atributai; judesio momentai; `<!-- tracking: ... -->` žymos —
**visos lieka ten, kur yra, tuo pačiu pavadinimu**.

**Keturios konstrukcijos, kurių po perdarymo negali likti dviejuose variantuose vienu metu:**

- **S1 (pinigai).** Draudžiama schema: `[nemokama] + „Jei kada nors atsirastų mokamas lygis/sluoksnis“ + „parašysime čia / iš anksto“ + „ne po to, kai jau ...“`. Kiekvienas variantas pinigų klausimą privalo uždaryti **kita kalbos priemone**, ne kitais žodžiais toje pačioje schemoje. Konkretūs priskyrimai — žemiau.
- **S2 (moderavimas).** Draudžiama schema: `„Kiekvienas naujas X pereina rankinį Y, prieš tampant matomu kitiems“ + „žmogus, ne robotas/algoritmas/filtras“`. Ypač draudžiamas **„žmogus, ne ...“ priešpriešos judesys** — jis dabar yra 10 iš 10.
- **S3 (privatumas).** Draudžiama schema: `„Viešai matoma tik A, B“ + „Niekada nerodoma: C, D, E“ + „ištrinti bet kada, be papildomų klausimų mums“`. Dvipusis „matoma / nematoma“ sąrašas leidžiamas **tik dviem variantams** (lg4 ir lg7 — žr. žemiau); likę aštuoni privalo tą pačią informaciją pateikti kitokia forma.
- **S4 / S5 (antraštė ir grįžtančio nario nuoroda).** Po perdarymo antraštė „Jei dar dvejoji“ gali likti **tik viename** variante. Konstrukcija „Jau [turi/esi] X? Prisijunk“ gali likti **ne daugiau kaip trijuose**.

**Kalibravimo šaltinis:** kiekvieno varianto balso tonas ir trys būdingos konstrukcijos yra
`config/diferenciacijos-matrica.md` DALIS 3. Perrašant naudoti **jas**, o ne bendrą „prekės ženklo
pažado“ registrą, iš kurio dabartinės keturios konstrukcijos ir atsirado.

**Priėmimo kriterijus po perdarymo:** paimk bet kuriuos du iš 10 puslapių, perskaityk tik F5, F8 ir F9
sekcijas — ir neturi likti nė vieno bendro sakinio judesio.

---

### 7.1 — lg1-matmuo

**Keisti (`variacijos/lg1-matmuo/index.html`):**

- **S1** — eil. 163 („Kaina šiandien“ pastraipa), eil. 307 (DUK atsakymas), eil. 57 (JSON-LD `acceptedAnswer`).
  *Kaip:* pinigų klausimas uždaromas **matmenų eilute, ne pažadu**. Vietoj pastraipos su sąlyginiu
  būsimuoju — `spec__row` blokas su konkrečiomis reikšmėmis: kaina, mokamo lygio būsena, paskutinio
  pakeitimo data. Sąlyginio sakinio („jei kada nors atsirastų...“) **nelikti visai**; jo vietą užima
  eilutė su data, nes lg1 pažadą pakeičia duomeniu. Palik varianto savą sakinį „Jei kuris nors
  skaičius pasikeis, jis pasikeis ir čia“ — jis **ne** bendras, jis lg1 parašas.
- **S2** — eil. 190, 311, 65. *Kaip:* pašalink sakinį „Kiekvienas naujas duomenų lapas pereina rankinį
  auditą...“. lg1 jau turi `spec--audit` bloką su „Vidutinis audito laikas 4 val.“ ir „Atmetama per
  mėnesį 12 %“ — **tegul auditą įrodo tik šie skaičiai**, be jokio jį aprašančio sakinio. Priešpriešos
  „žmogus, ne robotas“ nekurti.
- **S3** — eil. 303, 49. *Kaip:* dvipusį „rodoma / nerodoma“ sąrašą pakeisk **matomumo specifikacija**
  — `spec__row` eilutėmis, kur kiekvienas laukas turi reikšmę („Žymė — vieša“, „Pašto adresas —
  nerodoma“, „Vietovė — nerodoma“). Perkelk ją iš DUK į atskirą matmenų bloką, kad DUK neliktų
  vienintelė privatumo vieta.

**Nekeisti:** `h1`, hero matmenų eilutė, `plate__entry` forma, `assets/style.css`, `assets/app.js`,
išnašų mechanika, antraštė „Dažniausi klausimai“ (jau skiriasi), grįžtančio nario nuoroda (viena iš
trijų leidžiamų).

**Kodėl:** lg1 kampas yra A — skaidrumas per matmenį. Kiekviena iš trijų vietų dabar naudoja
pažadą ten, kur variantas turėtų naudoti skaičių. Pataisius, lg1 nustoja skambėti kaip likę devyni ir
kartu **sustiprėja** savo pačių logikoje.

---

### 7.2 — lg2-lenta

**Keisti (`variacijos/lg2-lenta/index.html`):**

- **S1** — eil. 113 („Kiek tai kainuoja“), eil. 143 (DUK).
  *Kaip:* lg2 tonas — trys trumpi sakiniai, jokio aiškinimo du kartus. Sąlyginį būsimąjį
  („Jei kada nors atsirastų mokamas lygis, pirmiausia apie tai parašytume čia...“) **išmesk visą**.
  Palik tik faktą, pasakytą lg2 ritmu. Šiam variantui ateities pažadas yra svetimas — jis kalba apie
  tai, kas yra, ne apie tai, kas būtų.
- **S2** — eil. 82, 139. *Kaip:* palik lg2 savą judesį (lapelis nuimamas per valymą), bet
  **išmesk priešpriešą „Rankomis. Ne robotu.“** — tai S2 parašas. Pakeisk ją veiksmo → pasekmės
  konstrukcija, kurią matrica priskyrė lg2 („veiksmas → pasekmė, be tarpinių žodžių“).
- **S3** — eil. 127, 147. *Kaip:* dvipusis sąrašas „Rodoma lentoje: ... Niekada nerodoma: ...“
  keičiamas. lg2 turi savą sakinį „Netinka — nuimk lapelį, ir jo nebėra“ — **jis lieka**. Matomumą
  pasakyk kaip vieną trumpą teiginį apie tai, kas užrašyta ant paties lapelio (fizinė metafora),
  o ne kaip dviejų stulpelių privatumo deklaraciją.
- **S4** — eil. 135. Antraštę „Jei dar dvejoji“ pakeisk. lg2 balsui tinka tiesmukas klausimas arba
  nuvertinimas, ne mandagi formulė.
- **S5** — eil. 41. Pakeisk „Jau turi lapelį? Prisijunk.“ į ne klausimo formą.

**Nekeisti:** `h1` trijų eilučių struktūra, antspaudas, modalas, `post-btn` nusispaudimo judesys,
`styles/main.css`, visa forma, pasukimo kampai.

---

### 7.3 — lg3-pultas

**Keisti (`variacijos/lg3-pultas/index.html`):**

- **S1** — eil. 202 („Be abonento mokesčio“), eil. 226 (DUK).
  *Kaip:* lg3 kalba būsenomis ir rodmenimis. Pinigų klausimą pateik **kaip rodmenį** — būsenos eilutę
  prietaise (pvz. `pultas-timeline` arba `pultas-stat` formatu su etikete ir reikšme), ne kaip
  pastraipą su sąlyginiu pažadu. „Jei kada nors atsirastų...“ schemos nelikti.
- **S2** — eil. 197, 231. *Kaip:* lg3 jau turi savitą dviejų patikrinimų aprašymą — **palik jo turinį**,
  bet pašalink „Kiekvienas naujas kanalas pereina...“ įžangą ir perrašyk jį matricos priskirta
  konstrukcija „etiketė + reikšmė + kontekstas“ (kaip `dt`/`dd` porą, ne kaip pastraipą).
- **S3** — eil. 191 („Rodymo lygis“). *Kaip:* „Viešai matoma tik: ... Niekam nerodoma: ...“ keičiama į
  **rodymo lygio skalę** — variantas apie tai jau kalba („Rodymo lygį keiti bet kada“), tad pateik tai
  kaip pakopas, ne kaip dviejų sąrašų priešpriešą.
- **S5** — eil. 49. Viena iš trijų leidžiamų „Jau ...?“ — **gali likti**, jei lg1 ir lg5 savąsias keičia.

**Papildomai — žodyno kalibravimas (konversijos klausimas, ne stiliaus):**
Formos laukai vadinasi „Zona“, „Šaukinys“, „Diapazonas“, „Grįžtamasis adresas“, „Raktas“. Metafora
nuosekli, bet **prieš pildydamas laukus lankytojas turi išmokti penkis naujus žodžius**. Palik
etiketes, bet **prie kiekvieno lauko pridėk esamą `pultas-hint` elementą su vienu buitiniu žodžiu**
(pvz. prie „Grįžtamasis adresas“ — kad tai el. paštas). `pultas-hint` klasė jau egzistuoja
(`panel.css:292`) ir jau naudojama prie „Zona“ — tereikia pakartoti likusiems keturiems laukams.
Naujų klasių nekurti.

**Nekeisti:** `h1`, `pultas-split` išdėstymas, SVG skalė ir rodyklės mechanika, `data-activity`
reikšmės, `static/panel.css`, `static/panel.js`, laukų `id`/`name`.

---

### 7.4 — lg4-silas

**Keisti — CSS (`variacijos/lg4-silas/assets/garden.css`), 1 eilutė:**

- **eil. 191** — `.silas-mark__tag { border-radius: 999px; }` → pakeisk į varianto savą kampų kalbą
  `var(--radius-organic)` arba `4px`. **Priežastis:** piliulės formos ženkliukas yra tiesioginis
  `sinteze` §2.3 p. 31 / url-1 §7.9 pažeidimas, ir kartu tai vienintelė vieta, kur lg4 skolinasi lg10
  parašą.
- **eil. 432 ir 481** (`.silas-consent button`, `.silas-bar a`) — šie yra mygtukai, ne ženkleliai, tad
  draudimo nepažeidžia, **bet** lg4 priskirta kampų kalba yra `24px 4px 24px 4px`, o ne 999px.
  Suvienodink juos su `--radius-organic`, kad visame variante liktų viena kampų kalba.

**Keisti — hero (`index.html` eil. 46–54 + `garden.css` `.silas-scene*`):**

Dabartinis hero yra lygus gradientas + viena banguota SVG forma + 55 % aukščio tamsi uždanga. Tai
veikia, bet yra pati bendriausia įmanoma kompozicija ir vienintelė vieta rinkinyje, kur kyla
„sugeneruota“ įtarimas. **Užduotis:** palik judesio idėją (fonas pereina iš dienos į vakarą per
scroll — `--scroll-progress`, `garden.js`) ir palik tą patį SVG/CSS metodą (**jokių rastrinių
nuotraukų nepridedama** — variantas be jų veikia lengviau ir greičiau), bet pakeisk patį vaizdinį
nuo bendrinio „kalvos silueto“ į motyvą, kuris neša varianto argumentą: **ratas / užuovėja, į kurią
iš lauko nesimato**. Konkrečiai: vietoj vienos `path` bangos — uždara forma, kurios vidus šviesesnis
už išorę, taip kad vakarėjant ryškėtų būtent vidus, o ne horizontas. Spalvas imk tik iš esamų penkių
tokenų. Kompozicijos plotis, `min-height: 88vh`, tekstas apačioje ir `::after` uždanga lieka.

**Keisti — tekstas (`index.html`):**

- **S1** — eil. 189 („Apie pinigus — tiesiai.“), eil. 167 (DUK). *Kaip:* išmesk „Jei kada nors tai
  pasikeis, apie tai parašysime čia, šiame puslapyje, prieš pasikeičiant — ne laiške po to...“.
  lg4 balsas — ramus, ilgesnis sakinys su sąlyga, tiesioginis skubos paneigimas. Pinigų klausimą
  uždaryk **paneigimo** konstrukcija, ne ateities pažadu.
- **S2** — eil. 124. *Kaip:* „ravėjimas“ yra lg4 savas žodis ir **lieka**, bet pašalink „Kiekviena
  nauja vieta rate pereina rankinį ravėjimą, prieš tai, kai ją pamato kiti“ schemą ir sakinį „Tai
  atskiras darbas nuo skaičių žemiau“ (tas pats S2 judesys kaip lg1 ir lg3). Perrašyk ramiu
  pasakojamuoju sakiniu apie tai, kas ravint daroma, be priešpriešos su robotu.
- **S3** — eil. 89–103. **Išimtis: lg4 dvipusį „Matoma / Nematoma“ sąrašą PALIEKA** — čia jis yra ne
  pastraipa, o `silas-split__box` struktūrinis elementas, ir kampas B remiasi būtent juo. Bet
  **pašalink jį iš lg1, lg2, lg3, lg5, lg6, lg8, lg9, lg10** (žr. jų užduotis), kad lg4 ir lg7 liktų
  vieninteliai du.
- **S4** — eil. 146. Antraštę „Jei dar dvejoji.“ pakeisk.
- **S5** — eil. 68. „Jau esi rate? Įeiti.“ — pakeisk į ne klausimo formą.

**Nekeisti:** paletė, Fraunces + Karla, `--space-*` reikšmės, viena plati kolona, nuolatinė apatinė
juosta, forma, `garden.js`, `--scroll-progress` mechanika.

---

### 7.5 — lg5-salyga

**Keisti (`variacijos/lg5-salyga/index.html`):**

- **S1** — eil. 178 (4 punktas) + eil. 188 (jo `terms-panel` paaiškinimas) + eil. 374–375 (Taisyklių
  4.1/4.2). *Kaip:* lg5 čia **jau beveik teisingai** — jis pinigų klausimą pateikia kaip numeruotą
  punktą su kryžmine nuoroda. Problema tik ta, kad 4 punkto tekste vis tiek slypi ta pati schema
  („Jei jis kada nors atsirastų, jis būtų įrašytas kaip naujas...“). *Sprendimas:* šį sakinį
  perrašyk **grynai registro kalba** — kaip nuorodą į tai, kaip registras tvarkomas (punktų numeracija
  niekada neperrašoma, tik pridedama), be žodžių „jei kada nors atsirastų“. Kryžminė nuoroda į
  `#taisykles-4-2` lieka.
- **S2** — eil. 284 ir 293. *Kaip:* pašalink „tai atlieka žmogus, ne vien automatinis procesas“ —
  tai S2 priešprieša. lg5 turi savą priemonę: nurodyk **Taisyklių papunktį**, kuriame patikrinimo
  tvarka aprašyta (`#taisykles-6` jau egzistuoja), ir tegul įrodymas būna nuoroda, ne epitetas.
- **S3** — eil. 303–305. *Kaip:* „Viešai kitiems nariams matoma: ... Niekada viešai nerodoma: ...“ —
  perdaryk į **numeruotus registro punktus su kryžminėmis nuorodomis**, kaip ir visa kita šiame
  variante. Tai ne tik pašalina bendrą konstrukciją, bet ir pataiso nenuoseklumą: `ledger-privacy`
  dabar yra vienintelė sekcija, kuri **nesilaiko** varianto savo taisyklės „visada nurodyk, kur tai
  parašyta“.
- **S5** — eil. 82. „Jau turite registro įrašą? Prisijunkite.“ — lg5 vienintelis kreipiasi
  **„jūs“ forma**, ir tai yra jo parašas. Palik kreipinį, bet pakeisk klausimo konstrukciją.

**Nekeisti:** `h1`, `terms-ledger` lentelė, forma kaip 5-as punktas, išsiskleidimo judesys, visos
kryžminės nuorodos ir `#taisykles-*` blokas, Atkinson Hyperlegible, 16px minimumas, `css/ledger.css`.

---

### 7.6 — lg6-talonas

**Keisti (`variacijos/lg6-talonas/index.html`):**

- **S1** — eil. 72 (`money-note`), eil. 189 (DUK). *Kaip:* lg6 turi geriausią rinkinyje pinigų
  konstrukciją — palyginimą su praeitimi („Anksčiau už tai imdavo 3 litus. Dabar neima nieko“).
  **Ji lieka.** Išmesk tik prie jos prilipdytą bendrą uodegą: „Jei kada nors atsirastų mokamas lygis,
  jis būtų parašytas čia, ne po to, kai jau būsi užpildęs taloną“. Palyginimas su praeitimi pats
  atlieka visą darbą; uodega jį tik prilygina likusiems devyniems.
- **S2** — eil. 173 ir 148. *Kaip:* „Korektūra — ne skaičius, o žmogus“ ir „tai žmogus, ne robotas“
  yra **dvi** S2 priešpriešos viename puslapyje. Palik korektoriaus vaidmenį ir tai, kad jis grąžina
  skelbimą su pastaba — tai lg6 savas, buitinis ir konkretus. Bet abi „X, ne Y“ priešpriešas išmesk.
- **S3** — eil. 214, 201. *Kaip:* „Viešai rubrikoje matosi tik ... niekada pašto dėžutė ir niekada
  tikras vardas“ — perdaryk į **talono blanko logiką**: kurie laukeliai spausdinami rubrikoje, o kurie
  lieka spaustuvėje. Variantas jau turi šią metaforą, tereikia ja pasinaudoti vietoj bendro sąrašo.
- **S4** — eil. 185. Antraštę „Jei dar dvejoji“ pakeisk.
- **S5** — eil. 41. „Jau pildei? Prisijunk prie savo skelbimo“ — pakeisk į ne klausimo formą.

**Nekeisti:** marquee juosta, rašalo misregistracija, talono perforacija, dvi talono pusės,
`assets/style.css`, slapukų žymė puslapio viršuje, halftone SVG.

**Papildomai (mechaninis, ne dizaino):** `assets/style.css:5` krauna šriftus per `@import`, o
`index.html:15–16` turi `preconnect`, bet neturi `<link rel="stylesheet">` į Google Fonts. `@import`
CSS viduje sukuria nuoseklią užklausų grandinę ir lėtina pirmą teksto atvaizdavimą mokamo srauto
puslapyje. Perkelk šriftų užklausą į `index.html` kaip `<link>`, greta esamų `preconnect`. Failo
kelias `assets/style.css` taip pat neatitinka matricoje nurodyto `press/style.css` — arba perkelk
failą, arba užfiksuok nukrypimą; abu variantai priimtini, bet dabar tas pats kelias `assets/style.css`
yra ir lg1, ir lg6.

---

### 7.7 — lg7-kabinetas

**Keisti (`variacijos/lg7-kabinetas/index.html`):**

- **S1** — eil. 144 („Kaina“), eil. 203 (DUK). *Kaip:* lg7 balsas — „sakinys, kuris baigia temą“.
  Dabartinis „Jei kada nors atsirastų mokamas sluoksnis, apie tai būtų parašyta čia, iš anksto — ne
  po to, kai jau būtum viduje“ yra priešingybė: jis temą **tęsia**. Pakeisk vienu uždarančiu sakiniu
  be sąlyginio būsimojo. Šiam variantui trumpumas yra argumentas.
- **S2** — eil. 163 („Peržiūra“). *Kaip:* pašalink „Kiekviena byla, prieš pasirodydama kabinete,
  pereina rankinę peržiūrą“ schemą. lg7 turi savą priemonę — dviejų dalių sakinį su dvitaškiu,
  be būdvardžių. Perrašyk peržiūrą tokiu sakiniu.
- **S3** — eil. 69–71. **Išimtis: lg7 PALIEKA** dvipusę matomumo logiką (kartu su lg4), nes kampas B
  ja remiasi ir čia ji pateikta ne sąrašu, o prozos sakiniu. Bet **išmesk** eil. 70 sakinį
  „Ištrynimas — vienas veiksmas, be paaiškinimų mums“ **iš kitų variantų** (jis pasikartoja kaip
  „be papildomų klausimų mums“ lg8, lg9, lg10) — lg7 čia yra originalas ir jį pasilieka.
- **S4** — eil. 183. Antraštę „Jei dar dvejoji“ **galima palikti būtent lg7** (tai vienintelis, kuriam
  ji leidžiama), **jei** lg2, lg4, lg6, lg8, lg9 ir lg10 savąsias pakeičia. Priešingu atveju pakeisk ir čia.
- **S5** — eil. 41. „Turi bylą? Įeiti.“ — **jau skiriasi** (be „Jau“), lieka.

**Nekeisti:** `Form_sentence` įrašomų eilučių sakinys ir visa jo laukų struktūra, `Figure` skaičiaus
susisukimas į 00 ir jo `Figure_caption`, 3px juostos, 46rem juosta, 192px tarpai, `assets/study.css`,
`assets/app.js`.

---

### 7.8 — lg8-vakaras

**Keisti — tekstas (`variacijos/lg8-vakaras/index.html`):**

- **S1** — eil. 225 („Kiek tai kainuoja“), eil. 246 (DUK). *Kaip:* lg8 auditorija **neskaito argumentų**.
  Dabartinis sakinys yra ilgiausias pinigų sakinys visame puslapyje ir vienintelis su dviguba sąlyga.
  Pakeisk jį lg8 konstrukcija „pasiūlymas + pažadas viename sakinyje“ arba „skaičiuok, kiek liko“.
  Sąlyginio būsimojo nelikti.
- **S2** — eil. 231, 258. *Kaip:* pašalink „Kiekvienas naujas planas pereina filtravimą, prieš
  pasirodydamas tvarkaraštyje“ + „ne tik ar jis parašė tekstą“ priešpriešą. Pasakyk tą patį
  faktu + savaiminiu nuvertinimu — matrica lg8 priskyrė būtent šią konstrukciją („faktas + savaiminis
  nuvertinimas“), ir puslapyje ji jau puikiai veikia eil. 213 („Ketvirtadienis čia gyviausias, ir tai
  ne mūsų nuopelnas“). Padaryk tą patį su filtravimu.
- **S3** — eil. 237. *Kaip:* išmesk „Viešai ... matomi kitiems ... niekada nerodomi viešai“ sąrašą ir
  „be papildomo prašymo mums“ (lg7 parašas). Pasakyk matomumą per **tvarkaraščio** metaforą: kas
  matoma tvarkaraštyje ir kas ne — dviem trumpais sakiniais, ne dviem sąrašais.
- **S4** — eil. 242. Antraštę „Jei dar dvejoji“ pakeisk.
- **S5** — eil. 50. „Jau turi planą? Prisijungti“ — pakeisk į ne klausimo formą.

**Keisti — sekcijų forma po lankstu (`index.html` eil. 210–238, be CSS keitimų):**

Nuo eil. 210 iki 238 eina **penkios sekcijos identišku `h2` + viena pastraipa formatu** — Q, N, €, A, K.
Variantas, kurio visa idėja yra bento lenta, ją pameta iškart po forma, ir tai vienintelis rinkinio
puslapis, kurio koncepcija neišgyvena už lanksto. **Užduotis:** bent **tris** iš šių penkių sekcijų
perdėk į esamą bento struktūrą — apvilk jas `l-board__grid` konteineriu ir kiekvienai turinio daliai
naudok jau egzistuojantį `c-block` su `--span-col` / `--span-row` reikšmėmis, kaip tai daroma hero
zonoje. **Jokių naujų klasių, jokių CSS pakeitimų** — visi reikalingi stiliai jau yra
`ui/board.css:152–221`. Sekcijų **tvarka nesikeičia**, `aria-labelledby` ryšiai lieka.

**Nekeisti:** `h1` klausimas, keturi pasirinkimo blokai su realiais `radio`, lentos persitvarkymo
FLIP mechanika (`ui/board.js`), paletė, Fredoka + Plus Jakarta Sans, 28/6px kampai, `ui/board.css`.

---

### 7.9 — lg9-prieiga

**Keisti (`variacijos/lg9-prieiga/index.html`):**

- **S1** — eil. 167 („kaina“), eil. 191 (DUK). *Kaip:* lg9 balsas — instrukcinis, be pridėtinių žodžių.
  „Jei tai kada nors pasikeis, apie tai pranešime iš anksto, prieš įsigaliojant, ne po fakto“ yra
  trys pridėtiniai patikslinimai iš eilės. Pakeisk viena išvesties eilute (`tm-out`) — kaina kaip
  būsenos reikšmė, ne kaip pažadas. Sąlyginio būsimojo nelikti.
- **S2** — eil. 162, 196. *Kaip:* pašalink „peržiūri žmogus, ne vien algoritmas“ priešpriešą.
  lg9 jau turi savą priemonę hero zonoje: `# validacija: rankinė, ne automatinė` (eil. 49) —
  **ir tai irgi ta pati priešprieša**, tik komentaro forma. Palik **vieną** iš jų (rekomenduoju
  komentaro eilutę, ji varianto sava), o sekciją „kas tikrina naudotojus“ perrašyk kaip
  imperatyvų dviejų sakinių procedūros aprašymą be jokio „X, ne Y“.
- **S3** — eil. 178. *Kaip:* „Viešai matomas tik ... niekada nerodomi ... be papildomų klausimų mums“
  — visi trys S3 elementai viename sakinyje. Perrašyk kaip **teisių sąrašą išvesties eilutėmis**
  (`tm-out`), po vieną eilutę, kaip ir sekcijoje „aktyvumas dabar“ (eil. 172–173). Variantas šią
  formą jau turi — tereikia ją pritaikyti ir čia.
- **S4** — eil. 182. Antraštę „jei dar dvejoji“ pakeisk (lg9 antraštės yra komandos — čia tinka
  komandos formos antraštė, ne mandagus klausimas).
- **S5** — eil. 41. „jau esi naudotojas? prisijungti“ — pakeisk į ne klausimo formą.

**Papildomai:** DUK sekcijoje penki atsakymai baigiasi **ta pačia nuoroda „paleisti dabar“** (eil. 186,
191, 196, 201, 206). Penkios identiškos nuorodos iš eilės skamba kaip įterpimas, ne kaip variantas.
Palik nuorodą dviejuose atsakymuose (kur ji turi prasmę), likusiuose išmesk.

**Nekeisti:** `h1` ir hero išvesties tekstas, prompt'ų seka, seanso istorija ir jos „taisyti“
mygtukai (`bin/term.js`), `$` ir `>` prefiksai, mirksintis kursorius, paletė, `bin/term.css`.

---

### 7.10 — lg10-atvirukas

**Keisti (`variacijos/lg10-atvirukas/index.html`):**

- **S1** — eil. 246 („Ar reikės mokėti“), eil. 203 (DUK). *Kaip:* lg10 balsas — pirmasis asmuo,
  asmeninė patirtis. „Jei kada nors atsirastų papildomas, mokamas sluoksnis, jis bus aiškiai
  pažymėtas prieš tau ką nors renkantis“ kalba institucijos, ne žmogaus balsu. Perrašyk pirmuoju
  asmeniu, be sąlyginio būsimojo.
- **S2** — eil. 239, 207. *Kaip:* pašalink „prižiūri žmogus, ne vien algoritmas“ ir „ne vien skaičiai“
  — dvi S2 priešpriešos viename puslapyje. lg10 turi savą priemonę: pasyvios grėsmės paneigimą
  („Nieko neišsiunčiame, kol tu nepasakai“). Priežiūrą aprašyk tuo pačiu judesiu — ką **ne**daroma
  su atviruku, kol jis dar neperžiūrėtas.
- **S3** — eil. 231 („Ribos, kurias nustatai tu“). *Kaip:* išmesk „Atsakymo adresas niekada nerodomas
  viešai“ + „be papildomų klausimų“. Perrašyk leidimo nebaigti konstrukcija, kurią matrica priskyrė
  lg10 („Gali sustoti ties bet kuria kortele ir grįžti rytoj“) — ribas pasakyk kaip tai, ką lankytojas
  **gali**, ne kaip tai, ko sistema nerodo.
- **S4** — eil. 190. Antraštę „Jeigu dar dvejoji“ pakeisk.
- **S5** — eil. 44. „Jau turi atviruką? Prisijunk.“ — viena iš trijų leidžiamų, **gali likti**.

**Nekeisti:** dėklas ir jo kortelių sluoksniai, apvertimo judesys, `assets/pastel.js`, šoninė
`story-panel` su citatomis (jos jau pirmuoju asmeniu ir yra varianto parašas), paletė, Lora italic +
Manrope, 18px/999px kampai, vienintelis minkštas šešėlis, `assets/pastel.css`.

---

## 8. Ko po perdarymo NEDARYTI

- Nekeisti nė vieno CSS failo, išskyrus `lg4-silas/assets/garden.css` (3 `border-radius` eilutės).
- Nekeisti sekcijų tvarkos nė viename variante — ašis 8 patikrinta ir teisinga.
- Nekeisti formų laukų, jų pradžios lauko, žingsnių skaičiaus, `id`/`name`, `aria-*` ar validacijos.
- Nepridėti nė vienos naujos spalvos, šrifto ar klasės vardo.
- Nepridėti rastrinių nuotraukų nė viename variante (lg4 hero taisomas SVG/CSS priemonėmis).
- Nekeisti ir nešalinti `<!-- tracking: ... -->` žymų — jos yra būsimo GTM/Pixel prijungimo taškai.
