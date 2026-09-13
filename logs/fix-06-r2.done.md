# Fix log — lg6-talonas, 2-as ciklas (QA §R.7.5, pakartotinis auditas)

**Kontekstas:** pirmas ciklas (`logs/fix-06.done.md`) pataisė S1/S3/S4/S5, bet S2 (eil. 172–173,
194) pataisą pakeitė nauju sakiniu „Korektūra tikrina kiekvieną skelbimą“ / „Kiekvieną skelbimą
prieš pasirodant rubrikoje perskaito korektorius“ — tai atkūrė **tą patį S2b griaučių dvynį su
lg2:82** („kiekvieną … prieš … perskaito“), tik kitais žodžiais. Antras auditas tai rado.

## Atlikti pakeitimai (`variacijos/lg6-talonas/index.html`)

- **eil. 173 (antraštė, `#moderation-title`):**
  „Korektūra tikrina kiekvieną skelbimą“ → **„Korektūra grąžina su pastaba, ne ištrina“**.
  Antraštė dabar pasakoja per grįžimo veiksmą, ne per patikrą prieš pasirodymą.
- **eil. 174 (pastraipa):**
  „Kiekvieną skelbimą prieš pasirodant rubrikoje perskaito korektorius. Jei tekstas neaiškus…“ →
  **„Skelbimai spausdinami tik iš korektūros eilės. Jei tekstas neaiškus…“**
  Pakeistas tik pirmas sakinys (S2b griaučiai išmesti, „kiekvieną“/„prieš pasirodant“/„perskaito“
  nebeliko). Antras sakinys („skelbimas grąžinamas atgal su pastaba, ką pataisyti, o ne tiesiog
  ištrinamas“) — **paliktas pažodžiui**, tai lg6 parašas.
- **eil. 194 (DUK atsakymas, „Kas patikrina, kad kitoje pusėje tikras žmogus?“):**
  „Korektorius: kiekvieną skelbimą perskaito žmogus prieš jam pasirodant rubrikoje, ir gali jį
  grąžinti…“ → **„Korektorius. Netinkamą skelbimą jis grąžina su pastaba, ką pataisyti — o ne
  ištrina.“**
  Atsakymas dabar — pareigybė + veiksmas su netinkamu skelbimu. „Kiekvieną“, „prieš … pasirodant“,
  „žmogus“ — nė vieno.
- Klausimo tekstas eil. 193 („Kas patikrina, kad kitoje pusėje tikras žmogus?“) — **nekeistas**,
  užduotyje reikalauta keisti tik atsakymą.

## Žinomas, sąmoningai nepaliestas neatitikimas

- **eil. 48 (marquee `ink-strip`) ir eil. 52 (`talonas-hidden` sr-only dublikatas)** vis dar turi
  senąją frazę „KOREKTŪRA TIKRINA KIEKVIENĄ SKELBIMĄ“. Ši `<p class="talonas-hidden">` eilutė yra
  ekrano skaitytuvo dublikatas *būtent* aria-hidden marquee juostos tekstui (ta pati eilutė žodis
  į žodį), t. y. jos turinio pakeitimas reikštų marquee turinio keitimą. Užduotis GRIEŽTAI draudžia
  liesti marquee — todėl šis fragmentas paliktas kaip yra. Jei norima suvienodinti, tai atskira
  užduotis su aiškiu leidimu liesti marquee.

## Patikrinta diff'u (nekeista)

- `diff` prieš scratchpad kopiją rodo tik 2 pakeitimų blokus (eil. 173–174 ir eil. 194) — jokių
  kitų eilučių paliesta nebuvo.
- **Tracking žymos** — `<!-- tracking: coupon_submitted -->` (eil. 140) ir
  `/* tracking: coupon_submitted */` (JS, eil. 314) — patikrintos grep'u, abi nepaliestos, ID/reikšmės
  nekeistos.
- **Nekeista, patvirtinta:** eil. 71–74 (F8 money-note), eil. 213–215 (F9 privacy-block), eil. 186
  antraštė („Klausimai apie taloną“, jau pataisyta 1-am cikle), eil. 42 nuoroda
  (`#coupon-side-2` „Jau užpildei taloną…“), marquee, misregistracija (`translate(2,2)` sluoksniai),
  perforacija/talono pusės, halftone SVG, `assets/style.css` — nė vienas simbolis.
- Grep patikra po pakeitimo: `kiekvien` liko tik marquee/`talonas-hidden` fragmente (žr. aukščiau);
  frazė „prieš … pasirodant“ šalia moderavimo/DUK bloko nebeaptinkama; žodis „žmogus“ moderavimo
  DUK atsakyme išnyko.

## Priėmimo kriterijus

- [x] eil. 173 antraštė pakeista, nebe „tikrina kiekvieną skelbimą“
- [x] eil. 174 nebeprasideda „Kiekvieną…“, S2b griaučiai išmesti; antra sakinio dalis (grąžinimas su
      pastaba) palikta pažodžiui
- [x] eil. 194 DUK atsakymas — vien pareigybė + veiksmas, be „kiekvieną“/„prieš…pasirodant“/„žmogus“
- [x] eil. 71–74, 213–215, 186 antraštė, eil. 42 nuoroda, marquee, misregistracija, perforacija,
      halftone SVG, `assets/style.css`, tracking žymos — nepaliesti (patikrinta diff'u ir grep'u)
