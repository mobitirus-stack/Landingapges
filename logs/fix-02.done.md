# fix-02.done — lg2-lenta tikslinis taisymas (QA §7.2)

**Failas:** `variacijos/lg2-lenta/index.html`
**Pagrindas:** `qa/panasumo-auditas.md` §7.0 + §7.2, `config/diferenciacijos-matrica.md` DALIS 3 (lg2 kortelė),
`config/terminu-zemelapis.md` stulpelis 2, `config/draudziamu-zodziu-sarasas.md`.

## Pakeista — 8 eilutės, tiksliai tos, kurios nurodytos §7.2

| Eil. | Konstrukcija | Buvo | Tapo |
|---|---|---|---|
| 41 | S5 | „Jau turi lapelį? Prisijunk.“ | „Turi lapelį. Prisijunk.“ |
| 82 | S2 | „...nuimami per valymą — dar prieš pasirodydami lentoje. Rankomis. Ne robotu.“ | „...prieš paskelbdami valome: tuščią, pasikartojantį ar akivaizdžiai netikrą — nuimame, ir jis lentoje nepasirodo.“ |
| 113 | S1 | „...Jei kada nors atsirastų mokamas lygis, pirmiausia apie tai parašytume čia, o ne po to, kai jau būtum įsitraukęs.“ | „Lenta — už dyką. Iškabinimas, atsakas, pokalbis — viskas įskaičiuota. Tiek ir yra iš tikrųjų.“ |
| 127 | S3 | „Rodoma lentoje: ... Niekada nerodoma: ... Jokių laiškų mums, jokių paaiškinimų.“ | „Ant lapelio užrašai tik pravardę, metus ir rajoną — daugiau ten nieko nėra. Netinka — nuimk lapelį, ir jo nebėra.“ (sakinys „Netinka — nuimk...“ paliktas, kaip nurodyta) |
| 135 | S4 | „Jei dar dvejoji“ | „Klausimai. Tiesiai.“ |
| 139 | S2 (DUK) | „...peržiūrime rankomis prieš iškabindami...“ | „...valome prieš iškabindami — tuščias ar pasikartojantis į lentą nepatenka.“ |
| 143 | S1 (DUK) | „Nieko. Lapelio iškabinimas, atsakas ir pokalbis — už dyką.“ | „Nieko. Tiek ir yra.“ |
| 147 | S3 (DUK) | „Tik pravardė, metai ir rajonas. Nei el. paštas, nei tikras vardas niekada nerodomi.“ | „Tai, kas parašyta ant lapelio: pravardė, metai, rajonas. Daugiau nieko.“ |

## Patvirtinimas — S1–S5 nurodymai įvykdyti

- **S1** — sąlyginis būsimasis „Jei kada nors atsirastų mokamas lygis... ne po to, kai...“ pašalintas visai
  (eil. 113 ir 143). Pinigų klausimas dabar uždaromas trumpu faktu lg2 ritmu, be pažado apie ateitį.
- **S2** — priešprieša „Rankomis. Ne robotu.“ pašalinta (eil. 82). lg2 savas judesys („lapelis nuimamas per
  valymą“) paliktas ir perrašytas veiksmas → pasekmė forma (matricos priskirta konstrukcija). DUK atitikmuo
  (eil. 139) suderintas su ta pačia fraze, „X, ne Y“ formos nebeliko nė vienoje vietoje.
  Pastaba: DUK klausimas eil. 138 „Ar tai tikri žmonės, ne robotai?“ **nebuvo keičiamas** — audito §7.2 nurodė
  keisti tik eil. 82 ir 139 (atsakymus), ne pačią klausimo formuluotę.
- **S3** — dvipusis „rodoma / niekada nerodoma“ sąrašas (eil. 127) ir jo trumpesnis DUK variantas (eil. 147)
  pakeisti fizine metafora — kas užrašyta ant paties lapelio — vietoje privatumo deklaracijos su dviem
  stulpeliais. lg2 savas sakinys „Netinka — nuimk lapelį, ir jo nebėra.“ paliktas nepakeistas abiejose vietose,
  kur jis buvo (eil. 127 ir 155 — pastaroji nebuvo audito sąraše ir liko nepaliesta).
- **S4** — antraštė „Jei dar dvejoji“ (eil. 135) pakeista į „Klausimai. Tiesiai.“ — tiesmukas, ne mandagi
  formulė, atitinka lg2 toną.
- **S5** — „Jau turi lapelį? Prisijunk.“ (eil. 41) pakeista į ne klausimo formą: „Turi lapelį. Prisijunk.“

## Kas NEPALIESTA (patikrinta)

- `styles/main.css` — failas iš viso neatidarytas, 0 pakeitimų.
- JS blokas (`<script>` puslapio gale) — 0 pakeitimų, forma, validatoriai, modalo logika, slapukų logika identiški.
- Formos laukai — `id`/`name`/`aria-*`/`required`/`minlength`/`autocomplete` — nepakeisti nė viename lauke.
- Sekcijų tvarka — nepakeista (P → N → A → FORM-explainer → M → € → Q → K → D → L → C, kaip ir buvo).
- `<!-- tracking: ... -->` žymos — visos 7 liko nepaliestos, tiksliai tose pačiose vietose, tuo pačiu
  pavadinimu: `cta_open_modal_hero`, `cta_open_modal_repeat`, `cta_open_modal_faq`, `cookie_consent_accept`,
  `form_submit_attempt` (×2 — komentaras HTML mygtuke ir komentaras JS handleryje), `form_submit_success`,
  `modal_open`.
- `h1` trijų eilučių struktūra, antspaudas (SVG), `post-btn` mygtukų klasės, pasukimo kampai, meta
  description / OG žymos / JSON-LD — nepakeista (jos nekartojo S1–S5 sakinių pažodžiui, tad keitimo pagrindo
  nebuvo).
- Jokios naujos CSS klasės, spalvos ar šrifto nepridėta.

## Patikra po keitimo

Pilnas failas perskaitytas po visų 8 redagavimų — patvirtinta, kad pakito **tik** šios 8 eilutės, viskas kita
liko baitas į baitą tas pats kaip prieš taisymą.
