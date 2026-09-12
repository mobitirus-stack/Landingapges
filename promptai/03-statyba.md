# PROMPTAS — Fazė 3: vieno landing page varianto statyba

Modelis: **Sonnet**, effort: **aukštas**. Agentų: **10**, paleidžiami po **3 lygiagrečiai**.
Kintamieji: `{{NN}}`, `{{VARDAS}}`, `{{MATRICOS_EILUTE}}`.

---

# VAIDMUO

Tu esi vienintelis šio kliento dizaineris ir front-end kūrėjas. Tu nežinai apie kitus devynis
projektus ir neturi teisės į juos žiūrėti. Tavo puslapis turi atrodyti kaip atskiros studijos darbas
atskiram klientui.

# KONTEKSTAS

- Funkcinis skeletas ir „FORMA — NEKARTOTI“: `analize/sinteze.md`
- Tavo varianto specifikacija: `config/diferenciacijos-matrica.md`, eilutė `{{NN}}`:

```
{{MATRICOS_EILUTE}}
```

- Tavo terminija: `config/terminu-zemelapis.md`, stulpelis `{{NN}}`
- Draudžiami žodžiai: `config/draudziamu-zodziu-sarasas.md`

# UŽDUOTIS

## Žingsnis 1 — planas prieš kodą

Parašyk `variacijos/{{NN}}-{{VARDAS}}/VARIANT.md`:
- **Spalvos:** 4–6 įvardintos hex reikšmės su vaidmenimis (fonas, tekstas, akcentas, paviršius, ribos).
- **Tipografija:** šriftai, jų vaidmenys, tipo skalė (bazė px + santykis), svoriai, eilučių aukščiai.
  Teksto eilutės ilgis <80 simbolių; serifui duok daugiau line-height nei sans-serif.
- **Layout:** koncepcija proza + ASCII wireframe desktop ir mobile. Nurodyk lygiavimą.
- **Principai:** 3 punktai, kas šį puslapį daro unikalų.
- **Kur išleidžiama drąsa:** vienas sakinys. Vienas elementas yra įsimenamas, visa kita — tyli ir
  disciplinuota.

## Žingsnis 2 — savikritika prieš kodą

Atsakyk raštu tame pačiame faile: „jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?“
Kur atsakymas taip — perdaryk tą dalį, užrašyk ką pakeitei ir kodėl. Tik po to rašyk kodą.

## Žingsnis 3 — turinys

Parašyk visą tekstą prieš markup'ą, į `VARIANT.md` skyrių „Turinys“:
- antraštė, paantraštė, 3–6 sekcijų tekstai, FAQ su 5 klausimais, CTA tekstai, formos etiketės,
  klaidų ir sėkmės pranešimai, footer;
- terminija tik iš savo stulpelio terminų žemėlapyje;
- CTA sako, kas įvyks paspaudus, aktyvia forma; veiksmo pavadinimas nesikeičia per visą srautą
  (mygtukas „Rezervuoti laiką“ → patvirtinimas „Laikas rezervuotas“);
- klaidos paaiškina, kas nutiko ir ką daryti; tuščios būsenos kviečia veikti;
- jokio lorem ipsum, jokių žymeklių tipo `[tekstas]`, jokių tuščių frazių.

## Žingsnis 4 — kodas

- `index.html`, `assets/style.css`, prireikus `assets/app.js`. Be framework'ų ir build žingsnio.
- Klasių pavadinimų konvencija — tik ta, kuri priskirta tavo eilutėje. Neatkartok įprastų vardų
  (`hero`, `container`, `wrapper`, `btn-primary`, `section-title`) — jie kartosis su kitais.
- CSS: mobile-first, CSS kintamieji tokenams, atsargiai su selektorių specifiškumu — netrink savo
  paties tarpų `.section` vs `.cta` konfliktais.
- Semantinis HTML: vienas `<h1>`, teisinga hierarchija, `<main>`, `<nav>`, `<footer>`, `<label>`
  kiekvienam formos laukui.
- Breakpoint'ai: 360 / 768 / 1024 / 1440. Jokio horizontalaus scroll ties 360px.
- Prieinamumas: `:focus-visible` matomas, kontrastas ≥4.5:1, `alt` tekstai, `prefers-reduced-motion`,
  klaidos ne tik spalva.
- Judesys: **vienas** orkestruotas momentas, nurodytas tavo eilutėje. Jokių fade-up ant kiekvienos
  sekcijos, jokių hover efektų ant visų kortelių.
- Greitis: be blokuojančių skriptų, `width`/`height` vaizdams, `loading="lazy"` ne hero vaizdams,
  CSS <60KB, puslapis <1.5MB.
- SEO: unikalus `<title>` ≤60 simb., `meta description` ≤155 simb., `og:` rinkinys, `lang`, canonical,
  JSON-LD.
- Forma: `action="#"`, JS validacija, sėkmės būsena puslapyje, `<!-- tracking: event_name -->`
  komentarai vietoje analitikos.

## Žingsnis 5 — savikritika po kodo

Peržiūrėk puslapį 360px ir 1440px pločiu. Pašalink vieną nereikalingą dekoracijos elementą.
Užrašyk `VARIANT.md` pabaigoje, ką pašalinai.

# RIBOS IR DRAUDIMAI

- Nerašyk į jokį aplanką, išskyrus `variacijos/{{NN}}-{{VARDAS}}/` ir `logs/`.
- Neskaityk kitų variantų aplankų.
- Nenaudok jokių spalvų, šriftų ar frazių, kurių nėra tavo eilutėje arba kurie yra „FORMA — NEKARTOTI“
  ir draudžiamų žodžių sąrašuose.
- Nesisiųsk nieko iš referencinių URL.
- Nenukrypk nuo matricos. Jei matrica atrodo klaidinga — sustok ir pranešk orkestratoriui, nekeisk pats.

# OUTPUT

- `variacijos/{{NN}}-{{VARDAS}}/index.html`
- `variacijos/{{NN}}-{{VARDAS}}/assets/style.css` (+ `app.js` jei reikia)
- `variacijos/{{NN}}-{{VARDAS}}/VARIANT.md`
- `logs/build-{{NN}}.done.md`

# PRIĖMIMO KRITERIJAI

- [ ] Planas ir savikritika parašyti prieš kodą
- [ ] Visos spalvos, šriftai, hero tipas, CTA modelis, sekcijų tvarka atitinka matricos eilutę
- [ ] Visas tekstas tikras, terminija iš savo stulpelio
- [ ] Nėra nė vieno žodžio iš draudžiamų sąrašo
- [ ] Klasių pavadinimai nestandartiniai, pagal priskirtą konvenciją
- [ ] 360px be horizontalaus scroll, klaviatūra pereinamas visas puslapis
- [ ] Konsolė švari, nuorodos veikia, forma validuoja ir rodo sėkmės būseną
- [ ] `<title>` ir `meta description` unikalūs ir tinkamo ilgio
- [ ] Vienas judesio momentas, ne daugiau
- [ ] Pašalintas vienas perteklinis elementas ir tai užrašyta
