# v2-fix-lp5 — QA taisymai (batch2 → PERDARYTI)

Šaltinis: `qa/v2-patikra-batch2.md`, skyrius „lp5". Taisyta:
`variacijosv2/lp5/index.html`, `variacijosv2/lp5/assets/style.css`.

## 1. Sulūžę SVG siluetai — bust-c ir bust-e (index.html:96-99, 104-107)

**bust-c** — galva `circle cx=60 cy=40 r=32` baigiasi ties y=72, liemuo prasidėjo ties y=84
(12 vnt. tarpas) ir buvo siauresnis (34–86) už galvą (28–92).
- Prieš: `M34,140 L34,120 C34,100 44,84 60,84 C76,84 86,100 86,120 L86,140 Z`
- Po: `M26,140 L26,118 C26,94 40,66 60,66 C80,66 94,94 94,118 L94,140 Z`
- Liemens viršus pakeltas iki y=66 (6 vnt. persidengimas su galvos apskritimu, kad nebūtų
  antialiasing tarpo), kontūras praplatintas iki 26–94 (platesnis už galvą, kaip ir kituose
  siluetuose a/b).

**bust-e** — galva `circle cx=60 cy=28 r=22` baigiasi ties y=50, lankas `A54,58` viršūnę turėjo
ties y=82 (32 vnt. tarpas).
- Prieš: `M6,140 A54,58 0 0 1 114,140 Z`
- Po: `M6,140 A54,92 0 0 1 114,140 Z`
- `ry` 58 → 92, naujas viršūnės taškas y=48 (2 vnt. persidengimas su galvos apskritimu).

**Patikrinta vizualiai** (Playwright per CDP prie sisteminio Chrome — bundled chromium
nepalaikomas šiame macOS; naudotas `chromium.connectOverCDP` prie `google chrome --headless=new
--remote-debugging-port`, statinis serveris `python3 -m http.server` `variacijosv2/lp5/` kataloge):
- Abu simboliai atvaizduoti izoliuotai ~100px dydžiu (tokiu pat kaip realiame puslapyje) —
  galva ir liemuo dabar vientisas kontūras, nėra jokio tarpo tarp galvos apskritimo ir pečių
  linijos abiem siluetams.
- Patikrinta ir realiame kontekste: `lp5-tier__top` kortelė „Auksinė narystė" (naudoja bust-e,
  84px) — kontūras vientisas, be plyšio.
- Patikrinta ir „Siena" sekcijoje (žr. p.2 žemiau) — bust-c (Klaipėda, Marijampolė kortelėse)
  taip pat vientisas.

## 2. `--mosaic` alfa sumažinta (assets/style.css:272-274)

Prieš: `rgba(12,10,9,.55)` (abu `repeating-linear-gradient`).
Po: `rgba(12,10,9,.28)`.

Palikta ant tų pačių 4 kortelių (index.html:222,234,247,260 — a,c,e,g), pasirinktas variantas
„sumažinti alfa", ne klasės nuėmimas, kad išliktų VARIANT.md teiginys apie 8 skirtingus,
mozaika dengiamus profilius. Patikrinta render'yje (1400×… viewport, `#lp5-siena` screenshot):
visų 8 kortelių (a–h) silueto forma dabar atskiriama — mozaikinės keturios (Vilnius, Klaipėda,
Šiauliai, Marijampolė) rodo aiškų galvos+pečių kontūrą per lengvą šachmatinę tekstūrą, o ne
vienalytį kvadratą kaip anksčiau.

## 3. Teksto pataisa — index.html:218

Prieš: „Kiekvienas siluetas apačioje priklauso realiam, amžių patvirtinusiam nariui."
Po: „Kiekvienas siluetas žymi anketos tipą, kurį pamatysi atrakinęs — pavyzdinis rodinys."

Suderinta su `VARIANT.md:57-59`, kur siluetai jau įvardyti kaip statinė iliustracija /
pavyzdiniai profiliai, ne realūs nariai.

## 4. DUK antraštės kontekstas — index.html:369

Prieš: „Dažniausiai užduodami klausimai"
Po: „Dažniausi klausimai apie VIP atrakinimą"

## 5. index.html:315 „Trys žingsniai iki atrakinimo"

NEKEISTA — pagal užduotį, susitarta kad dubliavimą su lp6 sprendžia lp6 pusė.

## Kas NEKEISTA (patikrinta diff'u)

- Paletė, šriftai, forma, sekcijų tvarka — nepaliesta.
- `<!-- tracking: ... -->` žymos — palygintos su backup kopija eilutė po eilutės, identiškos
  (GTM/Meta Pixel/OpenAI pixel ID nepaliesti).
- `diff` prieš/po `index.html` rodo lygiai 4 pakeitimų blokus (du `<symbol>` path'ai, p.218
  sakinys, h2 DUK antraštė) — jokių šalutinių pakeitimų.
- `diff` prieš/po `style.css` rodo lygiai 1 pakeitimų bloką (2 eilutės, alpha .55→.28).

## PATVIRTINIMAS (ekrano nuotraukų aprašymas)

1. `bust-c-e-fixed.png` (izoliuoti simboliai, 100px, tamsus fonas, auksinė užpilda) — abu
   siluetai rodo vientisą galvos-liemens formą be jokio tarpo ar plaukiojančio rutulio efekto.
2. `wall-section.png` (`#lp5-siena`, pilnas sekcijos plotis) — visų 8 kortelių siluetai
   atskiriami; 4 su mozaika (Vilnius, Klaipėda, Šiauliai, Marijampolė) rodo formą per lengvą
   tekstūrą, likusios 4 — švarų kontūrą. Antraštės tekstas po p.218 pakeitimo rodomas teisingai.
3. `tier-auksine-buste.png` (`.lp5-tier__top`, Auksinė narystė kortelė, bust-e ~84px) — kontūras
   vientisas realiame kontekste, be plyšio ties kaklu.
4. Konsolės išvestis patvirtino tikslų teksto turinį po pakeitimų (p.3 ir p.4 sakiniai).

Screenshot'ai (jei reikia peržiūrai) yra scratchpad kataloge šios sesijos:
`.../scratchpad/undefined/bust-c-e-fixed.png`, `wall-section.png`, `faq-heading.png`,
`tier-auksine-buste.png`, `verify-section-bustc.png`.
