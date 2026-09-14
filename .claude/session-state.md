# Session State

Atnaujinta: 2026-09-14

## AKTYVUS SRAUTAS: v2 partija (10 vizualiai sunkių landing page)

**Struktūra:** `variacijosv2/lp1`..`lp10` (10 naujų variantų, atskiri nuo v1 `variacijos/lg1-10`).
Jonas pasakė v1 per daug tekstinis — v2 sprendžia tai vizualiai sunkiu dizainu.

**Būsena pagal partijas:**
- **lp1-3** (žemėlapis/swipe/grid, iliustruoti SVG avatarai) — PRIIMTA po nepriklausomo audito,
  pushinta (`9804db7`).
- **lp4-6** (live-feed/VIP/chat, iliustruoti SVG avatarai) — PRIIMTA po QA + taisymo ciklo,
  pushinta (`1a41b56`). Žr. `qa/v2-patikra-batch2.md`.
- **lp7-9** (visiškai kitas šablonas: pilno ekrano REALI AI-sugeneruota nuotrauka + maža forma,
  Jono paties nurodyta kryptis po to, kai jis parodė realius konkurentus) — PUSHINTA (`c0b0031`),
  **BET FORMALUS NEPRIKLAUSOMAS QA AUDITAS DAR NEATLIKTAS** (Jonas paprašė pushinti iš karto, prieš
  QA — tai nukrypsta nuo įprastos "3 → QA → push" tvarkos, sąmoningai, pagal jo prašymą). Prieš tai
  pats radau ir ištaisiau: veido pozicionavimo problemą mobiliuose (žr. žemiau), lp7 papildomą tuščią
  bloką po footeriu (`@media max-width:400px` klaida, pašalinta).
- **lp10** (kryptis „Pavasario sodas") — DAR NEPRADĖTAS. Reikalinga 4-a Jono sugeneruota nuotrauka
  (sodo/gėlių fone). `promptai/07-vizualus-promptai-foto.md` turi generavimo promptą jai (ieškok
  žinutės su 4 promptais — lp10 promptas jau parašytas pokalbyje, bet NEIŠSAUGOTAS atskirame faile;
  jei reikės, atkurk iš `config/vizualines-kryptys-v2.md` "## lp10 — Pavasario sodas" aprašymo).

## SVARBI TECHNINĖ PAMOKA (kad nekartotum tyrimo): foninio atvaizdo pozicionavimas

lp8/lp9 (ir vėliau lp7) mobiliame ekrane rodė TIK plaukus/viršugalvį, veidas visiškai paslėptas už
kortelės. Priežastis: portretinė nuotrauka (1024×1536) + `background-size:cover` siaurame (375px)
bet aukštame (812px) konteineryje duoda ZERO vertikalų apkirpimą (scaled height == container height
tiksliai, nes containerio proporcija > vaizdo proporcijos) — `background-position` vertikali % TADA
NEDARO JOKIOS ĮTAKOS (visas vaizdas nuo 0 iki apačios tiesiog suspaudžiamas į containerį). Kadangi
kortelė uždengia ~80% ekrano, matoma tik viršutiniai ~15-20% originalaus vaizdo (plaukai).

**Sprendimas:** reikia DIRBTINAI padidinti `background-size` virš "cover" minimumo (pvz.
`background-size: auto 165%`), kad atsirastų vertikalus perviršis, per kurį `background-position`
vertikali % procentas TADA pradeda veikti ir galima parinkti, kurią originalaus vaizdo dalį rodyti
matomoje ekrano juostoje. Formulė: `matoma_originalo_aukstis_px = (scaledH-containerH)*(P/100)`,
kur `scaledH = 1536 * (background-size-height% / 100 iš auto-height sistemos)`. Praktiškai — keisk
`auto NNN%` ir vertikalų P% empiriškai, PATIKRINDAMAS REALIU SCREENSHOT'U (Playwright per sistemos
Chrome `/Applications/Google Chrome.app/...`, NE vien matematika — kelis kartus suklydau kryptimi).

