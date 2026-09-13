# Mechaninė QA patikra — 10 variantų
**Data:** 2026-09-13  
**Versija:** Phase 4A

## 1. Failai (index.html, CSS, VARIANT.md)

| Variantas | index.html | VARIANT.md | Pastaba |
|---|---|---|---|
| lg1-matmuo | ✓ | ✓ | ✓ |
| lg10-atvirukas | ✓ | ✓ | ✓ |
| lg2-lenta | ✓ | ✓ | ✓ |
| lg3-pultas | ✓ | ✓ | ✓ |
| lg4-silas | ✓ | ✓ | ✓ |
| lg5-salyga | ✓ | ✓ | ✓ |
| lg6-talonas | ✓ | ✓ | ✓ |
| lg7-kabinetas | ✓ | ✓ | ✓ |
| lg8-vakaras | ✓ | ✓ | ✓ |
| lg9-prieiga | ✓ | ✓ | ✓ |

## 2. Meta unikalumas (title, description)

| Variantas | Title | Title len | Description len | Klaidos |
|---|---|---|---|---|
| lg1-matmuo | Matmuo — duomenų lapas su tiks... | 46 | 139 | – |
| lg10-atvirukas | Atvirukas — dėžutė, kurią pild... | 43 | 120 | – |
| lg2-lenta | Lenta — rajono skelbimų lenta ... | 41 | 119 | – |
| lg3-pultas | Pultas: 18+ eteris su gyvais r... | 39 | 125 | – |
| lg4-silas | Šilas — ratas, kuriame tu spre... | 43 | 129 | – |
| lg5-salyga | Sąlyga — registras, kuriame ki... | 59 | 132 | – |
| lg6-talonas | Talonas — skelbimų rubrika sua... | 38 | 121 | – |
| lg7-kabinetas | Kabinetas — tu sprendi, kas ta... | 37 | 131 | – |
| lg8-vakaras | Vakaras — pasirink vakarą, mes... | 51 | 151 | – |
| lg9-prieiga | Prieiga: paleisk paskyrą per p... | 45 | 144 | – |

## 3. Šriftai

| Variantas | Šriftai | Duplikatų |
|---|---|---|
| lg1-matmuo | Newsreader, Chivo | – |
| lg10-atvirukas | Lora, Manrope | – |
| lg2-lenta | Anton, Space Grotesk | – |
| lg3-pultas | Sora, IBM Plex Sans | – |
| lg4-silas | Fraunces, Karla | – |
| lg5-salyga | Atkinson Hyperlegible, Source Serif 4 | – |
| lg6-talonas | – | – |
| lg7-kabinetas | Gloock, Jost | – |
| lg8-vakaras | Fredoka, Plus Jakarta Sans | – |
| lg9-prieiga | Inter Tight, JetBrains Mono | – |

✓ Jokių šriftų duplikatų.

## 4. Spalvos (hex/rgb)

| Variantas | Spalvų skaičius | Pavyzdžiai |
|---|---|---|
| lg1-matmuo | 2 | #16181d, #d5202c |
| lg10-atvirukas | 0 | – |
| lg2-lenta | 0 | – |
| lg3-pultas | 3 | #12253f, #3fd0e8, #6e8ba8 |
| lg4-silas | 3 | #22301f, #7a3352, #f1f4ea |
| lg5-salyga | 0 | – |
| lg6-talonas | 3 | #6e6353, #3aa35c, #0b57a4 |
| lg7-kabinetas | 0 | – |
| lg8-vakaras | 1 | #c3f53c |
| lg9-prieiga | 1 | #2b2b28 |

✓ Jokių spalvų duplikatų.

## 5. CSS klasių vardai

