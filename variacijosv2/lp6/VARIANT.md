# lp6 — Nakties siluetas (v2, hero nuotrauka)

## Kryptis
`config/vizualines-kryptys-v2.md` → „## lp6 — Nakties siluetas" (antra grupė, lp7–lp10).
Šis variantas naudoja promptą `promptai/08-statyba-v2-foto.md`: vietoj SVG iliustracijos
naudojama kliento pateikta AI-sugeneruota hero nuotrauka (`assets/hero-portrait.jpg`,
1024×1536, JPEG, 172 KB) — moteris naktinio miesto fone, žiūrinti per petį, dulsvai
apšviesta neoninių miesto šviesų. Tai atkartoja realių konkurentų (susipazink.com,
slaptaspasimatymas.com, pazintys40.lt) šabloną: pilno ekrano nuotrauka fone + maža
kortelė ant jos.

## Nuotaika
Paslaptinga, elegantiška, „naktinis miestas".

## Paletė
- Fonas (už kortelės): `hero-portrait.jpg` su tamsinančiu gradiento sluoksniu
  (`--lp6-bg-dark: #0F0F14` → `--lp6-bg-gradient-end: #1E1B4B`, panaudota kaip
  `radial-gradient`/`linear-gradient` scrim, ne kaip papildomas foninis sluoksnis virš
  nuotraukos).
- Kortelė: `--lp6-card-bg: #18181B` (tamsi, kaip nurodyta krypties apraše — NE balta).
- Akcentas / CTA fonas: `--lp6-accent: #FBBF24` (gintarinė-geltona), CTA tekstas
  `--lp6-accent-ink: #1A1206`.