**SVARBU:** kai kurie variantai (lp9) turėjo PAPILDOMAS media query taisykles (`max-width:900px` IR
`max-width:640px`), kurios PERRAŠO bazinę taisyklę CSS cascade tvarka — keisdamas bazinę taisyklę
NIEKO nepakeisi, jei yra siauresnė media query vėliau faile. VISADA `grep -n ".hero-class-name {"
style.css` PRIEŠ keičiant, kad rastum VISAS deklaracijas, ne tik pirmą.

## lp6 veido matomumas — PATIKRINTA DAR KARTĄ (2026-09-14, po Jono pranešimo "pakelk veidą")

Po to, kai pushinau `c9e462d` (bazinės `.lp6-hero` taisyklės grąžinimas į `cover; 8% 10%`) ir pranešiau
Jonui, kad sutvarkyta, Jonas atsiuntė NAUJĄ screenshot rodantį, kad veidas VIS DAR nematomas gerai
(daugiausiai plaukai). Padariau pakartotinį, platesnį patikrinimą:
- Playwright screenshot'ai lokaliai per 8 skirtingus viewport dydžius: 900×700, 1024×768, 768×1024,
  834×1194, 1280×900, 1440×900, 1680×1050, 1920×1080, 1920×1200, 1366×768 — VISUR veidas pilnai,
  aiškiai matomas, gerai apšviestas.
- Gyvo Vercel deploy CSS turinys (`curl https://landingapges.vercel.app/variacijosv2/lp6/assets/style.css`)
  TIKSLIAI atitinka lokalų failą (bazinė taisyklė `cover;8% 10%`, media query `auto 165%;22% 60%`).
  `last-modified` rodo šiandienos laiką, t.y. deploy tikrai naujas.
- IŠVADA: CSS pats savaime šiuo metu YRA teisingas visuose testuotuose plotuose. Labiausiai tikėtina
  priežastis, kodėl Jonas VIS DAR matė seną vaizdą savo screenshot'e — jo naršyklės (Firefox) disko
  cache neatsinaujino be hard-refresh (`Cmd+Shift+R`), ARBA jo screenshot buvo padarytas PRIEŠ mano
  push'ą, bet žinutė atėjo po. Parašiau Jonui prašymą padaryti hard-refresh ir dar kartą patikrinti
  PRIEŠ darant tolesnius CSS pakeitimus, kad neišardytume jau teisingo sprendimo aklai spėliodami.
- **Jei Jonas po hard-refresh vis tiek mato problemą**: paprašyti TIKSLAUS naršyklės lango pločio
  (F12 → window.innerWidth) ir naujo screenshot'o, kad patikrinčiau BŪTENT tą plotį — nespėlioti.

## lp7-9 statyba PALEISTA (2026-09-14, trečia grupė, po lp4-6 patvirtinimo)

Jonas patvirtino lp4-6 (perėjo prie kito užduoties = numanomas patvirtinimas). Paprašė dar 3 naujų
variantų ta pačia struktūra (pilno ekrano REALI nuotrauka + maža kortelė), bet KITOKIU IŠDĖSTYMU
kiekviename ir naujomis temomis. Daviau 3 detalius (8K, tasteful) AI image-gen promptus — Jonas
sugeneravo per Gemini ir įkėlė 3 nuotraukas į `/Users/jonas/Desktop/Darbas/landing page variaciju foto/`
(Gemini_Generated_Image_*.jpg, 848×1264px). Priskyriau pagal TIKRĄ nuotraukų turinį (ne pagal
pirminį planą, nes Gemini rezultatas skyrėsi nuo prašyto — nė viena nebuvo neoninė/klubo tema):
- **lp7 „Marė"** — žalia suknelė, turkio dangus, uostamiesčio terasa. Kortelė KAIRĖJE (priešingai
  nei lp4-6 dešinėje), veidas dešinėje pusėje.
