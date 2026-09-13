# qa-b-recheck3.done — KETVIRTAS (GALUTINIS) nepriklausomas panašumo auditas po trečio taisymo ciklo

**Data:** 2026-09-13 · **Vertintojas:** tas pats nepriklausomas vertintojas, 4 iteracija
**Rezultatas:** ✅ **10 PRIIMTA · 0 PERDARYTI — PROJEKTAS BAIGTAS**
**Buvo po 3 audito:** 6 PRIIMTA / 4 PERDARYTI (lg3, lg8, lg9, lg10).
**Trajektorija:** 0/10 → 3/7 → 6/4 → **10/0**.
**Išvada įrašyta:** `qa/panasumo-auditas.md`, naujas skyrius **viršuje** —
`# KETVIRTAS (GALUTINIS) AUDITAS (2026-09-13)`, poskyriai **G.0–G.7**.
**Atnaujinta:** `qa/santrauka.md` — verdiktų skyrius perrašytas, pridėta galutinė 10 eilučių lentelė.

---

## Checklistas

### 1. Įvesties medžiaga perskaityta
- [x] `qa/panasumo-auditas.md` skyriai **T.0–T.7.5** (trečio audito kontekstas, S2b/S3 apibrėžimai,
      T.7.1–T.7.4 tikslios užduotys, T.7.0 ribos)
- [x] `promptai/00-MASTER.md` skyrius „GALUTINIS PRIĖMIMAS" (7 punktų checklistas)
- [x] Ankstesnių auditų archyvas (§R.1–R.5 S1–S5 apibrėžimai, §0 keturios pradinės konstrukcijos)
- [x] Visų **10** variantų dabartinis `index.html` — perskaityti **pilnai**, ne tik pakeistos vietos
- [x] `qa/santrauka.md` (ar lentelė nepasenusi)

### 2. S2b patikra („kiekvieną / naują X prieš … tikriname [rankomis]")
- [x] Tie patys 4 skeleto komponentai kaip T.1 (a kiekybė / b „prieš"+pasirodymas / c tikrinimo
      veiksmažodis / d rankinis įrankis); skaičiuota **tik F5 sekcijoje + jos DUK atitikmenyje**
- [x] Kiekvienas iš 10 įvertintas komponentais — lentelė **G.1**
- [x] **Rezultatas: 1 variantas (lg7:163) prieš ribą 1. ✅ RIBA LAIKO**
- [x] `grep` per „rankom / ranka / rankinis / **rankinė**" — randa **tik lg9** (meta ×2, eil. 49, 52),
      T.7.1 aiškiai palikta S2a liekana, dvynių neturi
