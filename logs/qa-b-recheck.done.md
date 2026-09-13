# qa-b-recheck.done — pakartotinis panašumo auditas po perdarymo ciklo

**Data:** 2026-09-13
**Vertintojas:** nepriklausomas (tas pats, kaip `qa-b.done.md`), be konteksto apie statybą.
**Įvestis:** `qa/panasumo-auditas.md` (senas skyrius), `logs/fix-01…10.done.md`, visų 10 variantų
**dabartiniai** `index.html`, CSS ir JS failai.
**Išvestis:** `qa/panasumo-auditas.md` naujas skyrius „PAKARTOTINIS AUDITAS PO PERDARYMO“ (R.0–R.7),
`qa/santrauka.md` atnaujinta verdiktų ir ašių patikros dalis.

---

## Rezultatas

**PRIIMTA: 3** (lg1, lg7, lg10) · **PERDARYTI: 7** (lg2, lg3, lg4, lg5, lg6, lg8, lg9)

Kiekvienas likęs PERDARYTI — 1–3 sakiniai `index.html` teksto mazge. Jokių dizaino, struktūros,
formos ar CSS klausimų nebeliko.

---

## Checklistas

### 1. Įvestis perskaityta
- [x] `qa/panasumo-auditas.md` — visas senas dokumentas (§0–§8)
- [x] Visi 10 `logs/fix-*.done.md` — kas realiai pakeista ir ką agentai deklaravo kaip „nekeista“
- [x] Visų 10 variantų dabartinis `index.html` (3 299 eil.); visos F5 / F8 / F9 sekcijos perskaitytos
      eilutė po eilutės, ne `grep`'u

### 2. S1–S5 patikra (§7.0 kriterijus)
- [x] **S1** (pinigų sąlyginis būsimasis) — **0 / 10**, riba 0 ✅ UŽDARYTA
- [x] **S2a** („žmogus, ne robotas/algoritmas/filtras“) — **2 / 10**, riba 1 ⚠️
      (lg9:49 hero komentaras — leistas; `lg2:138` DUK klausimas „…ne robotai?“ — liko)
- [x] **S2b** („kiekvieną naują X prieš pasirodant tikriname rankomis“) — **4 / 10**, riba 0 ❌
      (lg2, lg4, lg6, lg9)
- [x] **S3** (dvipusis „matoma tik / niekada nerodoma / ištrinti bet kada“) — **6 / 10**, riba 2 ❌
      (leisti lg4 + lg7; nelegalūs lg3, lg5, lg8, lg9)
- [x] **S3c** („be papildomų klausimų / paaiškinimų / prašymo mums“) — **5 / 10**, riba 1 ⚠️
      (lg1, lg4, lg5, lg7, lg9)
- [x] **S4** („Jei dar dvejoji“) — **1 / 10** (tik lg7:183), riba 1 ✅ UŽDARYTA
- [x] **S5** („Jau …? Prisijunk“ antraštės nuorodoje) — **3 / 10** (lg1:95, lg3:49, lg10:44),
      riba 3 ✅ UŽDARYTA

### 3. 45 porų testas (tik F5 + F8 + F9)
- [x] Kiekvienam variantui F5 / F8 / F9 pažymėta `SAVA` arba `DVYNYS(x)` — lentelė §R.2
- [x] **F5 krenta 6 poros:** lg2·lg4, lg2·lg6, lg2·lg9, lg4·lg6, lg4·lg9, lg6·lg9
- [x] **F8 krenta 3 poros:** lg1·lg3, lg3·lg9, (lg4·lg10 — riba, fiksuota kaip stebima)
- [x] **F9 krenta 9 poros:** lg3·lg4, lg3·lg9, lg5·lg4, lg5·lg7, lg5·lg8, lg5·lg9, lg8·lg4,
      lg8·lg7, lg8·lg9
