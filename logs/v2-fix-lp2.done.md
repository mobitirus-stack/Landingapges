# lp2 — QA taisymų atlikimas (PERDARYTI → ištaisyta)

Šaltinis: `qa/v2-patikra-batch1.md`, skyrius „lp2 — „Poros“ / Swipe kortelių dėklas → PERDARYTI“.

## 1. Pirma kortelė tiesiai HTML'e
`variacijosv2/lp2/index.html`, `#swipeStage` viduje (buvo tuščias `<div>`) — įrašyta statinė
`<article class="profile-card pos-0" aria-hidden="false">` su `avatar--rose` avataru, „Eglė, 27“,
„Vilnius“ — tiksliai tokia pati struktūra, kokią generuoja `app.js` `renderStage()` (queue[0]).
JS veikimo metu ją perrašo (prideda pos-1/pos-2), swipe mechanika (like/dislike, eilės sukimasis,
`transitionend`/timeout logika) nepaliesta — `assets/app.js` liko be pakeitimų (diff tuščias).
Patikrinta Chrome headless su `--disable-javascript`: kortelė matoma be JS.

## 2. Papildomas vizualinis svoris žemiau hero
`index.html` sekcijoje „Nuo kortelės iki pokalbio“ (`steps-list`) — prie kiekvieno iš 3 žingsnių
pridėtas 112×112px low-poly avataras (ta pati `#lowpoly-bust` sistema, spalvos `avatar--teal`,
`avatar--indigo`, `avatar--forest`), kortelės centruotos. `assets/style.css`: nauja `.step-avatar`
taisyklė + `.steps-list li{text-align:center}`. Tekstas nekeistas (tik pridėtas vizualas).

## 3. og:image → PNG
Sugeneruotas `assets/og-image.png` (1200×630) iš esamo `assets/og-image.svg` per Chrome headless
screenshot (be interneto, be naujos grafikos). `index.html` `<meta property="og:image">` atnaujinta
į `.../assets/og-image.png`, pridėtos `og:image:width`/`og:image:height` (1200/630). Senas `.svg`
failas paliktas diske (nenaudojamas meta žymoje, bet netrukdo).

## 4. Reduced-motion trūkumas
`assets/style.css` po `html{scroll-behavior:smooth;}` pridėta
`@media(prefers-reduced-motion:reduce){ html{scroll-behavior:auto;} }`.

## Kas NEKEISTA (patikrinta)
- Swipe mechanikos JS logika (`assets/app.js`) — diff prieš/po tuščias.
- Tracking: faile nėra realaus GTM/Meta Pixel/OpenAI kodo, tik `<!-- tracking: ... -->` komentarų
  placeholderiai (pagal partijos taisykles) — jie nepaliesti, jokių ID nebuvo ir nėra.
- Tekstas: nekeistas, išskyrus naujus avatarų `alt`/`aria-hidden` atributus (dekoratyvūs, be teksto).
- Atsarginės kopijos prieš keičiant: `/private/tmp/.../scratchpad/lp2-backup/` (`index.html.bak`,
  `style.css.bak`, `app.js.bak`).

## Patikrinta
- `diff` prieš/po `index.html` ir `style.css` — pakeitė tik aukščiau išvardintus punktus.
- Vizualus patikrinimas Chrome headless screenshot (pilnas puslapis + no-JS variantas) — layout
  neužlūžęs, avatarai atrodo tvarkingai, jokio horizontalaus scroll.