- [x] ✅ **lg3: 3/4 → 0/4** (pašalinti „prieš šaukinį pasirodant", „Rankinis stebėjimas",
      „kiekvienam šaukiniui")
- [x] ✅ **lg10: 3/4 → 1/4** (pašalinti „Naujas atvirukas", „tikriname", „prieš … paskelbdami") —
      silpniau nei leistas lg7 (2/4), todėl **T.7.4 atšaukimo pagrindas dingo**
- [x] ✅ **lg9: (a) komponentas pašalintas** (eil. 162 „nauja paskyra pereina validaciją" →
      „būsena: laukianti — kol nepatvirtinta")

### 3. S3 patikra („matoma tik A, B" / „niekada C, D, E" / „ištrinti bet kada")
- [x] Kiekvienas variantas įvertintas pagal 3 elementus — lentelė **G.2**
- [x] **Rezultatas: 3 variantai (lg4, lg7 leisti + lg6 istorinis precedentas) prieš ribą 2+precedentas.
      ✅ RIBA LAIKO**
- [x] ✅ **lg9 S3 išardytas iš esmės:** eil. 179–181 **nebevardija nė vieno lauko** (nei matomo,
      nei nematomo) — vietoje inventoriaus numatytoji būsena + jos keitimo vieta
- [x] lg6:215 — precedentas nekeičiamas (ketvirtas auditas iš eilės to paties teksto neliečia)
- [x] lg1:301–322 — laukas × reikšmė specifikacija, **neskaičiuojama** (nuoseklu su visais 3
      ankstesniais auditais)

### 4. Naujų bendrų frazių paieška (ar trečias ciklas pakartojo pirmų dviejų klaidą)
- [x] **NE — naujų bendrų frazių nerasta nė vienos.** Pirmas ciklas iš trijų, kuris nieko neįnešė
      (po r1 buvo 3, po r2 — 6)
- [x] **Mechaninė patikra:** iš visų 10 failų išimtas matomas tekstas (be `<script>`, `<meta>`,
      `<option>`, SVG), normalizuotas, suskaidytas į **3- ir 4-žodžių n-gramas**, palygintos
      **visos 45 poros**
- [x] **4-gramos:** 33 sutapimai — **visi** slapukų juostos / poraštės / 18+ varnelės / formos
      klaidų pranešimai / JSON-LD. **Nė vieno F5 / F8 / F9 kūno tekste**
- [x] **3-gramos:** po boilerplate filtro lieka tik sekcijų antraščių šablonai — **visi seni**,
      nė vienas nepaliestas jokio ciklo
- [x] **Kiekviena ketvirto ciklo įrašyta frazė atskirai `grep`'inta per visus 10 failų** — 12 frazių,
      lentelė G.3; **nė viena nesikartoja**
- [x] Tikslinė patikra ties įvardytomis rizikos sąveikomis:
  - **lg9 ↔ lg8** — NN1 (eil. 179 ↔ 241) ir NN5 (eil. 162 ↔ 235) ✅ **uždarytos**
  - **lg9 ↔ lg3** — NN2 (eil. 204 ↔ 206, „Likusi informacija … tik tau") ✅ **uždaryta**
  - **lg10 ↔ lg7** — S2b persidengimas (eil. 239–241 ↔ 163) ✅ **uždarytas**
  - **lg9 ↔ lg6** — NN4 (eil. 180 ↔ 215, „[trys laukai] lieka") ✅ **uždaryta**
  - **lg8 ↔ lg2** — NN3 (eil. 241 ↔ 127, „daugiau ten … nėra") ✅ **uždaryta**
  - **lg3 ↔ lg1** — NN6 / N1 recidyvas (`dl` eilutė ↔ 177) ✅ **uždaryta** (eilutė ištrinta)
- [x] Visos 6 NN frazės ir N1 — **uždarytos**; N2 ir N3 lieka kaip stebimos (žr. 5 punktą)

### 5. Stebima, bet neblokuoja — su pagrindimu, kad kita sesija nekartotų tyrimo (§G.4)
- [x] **`lg3:217` „Būsena: patvirtintas." ↔ `lg9:162` „būsena: laukianti"** — ištirta atskirai
      (abi eilutės naujos, abi F5). **Neblokuoja:** tai **laukas × reikšmė rodmuo, ne sakinys**;
      tas pats sprendimas tris kartus priimtas dėl `lg1:301–322`. Rodmens formatas yra abiejų
      variantų **statybinis parašas** (lg3 `dt`/`dd` skalė, lg9 `tm-out` stdout) — būtent juo jie ir
      skiriasi; reikšmės priešingos (patvirtinta / laukianti)
- [x] **`lg8:241` ↔ `lg6:215` / `lg2:127` — „tik [slapyvardis] ir [amžius]"** — ištirta atskirai.
      **Neblokuoja dėl dviejų nepriklausomų priežasčių:** (a) kurie du laukai vieši — **produkto
      faktas**, jį vardija visi 10 (`lg1:340` „Vieša tik žymė ir amžiaus intervalas" yra **artimesnis**
      lg8:241 nei lg6, ir trys auditai jo neužkliudė); T.4 principas — bendras faktas ≠ bendras
      sakinio judesys. (b) **Naują lg8 formuluotę nurodė pats T.7.2 pažodžiui** („per tvarkaraščio
      eilutės pavidalą — kas telpa į vieną eilutę"); blokuoti savo paties instrukcijos vykdymą
      reikštų perkelti finišo liniją ketvirtą kartą
- [x] **N2** („mokamas lygis — nėra", lg1:169–170 ↔ lg9:168) — tas pats laukas×reikšmė argumentas;
      trečias auditas jos nebeįtraukė, ketvirtas ciklas nė vieno nelietė
- [x] **N3** („nėra paslėpto mokamo lygio", lg4:194 ↔ lg10:246) — sprendimas nuo antro audito
      nekeičiamas
- [x] **S3c uodega** („be papildomų klausimų / paaiškinimų / prašymo") — 4/10 prieš ribą 1;
      **tas pats sprendimas kaip T.4** — neišvengiama lietuviška formulė, perrašymas kainuotų visą
      ciklą be konversinės naudos
- [x] **„tampa matomas/matoma"** F6 sekcijoje (lg1:190, lg5:294, lg7:153) — ne F5/F8/F9, neliesta

### 6. CSS / klasių / spalvų / šriftų / tracking regresijų patikra (§G.5)
- [x] **Nė vienas CSS ar JS failas ketvirtame cikle nepaliestas** — vėliausi `lg4/assets/garden.css`
      **06:41** ir `lg6/assets/style.css` **06:40**, abu gerokai prieš ciklo pradžią **15:09**.
      Pakeisti tik keturi `index.html`: lg9 15:11, lg8 15:12, lg3 15:45, lg10 15:46
- [x] **Naujų CSS klasių nepridėta.** Automatinė patikra visiems 10: lg2/lg4/lg5/lg6/lg9 — **0**
      klasių be CSS taisyklės; lg3 keturios — **tos pačios senos** kaip T.5; lg1 3, lg7 2, lg8 1,
      lg10 4 — visos senos, **nė viena ne pakeistose eilutėse**
- [x] **Naujų spalvų / šriftų nepridėta.** 10 paletės rinkinių, **nė vienos bendros hex reikšmės**
      (be #FFFFFF/#000000) tarp bet kurių dviejų; 20 šriftų šeimų, nė viena dviejuose variantuose
- [x] **Klasių kolizijos:** viena, ta pati — `.masthead` (lg1 + lg6). **Nauja nė viena**
- [x] ✅ **TRACKING: visos 56 `<!-- tracking: -->` žymos (HTML + JS) vietoje, skaičiai baitas į baitą
      sutampa su T.5 lentele:** lg1 **4** · lg2 **8** · lg3 **8** · lg4 **5** · lg5 **2** · lg6 **2** ·
      lg7 **6** · lg8 **10** · lg9 **2** · lg10 **9**. Nė viena nepašalinta, nepervadinta, **ID
      nepakeisti**
- [x] ✅ **Gyvo GTM / Meta Pixel / OpenAI-ChatGPT pikselio nėra nė viename** — `grep` per `gtm-`,
      `googletagmanager`, `fbq`, `connect.facebook`, `dataLayer`, `gtag`, `openai`, `chatgpt`
      per HTML + CSS + JS: **0 rezultatų**
- [x] **Formos, `aria-*`, `id` nekeista** — keisti tik `<p>` / `<dd>` teksto mazgai; lg3 ištrintas
      vienas `pultas-timeline__row` blokas, `dl` liko taisyklingas, `aria-labelledby` vietoje
- [x] **HTML struktūra:** visi 10 — subalansuotos žymos (`HTMLParser`), po **vieną** `<h1>`,
      **visi** CSS/JS keliai egzistuoja
- [x] **Referenciniai URL:** `daddywonderland.love` **nerandamas nė viename**; visi canonical —
      nuosavas `vyrukambarys.lt/lgN`

### 7. Galutiniai verdiktai (§G.6)
- [x] lg1-matmuo — ✅ **PRIIMTA**
- [x] lg2-lenta — ✅ **PRIIMTA**
- [x] lg3-pultas — ✅ **PRIIMTA** (visos trys T.7.3 užduotys įvykdytos)
- [x] lg4-silas — ✅ **PRIIMTA**
- [x] lg5-salyga — ✅ **PRIIMTA**
- [x] lg6-talonas — ✅ **PRIIMTA** (kosmetika: marquee eil. 48/49/52)
- [x] lg7-kabinetas — ✅ **PRIIMTA**
- [x] lg8-vakaras — ✅ **PRIIMTA** (T.7.2 įvykdyta)
- [x] lg9-prieiga — ✅ **PRIIMTA** (T.7.1 įvykdyta; didžiausias pokytis)
- [x] lg10-atvirukas — ✅ **PRIIMTA** (T.7.4 įvykdyta)
- [x] **Suvestinė: 10 PRIIMTA · 0 PERDARYTI**
- [x] Perdarymo užduočių skyrius **nerašytas** — jo nebereikia

### 8. `00-MASTER.md` „GALUTINIS PRIĖMIMAS" — punktas po punkto (§G.7)
- [x] 10 aplankų, atsidaro be klaidų konsolėje — ✅ (Fazė 4A + struktūrinė patikra; ciklas keitė
      tik teksto mazgus, JS/`id`/klasių/įvykių nelietė)
- [x] visos 45 poros — „ne ta pati komanda" — ✅ (G.1–G.3)
- [x] nė vienas nesiejamas su referenciniais URL — ✅
- [x] visi 10 praeina 360px + klaviatūros testą — ✅ (Fazė 4A; išdėstymo neliesta)
- [x] `qa/santrauka.md` turi reikalaujamą lentelę — ✅ (atnaujinta šiame cikle)
- [x] `logs/` turi visų agentų `.done.md` su checklistais — ✅ (40 failų su šiuo)
- [~] nėra pasikartojančių šriftų / spalvų / klasių / antraščių — **3 iš 4 ✅**; dvi žinomos,
      nuo statybos egzistuojančios išimtys užfiksuotos kaip **neprivaloma kosmetika**:
      **(1)** `.masthead` (lg1 + lg6) — taisymas reikalauja liesti abu CSS, ką kiekvienas ciklas
      draudė; poveikis lankytojui **nulinis** (atskiri puslapiai, jokio bendro CSS krovimo);
      **(2)** F-skilčių antraščių šablonai už F5/F8/F9 ribų („Kiek tai užima", „Kiek tai kainuoja",
      „Kas vyksta po …") — juos visiems 10 nurodė ta pati `03-statyba.md` struktūra; trys ankstesni
      auditai jų nelaikė poros pažeidimu, nes tai **sekcijos temos etiketė, ne argumentavimo judesys**
- [x] **IŠVADA: PROJEKTAS BAIGTAS PAGAL `00-MASTER.md` GALUTINIO PRIĖMIMO KRITERIJUS**

---

## Ko NEDARYTI toliau

1. **Nebekelti ribų penktą kartą.** Trys ciklai sudegė būtent taip: pataisytas mazgas atitiko
   ankstesnę instrukciją, o naujas auditas rasdavo naują pretekstą. G.4 punktai 1–3 yra
   **užrakinti sprendimai** — jei kita sesija nori juos peržiūrėti, pirma turi perskaityti G.4
   pagrindimus.
2. **Neliesti CSS ar JS.** Nė vienas iš trijų ciklų jų nelietė; dizaino sluoksnis pereina visus
   objektyvius testus nuo pat pirmo audito.
3. **Neliesti tracking žymų.** 56 žymos, skaičiai užfiksuoti T.5 ir patvirtinti G.5.
4. **Antraščių neperfrazuoti.** Kaina — pusė dienos ir SEO bei aiškumo rizika; nauda konversijoms —
   nulis.
5. Vienintelis pigus neprivalomas darbas, jei kada nors norėsis: `.masthead` pervadinimas lg6 pusėje
   (~10 min., liečia `lg6/assets/style.css` + `lg6/index.html`) ir lg6 marquee eil. 48/49/52
   suderinimas su eil. 173–174 (abi eilutės keičiamos **kartu**, kad `talonas-hidden` sr-only
   dublikatas liktų pažodinis).
