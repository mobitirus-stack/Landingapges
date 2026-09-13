# build-02.done.md — `lg2-lenta`

Statybos agentas: statyba (Fazė 3), variantas **lg2-lenta**, prekės ženklas **Lenta**.
Šaltiniai naudoti: `analize/sinteze.md`, `config/diferenciacijos-matrica.md` (eilutė #2 visose 14 ašių +
detalioji kortelė Dalyje 3), `config/terminu-zemelapis.md` (stulpelis 2), `config/draudziamu-zodziu-sarasas.md`.

## Output

- `variacijos/lg2-lenta/index.html`
- `variacijos/lg2-lenta/styles/main.css`
- `variacijos/lg2-lenta/VARIANT.md`
- (JS — inline `<script>` `index.html` pabaigoje; atskiro `assets/app.js` nėra, nes `diferenciacijos-matrica.md`
  Ašis 14 lg2 eilutei nurodo tik `index.html` + `styles/main.css` — tai tikslus matricos laikymasis, ne
  nukrypimas nuo bendro `03-statyba.md` šablono, kuris tik generiškai mini `assets/app.js` „jei reikia“)

## Priėmimo kriterijai

- [x] Planas ir savikritika parašyti prieš kodą (`VARIANT.md` žingsniai 1–2)
- [x] Visos spalvos (`#F2E205`, `#000000`, `#2B4BFF`, `#FFFDF2`, `#E0D400`), šriftai (Anton + Space Grotesk),
      hero tipas (tipografinis plakatas be UI), CTA modelis (pilno ekrano modalas) ir sekcijų tvarka
      (H → P → N → A → FORM(modalas) → M → € → Q → K → D → L → C) atitinka matricos eilutę #2
- [x] Visas tekstas tikras, terminija tik iš stulpelio 2 (iškabinimas, lapelis, kaimynas, lenta, atsakas,
      pokalbis, parašas, valymas, pravardė, el. paštas, slaptažodis, rajonas, metai, už dyką, kas mato)
- [x] Nėra nė vieno žodžio iš draudžiamų sąrašo (patikrinta `grep` prieš §1, §5, §7.1, §7.2, §9.1–9.5 ir
      prieš kitų variantų terminus — narys/vartotojas/sistema/platforma/sprendimas/paslauga/produktas/
      įrankis/aplikacija/svetainė neaptikta)
- [x] Klasių pavadinimai nestandartiniai, pagal priskirtą konvenciją (`offerboard`, `stamp`, `pinnote` +
      jų semantiniai plėtiniai — `board-topbar`, `board-modal`, `post-btn` ir kt.; patikrinta pilnu klasių
      sąrašu, nė vieno tikslaus atitikmens draudžiamam sąrašui `hero/container/wrapper/btn/card/section/...`)
- [x] 360px be horizontalaus scroll (pasukimo kampai išjungiami ties `max-width: 480px`, `body { overflow-x:
      hidden }` kaip saugiklis, antspaudas pozicionuotas nuo dešiniojo krašto — negali išstumti pločio);
      klaviatūra pereinamas visas puslapis (visi interaktyvūs elementai — `<button>`, `<a>`, `<input>`,
      `<select>`, `<details>/<summary>` — natūraliai fokusuojami, `:focus-visible` matomas)
- [x] Konsolė švari (JS sintaksė patikrinta `node --check`), HTML žymos subalansuotos (`div`/`section`/
      `details` atidarymai = uždarymai, CSS `{`/`}` 86=86), forma validuoja JS pusėje (rajonas, metai,
      pravardė, el. paštas, slaptažodis, sutikimas) ir rodo sėkmės būseną su įterptu vartotojo el. paštu
- [x] `<title>` (44 simb.) ir `meta description` (128 simb.) unikalūs ir tinkamo ilgio; pridėti `og:` rinkinys,
      `canonical`, `lang="lt"`, JSON-LD (`WebSite`)
- [x] Vienas judesio momentas: `.post-btn:active` — ofsetinis šešėlis suvalgomas, blokas pasislenka 6px
      (reakcija į paspaudimą); `prefers-reduced-motion: reduce` išjungia perėjimą
- [x] Pašalintas vienas perteklinis elementas ir tai užrašyta (`VARIANT.md` žingsnis 5): herojaus antspaudo
      SVG viduje buvusi punktyrinė vidinė apskritimo linija

## Papildomos patikros

- Tracking steko šiame variante nėra (naujas failas, jokių GTM/Meta Pixel/OpenAI ID) — vietoje analitikos
  įdėti `<!-- tracking: event_name -->` komentarai prie CTA mygtukų, modalo atidarymo, formos pateikimo ir
  slapukų sutikimo, kaip reikalauja `03-statyba.md` žingsnis 4.
- Failų dydžiai: `index.html` ~15KB, `styles/main.css` ~9KB (<60KB reikalavimas), jokių rastrinių vaizdų
  (0 `<img>`), viso aplanko dydis 48KB — gerokai mažiau nei 1.5MB riba.
- Rašyta tik į `variacijos/lg2-lenta/` ir `logs/`; jokie kiti `variacijos/` pakatalogiai neskaityti.
- CSS spalvos ir tarpai (24px/72px) patikrinti prieš `config/draudziamu-zodziu-sarasas.md` §7.1 hex sąrašą —
  sutapimų nėra.

## Statusas

**Atlikta, nė vienas kriterijus nepažeistas. Blokavimo nebuvo — matrica vidujai nuosekli šiam variantui.**
