# v2 build lp7 — Auksinės valandos hero nuotrauka — BAIGTA

Tęsinys po nutrūkusios sesijos: ankstesnis agentas jau buvo sukūręs `index.html`,
`assets/style.css`, `assets/hero-portrait.jpg`, bet nutrūko dėl API limito PRIEŠ
patikrą, PRIEŠ `assets/app.js` (nuoroda į jį jau buvo `index.html`, bet failo nebuvo)
ir prieš `VARIANT.md`/šį log'ą.

## Ką radau perėmus darbą

Statiškai peržiūrėjus esamus failus prieš keičiant paaiškėjo:

1. **Trūko `assets/app.js`** — `index.html` jau turėjo `<script src="assets/app.js">`,
   bet failo `assets/` kataloge nebuvo. Be jo: dienos (`lp7-day`) ir metų (`lp7-year`)
   `<select>` laukai turėjo TIK tuščią placeholder'į (jokių realių pasirinkimų), forma
   neturėjo jokios validacijos ar sėkmės būsenos logikos. Tai realus funkcinis bug'as —
   mokamų reklamų puslapyje neveikianti gimimo datos forma reiškia prarastus lead'us.
2. Kortelės kontrastas, prefiksai (`lp7-`), draudžiami žodžiai/spalvos/šriftai —
   statiškai patikrinti, klaidų nerasta (žr. lentelę žemiau).

## Taisymai

1. **Naujai parašytas `variacijosv2/lp7/assets/app.js`** (trūko): užpildo dienos
   (1–31) ir metų (dabartiniai metai −18 iki −90) pasirinkimus; validuoja, kad
   pasirinkta lytis ir kalendoriškai teisinga, ≥18 metų gimimo data; klaidų pranešimai
   prie atitinkamų laukų; sėkmės atveju paslepia formą, rodo patvirtinimo tekstą,
   išjungia CTA.
2. **Rastas ir ištaisytas real-browser bug'as `assets/style.css`:** `app.js`
   paslepia formą per `form.hidden = true`, bet `.lp7-form { display: flex; }`
   klasės taisyklė (author CSS) turi didesnį prioritetą už UA numatytąją
   `[hidden]{display:none}` taisyklę — realiame naršyklės teste forma LIKO matoma
   (su pažymėtais laukais) net kai `hidden` atributas jau buvo nustatytas. Pridėta
   `.lp7-form[hidden] { display: none; }` po `.lp7-form` bloko. Patvirtinta
   pakartotu CDP testu: prieš pataisymą forma liko matoma po sėkmingo submit'o,
   po pataisymo — teisingai paslepiama, sėkmės pranešimas matomas. (Ta pati bug'o
   klasė buvo rasta ir lp8 sesijoje — matyt bendra šios partijos rizika, verta
   patikrinti ir lp9/lp10, jei dar nepatikrinta.)
3. **`index.html`:** pridėtas `tabindex="-1"` prie `#lp7-success` (kad `.focus()`
   kvietimas `app.js` faile realiai perkeltų fokusą į sėkmės pranešimą ekrano
   skaitytuvams). Jokių kitų `index.html` pakeitimų — turinys, SEO meta, JSON-LD,
   tracking žymeklis (`<!-- tracking: lp7_hero_view -->`) nepaliesti.

### Diff patikra

- `index.html`: 1 eilutė pakeista (`tabindex="-1"` pridėtas prie `#lp7-success`),
  visa kita — nepaliesta (SEO/OG meta, JSON-LD, tracking komentaras identiški).
- `assets/style.css`: pridėtas 1 naujas 3 eilučių blokas (`.lp7-form[hidden]`) po
  esamo `.lp7-form` bloko, jokie kiti pakeitimai.
- `assets/app.js`: naujas failas (anksčiau neegzistavo).
- `assets/hero-portrait.jpg`: nepaliestas.

## Realaus naršyklės testas (Chrome for Testing per CDP, `Emulation.setDeviceMetricsOverride`)

