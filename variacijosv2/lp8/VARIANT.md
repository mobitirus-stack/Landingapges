# lp8 — Pastelinis minimalizmas (v2, hero nuotrauka)

## Kryptis
`config/vizualines-kryptys-v2.md` → „## lp8 — Pastelinis minimalizmas" (antra grupė, lp7–lp10).
Šis variantas naudoja promptą `promptai/08-statyba-v2-foto.md`: vietoj SVG iliustracijos
naudojama kliento pateikta AI-sugeneruota hero nuotrauka (`assets/hero-portrait.jpg`), nes tai
atkartoja realių konkurentų (susipazink.com, slaptaspasimatymas.com, pazintys40.lt) šabloną —
pilno ekrano nuotrauka fone + maža kortelė ant jos.

## Nuotaika
Švelnus, šviesus, prieinamas.

## Paletė
- Fonas (už kortelės): rožinis→lavandos gradiento sluoksnis ant `hero-portrait.jpg`
  (`#FDF2F8` → `#E0E7FF`, mažo nepermatomumo, kad nuotrauka liktų matoma).
- Kortelė: balta `#FFFFFF`.
- Akcentas (CTA fonas): `#BE185D` — sąmoningai tamsesnis nei krypties bazinis `#DB2777`
  (žr. „Sprendimai" žemiau), su hover `#9D174D`.
- Tekstas: `#3B0764` (pagrindinis), `#6B21A8` (antrinis/muted).

## Šriftai
Poppins (logotipas, antraštė) + Nunito Sans (forma, tekstas), krauta iš Google Fonts.

## Struktūra
- Vienas `100vh`/`100dvh` ekranas, be scroll (tikrinta realiame naršyklėje 360/375/768/1024/1440px).
- Pilno ekrano hero nuotrauka (`background-image`, `object-position` pritaikyta, kad veidas
  liktų matomas visuose dydžiuose) + tamsinantis gradiento scrim apačioje/kairėje teksto
  skaitomumui.
- Maža balta kortelė (max 400–420px), pastumta į dešinę nuo 641px pločio ekranų.
- Forma: lytis (2 radio) + gimimo data (3 select: diena/mėnuo/metai, pildomi JS) + CTA.
- 3 pasitikėjimo ženkliukai (SVG + tekstas), 1 eilutės socialinis įrodymas, teisinė juosta
  (Pagalba/Taisyklės/Privatumas/Apie + 18+ ženkliukas).
- Sėkmės būsena rodoma tik po sėkmingo pateikimo (forma pasislepia, `.lp8-success` atsidengia);
  klaidos pranešimas — trūkstamų laukų atveju.

## Sprendimai (kad kita sesija nekartotų tyrimo)
- **CTA spalva `#BE185D`, ne krypties bazinis `#DB2777`:** baltas tekstas ant `#DB2777` duoda
  ~4.1:1 kontrastą (per žemas 16px pusjuodžiui mygtuko tekstui saugiam standartui), o ant
  `#BE185D` — 6.04:1. Tai tas pats atspalvių šeimos tonas (žr. `--lp8-accent` vs
  `--lp8-accent-strong` kintamuosius `style.css`), taikomas tik CTA fonui/ženkliukams; kortelės
  ribos ir kiti mažesni akcentai lieka bazinio atspalvio.
- **Nuotrauka, ne SVG iliustracija:** bendra v2 taisyklė (`Techninės taisyklės lp7-10`) numato
  SVG iliustraciją, bet `promptai/08-statyba-v2-foto.md` yra šios grupės (lp7–lp10) specifinis
  viršstatymas — klientas pats pateikė paruoštą AI-sugeneruotą nuotrauką ir aiškiai nurodė ją
  naudoti vietoj generuojamos iliustracijos. Nuotrauka — dekoratyvinis CSS `background-image`
  (ne prasminga `<img>`), su `aria-hidden="true"` sluoksniu.
- **Nuotraukoje pavaizduotas asmuo NĖRA pristatomas kaip realus narys** — tekste niekur
  netvirtinama, kad tai konkretus / realus žmogus; nuotrauka naudojama tik kaip atmosferinis
  fonas, analogiškai referenciniams puslapiams.

## Žinomos klaidos ir taisymai (2026-09-14)
Ankstesnė sesija realiame naršyklės teste rado 2 klaidas prieš baigdama darbą dėl API limito:
1. `.lp8-success{display:flex}` nustelbdavo `[hidden]` atributą, todėl sėkmės pranešimas rizikavo
   būti matomas nuo puslapio įkėlimo. Ištaisyta: pridėta globali `[hidden]{display:none!important}`
   taisyklė `style.css` viršuje (šalia jau buvusios specifiškesnės `.lp8-success[hidden]`
   taisyklės) — dviguba apsauga.
2. 360px plotyje `<select>` elementai galėjo priversti kortelę peržengti ekrano kraštą, nes grid
   elementų numatytoji `min-width` yra `auto` (= turinio plotis), ne `0`. Ištaisyta/patvirtinta:
   `min-width:0` ir ant `.lp8-select-wrap` (grid elemento), ir ant pačių `select` elementų.

Abu taisymai patikrinti realiame Chromium naršyklės paleidime (Playwright) per 360/375/768/1024/
1440px pločius: sėkmės pranešimas paslėptas prieš pateikiant formą, pasirodo tik po pateikimo
(forma pasislepia), jokio horizontalaus ar vertikalaus overflow nė viename dydyje.

## Tracking
`<!-- tracking: page_view -->`, `<!-- tracking: cta_click -->`, `<!-- tracking: lead_submit -->`
— palikti nepaliesti (GTM/Meta/OpenAI ID šiame variante nenaudojami tiesiogiai kode, tik komentaro
formos žymos analitikai).
