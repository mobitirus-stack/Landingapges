# Analizė URL-3 — checklist

URL: https://daddywonderland.love/landing-c
Output: `analize/url-3.md`

## Priėmimo kriterijai

- [x] Užpildytos visos 7 sekcijos (Kontekstas, Įtikinėjimo grandinė, CTA sistema, Struktūra ir elgsena, Technika, Kritika, FORMA — NEKARTOTI)
- [x] Nė vienoje vietoje nėra 4+ žodžių citatos iš šaltinio (patikrinta grep'u dėl žinomų frazių iš HTML/JS šaltinio — nerasta jokių 4+ žodžių sutapimų; viena 3 žodžių atkarpa buvo aptikta ir dar labiau paraminta atsargumo dėlei)
- [x] Sekcijos aprašytos funkcijomis, ne turiniu (aprašomas kiekvienos sekcijos vaidmuo įtikinėjimo grandinėje, ne konkretus tekstas)
- [x] Sekcija 7 turi bent 15 konkrečių draudžiamų elementų (iš viso 20 punktų: spalvų hex kodai, šriftų pora, layout modeliai, komponentų elgsenos modeliai, sekcijų tvarka, CTA formuluočių modelis, emoji naudojimo modelis)
- [x] Neatsisiųsta jokių media failų (parsisiųsti tik tekstiniai šaltiniai analizei — page-mobile.html, page-desktop.html, app.js, style.css — visi laikomi scratchpad kataloge, ne projekto viduje; jokie paveikslėliai/ikonos/šriftų failai neparsiųsti)

## Metodas
- Puslapio turinio apžvalga (WebFetch)
- HTML šaltinio nuskaitymas (curl, mobili ir desktop User-Agent versijos — turinys identiškas, responsyvumas valdomas CSS media query, ne serverio šaka)
- CSS ir JS failų nuskaitymas struktūrinei/techninei analizei (spalvų kintamieji, šriftai, media query lūžio taškai, formos validacijos logika, po-registracijos JS funkcionalumas iš bendro svetainės pluošto)
- Tikrinta dėl stebėjimo/analitikos scriptų (gtag/fbq/ttq/gtm/dataLayer) — šiame konkrečiame JS faile nerasta jokių; tai pastaba analitiniam tikslumui, ne veiksmas prieš mūsų pačių svetainę.
