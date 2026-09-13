# v2 build log — lp2 „Poros“ (Swipe kortelių dėklas)

Data: 2026-09-13. Modelis: Sonnet, aukštas effort. Statyta savarankiškai (be papildomų subagentų —
vienas, aiškiai apibrėžtas statybos darbas vienam variantui).

## Sukurti failai
- `variacijosv2/lp2/index.html`
- `variacijosv2/lp2/assets/style.css`
- `variacijosv2/lp2/assets/app.js`
- `variacijosv2/lp2/assets/og-image.svg` (papildomas — OG peržiūros grafika, SVG, ne nuotrauka)
- `variacijosv2/lp2/VARIANT.md`

`variacijosv2/` katalogo prieš tai neegzistavo — sukurtas nuo nulio šiai užduočiai.

## Priėmimo kriterijų checklist

- [x] **Vizualinis raštas iš krypties įgyvendintas pilnai, dominuoja puslapyje.** Vertikalus swipe
      kortelių dėklas telefono CSS mockup rėme yra hero centre, realiai funkcionuoja (žr. žemiau),
      motyvas kartojasi dar 2 sekcijose (avatarų galerijos juosta, žingsnių iliustracijos).
- [x] **Bent 8-12 skirtingų SVG avatarų, jokios realios/atsisiųstos nuotraukos.** 10 skirtingų
      low-poly avatarų (`.avatar--rose/slate/amber/teal/plum/coral/indigo/sand/forest/berry`),
      viena bendra 14-trikampių SVG geometrija + CSS custom properties spalvoms — jokių `<img>`,
      jokių išorinių nuotraukų. Patikrinta Playwright: 13 `<svg class="avatar">` egzempliorių
      puslapyje (8 dėkle + 10 galerijoje, iš dalies persidengia), visi su `aria-hidden="true"`.
- [x] **Kontrastas ≥4.5:1, prieinamumas, reduced-motion.** Realiai išmatuota naršyklėje
      (`getComputedStyle` + WCAG formulė): h1 13.3:1, hero tekstas 6.9:1, CTA mygtuko baltas
      tekstas ant `#E11D48` 4.70:1, footer tekstas 7.6:1, FAQ 14.6:1, step-tag (naudoja
      `--accent-text: #BE123C` vietoj tiesioginio `--accent`, nes tiesioginis akcentas smulkiam
      tekstui ant `--bg` duotų tik ~4.43:1) 6.3:1 — visi ≥4.5:1. `:focus-visible` apibrėžtas
      globaliai. `prefers-reduced-motion: reduce` iš karto sustabdo kortelės pereinamą animaciją
      IR JS logiką (patikrinta: swipe veikia funkciškai be animacijos, kortelė pasikeičia iš
      karto). Dekoratyviniai SVG — `aria-hidden="true"`.
- [x] **360px be horizontalaus scroll, formos veikia.** Playwright patikra 360×800: jokio
      horizontalaus scroll (`scrollWidth` = 360). Forma: tuščias submit → 8 klaidų pranešimai
      prie laukų; teisingai užpildyta forma → sėkmės pranešimas rodomas, `form.reset()`.
- [x] **SEO/OG/canonical/JSON-LD užpildyti.** `<title>` 37 simb., `description` ~130 simb.,
      `canonical` → `https://vyrukambarys.lt/lp2`, pilnas `og:*` rinkinys (su savo SVG OG
      paveikslėliu, ne nuotrauka), `lang="lt"`, JSON-LD Organization + Service su
      `suggestedMinAge: 18`.
- [x] **Pilnas, tikras tekstas, jokio lorem ipsum.** Antraštė, paantraštė, 3 žingsniai, avatarų
      galerija, saugumo sekcija (3 punktai), 5 FAQ, pilna registracijos forma su etiketėmis,
      klaidomis, sėkmės būsena, footer su 18+ patvirtinimu.

## Realūs Playwright patikrinimai (Chromium, `~/Library/Caches/ms-playwright/chromium-1208`)

Vietinis serveris (`python3 -m http.server`) + `playwright` npm paketas, įdiegtas laikinai
scratchpad kataloge tik testavimui (produkciniuose failuose jokios priklausomybės nepridėta).

1. **360×800 ir 1440×900** — `document.documentElement.scrollWidth` lygus viewport pločiui abiem
   atvejais → jokio horizontalaus scroll. Jokių konsolės klaidų.
2. **Swipe funkcionalumas** — paspaudus „nepatinka“, viršutinė kortelė (Eglė, 27) pakeičiama
   kitos anketos (Ugnė, 24); paspaudus „patinka“, dėklas pastumia toliau (Aistė, 30). Eilė sukasi
   ratu per 8 anketas.
3. **`prefers-reduced-motion: reduce`** kontekste — swipe vis tiek pakeičia kortelę (funkcinis
   pasikeitimas be CSS pereinamosios animacijos).
4. **Kontrasto skaičiavimai** tiesiogiai iš naršyklės apskaičiuotų spalvų (WCAG santykio
   formulė), ne vien statinis hex palyginimas — žr. rezultatus aukščiau.
5. **Formos validacija** — tuščias submit blokuojamas su 8 individualiais klaidų pranešimais;
   teisingai užpildytas submit → sėkmės tekstas.
6. **Slaptažodžio rodyti/slėpti mygtukas.**

### Rasta ir ištaisyta reali klaida testavimo metu

Pirminėje versijoje slaptažodžio rodymo/slėpimo ikonų perjungimas naudojo
`iconEye.hidden = show` JS priskyrimą. Playwright patikra parodė, kad abi ikonos liko vizualiai
persidengusios net po paspaudimo (`getComputedStyle().display` nesikeitė). Priežastis: `hidden`
IDL savybė apibrėžta tik `HTMLElement` sąsajoje — **inline `<svg>` elementai jos neturi**, todėl
`.hidden = true/false` priskyrimas SVG elementui yra tylus no-op, joks atributas realiai
nepasikeičia. Taisyta: pakeista į `classList.toggle("is-hidden", ...)` + atitinkama CSS taisyklė
(`assets/app.js`, `assets/style.css`, `index.html` — pašalintas pradinis `hidden` atributas iš
`.icon-eye-off`, pridėta `is-hidden` klasė). Pakartotas testas patvirtino: dabar ikonos ir
`input[type]` teisingai keičiasi abiem kryptimis (password → text → password).

## Tracking steko patikra

Failas naujas, jokio realaus GTM/Meta Pixel/OpenAI pixel kodo nėra ir nebuvo — tik promptu
nurodyti `<!-- tracking: event_name -->` žymekliai (`registration_submit`, `registration_success`,
`swipe_like`, `swipe_dislike`). Joks esamas tracking stekas nebuvo paliestas, nes šis katalogas
kuriamas nuo nulio.

## Pastabos kitai sesijai

- Playwright npm paketas ir testinis skriptas liko tik scratchpad kataloge (sesijos laikinas),
  produkciniuose `variacijosv2/lp2/` failuose jokių papildomų priklausomybių.
- Google Fonts kraunama per `preconnect` + vieną `<link>` (Sora 600/700, Nunito Sans 400/600) —
  neperteklinis šriftų svorių kiekis.