- [x] **Pilnai švarios poros:** visos poros tarp {lg1, lg2\*, lg6\*, lg7, lg10} — kur \* žymi
      variantą, kurio vienintelė problema yra F5 dvynystė tarpusavyje
- [x] Pastaba: kriterijų „nė vienos bendros poros“ jau pirmasis auditas pats sušvelnino, leisdamas
      lg4 ir lg7 pasilikti S3 — t. y. pora lg4·lg7 dalijasi F9 judesiu **pagal projektą**

### 4. Ar taisymai nepridėjo naujų bendrų frazių
- [x] **N1** „jei … pasikeis, pasikeis ir …“ — lg1:177 ↔ **lg3:257 (naujas)** ❌
- [x] **N2** etiketė + reikšmė „mokamas lygis — (šiuo metu) nėra“ — lg1:169–170, **lg3:229–231**,
      **lg9:167** ❌
- [x] **N3** „nėra paslėpto mokamo lygio“ ↔ „jokio paslėpto apmokėjimo čia nėra“ — lg4:194 ↔
      **lg10:246–247** ⚠️ (riba; neišvengiama formulė, nepaverčiama perdarymo pagrindu)
- [x] **Regresija:** `lg6:194` taisant grąžino S2a žodį („kiekvieną skelbimą perskaito **žmogus**“)
- [x] **Praleista:** `lg5:384` (Taisyklių 6) — **pažodinis** pradinis S2 sakinys „Kiekvienas naujas
      registro įrašas peržiūrimas prieš tampant matomu kitiems nariams“; §7.5 nurodė tik eil. 284/293,
      Taisyklių bloko niekas nelietė, o lg5 F5 sekcija į jį **nukreipia**

### 5. CSS / klasių / spalvų regresijos (savarankiška patikra, ne tik fix-log'ai)
- [x] Naujų CSS klasių **nepridėta** — panaudotos tik esamos (`spec__row`, `pultas-timeline`,
      `pultas-hint`, `tm-out`, `c-block`)
- [x] Naujų spalvų **nepridėta** (lg4 hero žiedas — 3 iš 5 esamų tokenų)
- [x] Naujų šriftų **nepridėta** — 20 `family=` reikšmių, nė viena dviejuose variantuose
- [x] Klasių kolizijos tarp variantų (HTML + CSS selektoriai): liko **viena — `.masthead`
      (lg1 + lg6)**. Anksčiau minėtos `cookie-strip` / `legal-links` / `repeat-link` / `skip-link` /
      `visually-hidden` — **visos išvalytos** ✔
- [x] lg4 `999px` piliulės — `garden.css` grep: **0 rezultatų** ✔; `.silas-scene__ring` egzistuoja ✔
- [x] lg6 šriftai — `@import` iš `style.css` pašalintas, `<link rel="stylesheet">` yra `index.html:17` ✔
- [x] `assets/style.css` kelias ir lg1, ir lg6 — **liko** (fix-06 užfiksavo kaip priimtą nukrypimą)
- [x] CSS/JS mtime patikra: pakeisti tik `lg4/assets/garden.css` ir `lg6/assets/style.css` — abu
      leisti; likę 15 CSS/JS failų nepaliesti ✔

### 6. Tracking steko patikra (kritinė)
- [x] `<!-- tracking: … -->` žymų skaičius po variantus (HTML + JS): lg1 4 · lg2 8 · lg3 8 · lg4 5 ·
      lg5 2 · lg6 2 · lg7 6 · lg8 10 · lg9 2 · lg10 9 — sutampa su fix-log'uose deklaruotais
- [x] Nė viena žyma nepašalinta ir nepervadinta
- [x] `grep` per `gtm-`, `googletagmanager`, `fbq`, `connect.facebook`, `facebook.net`, `dataLayer`,
      `openai`, `chatgpt` — **0 rezultatų visame `variacijos/`**. Gyvo pikselio nėra nė viename
      puslapyje, ID liesti nebuvo ko. **Perdarymo ciklas tracking rizikos nesukėlė.** ✔