Šioje aplinkoje `~/Library/Caches/ms-playwright/chromium-1208` turi pilną
Chrome for Testing 145.0.7632.6 `.app`. `npx playwright` (1.63.0) reikalauja
chromium-1243 build'o, kurio nebuvo cache'e — vietoj playwright bibliotekos
paleidau Chrome tiesiogiai (`--headless=new --remote-debugging-port
--remote-allow-origins=*`) ir valdžiau per CDP WebSocket (`websocket-client`
Python paketas jau buvo įdiegtas). **Pastaba kitoms sesijoms:** paprastas
`chrome --headless --window-size=W,H --screenshot=...` ŠIOJE Chrome versijoje
NEPATIKIMAS lygiam plotyje po ~500px — pastebėtas vidinis minimalaus lango pločio
apribojimas (`window.innerWidth` liko 500 net su `--window-size=360,800`), o
`--screenshot` tiesiog nukerpa kraštą iki reikalaujamo dydžio, todėl atrodo, kaip
horizontalus overflow, kurio realiai NĖRA. Teisingas būdas — CDP
`Emulation.setDeviceMetricsOverride`, kuris priverstinai nustato tikrą viewport'ą
nepriklausomai nuo lango dydžio.

Testuota `file://.../variacijosv2/lp7/index.html` per 360×640, 360×800, 375×667,
768×1024, 1440×900 (CDP `setDeviceMetricsOverride`, `innerWidth`/`scrollWidth`
patikrinti JS'u):

| Plotis×Aukštis | innerWidth=docScrollWidth (be horiz. overflow) | Figūra/veidas matomi | Vertikalus scroll |
|---|---|---|---|
| 360×640 | taip (360=360) | taip | ne |
| 360×800 | taip (360=360) | taip | ne |
| 375×667 | taip (375=375) | taip | ne |
| 768×1024 | taip (768=768) | taip, veidas centre | ne |
| 1440×900 | taip (1440=1440) | taip, veidas centre-kairėje | ne |

Formos funkcinis testas (CDP `Runtime.evaluate` + `requestSubmit()`):
- Tuščias submit → abu klaidų pranešimai (`lp7-gender-error`, `lp7-dob-error`)
  parodomi (`hidden:false`).
- Pilnai užpildyta suaugusio žmogaus data (pvz. 1996-06-15) → `lp7-form`
  paslepiama (`hidden:true`), `lp7-success` matoma su tekstu „Ačiū! Peržiūrėk
  anketas — nukreipiame tave toliau."
- Nepilnametė data (10 metų) → `lp7-dob-error` rodoma, forma LIEKA matoma
  (submit atmestas).

Ekrano nuotraukos scratchpad'e (ne projekto kataloge): `cdp_360.png`, `cdp_768.png`,
`cdp_1440.png`, `cdp_360x640.png`, `cdp_375x667.png`, `cdp_success2.png` (po
pataisymo — forma teisingai paslėpta).

## Kontrastas (perskaičiuota Python WCAG 2.1 formule, ne spėta)

| Pora | Santykis |
|---|---|
| Pagrindinis tekstas `#431407` / kortelės fonas `#FFF7ED` | 14.74:1 |
| Prislopintas tekstas `#7C4A32` / kortelės fonas | 6.86:1 |
| CTA tekstas `#2A0A02` / CTA fonas `#EA580C` | 5.16:1 |
| Klaidos tekstas `#B42318` / kortelės fonas | 6.19:1 |
| Teisinės juostos tekstas `#FFE8D4` / juostos fonas `#431407` | 13.23:1 |
| Radio/select tekstas `#431407` / baltas laukų fonas | 15.65:1 |

Žemiausia reikšmė 5.16:1 — visos poros gerokai virš 4.5:1 ribos.

## PRIĖMIMO KRITERIJAI (`promptai/08-statyba-v2-foto.md`)

- [x] **Vienas ekranas be scroll** — patvirtinta 5 pločiuose (360–1440px, žr. lentelę
      aukščiau), jokio vertikalaus scroll niekur.
- [x] **Hero nuotrauka pilname fone, figūra matoma visuose dydžiuose** —
      `hero-portrait.jpg` (1024×1536px, patikrinta `sips`) kaip `background-image`
      su `background-position`, koreguojamu 3 media query taškais; veidas matomas
      visuose testuotuose pločiuose (patvirtinta ekrano nuotraukomis).
- [x] **Kortelė su forma (lytis+data+CTA), kontrastas ≥4.5:1** — žemiausia pora
      5.16:1 (žr. lentelę aukščiau).
- [x] **3 pasitikėjimo ženkliukai** — „Amžiaus patikra", „Duomenys saugūs", „Be
      paslėptų mokesčių". **Teisinė juosta** — Pagalba/Taisyklės/Privatumas/Apie/18+.
      **18+ tekstas** — sutikimo sakinys prie CTA + ženkliukas juostoje.
- [x] **SEO/og:image** — title/description/canonical/OG/Twitter/JSON-LD užpildyti;
      `og:image`/`twitter:image` → `hero-portrait.jpg`; `og:image:width/height`
      (1024/1536) atitinka realų failo dydį (`sips` patikrinta).
- [x] **Klasės su `lp7-` prefiksu** — `grep -oE 'class="[^"]*"'` per `index.html` +
      visi `.lp7-…` selektoriai `style.css`: 0 klasių be prefikso.
- [x] **Draudžiami žodžiai/frazės** — grep patikra prieš §1, §2, §3, §9.1–§9.5
      (`config/draudziamu-zodziu-sarasas.md`): 0 sutapimų (vienintelis netikras
      teigiamas — `type="submit"` HTML atributas, ne mygtuko tekstas „Submit").
- [x] **Draudžiamos spalvos/šriftai (§7.1–§7.2)** — paletė (`#EA580C`/`#431407`/
      `#FFF7ED`/…) ir šriftai (Fraunces + Inter) nesutampa su jokia draudžiama
      reikšme (jokio `#12101a`/`#dc3b68`/... tipo tamsaus-violetinio derinio,
      jokio Bricolage/Archivo).
- [x] **Nuotraukoje esantis žmogus NĖRA pristatomas kaip konkretus realus narys** —
      viso teksto peržiūra: nuotrauka naudojama tik kaip atmosferinis fonas
      (`role="img" aria-label="Moters siluetas saulėlydžio fone"`), niekur
      nesakoma „ji yra narė" ar panašiai.
- [x] **CSS <60KB, puslapis <1.5MB** — `style.css` 8.0 KB; visas katalogas
      (html+css+js+jpg) 236 KB.

## Tracking stekas

Patikrinta: `index.html` turi TIK 1 placeholder žymeklį —
`<!-- tracking: lp7_hero_view -->`. Jokio realaus GTM/Meta Pixel/OpenAI pixel
ID šiame variante nėra (kaip ir numatyta specifikacijoje šiam etapui) — todėl
nieko nebuvo ką „nutrikdyti"; žymeklis paliktas nepakeistas.

## Output

- `variacijosv2/lp7/index.html` — 1 eilutės pataisymas (`tabindex="-1"`), visa
  kita nepaliesta
- `variacijosv2/lp7/assets/style.css` — 1 naujas CSS blokas (`.lp7-form[hidden]`)
- `variacijosv2/lp7/assets/app.js` — naujai parašytas (trūko)
- `variacijosv2/lp7/assets/hero-portrait.jpg` — nepaliestas
- `variacijosv2/lp7/VARIANT.md` — naujai parašytas (trūko)
- `logs/v2-build-lp7.done.md` — šis failas

Rašyta TIK į `variacijosv2/lp7/` ir `logs/`. Kiti `variacijosv2/lpN*` katalogai
neskaityti; `logs/v2-build-lp8.done.md` perskaitytas tik kaip formato/metodo
pavyzdys (jame aprašytas identiškos klasės `[hidden]` bug'as lp8 variante — verta
patikrinti lp9/lp10, jei dar nepatikrinti).

## Pastabos kitai sesijai

Nėra neužbaigto darbo lp7 variante — trūkstamas `app.js` parašytas, `[hidden]`
CSS bug'as ištaisytas ir patvirtintas realiu CDP naršyklės testu (prieš/po),
visi priėmimo kriterijai patikrinti, `VARIANT.md` parašytas.