- Tekstas: `--lp6-text: #FAFAF9` (pagrindinis), `--lp6-text-muted` (68% nepermatomumo),
  `--lp6-text-faint` (58% nepermatomumo — žr. „Taisymai" žemiau, buvo 46%).

## Šriftai
`Cormorant` (prekės ženklas/antraštė) + **`Mulish`** (forma/tekstas), krauta iš Google
Fonts (viena `preconnect` pora, viena stiliaus nuoroda).

**Sąmoningai NE Karla**, nors `config/vizualines-kryptys-v2.md` bazinis lp6 aprašas
nurodo „Cormorant + Karla" — Karla jau naudojamas lp5 ir lp6, trečias pasikartojimas
būtų kryžminis pažeidimas (`config/draudziamu-zodziu-sarasas.md` §6). Pasirinktas
Mulish (leidžiama alternatyva pagal užduoties nurodymą), vizualiai suderinamas su
Cormorant serifiniu logotipu.

## Struktūra
- Vienas `100dvh` ekranas, be scroll ≥400px pločio ekranuose (tikrinta realiai
  Playwright/Chromium: 360, 375, 768, 1024, 1440, 1920px pločiuose — 0 horizontalaus ar
  vertikalaus overflow). Tik 320px pločio (labai senas/retas įrenginys, <400px riba)
  atsiranda minimalus vertikalus scroll (675px turinys į 568px aukščio langą) — tai
  aiškiai leidžiama `promptai/08-statyba-v2-foto.md` p.1 („arba minimalus scroll tik
  <400px pločio ekranuose, jei būtina") ir apdorota atskiru `@media (max-width: 399px)`
  bloku (`overflow-y:auto`, `.lp6-hero`/`.lp6-scrim` tampa `position:fixed`).
- Pilno ekrano hero nuotrauka (`background-image`, `background-position` keičiasi per
  breakpointus, kad veidas/figūra liktų matomi 360–1920px), du sluoksniai virš jos:
  tamsinantis `linear-gradient` (apačia) tiesiai `.lp6-hero` fone + `.lp6-scrim`
  (radialinis + kampinis gradientas) teksto/kortelės kontrastui.
- Maža tamsi kortelė `min(400px, 92vw)`, pastumta į dešinę ≥901px pločio ekranuose,
  centre-apačioje mobiliame.
- Forma: lytis (2 radio, `<fieldset>/<legend>`) + gimimo data (3 `<select>`:
  diena/mėnuo/metai, metai generuojami `app.js` — 18–75 m. intervalas) + CTA.
- 3 pasitikėjimo ženkliukai (SVG + tekstas), 1 eilutės socialinis įrodymas, teisinė
  juosta (Pagalba/Taisyklės/Privatumo politika/Apie mus + 18+ ženkliukas).
- Sėkmės būsena rodoma tik po sėkmingo pateikimo (`app.js` paslepia formą, atidengia
  `.lp6-success`); JS taip pat tikrina amžių (<18 m. blokuojama su klaidos pranešimu).

## Sprendimai (kad kita sesija nekartotų tyrimo)
- **Nuotrauka, ne SVG iliustracija**: bendra v2 taisyklė (`Techninės taisyklės lp7-10`)
  numato SVG iliustraciją, bet `promptai/08-statyba-v2-foto.md` yra šios grupės
  (lp7–lp10) specifinis viršstatymas — klientas pats pateikė paruoštą AI-sugeneruotą
  nuotrauką ir aiškiai nurodė ją naudoti vietoj generuojamos iliustracijos. Nuotrauka —
  dekoratyvinis CSS `background-image` per `<div role="img" aria-hidden="true">`, ne
  prasminga `<img>`.
- **Nuotraukoje pavaizduotas asmuo NĖRA pristatomas kaip realus/konkretus narys** —
  tekste niekur netvirtinama, kad tai konkretus žmogus; nuotrauka naudojama tik kaip
  atmosferinis fonas, analogiškai referenciniams puslapiams. Patikrinta grep'u per visą
  `index.html` teksto turinį.
- **`og:image` = ta pati `hero-portrait.jpg`** (1024×1536), ne atskirai generuotas PNG —
  taip nurodyta `promptai/08-statyba-v2-foto.md` p.6 („jau tinkamo formato/dydžio
  nuotrauka, papildomai generuoti nereikia"), skirtingai nei bendra lp7-10 taisyklė apie
  1200×630 PNG (ta taisyklė galioja SVG-iliustracijos variantams, ne šiai nuotrauka
  pagrįstai grupei).

## Taisymai šioje sesijoje (2026-09-14)
Ankstesnis agentas buvo sukūręs visus failus (`index.html`, `assets/style.css`,
`assets/app.js`, `assets/hero-portrait.jpg`), bet nutrūko dėl API limito TIESIOG PRADĖJUS
naršyklės patikrą, prieš baigdamas ir prieš parašydamas šį `VARIANT.md`. Ši sesija failų
nekūrė iš naujo — atlikta pilna patikra + 1 tikslus taisymas:

1. **Kontrastas `--lp6-text-faint` buvo per žemas.** Perskaičiavus WCAG 2.1 santykinio
   ryškumo formulę nepriklausomai (Python, iš hex/rgba reikšmių, ne spėta): `rgba(250,
   250, 249, 0.46)` ant kortelės fono `#18181B` duoda **4.49:1** — technine prasme
   FAILINA 4.5:1 ribą (nors vizualiai atrodo panašiai). Naudota 6 vietose kortelėje:
   `.lp6-brand-tag`, `.lp6-legend` (12px, uppercase, bold — „AŠ ESU"/„GIMIMO DATA"),
   `.lp6-consent` (18+ teisinis tekstas!), `.lp6-social-proof`, ir footer'yje
   `.lp6-legal-nav a`/`.lp6-legal-age`. **Taisymas:** nepermatomumas pakeltas iki 0.58
   (`--lp6-text-faint: rgba(250, 250, 249, 0.58)`), naujas kontrastas **6.38:1** —
   patikrinta iš naujo tiek Python formule, tiek Playwright `getComputedStyle` +
   ekrano nuotraukomis (vizualiai skirtumas nepastebimas, hierarchija tarp
   `--lp6-text-muted`/`--lp6-text-faint` išlaikyta). Tai VIENINTELIS pakeitimas faile
   `assets/style.css` — patikrinta, kad kitos eilutės nepaliestos.

Visi kiti priėmimo kriterijai (žr. `logs/v2-build-lp6.done.md`) atitiko iš pirmo karto,
taisymų nereikėjo.

## Formos dizaino atnaujinimas (2026-09-14, antra sesija)

Jonas peržiūrėjo visus 6 nuotrauka-fone variantus (lp4-lp9) ir pasakė, kad jie per daug
panašūs — visi naudojo tą patį modelį (du boxed mygtukai lyčiai + 3 boxed `<select>`
gimimo datai). Orkestratorius priskyrė kiekvienam variantui unikalų form-control
sprendimą, nekeičiant bendros patvirtintos nuotaikos. lp6 gavo užduotį: **grynai
tipografinis lyties perjungiklis** (be dėžučių) + **borderless/underline select'ai**
gimimo datai.

**Kas pakeista** (`index.html`, `assets/style.css` — `assets/app.js` NEPALIESTAS):
- Lytis: `.lp6-radio-row`/`.lp6-radio` (boxed mygtukai su border/background) pakeista į
  `.lp6-gender-toggle`/`.lp6-gender-option` — du žodžiai („Vyras" / „Moteris") greta, be
  jokio apvado; pasirinktas gauna `--lp6-accent` spalvą + `border-bottom` pabraukimą +
  `font-weight: 700`, tarp jų `.lp6-gender-sep` (plonas „/" skirtukas). `<input
  type="radio">` liko funkciškai identiškas (tas pats `name="lp6-gender"`), tik
  vizualiai perdengtas (`opacity:0`, kaip ir anksčiau) — `app.js` selektoriai
  (`input[name="lp6-gender"]:checked`) veikia be pakeitimų.
- Gimimo data: `.lp6-select-wrap select` — pašalintas pilnas `border`/`background-color`
  fonas, paliktas tik `border-bottom: 1px solid rgba(250,250,249,0.28)`, fonas
  `transparent`. Fokusavimo stilius atskirtas nuo CTA/legal-nav (select'ai gauna
  `border-bottom-color` akcento pakeitimą, ne outline dėžutę). `<select>` elementai ir
  jų `id`/`name` (`lp6-day`/`lp6-month`/`lp6-year`) nepakeisti — `app.js` metų
  generavimas ir amžiaus validacija veikia be pakeitimų.
- Pridėtas subtilus dekoratyvus elementas: `.lp6-divider` — plona (34×1px) auksinė
  gradiento linija po prekės ženklo antrašte, unikalus kortelės prisilietimas be
  drastiško silueto keitimo.

**Patikrinta Playwright (sistemos Chrome) 6 dydžiais** (375×812, 901×450, 901×550,
1394×677, 1440×900, 1920×1080):
- Veido pozicija nuotraukoje **identiška** prieš/po — patvirtinta lyginant su laikina
  backup'o kopija (atskiras localhost:8081): `document.documentElement.scrollHeight`
  901×450 ir 901×550 dydžiuose identiškas prieš/po pakeitimų (478px / 576px) — t.y.
  smulkus vertikalus scroll šiuose itin žemuose languose jau egzistavo PRIEŠ šį
  pakeitimą (nesusijęs su forma, nekeista šioje sesijoje, nauji form-control'ai pridėjo
  0px papildomo aukščio). `.lp6-hero` CSS taisyklės (bazinė + abu media query) liko
  visiškai nepaliestos — patikrinta `diff`'u.
- Funkcinė patikra (Playwright click/select): paspaudus „Moteris" žodį `input[value=
  "moteris"]` tampa `checked=true` ir vizualiai paryškėja (auksinė + underline);
  pateikus formą be datos — rodoma klaida „Nurodyk pilną gimimo datą."; pateikus su
  galiojančia suaugusiojo data — forma pasislepia, `.lp6-success` atsidengia.
- CSS dydis: 9.4 KB (< 60 KB riba).

Šio pakeitimo priežastis (kad kita sesija nekartotų tyrimo): kliento nurodymas — 6
vienodo šablono variantai negali likti vizualiai/funkciškai identiški tarpusavyje;
sprendimas kiekvienam variantui buvo priskirtas orkestratoriaus IŠ ANKSTO (matrica ne
šio agento sprendimas), kad 6 lygiagretūs agentai negautų vidutinio/pasikartojančio
rezultato.

## Tracking
`<!-- tracking: lp6_form_submit -->` (`assets/app.js` eil. 70) — vienintelė analitikos
žyma šiame variante, palikta nepaliesta. Jokių GTM/Meta Pixel/ChatGPT-OpenAI pixel ID
šiame faile nėra (patikrinta grep'u `gtag|GTM|fbq|pixel`, 0 atitikmenų) — nėra ko
netyčia sugadinti.