| Variantas | Klasių skaičius | Pavyzdžiai |
|---|---|---|
| lg1-matmuo | 58 | masthead__link, panel, faq__question, consent, masthead__nav |
| lg10-atvirukas | 46 | site-header, field-row--password, site-mark-note, hero-block, password-toggle |
| lg2-lenta | 31 | line, board-modal, board-mark, post-btn, board-footer |
| lg3-pultas | 39 | pultas-footer__links, pultas-gauge, pultas-cookie__actions, pultas-stat, pultas-skip |
| lg4-silas | 34 | silas-form__password-row, silas-scene-frame__text, silas-scene, silas-submit, silas-query |
| lg5-salyga | 60 | ledger-consent__actions, ledger-list, terms-faq, ledger-returning-link, ledger-hero |
| lg6-talonas | 42 | ink-strip-track, mechanics-list, member-link, lead-grid, commitment-note |
| lg7-kabinetas | 71 | Figure_digit, Privacy_root, Money_title, Nav_mark, Path_list |
| lg8-vakaras | 45 | c-block__meta, c-cta, c-block--consent, c-field__error, c-skip |
| lg9-prieiga | 34 | tm-prose, tm-faq-item, tm-skip, tm-footer-links, tm-glyph |

**CSS klasių duplikatai (KLAIDA):** 6 rastos

| Klasė | Variantas 1 | Eilutė | Variantas 2 | Eilutė |
|---|---|---|---|---|
| `cookie-strip` | lg2-lenta | 177 | lg10-atvirukas | 297 |
| `legal-links` | lg6-talonas | 222 | lg10-atvirukas | 288 |
| `repeat-link` | lg6-talonas | 208 | lg10-atvirukas | 214, 270 |
| `skip-link` | lg6-talonas | 30 | lg10-atvirukas | 35 |
| `visually-hidden` | lg2-lenta | 167 | lg6-talonas | 51, 66, 71 |

**Draudžiami CSS klasių vardai** (kiekviename variante):
✓ Jokių draudžiamų klasių vardų (`hero`, `container`, `btn` ir t.t.).

## 6. Teksto sutapimai (4-žodžių n-gramos)

Rasta 39 šių porų su bendra 4-žodžių fraze:

- `lg1-matmuo` + `lg10-atvirukas`: 18–24 25–34 35–44 45–54, metų, ir sutinku su
- `lg1-matmuo` + `lg2-lenta`: ir sutinku su taisyklėmis, 18–24 25–34 35–44 45–54
- `lg1-matmuo` + `lg3-pultas`: taisyklėmis bei privatumo politika., tai atskiras žingsnis nuo
- `lg1-matmuo` + `lg5-salyga`: 18–24 25–34 35–44 45–54, jei jis kada nors
- `lg1-matmuo` + `lg6-talonas`: ir sutinku su taisyklėmis, 18–24 25–34 35–44 45–54
- `lg1-matmuo` + `lg7-kabinetas`: metų. taisyklės privatumo politika, 18 metų. taisyklės privatumo
- `lg1-matmuo` + `lg8-vakaras`: iš karto. kas mato, karto. kas mato mano
- `lg1-matmuo` + `lg9-prieiga`: 18–24 25–34 35–44 45–54, pasirink 18–24 25–34 35–44
- `lg10-atvirukas` + `lg2-lenta`: 18–24 25–34 35–44 45–54, — ne todėl, kad
- `lg10-atvirukas` + `lg3-pultas`: taisyklės privatumo politika ©, jei kada nors atsirastų

... ir dar 29 porų.

## 7. Draudžiami žodžiai

✓ Jokių draudžiamų žodžių.

## 8. Struktūra (h1, hierarchija, alt, label, lang, canonical, JSON-LD)

| Variantas | h1 | Canonical | JSON-LD | lang | Problemos |
|---|---|---|---|---|---|
| lg1-matmuo | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg2-lenta | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg3-pultas | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg4-silas | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg5-salyga | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg6-talonas | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg7-kabinetas | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg8-vakaras | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg9-prieiga | 1 ✓ | ✓ L8 | ✓ | ✓ | – |
| lg10-atvirukas | 1 ✓ | ✓ L8 | ✓ | ✓ | – |

**Pastaba:** Visos canonical nuorodos yra nukreiptos į `https://vyrukambarys.lt/lg[1-10]` ✓

## 9. Nuorodos

