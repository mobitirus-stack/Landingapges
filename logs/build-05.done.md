# build-05.done.md — lg5-salyga

**Statusas:** atlikta.
**Aplankas:** `variacijos/lg5-salyga/`
**Failai:** `index.html`, `css/ledger.css`, `VARIANT.md`

## Pastaba dėl failų kelio

`promptai/03-statyba.md` bendras OUTPUT šablonas nurodo `assets/style.css`, bet
`config/diferenciacijos-matrica.md` ašis 14, eilutė #5 nurodo **konkrečiai kitą** kelią šiam
variantui: `index.html`, `css/ledger.css`. Kadangi matrica yra „pilnas specifikavimas“ šiam
variantui ir taisyklė sako „nukrypti nuo savo eilutės negalima“, laikiausi matricos, ne bendro
šablono — tai nėra techninė kliūtis, tik konkretesnė instrukcija, todėl nesustabdžiau darbo dėl to.
CSS failas yra `variacijos/lg5-salyga/css/ledger.css` (ne `assets/style.css`).

## Priėmimo kriterijų checklistas

- [x] Planas ir savikritika parašyti prieš kodą (`VARIANT.md` §1–5, du savikritikos ratai)
- [x] Spalvos (5), šriftai (Source Serif 4 600 / Atkinson Hyperlegible 400+700), hero tipas
      (sąlygų lentelė pirmame ekrane, forma paskutinėje eilutėje), CTA modelis („sąlygų kortelė su
      forma jos viduje“), sekcijų tvarka (H→P→€+Į(lentelė)→FORM→A→M→K→Q→D→R→L→C) — atitinka
      matricos eilutę #5 tiksliai
- [x] Visas tekstas tikras (jokio lorem ipsum, jokių `[žymeklių]`), terminija tik iš
      `terminu-zemelapis.md` stulpelio 5 (patikrinta grep'u prieš kitų 9 variantų žodžius tiems
      patiems konceptams — nerasta pažeidimų)
- [x] Nė vieno žodžio iš `draudziamu-zodziu-sarasas.md` (patikrinta grep'u: draudžiamos spalvos,
      šriftai, prekės ženklų vardai, klišės — visi „nerasta“; vienas potencialiai dviprasmiškas
      žodis „sistema“ pakeistas į „procesas“ perteklinio atsargumo dėlei)
- [x] Klasių pavadinimai — ilgi semantiniai su prefiksais `terms-`/`ledger-` (60 unikalių klasių,
      python skriptu patikrinta, kad nė viena NĖRA tiksliai lygi draudžiamam bendriniam vardui —
      substring'ai kaip `ledger-hero`/`ledger-section` yra tyčia sudėtiniai, ne pažeidimas)
- [x] 360px be horizontalaus scroll, 1440px patikrinta — **realiame Chrome per CDP + Playwright**
      (`scrollWidth === clientWidth` abiem pločiais), klaviatūra pereinamas visas puslapis
      (`:focus-visible`, skip-link veikia)
- [x] Konsolė švari (0 klaidų paskutiniame patikros paleidime), nuorodos (vidinės inkerų) veikia,
      forma validuoja (tikrinta tuščiais laukais → klaidos tekstu, tada teisingi duomenys → sėkmės
      būsena) — visa patikrinta realiame naršyklės DOM, ne vien skaitant kodą
- [x] `<title>` 59/60 simbolių, `meta description` 132/155 simbolių — patikrinta programiškai
- [x] Vienas judesio momentas: eilutės išsiskleidimas žemyn (naudojamas ir paaiškinimams 1–4
      punktuose, ir formos atskleidimui 5 punkte — tas pats mechanizmas, ne du skirtingi)
- [x] Pašalintas vienas perteklinis elementas (dekoratyvus žymeklis aplink punkto numerį) —
      užrašyta `VARIANT.md` §7

## Kaip tikrinta (skaidrumui)

Playwright (Node) buvo prijungtas per CDP prie sisteminio Google Chrome (`--headless=new
--remote-debugging-port`), nes `npx playwright install chromium` šiame macOS (Monterey/mac12)
nepalaikomas oficialiai atsisiunčiamo binaro. Patikrinta: scroll plotis 360/1440px, konsolės
klaidos, disclosure (▾) veikimas, formos validacija ir sėkmės būsena, slapukų sutikimo
`localStorage` išsaugojimas. Visi testai praėjo be klaidų.

## Tracking steko pastaba

Šis variantas yra **naujas** failas (ne redaguotas esamas), todėl jokio GTM/Meta Pixel/OpenAI
pixel kodo jame nėra ir nebuvo — vietoje analitikos įdėti `<!-- tracking: event_name -->`
komentarai prie formos pateikimo (`ledger_signup_submit`) ir sėkmės (`ledger_signup_success`), kaip
reikalauja `promptai/03-statyba.md` žingsnis 4. Kai Jonas kels į `vyrukambarys.lt/lg5`, realų
tracking kodą reikės pridėti atskirai — šiame etape jo sąmoningai nėra.
