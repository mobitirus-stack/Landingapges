# lp4 — Auksinės valandos hero nuotrauka

## Kryptis

Itin paprastas vieno ekrano šablonas (v2 antra grupė, `promptai/08-statyba-v2-foto.md`):
pilno ekrano hero nuotrauka fone + maža centruota/dešinėn pastumta registracijos kortelė
ant jos. Jokio scroll'o, jokių papildomų sekcijų — visas turinys telpa viename ekrane.

**Pastaba dėl nuotraukos:** `config/vizualines-kryptys-v2.md` lp4–lp10 „ANTRA GRUPĖ" skyrius
istoriškai aprašė SVG iliustraciją kaip alternatyvą fotorealistiškai nuotraukai. Vėliau šis
sprendimas buvo pakeistas — klientas (Jonas) pats sugeneravo `assets/hero-portrait.jpg` per AI
įrankį ir patvirtino jos naudojimą tiesiogiai (žr. `promptai/08-statyba-v2-foto.md`
KONTEKSTAS skyrių: „Patvirtinta: tai AI-sugeneruotas, ne realaus žmogaus atvaizdas"). Šis
variantas naudoja būtent tą nuotrauką, ne SVG iliustraciją — naujesnis prompto failas yra
autoritetingesnis šaltinis nei senesnė krypčių lentelė. Paletė/nuotaika (auksinė valanda,
saulėlydžio tonai) paimta iš `vizualines-kryptys-v2.md` lp4 aprašymo ir pritaikyta realiai
nuotraukai (ji jau turi tinkamus saulėlydžio tonus).

## Nuotaika ir paletė

- Šilta, romantiška, saulėlydžio atmosfera.
- Kortelės fonas `#FFF7ED`, akcentas/CTA `#EA580C` (hover `#C2410C`), tekstas `#431407`,
  prislopintas tekstas `#7C4A32`.
- Fono sluoksnis po nuotrauka (matomas kraštuose) `#7C2D12`.

## Šriftai

Fraunces (prekės ženklas + antraštė) + Inter (forma/tekstas). Abu kraunami iš Google Fonts
su `preconnect`.

## Struktūra

1. Pilno ekrano `hero-portrait.jpg` fonas (`background-image`, `cover`), su
   `background-position`, koreguojamu per media query, kad veidas/figūra liktų matomi
   360px–1440px+ pločiuose.
2. Tamsinantis gradiento „scrim" sluoksnis apačioje/kairėje teksto įskaitomumui (bet
   pagrindinis tekstas visada kortelėje, ne ant plikos nuotraukos).
3. Kortelė (~380–420px, `#FFF7ED` fonas, šešėlis): prekės ženklo monograma + vardas,
   1 eilutės antraštė, lyties radio (Vyras/Moteris), gimimo data (3 `<select>`: diena/
   mėnuo/metai), pilno pločio CTA, sutikimo/18+ tekstas, sėkmės pranešimo vieta, 1 eilutės
   socialinio įrodymo tekstas, 3 pasitikėjimo ženkliukai (SVG + tekstas).
4. Apatinė teisinė juosta: Pagalba / Taisyklės / Privatumas / Apie / 18+ ženkliukas.

## Forma ir validacija

`assets/app.js` (šioje sesijoje parašytas — trūko iš ankstesnės sesijos):
- užpildo dienos (1–31) ir metų (dabartiniai metai −18 iki −90) pasirinkimus,
- tikrina, kad pasirinkta lytis ir pilna, kalendoriškai teisinga gimimo data,
- tikrina amžių ≥18 (atmeta jaunesnius su klaidos pranešimu prie datos lauko),
- sėkmės atveju paslepia formą, parodo patvirtinimo tekstą (`role="status"`,
  `tabindex="-1"` fokusui) ir išjungia CTA.

## Prieinamumas

- Kontrastas kortelės viduje perskaičiuotas WCAG 2.1 formule: žemiausia reikšmė
  (CTA tekstas ant akcento) 5.16:1, pagrindinis tekstas 14.74:1 — visos poros ≥4.5:1.
- `<label>`/`aria-label` kiekvienam formos laukui (select'ų vizualiai paslėpti `<label>`
  per `.lp4-sr-only`), `fieldset`/`legend` lyties grupei, `role="group"` datos eilutei.
- `:focus-visible` ant visų interaktyvių elementų.
- „Praleisti į formą" skip-link.
- `prefers-reduced-motion` palaikomas.

## Nuotraukoje esantis žmogus

Tekste niekur nėra teiginio, kad nuotraukoje esanti moteris yra konkreti reali narė —
antraštė ir kortelės turinys kalba bendrai („pradėk naują pažintį"), nuotrauka naudojama
tik kaip atmosferinis fonas.

## SEO

Title/description/canonical → `https://vyrukambarys.lt/lp4`, OG + Twitter Card su
`og:image`/`twitter:image` → `hero-portrait.jpg` (1024×1536, atitinka realaus failo dydį),
JSON-LD (`Organization` + `WebPage`).