### 7. Išvestis parašyta
- [x] `qa/panasumo-auditas.md` — naujas skyrius viršuje: R.0 santrauka · R.1 S1–S5 prieš/po ·
      R.2 F5/F8/F9 pjūvis · R.3 naujos bendros frazės · R.4 ne-F sekcijų likučiai ·
      R.5 CSS/tracking patikra · R.6 galutiniai verdiktai · R.7 antro perdarymo užduotys
      (R.7.0 bendra taisyklė + R.7.1…R.7.7 po variantą, su eilučių numeriais ir „nekeisti“ sąrašais
      + R.7.8 kosmetika)
- [x] Senas auditas paliktas nepaliestas, tik pažymėtas antrašte „PIRMASIS AUDITAS (archyvas —
      kontekstui)“ su nuoroda į galiojantį skyrių
- [x] `qa/santrauka.md` — atnaujinta „Verdiktų santrauka“ (abu ciklai) ir „Ašių patikra“ eilutės
      (999px ✔, lg6 šriftai ✔, klasių kolizijos ⚠️)

---

## Kodėl verdiktai tokie, o ne griežtesni / švelnesni

**Taikytas principas:** pora krenta, jei **skaitytojas, perskaitęs abi sekcijas, atpažintų tą patį
retorinį judesį** — ne jei sutampa faktas. Faktai („kaina 0“, „kas vieša, kas ne“, „tikriname
paskyras“) yra privalomi visuose dešimtyje ir jų slėpti negalima; draudžiama tik ta pati **sakinio
priemonė**.

Dėl to:
- `lg1` F9 (5 laukų `spec` lentelė) — **priimta**, nors informacija ta pati kaip lg4 dviejų dėžučių
  sąraše: lg1 neturi nei stovyklų, nei žodžių „tik“ / „niekada“, o lentelė yra jo hero priemonės tąsa.
- `lg3` F9 (dvi `dt/dd` stovyklos) — **nepriimta**: apvalkalas naujas, bet stovyklų struktūra
  („vieša“ vs. „tik prietaise“ + laukų sąrašai) yra tiksliai S3.
- `lg10` F5 („nepasirodo, kol neperžiūrime“) — **priimta**: tai paneigimo judesys, kurį variantas
  naudoja ir kitur („Niekas neišsiunčiama, kol pats nepaspaudi“), o ne „kiekvieną … prieš …“ schema.
- `lg8` F5 — **priimta** (faktas + savaiminis nuvertinimas), `lg8` F9 — **nepriimta** (beveik
  pažodinis lg9 dvynys). Tas pats variantas gali praeiti vienoje sekcijoje ir kristi kitoje.

**Ko trūko pirmojo audito užduotyse (kad kitas ciklas nekartotų klaidos):** §7.0 S2 aprašas akcentavo
priešpriešą „žmogus, ne robotas“ ir dėl to agentai išvalė būtent ją, palikdami griaučius „kiekvieną
naują X prieš pasirodant tikriname“. §7.0 S3 leido dvipusį sąrašą dviem variantams, bet
individualiose užduotyse (§7.1, §7.3, §7.9) pats nurodė **kitiems** variantams pateikti tą pačią
informaciją sąrašo pavidalu (`spec__row`, `pultas-timeline`, `tm-out`) — t. y. instrukcija
prieštaravo taisyklei. §R.7.0 šios dvi spragos uždarytos aiškiai.

**Kur taisymas buvo tikslus ir jo nereikia kartoti:** S1 pašalinimas (10 → 0), S4 (7 → 1), S5 (9 → 3),
lg4 CSS + hero, lg6 šriftų krovimas, lg8 bento pertvarkymas, lg3 `pultas-hint` žodyno kalibravimas,
lg9 DUK nuorodų dubliavimo sumažinimas — visa tai atlikta teisingai ir §R.7 „nekeisti“ sąrašuose
apsaugota.