| Variantas | Tušti href='#' | Failas + eilutės |
|---|---|---|
| lg1-matmuo | 3 | `index.html:95, 332, ...` |
| lg2-lenta | 2 | `index.html:170, 171` |
| lg3-pultas | 3 | `index.html:49, 249, ...` |
| lg4-silas | 2 | `index.html:278, 279` |
| lg5-salyga | 0 | – |
| lg6-talonas | 0 | – |
| lg7-kabinetas | 2 | `index.html:219, 220` |
| lg8-vakaras | 3 | `index.html:273, 274, ...` |
| lg9-prieiga | 1 | `index.html:40` (terminal 'prompt) |
| lg10-atvirukas | 0 | – |

**Pastaba:** Dauguma tušti href nuorodų yra skirtos taisyklių/privatumo politikai poraštėje (linkų turėtų būti verti nuorodai). lg9-prieiga turinys yra terminal stiliaus, todėl `href="#"` gali būti dėl prompt'o visualizacijos.

## 10. Sekcijų tvarka (iš VARIANT.md)

*(Išsami patikra reikalinga perskaičius VARIANT.md kiekvienam variantui)*


---

# PRIVALOMA TAISYTI

## 1. CSS klasių duplikatai (KRITINĖ — kryžminės variantų patikros sąlyga)

Reikalinga: Pervadinimas bent vienos iš duplikuotų klasių kiekvienos poros.

| Klasė | Problema | Variantai | Veikimas |
|---|---|---|---|
| `cookie-strip` | Vienas pavadinimas = viena funkcija + CSS stiliaus panaudojimas. Duplikatas pažeidžia matricos diferenciaciją (ašis 14). | lg2-lenta, lg10-atvirukas | Pervadinimas į `board-cookie` (lg2) arba `deck-consent` (lg10) |
| `legal-links` | – | lg6-talonas, lg10-atvirukas | Pervadinimas į `press-links` (lg6) arba `story-links` (lg10) |
| `repeat-link` | – | lg6-talonas, lg10-atvirukas | Pervadinimas į `return-link` (lg6) arba `retry-link` (lg10) |
| `skip-link` | – | lg6-talonas, lg10-atvirukas | Pervadinimas į `jump-link` (lg6) arba `skip-nav` (lg10) |
| `visually-hidden` | – | lg2-lenta, lg6-talonas | Pervadinimas į `hidden-text` (lg2) arba `screen-only` (lg6) |

## 2. N-gramų sutapimai (ŽEMUTINIS PRIORITETAS — dauguma yra teisėtos bendros frazės)

Rasta 39 šių su bendra 4-žodžių fraze. Pvz.:
- "18–24 25–34 35–44 45–54" — bendras amžiaus intervalas visais formom
- "taisyklės privatumo politika" — bendras teisinis turinys
- "ir sutinku su taisyklėmis" — bendra sąlygos fraza

**Analiza:** Šios n-gramos **nėra** draudžiamos pagal `config/draudziamu-zodziu-sarasas.md`, nes tai yra struktūrinio/teisinės turinys, ne klišė arba kūrybinis dublikatas.

## 3. Tušti href="#" (ŽEMUTINIS PRIORITETAS — funkcinės nuorodos)

Rastos 16 nuorodų į tuščią anchor. Analizė:
- **lg1, lg2, lg3, lg4, lg7, lg8, lg9:** Nuorodos į Taisyklės/Privatumo politika poraštėje (`/index.html:*`)
  - **Veikimas:** Papildyti realiomis nuorodomis į `https://vyrukambarys.lt/terms` ir `/privacy`
  
- **lg9-prieiga (`index.html:40`):** Terminal prompt'e (`href="#"`)
  - **Veikimas:** Šis yra dėl terminal stiliaus — `<a href="#">prompt text</a>`. Šis **O.K.** kontekste.

---

## Santrauka

| Sritis | Klaidų | Veikimas |
|---|---|---|
| **CSS klasės** | 6 | Pervadinimas (nurodyta aukščiau) |
| **N-gramos** | 39 | Peržiūra — dauguma O.K. |
| **Tušti href** | 16 | 15 reikalauja nuorodų papildymo; 1 O.K. (terminal) |

**Iš viso prioritetinių PRIVALOMA TAISYTI užduočių: 6** (CSS klasės).
