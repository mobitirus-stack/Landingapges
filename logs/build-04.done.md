# build-04.done.md — `lg4-silas`

**Statusas:** Užbaigta (patikra + pataisymai). Ankstesnė sesija nutrūko dėl API limito prieš patikrą;
ši sesija turinio nekūrė iš naujo — tik patikrino prieš priėmimo kriterijus ir ištaisė rastus trūkumus.

## Kas patikrinta ir kaip

- `promptai/03-statyba.md` priėmimo kriterijai — visi.
- `config/diferenciacijos-matrica.md` eilutė **#4** (visos 14 ašių) — spalvos, tipografija, tinklelis,
  hero tipas, sekcijų tvarka, CTA modelis, kampų/šešėlių kalba, judesio momentas, vaizdinė medžiaga,
  balso tonas, kodo konvencija.
- `config/terminu-zemelapis.md` stulpelis **#4** — visos 15 sąvokų.
- `config/draudziamu-zodziu-sarasas.md` — klišės, klasių vardai, §7 spalvos/šriftai/layout/motyvai/CTA.
- Realus naršyklės testas (Playwright + Chromium, be tinklo, `file://`): 360/768/1024/1440px, konsolė,
  forma (klaidos + sėkmė + fokusas), slaptažodžio perjungiklis, slapukų juosta + `localStorage`,
  `prefers-reduced-motion: reduce`, klaviatūros `Tab` tvarka per visą puslapį.
- Kontrasto skaičiavimas (WCAG formulė) visoms teksto/fono poroms — žemiausias rezultatas 5.6:1
  (uoga ant salavijo formoje), visos kitos poros 7.8–15:1. Reikalavimas ≥4.5:1 — įvykdytas su atsarga.

## Rasti ir ištaisyti defektai

1. **Sekcijų tvarka pažeidė matricos ašį 8.** Reikalaujama `€ → FORM → L → C`, o kode slapukų
   blokas (`#silasConsent`) buvo prieš `<footer>` (t.y. `FORM → C → L`). Ištaisyta — `#silasConsent`
   perkeltas po `</footer>` `index.html`. Patikrinta Playwright'u: DOM tvarka dabar
   `silas-forma → silas-footer → silasConsent`.
2. **`.silas-consent` neturėjo horizontalios paraštės** — skirtingai nei visos kitos sekcijos (kurios
   turi 1.25rem/2rem `padding`), slapukų juosta rėmėsi tiesiai į ekrano kraštus. Pridėtas `margin`
   `assets/garden.css` (bazinis + 768px lūžis).
3. **Dubliuotas apatinės vietos rezervavimas.** `.silas-footer` turėjo papildomą kietai įrašytą
   `+5.5rem` apatinį `padding`, skirtą apsisaugoti nuo fiksuotos apatinės juostos — bet tą patį darbą
   jau atlieka `body { padding-bottom: var(--bar-h) }`, kurio aukštį sinchronizuoja `garden.js`. Po
   `#silasConsent` perkėlimo šis kietas skaičius būtų sukūręs neteisingą tarpą tarp poraštės ir
   slapukų juostos. Pašalintas iš `.silas-footer`, paliktas vienintelis, teisingas mechanizmas per
   `body` lygį.

Nė vienas kitas failas ar tracking komentaras (`<!-- tracking: ... -->`) nepaliestas. Šiame variante
nėra GTM/Meta/OpenAI pikselių (naujas statinis puslapis be backend'o) — tikrinti nebuvo ko, bet
patvirtinu, kad visi trys `tracking:` komentarai (`form_submit_attempt`, `form_submitted`,
`cookie_ack`) liko nepakitę, taip pat `bar_cta_click`.

## `diff` santrauka (kas pasikeitė, kas ne)

- `index.html`: TIK `#silasConsent` bloko perkėlimas iš vietos prieš `</main>` į vietą po `</footer>`.
  Turinys, atributai, `tracking:` komentarai — nepakeisti.
- `assets/garden.css`: 3 punktų pakeitimas — `.silas-consent { margin: ... }` pridėtas (bazė + 768px),
  `.silas-footer` `padding` sutrumpintas (pašalintas `+5.5rem`) bazėje ir 768px lūžyje. Jokių kitų
  taisyklių, spalvų, šriftų, tokenų nepaliesta.
- `assets/garden.js`: nepakeistas.
- `VARIANT.md`: pridėtas „Žingsnis 6 — QA patikra“ skyrius, dokumentuojantis šiuos radinius
  (Žingsnis 5 savikritika jau buvo pilnai užpildyta ankstesnės sesijos — nekeista, tik papildyta).

## Priėmimo kriterijų checklistas

- [x] Planas ir savikritika prieš/po kodo — abu buvo `VARIANT.md`, papildyta QA skyriumi
- [x] Spalvos/šriftai/hero/CTA/sekcijų tvarka atitinka matricos eilutę #4 — sekcijų tvarka ištaisyta,
      viskas kita jau atitiko
- [x] Tekstas tikras, terminija iš stulpelio 4 — visos 15 sąvokų patikrintos, sutampa
- [x] Nėra žodžių iš draudžiamo sąrašo — patikrinta `grep` prieš §1–§9 frazes ir §7 hex/šriftus
- [x] Klasės pagal utility konvenciją (`u-*` + `silas-*`) — patikrinta, jokių draudžiamų bendrinių vardų
- [x] 360px be horizontalaus scroll, klaviatūra pereinamas visas puslapis — patvirtinta Playwright'u
      visoms 4 plotmėms (`scrollWidth === clientWidth`) ir pilnu `Tab` ciklu
- [x] Konsolė švari, forma validuoja ir rodo sėkmės būseną — patvirtinta (0 `console`/`pageerror`
      pranešimų per visus testus; klaidos tekstu, sėkmė su fokusu)
- [x] title/description unikalūs ir tinkamo ilgio — title 43 simb., description 129 simb. (≤60 / ≤155)
- [x] Vienas judesio momentas — fono perėjimas dienos→vakaro scroll'inant; `prefers-reduced-motion`
      patvirtintai jį sustabdo (opacity liko fiksuota 0.18)
- [x] Pašalintas vienas perteklinis elementas, užrašyta kas — SVG „rasos lašo“ dekoracija (žr.
      `VARIANT.md` Žingsnis 5, iš ankstesnės sesijos, patikrinta, kad realiai jos kode nėra)

## Kas liko nepaliesta / pastabos ateičiai

- `assets/garden.css` turi dvi apibrėžtas, bet HTML nenaudojamas utility klases (`u-eyebrow`,
  `u-bleed`) — negyvas kodas, neveikia prieš jokį priėmimo kriterijų (dydžio biudžetas su atsarga),
  todėl palikta neliesta, kad nebūtų daroma daugiau pakeitimų, nei būtina.
