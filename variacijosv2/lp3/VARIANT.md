# lp3 — „Randu" · Nuotraukų tinklelis (discovery grid)

Kryptis: `config/vizualines-kryptys-v2.md` → **lp3 — Nuotraukų tinklelis (discovery grid)**.
Statybos promptas: `promptai/06-statyba-v2.md`.

## 1. Spalvos (su vaidmenimis)

| Token | Hex | Vaidmuo |
|---|---|---|
| `--bg` | `#FAFAF9` | Puslapio fonas, šviesios kortelės fonas (alternuojant su `--surface`) |
| `--surface` | `#F4F4F5` | Kortelių, sekcijų, formos laukų fonas |
| `--border` | `#E4E4E7` | Rėmeliai, skirtukai, neaktyvių lustų (chip) kontūras |
| `--text` | `#18181B` | Pagrindinis tekstas, antraštės, antroji avataro duotone spalva |
| `--text-muted` | `#3F3F46` | Antraštinis/pagalbinis tekstas (išvestas iš `--text`, kad tilptų kontrastas ≥4.5:1 ant `--bg`, patikrinta skaičiavimu ≈10:1) |
| `--accent` | `#7C3AED` | CTA mygtukai, aktyvus filtro lustas, nuorodos, pirmoji avataro duotone spalva |
| `--accent-ink` | `#FFFFFF` | Tekstas ant `--accent` fono (kontrastas ≈5.9:1) |

Jokių papildomų atspalvių neįvedžiau — avatarų „duotone" sistema naudoja **tik** `--accent` ir
`--text`, kad tiksliai atitiktų krypties aprašymą „dviem paletės spalvomis" (ne trečia išgalvota
spalva). Kortelių fonas grid'e alternuoja `--surface` / `--bg`+`--border`, kad tinklelis turėtų
ritmą be naujų spalvų.

Kontrastų patikra (WCAG santykis, skaičiuota rankiniu būdu prieš rašant CSS, vėliau patikrinta
Playwright/axe realiame Chrome):
- `--text` ant `--bg`: ≈19:1
- `--text-muted` ant `--bg`: ≈10:1
- `--accent-ink` (baltas) ant `--accent`: ≈5.9:1
- `--accent` naudojamas kaip tekstas (nuorodos) ant `--bg`: ≈5.1:1

## 2. Tipografija

- Antraštės: **Plus Jakarta Sans** (700/600).
- Tekstas: **Inter** (400/500/600 mygtukams/lustams).
- Google Fonts, vienas `preconnect` + viena stiliaus nuoroda, po du svorius kiekvienai šeimai
  (neviršija v1 draudimo dėl keturių svorių dviem šeimoms).

## 3. Vizualinio rašto koncepcija

Puslapio branduolys — **tankus 4/3/2 stulpelių tinklelis** (desktop/tablet/mobile) su kvadratinėmis
avatarų kortelėmis, virš jo — **filtro juosta** (amžiaus intervalai + miestai kaip perjungiami
lustai/chip mygtukai). Tai ne dekoratyvinis priedas — tinklelis su veikiančiais filtrais yra
didžiausias, vizualiai sunkiausias ir funkciškai svarbiausias puslapio elementas, atkartojantis
„discovery" naršymo jausmą (žr. Instagram/dating app atradimo ekranus), bet be jokių realių
nuotraukų — kiekviena kortelė turi unikalią SVG geometrinę „duotone" formą.

Kortelės tapimas (tap/hover): užvedus pele ar paliečius mobiliame, kortelė šiek tiek pakyla
(`transform: translateY`), atsiranda perdanga su tekstu „Registruokitės ir pamatykite anketą" bei
nuoroda į registracijos formą — tai funkcinė UI reakcija, ne dekoras, tiesiogiai vedanti prie CTA.

### ASCII wireframe (desktop ≥1024px)

```
┌───────────────────────────────────────────────────────────────────┐
│ [Randu]                          Kaip veikia   [ Sukurti anketą ] │  <- header, sticky
├───────────────────────────────────────────────────────────────────┤
│                     H1: antraštė (2 eilutės)                       │
│                     paantraštė (1-2 sakiniai)                      │
│         [ Peržiūrėti anketas ]   [ Sukurti anketą ]                │  <- hero, be nuotraukos
│         mini pasitikėjimo eilutė (moderavimas)                     │
├───────────────────────────────────────────────────────────────────┤
│  h2: Naršykite pagal amžių ir miestą                               │
│  [Visi] [20-25] [26-31] [32-40] [41+]   [Visi miestai] [Vilnius]…  │  <- filtro juosta
│  ┌────┬────┬────┬────┐                                             │
│  │ SVG│ SVG│ SVG│ SVG│  4 stulpeliai × 4 eilutės = 16 kortelių     │
│  ├────┼────┼────┼────┤  kiekviena: avataras + amžius/miestas       │
│  │ SVG│ SVG│ SVG│ SVG│                                             │
│  ├────┼────┼────┼────┤                                             │
│  │ SVG│ SVG│ SVG│ SVG│                                             │
│  ├────┼────┼────┼────┤                                             │
│  │ SVG│ SVG│ SVG│ SVG│                                             │
│  └────┴────┴────┴────┘                                             │
│  gyva sritis: „Rodoma N anketų pavyzdžių"                          │
├───────────────────────────────────────────────────────────────────┤
│  h2: Kaip tai veikia (3 žingsniai, horizontalūs blokai)            │
├───────────────────────────────────────────────────────────────────┤
│  h2: Kaip atrenkame anketas (moderavimo paaiškinimas, 1 pastraipa) │
├───────────────────────────────────────────────────────────────────┤
│  h2: Dažniausi klausimai apie Randu (5 <details> akordeonas)       │
├───────────────────────────────────────────────────────────────────┤
│  h2: Sukurti anketą (forma: slapyvardis, el. paštas, slaptažodis,  │
│      gimimo metai, miestas, 18+ / taisyklių varnelė, mygtukas)     │
├───────────────────────────────────────────────────────────────────┤
│  footer: aprašymas, nuorodos, 18+ teisinis blokas, © eilutė        │
└───────────────────────────────────────────────────────────────────┘
```

