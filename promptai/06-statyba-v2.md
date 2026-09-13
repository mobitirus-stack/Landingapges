# PROMPTAS — v2 partija: vizualiai sunkus landing page variantas

Modelis: **Sonnet**, effort: **aukštas**. Agentų: **10**, paleidžiami po **3 lygiagrečiai**.
Kintamieji: `{{NN}}` (lp1..lp10), `{{KRYPTIS}}` (iš `config/vizualines-kryptys-v2.md`).

---

# VAIDMUO

Tu esi front-end kūrėjas ir dizaineris. Klientas pasakė: ankstesnė partija (v1, `variacijos/`)
buvo per daug tekstinė. Ši partija (v2, `variacijosv2/`) turi būti **vizualiai sunki, profesionali,
panaši į realius dating app'us** — žemėlapiai, kortelių karuselės, nuotraukų tinkleliai, VIP
ženkleliai — bet **be jokių realių žmonių nuotraukų**.

# KONTEKSTAS

- `config/vizualines-kryptys-v2.md` — tavo kryptis `{{KRYPTIS}}` (paletė, šriftai, vizualinis
  raštas, avataro stilius) IR bendros techninės taisyklės apačioje.
- Verslas: teisėta 18+ pažinčių platforma Lietuvoje, amžiaus patvirtinimas privalomas.
- Ši partija yra ATSKIRA nuo v1 — gali turėti naują prekės ženklo vardą, bet turi laikytis to paties
  komercinio tikslo (registracija) ir tos pačios F1-F17 funkcinės logikos kaip v1 (žr.
  `analize/sinteze.md`, jei nori konteksto — bet NEPRIVALOMA, ši partija pirmiausia sprendžia
  VIZUALINĮ, ne tekstinį uždavinį).

# GRIEŽTA RIBA (patvirtinta su klientu)

**JOKIŲ realių, atsisiųstų, scrape'intų ar stock žmonių nuotraukų.** Visi avatarai/„nariai"/
profilių atvaizdai — TIK inline SVG arba CSS generuoti (geometriniai pavidalai, gradientai,
silhouettes, monogramos, low-poly formos) — pagal tavo krypties „Avataras" aprašymą. Jei
`{{KRYPTIS}}` mini "veidą" — tai visada abstrakti/geometrinė forma, NIEKADA realistiškas ar
atpažįstamas žmogaus atvaizdas.

# UŽDUOTIS

1. **Planas.** `variacijosv2/{{NN}}/VARIANT.md`: spalvos su vaidmenimis, tipografija, vizualinio
   rašto koncepcija proza + ASCII wireframe (kur tiksliai yra žemėlapis/kortelės/tinklelis/kt.),
   avataro SVG sistemos aprašymas (kaip tiksliai generuoji „narius" be realių veidų).
2. **Pilnas tekstas:** antraštė, paantraštė, 3-6 sekcijos, FAQ (5 klausimai), CTA, formos etiketės,
   klaidos/sėkmė, footer su 18+ patvirtinimu. Tikras tekstas, jokio lorem ipsum.
3. **Kodas — VIZUALINIS AKCENTAS ČIA SVARBIAUSIAS:**
   - Įgyvendink savo krypties vizualinį raštą PILNAI, ne kaip mažą priedą: jei kryptis sako
     „žemėlapis su pin'ais" — tai turi būti didelis, realus, veikiantis (bent vizualiai) elementas,
     ne maža iliustracija kampe.
   - Sukurk **bent 8-12 skirtingų avatarų** (SVG, generuojamų pagal krypties stilių — pvz. skirtingi
     inicialai/spalvų deriniai/formos), naudojamų per kelias sekcijas (žemėlapio pin'ai, kortelės,
     stories juosta ir pan.) — kad puslapis atrodytų gyvas, ne vienas pakartotas elementas.
   - Vienas orkestruotas judesio momentas (kaip v1 taisyklė) PLIUS smulkesnės UI reakcijos, kurios
     natūralios tavo raštui (pvz. swipe kortelės animacija, stories juostos hover, pulsuojantis
     online taškas) — šios smulkios UI reakcijos NESISKAITO kaip pažeidžiantis „vienas judesys"
     taisyklę, nes jos yra funkcinės sąsajos dalis, ne dekoratyvinis efektas.
   - Semantinis HTML, `<main>/<nav>/<footer>`, vienas `<h1>`, `<label>` kiekvienam laukui.
   - Responsive 360/768/1024/1440, be horizontalaus scroll.
   - Prieinamumas: kontrastas ≥4.5:1 (patikrink TIKRAI, nes tamsios/spalvotos kryptys rizikuoja),
     `:focus-visible`, dekoratyviems SVG `aria-hidden="true"`, prasmingiems — `<title>`/`aria-label`,
     `prefers-reduced-motion` išjungia visas animacijas.
   - CSS <60KB (SVG gali būti inline HTML, neskaičiuojamas į CSS limitą, bet laikykis <1.5MB
     bendro puslapio svorio), be blokuojančių skriptų.
   - SEO: unikalus `<title>`≤60, `description`≤155, `og:`, `canonical` → `https://vyrukambarys.lt/lp{{NN_SKAICIUS}}`,
     `lang="lt"`, JSON-LD Organization+Service. **`og:image` — TIK PNG arba JPG 1200×630**, eksportuotas
     iš savo SVG kompozicijos (pvz. Playwright screenshot arba canvas render) — NIEKADA `.svg` failas
     tiesiogiai kaip `og:image` (Meta/LinkedIn/X to nepalaiko, nuorodos peržiūra bus tuščia).
   - Forma: `action="#"`, JS validacija, sėkmės būsena, `<!-- tracking: event_name -->` žymos.
   - `@media (prefers-reduced-motion: reduce)`: privalomai `html { scroll-behavior: auto; }`.
   - Klasių vardai: PATIKRINK grep'u prieš `config/draudziamu-zodziu-sarasas.md` sąrašą (`hero`,
     `container`, `wrapper`, `btn`, `btn-primary`, `card`, `section`, `section-title`, `grid`, `row`,
     `col`, `cta`, `feature`, `feature-card`, `testimonial`, `footer-links`) — VISOS savo klasės TURI
     turėti savo varianto prefiksą (`lp{{NN_SKAICIUS}}-`), be išimčių.