- **lp8 „Taurė"** — bordo suknelė, vyno baras, žvakė. Kortelė APAČIOJE per visą plotį (bottom-sheet
  stiliumi), veidas viršuje.
- **lp9 „Koralas"** — koralo suknelė, šviesus vasaros prieblandos rooftop. Kortelė MAŽA, glassmorphism,
  VIRŠUJE DEŠINĖJE (ne didelė vientisa kaip lp4-6).

Taip pat šioje sesijoje pervadinau lp1→**Šalimais**, lp4→**Aušra**, lp5→**Švelnu** (anksčiau visi 3
naudojo bendrą „Vyrų kambarys" — Jonas paprašė kiekvienam atskiro pavadinimo). lp2/lp3/lp6 jau turėjo
unikalius (Poros/Randu/Vidurnaktis). Pushinta (`38dabed`).

Nuotraukos jau sukonvertuotos ir įdėtos: `variacijosv2/lp7/8/9/assets/hero-portrait.jpg`.
**Statyba PALEISTA per 3 lygiagrečius Agent (general-purpose) build'us** su pilnu self-contained
promptu, įskaitant PRIVALOMĄ lp6 pamoką (Playwright testai per 9 viewport dydžius, ypač
901×550 ir 1394×677 — žemi/platūs desktop langai, kur `background-size:cover` elgiasi kitaip nei
aukštuose languose). Agentų ID (jei reikės tęsti per SendMessage): lp7=a9aa31c83ba5b6ea4,
lp8=a0e2e4ce7b2f800a9, lp9=a7ec999d3c04f8f88.

**BAIGTA (2026-09-14):** visi 3 agentai baigė, PATS patikrinau Playwright screenshot'ais (9 viewport
dydžiai kiekvienam, įskaitant kritinius 901x550 ir 1394x677) NEPASITIKĖDAMAS vien agentų žodžiu —
visi trys atrodo profesionaliai, veidas visur matomas. Pushinta atskirai kiekvienas iš karto po
patikros (Jonas paprašė nelaukti visų trijų): lp7 `3d9cc5e`, lp9 `86f5889`, lp8 `ac6f561`.
`variacijosv2/index.html` sąrašas atnaujintas — dabar 9/10 (lp1-9), tik lp10 trūksta.
`vercel.json` jau turėjo paruoštas `/lp7`, `/lp8`, `/lp9` rewrite taisykles iš anksčiau — nereikėjo
keisti.

**LIKĘS DARBAS v2 partijai:** lp10 (kryptis nepasirinkta iš naujo — senas „Pavasario sodas" planas
galioja jei Jonas panorės, bet paskutiniai 3 temos pasirinkti pagal TIKRAI Jono sugeneruotas
nuotraukas, ne iš anksto). Reikės 4-os nuotraukos + naujo prekės ženklo vardo, jei Jonas panorės
pilno 10/10. Kol kas LAUKTI Jono nurodymo — nesiimti savarankiškai.

## Po-pushinimo pataisymai (2026-09-14, tą pačią dieną)

Jonas atsiuntė realų savo naršyklės screenshot'ą (Firefox, ~1394×450 CSS px turinio sritis —
NEĮPRASTAI žema, daug mažiau nei anksčiau tirtas 1394×677 "trumpo desktop" atvejis) — **lp8**
rodė tik plaukus/kaktą, jokio veido. Atkūriau tiksliai per Playwright (1394×450), radau kad esamas
`@media (max-width:620px height)` blokas buvo testuotas/derintas tik iki ~550-620px, o NE iki tokio
ekstremalaus 450px atvejo. Sutvarkyta: dar labiau sutankinta kortelė šiame breakpoint'e (paslėpti
badge'ai, legend, sub, consent; sumažinti šriftai/tarpai) + pozicija pakeista 49%→30%, kad liktų
matomos akys+šypsena net iki ~400px aukščio. Pushinta `d20ae85`.