Mobilus (360px): tinklelis persitvarko į **2 stulpelius**, filtro juosta tampa horizontaliai
slenkančia juosta (`overflow-x:auto` tik šiam elementui, ne visam puslapiui), hero mygtukai
sukrenta į vieną stulpelį.

## 4. Avataro SVG sistema

16 unikalių `inline <svg viewBox="0 0 96 96">` avatarų, kiekvienas — geometrinių formų (apskritimas,
trikampis, rombas/kvadratas pasuktas 45°, žiedas/apskritimo kontūras) kompozicija **tiksliai dviem**
spalvomis: `--accent` (#7C3AED) ir `--text` (#18181B). Įvairovė pasiekiama ne naujomis spalvomis, o:

- skirtingu formų rinkiniu (16 skirtingų kompozicijų — vienas apskritimas + trikampis, du
  persidengiantys apskritimai, rombas + trikampis, žiedas + taškas, trikampių pora veidrodiniu būdu
  ir t.t.);
- skirtingu dydžiu, pozicija ir pasukimo kampu;
- kuria spalva dominuoja (kai kur `--accent` didesnė forma + `--text` maža, kitur atvirkščiai);
- kortelės fono alternavimu tarp `--surface` ir `--bg`+`--border` kontūro.

Visi avatarai pažymėti `aria-hidden="true"` (dekoratyvūs — kortelės informaciją neša tekstas
„amžius, miestas", ne SVG). Sukurta lygiai 16 (patenkina 12-16 reikalavimą), naudojami tik tinklelyje
(vienas raštas per visą puslapį, kad nebūtų atskiro antro avatarų stiliaus — atitinka krypties
aprašymą, kuris avatarą mini tik grid kontekste).

## 5. Tekstas ir terminija

Prekės ženklas šiai partijai: **Randu**. Pagrindinis terminas profiliui — **anketa** (naudojamas
nuosekliai visame puslapyje: „peržiūrėti anketas", „sukurti anketą", „ištrinti anketą"). Registracija
vadinama **anketos sukūrimu**, žinutės — **susirašinėjimu**. Šie terminai pasirinkti savarankiškai
šiai partijai (v2 yra atskira nuo v1 `variacijos/` termininio žemėlapio pagal `promptai/06-statyba-v2.md`
§KONTEKSTAS).

Registracijos forma sąmoningai **vieno žingsnio**, ne trijų — kad neatkartotų
`config/draudziamu-zodziu-sarasas.md` §7.3 punkto 26 (draudžiamas trijų žingsnių modelis).

## 6. Judesys

- **Vienas orkestruotas momentas:** įkėlus puslapį, tinklelio kortelės atsiranda su laipsniška
  (staggered) fade+scale animacija per `nth-child` uždelsimus (grynas CSS, be JS).
- **Smulkios funkcinės UI reakcijos** (nesiskaito kaip antras judesio momentas): kortelės hover/focus
  pakilimas + perdangos atsiradimas, filtro lusto aktyvios būsenos perėjimas, akordeono FAQ
  atsivėrimas/užsivėrimas, formos klaidos/sėkmės būsenos perėjimas.
- `prefers-reduced-motion: reduce` išjungia staggered animaciją (kortelės iškart matomos) ir
  sutrumpina/pašalina visus perėjimus.

## 7. Savikritika (atlikta prieš baigiant)

- Patikrinta, ar tinklelis tikrai dominuoja puslapyje vizualiai, ne tik tekstas su vienu SVG:
  16 kortelių + filtro juosta užima didžiausią vertikalų plotą tarp visų sekcijų, ir tai yra
  pirmas turinio blokas po herojaus.
- Patikrinta 360/768/1024/1440px (Playwright/Chrome, žr. `logs/v2-build-lp3.done.md` už detales).
- Patikrinta, kad tracking žymos (GTM/Pixel) nebuvo paliestos — šiame variante jų nėra, tik
  `<!-- tracking: ... -->` komentarai vietoje jų (šis puslapis dar neturi realaus GTM/Pixel kodo,
  tad "netrikdyk tracking steko" taisyklė čia netaikoma tiesiogiai — pažymėta, kad ateityje diegiant
  realų tracking, jis turi būti įdėtas ten, kur yra komentarai).