4. **PRIVALOMAS mechaninis vizualinio pasiskirstymo reikalavimas** (ne rekomendacija — kriterijus):
   - Krypties avatarų/vizualinė sistema privalo pasirodyti **bent 3 skirtingose `<section>`**, iš
     kurių **bent viena yra po puslapio viduriu** (t.y. ne tik hero + viena sekcija po juo).
   - Sekcija su registracijos forma IR bent viena „pasitikėjimo" sekcija (saugumas/patikra/socialinis
     įrodymas) **negali būti grynas tekstas** — kiekviena turi bent vieną realų vizualinį elementą
     (avatarą, ikoną-kompoziciją, mini-vizualizaciją), ne vien 16-24px dekoratyvinę piktogramą.
   - Prieš baigdamas, suskaičiuok pats: kiek `<section>` turi realų (>1 elemento) vizualinį turinį
     vs kiek yra grynas tekstas. Jei santykis <50% — sustiprink.
5. **Savikritika:** peržiūrėk 360px ir 1440px (Playwright/Chrome, jei prieinama). Patikrink, ar
   vizualinis raštas TIKRAI dominuoja puslapyje per VISĄ scroll'ą, ne tik hero juostoje viršuje.
   Jei per silpna — sustiprink PRIEŠ baigdamas, ne po.

# RIBOS IR DRAUDIMAI

- **Iliustracijos/avatarai NIEKADA neaprašomi tekste kaip „realūs nariai"/„realūs žmonės"/„jau
  naršo"** ir pan. — tik „pavyzdinis rodinys" / „iliustracija" formuluotės. Trys ankstesni variantai
  (lp5, lp6 batch2) nepriklausomai padarė šią klaidą — tai teisinė/etinė riba, ne stiliaus klausimas.
- Rašyk TIK į `variacijosv2/{{NN}}/` ir `logs/`.
- Neskaityk kitų `variacijosv2/lpN*` ar `variacijos/lgN*` katalogų.
- Jokių realių nuotraukų/atsisiuntimų iš interneto.
- Jokių draudžiamų v1 klišių (patikrink `config/draudziamu-zodziu-sarasas.md` bendrus punktus —
  ALL-CAPS eyebrow, „→" mygtukuose, template chrome).

# OUTPUT
- `variacijosv2/{{NN}}/index.html`, `assets/style.css` (+`app.js` jei reikia)
- `variacijosv2/{{NN}}/VARIANT.md`
- `logs/v2-build-{{NN}}.done.md`

# PRIĖMIMO KRITERIJAI
- [ ] Vizualinis raštas iš krypties įgyvendintas pilnai, dominuoja puslapyje
- [ ] Bent 8-12 skirtingų SVG avatarų, jokios realios/atsisiųstos nuotraukos
- [ ] Kontrastas ≥4.5:1, prieinamumas, reduced-motion
- [ ] 360px be horizontalaus scroll, formos veikia
- [ ] SEO/OG/canonical/JSON-LD užpildyti
- [ ] Pilnas, tikras tekstas, jokio lorem ipsum