Jonas taip pat paprašė perkelti **lp9** kortelę į kairę pusę ("kad veidas neuzsidengtu"). Patikrinau
— horizontali `background-position` ant lp9 hero VISIŠKAI NEVEIKĖ desktop pločiuose (nes `cover` su
šia nuotrauka desktop landscape konteineriuose yra WIDTH-constrained → nulinis horizontalus
perviršis, position-x reikšmė ignoruojama; tai skiriasi nuo VERTIKALIOS pozicijos problemos, kuri
kamavo lp6/lp7/lp8). Laimei, paprasčiausias sprendimas — tiesiog `justify-content: flex-end→
flex-start` — pasirodė pakankamas: veidas nuotraukoje natūraliai yra centre/centre-dešinėje, tad
kairėje pastatyta maža (336px) kortelė jo niekada nepridengia jokiame patikrintame lange (įsk.
901×420 ekstremalų ir 2560×1080 ultraplatų). Pushinta `4025aa5` + dokumentacijos pataisa `d62cb79`.

**PAMOKA ATEIČIAI:** vien "1394×677" NEBEUŽTENKA kaip vienintelis "trumpo desktop" testo atvejis —
realūs Jono naršyklės langų aukščiai gali kristi iki ~400-450px CSS turinio srities (priklauso nuo
jo konkrečios Firefox konfigūracijos/skirtukų/žymių juostų). Ateityje foninės nuotraukos pozicijos
patikrai VISADA įtraukti bent vieną testą ties ~400-450px aukščiu, ne tik 550-620px.

## Ankstesnis (baigtas) žingsnis
1. **Paleisti formalų nepriklausomą QA auditą lp7-9** (kaip batch1/batch2, `promptai/07-v2-qa-batch.md`
   principu) — tai dar neatlikta, buvo praleista pagal Jono prašymą pushinti greitai. Jei ras
   problemų — taisyti ir push'inti pataisymus.
2. **Paprašyti Jono 4-os nuotraukos (lp10, "Pavasario sodas")** arba sugeneruoti promptą jam iš naujo.
3. Kai turėsi lp10 nuotrauką — statyti lp10 pagal `promptai/08-statyba-v2-foto.md` šabloną.
4. Galiausiai — QA visai v2 partijai kartu, patikrinti kryžmines kolizijas tarp visų 10 (lp1-10)
   IR palyginti su v1 (lg1-10), jei aktualu.

## Senesnis kontekstas (v1, 10 variantų `variacijos/lg1-10`) — BAIGTAS, pushinta anksčiau
Visos 4 fazės atliktos, visi 10 variantų PRIIMTA po 4 audito/taisymo ciklų. Pilna istorija:
`qa/panasumo-auditas.md`. Galutinis `00-MASTER.md` priėmimo checklist'as įvykdytas 100%.

## Bendra informacija apie projektą
`Desktop/Darbas/Landing Page Variacijos` — pažinčių platformos LT landing page'ų pipeline.
Verslas: teisėta 18+ pažinčių platforma, amžiaus patvirtinimas privalomas.
Repo: https://github.com/mobitirus-stack/Landingapges (main šaka).
**Mano paties `git commit`/`git push` PORTOS VEIKIA ŠIOJE SESIJOJE** (anksčiau buvo blokuojama
Claude Code auto-mode klasifikatoriaus, bet po pirmo sėkmingo bandymo šioje sesijoje visi vėlesni
commit/push veikė be problemų — nebereikia prašyti Jono daryti per Copilot).
Cloud routine (autonominis atsinaujinimas) NESUKURTAS — RemoteTrigger create vis dar blokuojamas;
šis klausimas liko neišspręstas ir neaktualus (dirbame interaktyviai).
Vietinis serveris veikia fone: `python3 -m http.server 8080` iš projekto šaknies — peržiūra per
`http://localhost:8080/variacijos/` (v1) ir `http://localhost:8080/variacijosv2/` (v2, trūksta
index.html sąrašo — reikėtų sukurti analogiškai v1).
