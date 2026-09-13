# build-09.done.md — `lg9-prieiga`

Statybos agentas: fazė 3 (`promptai/03-statyba.md`), matricos eilutė **#9**, terminų stulpelis **9**.

## Output failai

- `variacijos/lg9-prieiga/index.html` (≈13.0 KB)
- `variacijos/lg9-prieiga/bin/term.css` (≈10.7 KB)
- `variacijos/lg9-prieiga/bin/term.js` (≈6.7 KB)
- `variacijos/lg9-prieiga/VARIANT.md`

Puslapio bendras svoris (html+css+js, be šriftų): ≈30.4 KB — gerokai mažiau nei 1.5 MB riba, CSS
gerokai mažiau nei 60 KB riba. Šriftai — Google Fonts: **JetBrains Mono** (400, 700 — du svoriai) +
**Inter Tight** (400 — vienas svoris), krauti per bendrą `preconnect` + vieną stiliaus nuorodą, iš
viso 3 šriftų failai (gerokai mažiau nei draudžiamas „4 svoriai kiekvienai šeimai" modelis). Jokio
`assets/` katalogo pagal 03-statyba.md OUTPUT — vietoje to naudoti šiai eilutei priskirti failų keliai
(`bin/term.css`, `bin/term.js`) pagal matricos ašį 14, eilutė 9. Jokių rastrinių vaizdų — ašis 12
numato ASCII/tinklelio grafiką, jokio kito vaizdinio šaltinio nereikėjo.

## Priėmimo kriterijai

- [x] Planas ir savikritika parašyti prieš kodą — `VARIANT.md` §1–2.
- [x] Visos spalvos, šriftai, hero tipas, CTA modelis, sekcijų tvarka atitinka matricos eilutę #9 —
      `#2B2B28/#201F1C/#FFB000/#E8E2D6/#8B8680`; JetBrains Mono 400/700 (antraštės, prompt'as,
      etiketės) + Inter Tight 400 (ilgesnės pastraipos); hero = statiškas, jau parašytas terminalo
      išvesties tekstas (be spausdinimo animacijos); CTA modelis „komandų prompt'as" — po vieną
      klausimą eilutėje, atsakymai lieka matomi virš kaip augantis seanso žurnalas; sekcijų tvarka
      H→P→Į→M→FORM(prompt)→A→€→Q→K→D→R→L→C tiksliai atkartota HTML dokumento tvarka (žr. `id`
      atributus: `tm-hero, tm-commit, tm-mechanics, tm-form, tm-auth, tm-price, tm-activity,
      tm-privacy, tm-faq, tm-repeat, tm-legal, tm-cookies`). F17 („kodėl dabar") sąmoningai sujungtas
      su F4 (kiekybinis aktyvumas) į vieną `#tm-activity` bloką — pagrindimas `VARIANT.md`, Turinys/Q,
      leidžiama pagal struktūrinę taisyklę Nr. 8 („funkcijas galima jungti, jei nenukenčia jų darbas").
- [x] Visas tekstas tikras, terminija iš savo stulpelio (9): paleidimas, paskyra, naudotojas, mazgas,
      sujungimas, seansas, autorizacija, validacija, prisijungimo vardas, e-adresas, frazė (kaip
      „prieigos frazė"), regionas, rėžis (kaip „amžiaus rėžis"), be kainos, teisės — visi panaudoti
      tiksliai, patikrinta `grep`. Vienas rizikingas atvejis rastas ir ištaisytas darbo eigoje:
      slapukų juostos tekste buvo panaudotas bendrinis pakaitalas „svetainė" (draudžiama §9.5) vietoj
      priskirto termino „mazgas" (koncepcija #4) — pakeista į „Šis mazgas naudoja slapukus...".
      Rezervuotų prisijungimo vardų sąrašas (admin/root/test/prieiga/naudotojas/mazgas) sąmoningai
      apima ir paties varianto prekės ženklo bei terminų šaknis, kad demonstracinė „vardas užimtas"
      klaida (tiksliai kortelės formuluotė) būtų prasminga be realaus backend'o.
- [x] Nėra nė vieno žodžio iš draudžiamo sąrašo — patikrinta `grep` per §1–§9 frazes, draudžiamas hex
      reikšmes (`#12101a, #0d0b13, #1b1725, #241e30, #322942, #271f34, #dc3b68, #ff5c85, #c22c56,
      #f0a93c, #4bc98a`), Bricolage Grotesque/Archivo, kito varianto prekės ženklų šaknis
      (Matmuo/Lenta/Pultas/Šilas/Sąlyga/Talonas/Kabinetas/Vakaras/Atvirukas) — nė vienas neaptiktas.
      Em brūkšnio antraštės konstrukcija „ŽODIS — frazė" (§7.2/§8.5) sąmoningai vengiama visose `h1–h3`
      antraštėse (patikrinta `grep -E '<h[1-3][^>]*>[^<]*—'` — 0 atitikmenų); ten, kur reikėjo
      skyriklio, naudojamas dvitaškis arba paprastas sakinys. Nėra jokio dekoratyvaus „terminalo lango"
      chrome (jokių trijų taškučių, jokios fake `bash$` antraštės, jokių ASCII rėmelių dekorui) — `$`
      ir `>` naudojami tik ten, kur žymi tikrą komandą arba tikrą išvestį.
- [x] Klasių pavadinimai sutrumpinti su brūkšneliu (`tm-line`-tipo šeima: `tm-out`, `tm-prompt`,
      `tm-pane`, `tm-step`, `tm-run`, `tm-history`, `tm-comment`, `tm-glyph`, `tm-cursor`, `tm-faq-item`,
      `tm-repeat`, `tm-bar`, `tm-skip`, `tm-shell`, `tm-topline`, `tm-mark`, `tm-nav-link`, `tm-link`,
      `tm-lede`, `tm-cmd`, `tm-hint`, `tm-sr-only` ir t.t.) — patikrinta grep'u, nė vienas draudžiamas
      bendrinis vardas (`hero/container/wrapper/btn/btn-primary/btn-secondary/card/section/
      section-title/grid/row/col/cta/feature/feature-card/testimonial/footer-links`) neaptiktas
      tiksliai kaip class token.
- [x] 360px be horizontalaus scroll (patikrinta realiu Chrome per Playwright 360/768/1024/1440px —
      visur `scrollWidth === clientWidth`), klaviatūra pereinamas visas puslapis (patikrinta `Tab`
      seka nuo puslapio pradžios — logiška: peršokimo nuoroda → prekės ženklas → prisijungimo nuoroda
      → 1-as formos laukas → jo mygtukas → tolesnis turinys; `Enter` pateikia žingsnį be pelės;
      „keisti" mygtukas istorijoje pasiekiamas klaviatūra ir grąžina į teisingą žingsnį).
- [x] Konsolė švari, nuorodos veikia, forma validuoja ir rodo sėkmės būseną — patikrinta realiame
      Chrome per Playwright (`channel: "chrome"`, nes bundled Chromium šioje macOS versijoje
      nepalaikomas — ta pati aplinkos pastaba kaip `logs/build-06.done.md`): pilnas 5 klausimų srautas
      (per trumpas vardas → klaida → užimtas vardas „admin" → klaida tiksliai pagal kortelę → tinkamas
      vardas → nepasirinktas rėžis → klaida → regionas per trumpas → klaida → blogas e-adresas →
      klaida → frazė per trumpa → klaida → visos teisingos reikšmės → sėkmės būsena su echo el. paštu)
      veikia be jokių konsolės klaidų ar `pageerror` įvykių, abiem pločiais (360/1440).
- [x] `<title>` (45 simb.) ir `meta description` (144 simb.) unikalūs ir tinkamo ilgio (patikrinta
      programiškai, ne akimis).
- [x] Vienas judesio momentas — nauja išvesties eilutė istorijoje po kiekvieno priimto atsakymo
      (`.tm-history li` `tm-out-in` animacija, 220ms, tik naujai pridėtai eilutei). Dekoratyvus
      blokinis kursorius (ašis 10, „mirksintis blokinis kursorius vietoje šešėlio") traktuojamas kaip
      TOS PAČIOS aktyvaus prompt'o būsenos dalis, ne kaip atskiras momentas — pagrindimas `VARIANT.md`
      §2 punktas 4. `prefers-reduced-motion: reduce` patikrintas Playwright `reducedMotion: "reduce"`
      kontekstu — kursoriaus `animationName` tampa `"none"`, o istorijos eilutės animacija visai
      neaktyvuojama (guard'as `@media (prefers-reduced-motion: no-preference)`).
- [x] Pašalintas perteklinis elementas ir tai užrašyta — `VARIANT.md` §4: poraštės antra nuoroda
      „autorizacija", kuri vedė į sekciją, kurioje pati buvo įdėta (saviatgalinė, nieko nedaranti
      nuoroda) — pašalinta, palikta viena prasminga nuoroda „privatumo teisės" → `#tm-privacy`.
      Papildomai, testuojant realiu Playwright 360px pločiu, rasta ir ištaisyta reali CSS klaida:
      mobiliajame `.tm-prompt { flex-direction: column }" layout'e įvesties laukai paveldėjo bazinę
      taisyklę `flex: 1 1 16em`, o column kryptimi `flex-basis` valdo AUKŠTĮ, ne plotį — laukas
      išsipūsdavo iki ~230px aukščio. Mobiliojo media query override turėjo mažesnį CSS specifiškumą
      už bazinę taisyklę (trūko `[type="..."]` atributų selektoriuose), todėl nelaimėjo cascade'o.
      Pataisyta padidinant override specifiškumą iki tokio paties lygio. Patvirtinta ekrano nuotrauka
      prieš/po.

## Pastabos kitai fazei (4A/4B)

- Testuota realiame Chrome per Playwright (`channel: "chrome"` per lokaliai `npm install`'intą
  playwright scratchpad'e, nes projekto kataluoge `node_modules` nėra ir jo kurti čia neplanuota).
  Patikrinta: 360/768/1024/1440px scroll, pilnas formos srautas su visomis 7 klaidų rūšimis,
  sėkmės būsena, „keisti" redagavimo mechanizmas, slapukų juostos `localStorage` elgsena,
  `prefers-reduced-motion`, klaviatūros `Tab` seka, veikimas su išjungtu JS (progresyvaus
  patobulinimo bazinis lygis — visi 5 laukai matomi kaip viena forma su native HTML5 validacija).
- Tracking steko šiame variante **nėra** (naujas, izoliuotas puslapis, joks GTM/Meta/OpenAI pixel
  failas nebuvo liestas ir apskritai neegzistuoja šiame kataloge) — vietoje analitikos paliktos
  `<!-- tracking: registration_completed -->` ir `<!-- tracking: cookies_acknowledged -->` žymos.
- Kanoninis URL (`https://vyrukambarys.lt/lg9`) — prielaida pagal `CLAUDE.md` deployment schemą
  (`vyrukambarys.lt/lg1…/lg10`). Jei realus kelias kitoks, reikės atnaujinti `canonical`/`og:url`.
  `og:image` sąmoningai neįtrauktas — ašis 12 numato „be rastrinių vaizdų", o socialinių tinklų
  peržiūroms tinkamo SVG-kaip-og:image sprendimo nėra; jei reikės realaus peržiūros paveikslėlio
  socialiniams tinklams, tai bus atskiras assets sprendimas, ne šio statybos žingsnio dalis.
- Rezervuotų prisijungimo vardų sąrašas (`admin, root, test, prieiga, naudotojas, mazgas`) yra
  kliento pusės demonstracinė duomenų imitacija (nėra backend'o) — jei variantas kada nors bus
  sujungtas su realia registracijos sistema, šį sąrašą reikės pakeisti realiu unikalumo tikrinimu.
