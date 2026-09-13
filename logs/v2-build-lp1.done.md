# v2 build lp1 — Žemėlapio atradimas — BAIGTA

Šaltiniai perskaityti pilnai prieš vykdymą: `promptai/06-statyba-v2.md`,
`config/vizualines-kryptys-v2.md` (§ lp1), `config/draudziamu-zodziu-sarasas.md`.

## Output

- `variacijosv2/lp1/index.html` (~23.4 KB)
- `variacijosv2/lp1/assets/style.css` (~16.1 KB)
- `variacijosv2/lp1/assets/app.js` (~2.8 KB, formos validacija + slaptažodžio rodymo perjungiklis)
- `variacijosv2/lp1/VARIANT.md`
- `logs/v2-build-lp1.done.md` (šis failas)

Rašyta TIK į `variacijosv2/lp1/` ir `logs/`. Kiti `variacijosv2/lpN*` katalogai neskaityti.

## Patikra

- Playwright (cached Chromium 1208, be interneto — Google Fonts nuoroda paliekama, bet
  puslapis veikia ir be jos) paleistas prieš 360/768/1024/1440 viewport'us:
  `scrollWidth === clientWidth` visuose keturiuose (jokio horizontalaus scroll).
- Rankiniu būdu peržiūrėti ekrano nuotraukų kadrai kiekvienai sekcijai 360px ir 1440px —
  žemėlapis su pin'ais dominuoja hero sekcijoje, match kortelė įskaitoma, spalvos/šriftai
  atitinka kryptį.
- Automatizuotas formos testas: tuščias pateikimas → klaidų pranešimai prie laukų;
  užpildytas pateikimas → sėkmės panelė rodoma, forma paslepiama; slaptažodžio rodymo
  žymimasis langelis perjungia `input[type]`; FAQ `<details>` atsidaro.
- Pin'o hover/focus tooltip patikrintas (veikia po įėjimo animacijos nusistovėjimo —
  pirminis testas be palaukimo klaidingai rodė 0 opacity dėl lenktynių su stagger
  animacija, ne dėl CSS klaidos; su realiu laiku po animacijos veikia).
- Kontrastas paskaičiuotas WCAG formule (python) visoms teksto/fono poroms — mažiausias
  santykis 8.66:1 (baltas tekstas ant tamsiausio avataro atspalvio), dauguma 8.8–15.9:1.
- Klasių pavadinimai patikrinti prieš draudžiamą sąrašą (`grep`) — nerasta nė vienos
  bendrinės klasės (`hero/container/wrapper/btn/card/section/grid/row/col/cta/feature/
  testimonial/footer-links`); visos klasės su `lp1-` priešdėliu.
- Taisyta viena reali A11y problema statybos metu: `.lp1-map` konteineris turėjo
  `role="img"`, kas būtų paslėpę fokusuojamus pin'us nuo ekrano skaitytuvų naršymo
  režimo; pakeista į `role="group"` su tuo pačiu `aria-label`.

## PRIĖMIMO KRITERIJAI (iš `promptai/06-statyba-v2.md`)

- [x] Vizualinis raštas iš krypties įgyvendintas pilnai, dominuoja puslapyje —
      pilno pločio SVG žemėlapis (gatvės, kvartalai, parkas, upė) su 10 pin'ų ir
      centrine match kortele; ne dekoratyvinis priedas, o hero sekcijos šerdis.
- [x] Bent 8-12 skirtingų SVG avatarų, jokios realios/atsisiųstos nuotraukos — 11
      avatarų variantų (10 pin'ams + 1 match kortelei), skirtingi inicialai ir
      gradiento deriniai; visi generuoti CSS gradientu + SVG `feTurbulence` grūdėtumu.
- [x] Kontrastas ≥4.5:1, prieinamumas, reduced-motion — patikrinta skaičiavimu ir
      Playwright; `:focus-visible`, `aria-hidden` dekoratyviems SVG, `aria-label`
      pin'ams, `prefers-reduced-motion` išjungia visas animacijas.
- [x] 360px be horizontalaus scroll, formos veikia — patikrinta automatizuotai.
- [x] SEO/OG/canonical/JSON-LD užpildyti — `title` (~47 sim.), `description`
      (~123 sim.), `og:*`, `canonical` → `https://vyrukambarys.lt/lp1`, `lang="lt"`,
      JSON-LD Organization+Service.
- [x] Pilnas, tikras tekstas, jokio lorem ipsum — antraštė, paantraštė, 3 žingsniai,
      miestų sąrašas, patikros sekcija, forma, 5 FAQ, footer su 18+ bloku — visas
      tekstas prasminis, be klišių iš draudžiamo sąrašo.

## Pastabos kitai sesijai (jei prireiktų tęsti)

- Domenas realiai nepasiekiamas (Google Fonts nuoroda liks be interneto neveikianti
  ekrane, bet degradavimas švelnus — sistema pereina prie fallback šriftų).
- Jei vėliau bus kuriamas `config/terminu-zemelapis-v2.md`, šio varianto terminija
  užfiksuota `VARIANT.md` §6.
