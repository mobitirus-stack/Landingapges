# PROMPTAS — v2 lp7-lp10: itin paprastas šablonas su realia hero nuotrauka

Modelis: **Sonnet**, effort: **aukštas**. Kintamieji: `{{NN}}`, `{{KRYPTIS}}`.

---

# VAIDMUO

Tu darai VISIŠKAI KITOKĮ šabloną nei lp1-6. Klientas parodė realius konkurentus
(susipazink.com, slaptaspasimatymas.com, pazintys40.lt) — visi naudoja tą patį šabloną: pilno
ekrano nuotrauka fone + maža centruota registracijos kortelė ant jos. Vienas ekranas, be scroll.

# KONTEKSTAS

- `config/vizualines-kryptys-v2.md` skyrius „lp7–lp10 — ANTRA GRUPĖ" — tavo krypties aprašymas.
- `variacijosv2/{{NN}}/assets/hero-portrait.jpg` — JAU PARUOŠTA nuotrauka (klientas pats
  sugeneravo per AI įrankį, JAU optimizuota į JPEG). NENAUDOK jokios kitos nuotraukos, tik šitą.
  Patvirtinta: tai AI-sugeneruotas, ne realaus žmogaus atvaizdas, klientas pats atsakingas už
  generavimą — tau tereikia ją panaudoti kaip hero foną.

# UŽDUOTIS

1. **Vienas ekranas, be scroll** (arba minimalus scroll tik <400px pločio ekranuose, jei būtina
   formos laukams sutilpti). `height: 100vh` (arba `100dvh` mobiliam Safari saugumui) konteineris.
2. **Hero nuotrauka** kaip pilno ekrano fonas: `background-image` arba `<img>` su `object-fit:cover`,
   pozicionuota taip, kad veidas/figūra liktų matomi visuose ekranų dydžiuose (naudok
   `object-position` kad kairė/viršutinė dalis su veidu nenukirstų). PRIVALOMA: tamsinantis
   gradiento sluoksnis (`::before` ar atskiras `div`) ties apačia/kaire, kad tekstas (jei bus ant
   nuotraukos) liktų skaitomas — bet PAGRINDINIS tekstas turi būti KORTELĖJE, ne ant plikos
   nuotraukos.
3. **Maža centruota/pastumta kortelė** (~380-440px pločio, balta arba šviesi/tamsi pagal kryptį,
   šešėlis arba `backdrop-filter: blur()`): logotipas/prekės ženklo vardas, 1-2 eilučių antraštė,
   lyties pasirinkimas (2 `radio`), gimimo data (3 `<select>`: diena/mėnuo/metai), CTA mygtukas
   (pilnas kortelės pločio), 3 maži pasitikėjimo ženkliukai (SVG ikona + 1-3 žodžių tekstas), plona
   apatinė teisinė nuorodų juosta (Pagalba/Taisyklės/Privatumas/Apie/18+).
4. **Tekstas:** tikras, trumpas (šis šablonas neturi FAQ/sekcijų — viskas telpa kortelėje + galbūt
   1 eilutės socialinio įrodymo tekstas po forma, pvz. „Prisijungė 40+ šiandien"). 18+ patvirtinimo
   tekstas prie CTA arba apačioje.
5. **Prieinamumas:** kontrastas kortelės viduje ≥4.5:1 NEPRIKLAUSOMAI nuo foninės nuotraukos
   (kortelė turi savo fono spalvą, ne skaidrus stiklas tiesiai ant nuotraukos teksto srityse);
   `<label>` kiekvienam laukui; `alt=""` dekoratyviai hero nuotraukai (`role="img" aria-hidden`
   arba tiesiog CSS background, ne prasminga `<img>`); `:focus-visible`.
6. **SEO:** title/description/canonical→`vyrukambarys.lt/lp{{NN_SKAICIUS}}`/JSON-LD. `og:image` —
   naudok TĄ PAČIĄ `hero-portrait.jpg` (jau tinkamo formato/dydžio nuotrauka, papildomai generuoti
   nereikia).
7. Klasės su `lp{{NN}}-` prefiksu, jokių draudžiamų bendrinių vardų.

# RIBOS

- NEPRIDĖK jokios kitos nuotraukos/SVG figūros kaip papildomo „avataro" — šiame šablone VIENA hero
  nuotrauka yra visas vizualinis turinys, tai jau pakankamai vizualu (skirtingai nei lp1-6, čia §4
  „avatarai 3 sekcijose" reikalavimas NETAIKOMAS — vienas ekranas, viena nuotrauka, tai ir yra
  vizualinis raštas).
- Forma turi TIK lytį + gimimo datą pirmame žingsnyje (kaip referenciniai puslapiai) — jokių kitų
  laukų šiame ekrane.
- Neskaityk kitų `variacijosv2/lpN*` katalogų.

# OUTPUT
- `variacijosv2/{{NN}}/index.html`, `assets/style.css` (+`app.js` jei reikia validacijai)
- `variacijosv2/{{NN}}/VARIANT.md`
- `logs/v2-build-{{NN}}.done.md`

# PRIĖMIMO KRITERIJAI
- [ ] Vienas ekranas be scroll (arba minimalus, pagrįstas)
- [ ] Hero nuotrauka pilname fone, figūra matoma visuose dydžiuose
- [ ] Kortelė su forma (lytis+data+CTA), kontrastas ≥4.5:1 kortelės viduje
- [ ] 3 pasitikėjimo ženkliukai, teisinė juosta, 18+ tekstas
- [ ] SEO/og:image (naudoja hero-portrait.jpg) užpildyti
- [ ] Klasės su prefiksu, jokių draudžiamų vardų
