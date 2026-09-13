# v2 partija 1 (lp1, lp2, lp3) — nepriklausoma patikra

Vertintojas: atskiras QA agentas (Opus, aukštas effort). Statytojų Playwright ataskaitomis nesiremta —
viskas perskaičiuota iš kodo (kontrastas — iš hex reikšmių, layout — iš CSS matematikos, klasių vardai
ir n-gramos — mechanine paieška).

**PARTIJOS VERDIKTAS: NEPRIIMTA.** 0 iš 3. Kita partija (lp4–lp6) nepradedama.

Gera žinia: **kritinės ribos nepažeidė nė vienas variantas** — realių/atsisiųstų/stock nuotraukų nėra
jokių (žr. §0). Visos pastabos yra pataisomos, nė vienas variantas nereikalauja statybos iš naujo.

---

## §0. Bendra patikra — realių nuotraukų NĖRA (patvirtinta)

Mechaniškai patikrinta per visus 3 katalogus:

| Patikra | Rezultatas |
|---|---|
| `find` `.jpg/.jpeg/.png/.webp/.gif/.avif` | **0 failų** |
| `<img` žymos | **0 vnt.** visuose trijuose |
| `background-image: url(http…)` | **0 vnt.** |
| `base64` | **0 vnt.** |
| `data:image/*` | 1 vnt. — `lp2/index.html:9`, `data:image/svg+xml` (inline SVG favicon) — **leistina** |
| Išorinės nuorodos | tik `fonts.googleapis.com` / `fonts.gstatic.com` / `schema.org` / `vyrukambarys.lt` |

Visi „nariai“ — SVG/CSS generuoti: lp1 — CSS radial-gradient dėmė + inicialas + SVG `feTurbulence`
triukšmas (be veido); lp2 — 15 poligonų low-poly biustas (`lowpoly-bust` simbolis, abstraktus, be veido
bruožų); lp3 — duotone geometrinės kompozicijos (apskritimai/trikampiai/rombai). **Kliento riba
išlaikyta 100 %.**

Kitos bendros patikros: HTML žymų balansas — visi trys švarūs (0 neuždarytų); vienas `<h1>` kiekviename;
`<main>`/`<nav>`/`<footer>` yra; `<label>`/`<legend>` visiems laukams; CSS dydžiai 16,4 / 12,0 / 13,5 KB
(limitas 60 KB); puslapio svoris — toli iki 1,5 MB (visas turinys tekstinis + inline SVG); horizontalaus
scroll ties 360px pagal CSS matematiką nė viename nesusidaro.

---

## lp1 — „Vyrų kambarys“ / Žemėlapio atradimas → **PERDARYTI** (mažas taisymas)

Techniškai švariausias partijos variantas. Kontrastas — visos poros praeina su dideliu atsargos margin'u
(tekstas 15,9:1; muted 9,8:1; akcentas ant fono 12,1:1; mygtuko rašalas 12,9:1). Draudžiamų žodžių nėra.
Draudžiamų klasių vardų nėra (visos su `lp1-` prefiksu). SEO/OG/canonical/JSON-LD (Organization+Service)
užpildyti, `canonical` → `vyrukambarys.lt/lp1`. Žemėlapis — realiai didelis ir tikras: pilno pločio SVG su
gatvių tinkleliu, 18 pastatų, 6 keliais, parku, upe ir centro švytėjimu (`index.html:91-146`), proporcijos
4/5 mobile → 16/8 desktop, t. y. ~590px aukščio ties 1180px pločiu.

**Kodėl vis dėlto PERDARYTI:**

1. **Avatarai naudojami tik VIENOJE sekcijoje.** Visi 11 avatarų (`index.html:151-205`) yra `.lp1-discovery`
   viduje. Likusios 5 sekcijos — „Nuo žymeklio iki pokalbio“ (`:217`), „Miestai…“ (`:241`), „Kaip
   tikriname…“ (`:255`), registracija (`:275`), DUK (`:370`) — grynas tekstas su 20–30px ikonomis
   (`style.css:378-382`, `:415`). Priėmimo kriterijus: 8–12 avatarų **per >1 sekciją**. Realiai puslapis
   yra „vienas didelis žemėlapis viršuje + 4 ekranai teksto“ — tiksliai tas pats jausmas, dėl kurio
   Jonas atmetė v1.
2. **`prefers-reduced-motion` blokas sugadina online tašką.** `style.css:492-496` uždeda
   `transform: translate(-50%,-50%) !important` ir `.lp1-match__online`, kuris pozicionuojamas per
   `right:4px; bottom:4px` **be** transform (`style.css:343-354`). Su reduced-motion 16px taškas nušoka
   ~8px į vidų, ant avataro. Kosmetinė, bet reali klaida.

**Užduotis taisymui (nedidelė, be perstatymo):**
- Perkelti avatarų sistemą į bent dar vieną sekciją: pvz. miestų „chip'ai“ (`index.html:248-251`) gauna po
  1–2 miniatiūrinius avatarus su skaičiumi, ARBA virš registracijos formos atsiranda juosta „kas jau
  žemėlapyje“ su 6–8 avatarais. Naudoti tuos pačius `--lp1-c1/--lp1-c2` derinius — nauja CSS beveik nereikia.
- `style.css:492-496`: išimti `.lp1-match__online` iš bendro `transform` sąrašo (jam palikti tik
  `animation:none`).

---

## lp2 — „Poros“ / Swipe kortelių dėklas → **PERDARYTI**

Funkciškai gyviausias variantas: swipe dėklas realiai veikia (like/dislike, kortelė nuskrieja, eilė
sukasi — `app.js:54-82`), yra reduced-motion atšaka (`app.js:62-65`), swipe mygtukai su normaliais
`aria-label`, slaptažodžio perjungiklis su teisingai valdomu SVG matomumu. Kontrastas visur praeina
(muted 6,9:1; baltas ant `#E11D48` 4,70:1 — vos praeina, bet praeina; `--accent-text #BE123C` smulkiam
tekstui 5,7:1 — teisingas sprendimas). Avatarai naudojami **2 sekcijose** (dėklas + `avatar-strip`) —
vienintelis partijos variantas, atitinkantis „>1 sekcija“ kriterijų. Draudžiamų žodžių ir tikslių
draudžiamų klasių vardų nėra.

**Kodėl PERDARYTI:**

1. **Vizualinė masė — ploniausia partijoje.** Telefono rėmas apribotas
   `width: clamp(230px, 62vw, 290px)` (`style.css:83`) — ties 1440px hero vizualinė kolona gauna ~40 %
   pločio, bet pats vizualas lieka 290px ir aplink lieka tuščia. Avatarų juosta — 72px apskritimai
   (`style.css:172`). Sekcijos „Nuo kortelės iki pokalbio“ (`index.html:129`), „Kas saugo dėklą…“ (`:164`),
   DUK (`:183`), registracija (`:209`) — 0 vizualinio turinio. Realiai vizualas užima ~16 % puslapio
   aukščio. Kryptis sako „telefono rėmas“, todėl rėmo didinti neverta — bet reikia antro vizualinio
   svorio centro žemiau hero.
2. **Visas hero vizualas priklauso nuo JS.** `index.html:112` — `<div class="swipe-stage" id="swipeStage">`
   yra **tuščias**; visos trys kortelės injektuojamos per `app.js:26-39`. Neužsikrovus/užblokavus JS
   mokamos reklamos lankytojas mato tuščią tamsų telefono rėmą vietoj pagrindinio vizualo.
3. **`og:image` neveiks reklamų peržiūrose.** `index.html:15` rodo į `assets/og-image.svg`. Meta/Facebook,
   LinkedIn ir X **nepalaiko SVG** kaip `og:image` — nuorodos peržiūra bus be paveikslėlio. Tai blogiau nei
   visai neturėti žymos, nes atrodo sutvarkyta.
4. **`scroll-behavior:smooth` neišjungtas su reduced-motion.** `style.css:20` — nėra
   `@media (prefers-reduced-motion: reduce){ html{scroll-behavior:auto} }` (lp3 tai turi, `style.css:30-32`).

**Užduotis taisymui:**
- Pirmą kortelę įrašyti tiesiai į HTML `#swipeStage` viduje (JS ją tiesiog perrašo per `renderStage()`) —
  puslapis lieka vizualus ir be JS.
- Pridėti antrą vizualinį bloką žemiau hero: „Kas saugo dėklą“ arba „Nuo kortelės iki pokalbio“ sekcijose
  panaudoti tuos pačius low-poly avatarus stambiau (pvz. 3 žingsniai su po vieną 120px avatarą kortelėje),
  arba padidinti `avatar-strip` avatarus iki ~110–120px.
- `og:image` pakeisti į realų PNG/JPG (1200×630) — jį galima **išeksportuoti iš to paties SVG**, nauja
  grafika nereikalinga; jokių stock nuotraukų.
- Pridėti reduced-motion `scroll-behavior:auto`.

---

## lp3 — „Randu“ / Nuotraukų tinklelis → **PERDARYTI** (daugiausia taisymų)

Didžiausia vizualinė masė partijoje: 16 unikalių duotone kompozicijų (`index.html:137-296`), tinklelis
2/3/4 stulpelių (`style.css:298-313`), **realiai veikiantys** filtrai pagal amžių ir miestą su
`aria-pressed` ir `aria-live` statusu (`app.js:26-57`) — funkciškai tvirčiausias vizualinis elementas iš
trijų. Gimimo metų sąrašas generuojamas JS (`app.js:7-17`). Kontrastas pagrindinėms poroms praeina
(tekstas 17,0:1; muted 10,0:1; akcentas 5,5:1; baltas ant violetinės 5,7:1; hover overlay 5,0:1).

**Kodėl PERDARYTI — 4 punktai, du iš jų mechaniniai pažeidimai:**

1. **Draudžiami klasių vardai — 6 tikslūs sutapimai su `draudziamu-zodziu-sarasas.md` §4.**
   `.container` (`index.html:55`, `:76`, … + `style.css:90`), `.hero` (`index.html:75`, `style.css:192`),
   `.btn` ir `.btn-primary` (`index.html:67`, `:85`, `:475`; `style.css:153`, `:174`), `.section`
   (`index.html:99`, `:303`, `:333`, `:349`, `:413`; `style.css:226`), `.footer-links`
   (`index.html:515`, `:523`; `style.css:605`). lp1 ir lp2 šio sąrašo nepažeidė nė vienu vardu — lp3 yra
   vienintelis, todėl tai ne prompto dviprasmybė, o praleista patikra.
2. **Draudžiama bendrinė sekcijos antraštė.** `index.html:306`: `<h2>Kaip tai veikia</h2>` — pažodinis
   įrašas §3 sąraše.
3. **WCAG lūžis ant kiekvienos tinklelio kortelės.** `.avatar-meta` (`style.css:379-387`) — baltas tekstas
   ant `linear-gradient(to top, rgba(24,24,27,0.72), rgba(24,24,27,0))`, uždėto ant šviesių kortelių
   (`#F4F4F5` / `#FAFAF9`). Gradientas išnyksta per patį `.avatar-meta` aukštį (~35px), todėl ties teksto
   verikaliu centru alfa ≈ 0,30–0,40 → **2,0–2,7:1**. Pilną 7,3:1 pasiekia tik pats apatinis elemento
   kraštas. Tai vienintelis informacinis tekstas ant kortelės (amžius + miestas, pvz. `index.html:144`) —
   ir jis neįskaitomas. Reikia arba vientiso `rgba(24,24,27,0.78)` fono po tekstu, arba tamsaus teksto
   ant šviesaus pjedestalo.
4. **Avatarai tik vienoje sekcijoje ir hero be jokio vizualo.** Visi 16 kortelių yra `#tinklelis`
   (`index.html:99-300`); hero (`:75-96`) — grynas tekstas + 2 mygtukai + 18px ikona. Sekcijos „Kaip tai
   veikia“, „Kaip atrenkame anketas“, DUK, registracija — 0 avatarų. Tas pats „>1 sekcija“ kriterijaus
   nepasiekimas kaip lp1.

**Papildomos smulkmenos (ne blokuojančios):**
- `index.html:542` — `<script src="assets/app.js">` be `defer` (lp1/lp2 turi). Kūno gale, tad praktiškai
  neblokuoja, bet nuoseklumo dėlei verta pridėti.
- `og:image` nėra visai (žr. bendrą pastabą §„Partijos lygio pastabos“).

**Užduotis taisymui:**
- Pervadinti 6 draudžiamus klasių vardus į variantui savitus (rekomenduoju `lp3-` prefiksą, kaip lp1 —
  tai vienu ypu išsprendžia ir kryžminį sutapimą su lp2, žr. žemiau). Atnaujinti ir `app.js:28`
  (`.avatar-card`), `:45` (`.chip`), `:70` (`.field`).
- `index.html:306` antraštę pakeisti į variantui savitą, pvz. „Nuo anketos iki pirmo pokalbio“ —
  **bet ne** „Nuo X iki pokalbio“ formos, nes ją jau naudoja lp1 ir lp2 (žr. kryžminę patikrą).
- `style.css:386` gradientą pakeisti į vientisą foną po tekstu (≥0,78 alfa) ir perskaičiuoti.
- Įkelti bent 3–4 tos pačios geometrinės sistemos figūras į „Kaip tai veikia“ arba prie formos.

---

## Kryžminė patikra tarp lp1 / lp2 / lp3

**Gerai atskirta:**
- Paletės visiškai skirtingos: lp1 tamsiai žalia + mėtinė; lp2 šviesiai rožinė + raudona; lp3 beveik
  balta + violetinė. Jokių sutapimų su v1 referencinių puslapių draudžiamų spalvų sąrašu (§7.1) —
  patikrinta visų `--` kintamųjų reikšmės.
- Šriftai: Manrope+Inter / Sora+Nunito Sans / Plus Jakarta Sans+Inter. Bricolage Grotesque ir Archivo
  (§7.2) **nenaudojami nė viename** — teisinga.
- Avatarų sistemos trys skirtingi principai (gradiento dėmė / low-poly / duotone geometrija).

**Trūkumai:**
1. **Klasių vardų sutapimas lp2↔lp3:** `faq-list`, `field-error`, `form-status`. Priežastis — abu
   variantai neturi prefikso. lp1 (`lp1-`) sutapimų neturi nė vieno. Sprendimas: lp3 gauna `lp3-`
   prefiksą (jau reikalinga dėl §4), lp2 — `lp2-`.
2. **Ta pati antraštės konstrukcija:** lp1 `<h2>Nuo žymeklio iki pokalbio` (`index.html:219`) ir
   lp2 `<h2>Nuo kortelės iki pokalbio` (`index.html:130`) — identiška „Nuo X iki pokalbio“ forma.
   Draudimų sąrašo §6 paskutinis punktas. Vienas iš dviejų turi būti perrašytas.
3. **Ta pati CTA konstrukcija:** lp1 „Sukurk profilį žemėlapyje“ / lp2 „Sukurk savo kortelę“ —
   liepiamasis „Sukurk X“ abiejuose. Ne kritinė, bet kartu su 2 punktu variantai skamba vienodai.
4. **Tas pats `·` formatavimo įprotis visuose trijuose:** lp1 „Rūta · 1,2 km“, lp2 „Eglė · Vilnius“,
   lp3 „21 m. · Vilnius“ (10/10/16 kartų). §5 draudžia „A · B · C“ meta eilutes; čia visur tik dvi
   dalys, tad formaliai riba neperžengta, bet vienodas parašas per visus tris variantus. Rekomenduoju
   bent viename pakeisti (pvz. lp3 → „21 m., Vilnius“).
5. **Identiška 18+ sutikimo formuluotė visuose trijuose:** „Patvirtinu, kad man yra bent 18 metų ir
   sutinku su naudojimosi taisyklėmis bei privatumo politika.“ Formaliai — §6 (4+ žodžių sutapimas).
   **Vertinu kaip priimtiną**: tai teisinė formuluotė, jos perrašinėjimas dėl stiliaus didina teisinę
   riziką ir nekeičia konversijų. Palikta sąmoningai; kitoms partijoms taisyklė ta pati.

---

## Partijos lygio pastabos (ne verdiktas, bet svarbu Jonui)

**`og:image` — reklamų nuorodų peržiūros.** lp1 ir lp3 neturi `og:image` visai, lp2 turi SVG, kurio
Meta/LinkedIn/X nepalaiko. Praktinis rezultatas visuose trijuose vienodas: **dalinantis nuoroda
(Messenger, WhatsApp, organinis postas) peržiūra bus be paveikslėlio.** Pačiam Meta Ads skelbimui tai
neturi įtakos (ten kūrybinis įkeliamas atskirai), bet nuorodų dalinimuisi — turi. Statybos promptas
`og:image` atskirai nereikalavo, todėl nė vienam varianto verdiktui to neįskaičiavau. **Siūlau įtraukti
`og:image` (1200×630 PNG, eksportuotas iš to paties varianto SVG — jokių stock nuotraukų) į statybos
promptą v2 partijoms nuo lp4.**

**Trackingo stekas.** Šiuose trijuose failuose GTM / Meta Pixel / ChatGPT pixel kodo nėra — yra tik
`<!-- tracking: event_name -->` žymės, kaip ir reikalavo promptas (lp1: `lp1_signup_submit`,
`lp1_signup_success`; lp2: `swipe_dislike`, `swipe_like`, `registration_submit`, `registration_success`;
lp3: `lead_form_submit`, `lead_form_success`). Nieko neliesta, nieko nepridėta — QA buvo tik skaitymo.

**Sisteminė partijos problema, kurią verta įrašyti į lp4–lp10 promptą.** Visi trys variantai vizualą
sudėjo į vieną juostą puslapio viršuje, o likusius 60–75 % scroll'o paliko tekstinėms kortelėms. Tai ta
pati problema, dėl kurios buvo atmesta v1 — tik dabar su gražiu pirmu ekranu. Rekomenduoju į
`06-statyba-v2.md` priėmimo kriterijus įrašyti mechaniškai tikrinamą reikalavimą:
**„krypties avatarų sistema privalo pasirodyti bent 3 skirtingose `<section>`, iš kurių bent viena — po
puslapio viduriu“**, ir **„sekcija su forma bei bent viena pasitikėjimo sekcija negali būti grynas
tekstas“**.

---
---

# Pakartotinė patikra po taisymo (2026-09-13)

Tas pats nepriklausomas vertintojas. Taisymo agentų ataskaitomis (`logs/v2-fix-lp1/2/3.done.md`) nesiremta —
visi jų teiginiai perskaičiuoti / perrasti iš naujo: `diff` prieš jų pačių atsargines kopijas
(`scratchpad/lpN-backup/`), kontrastas perskaičiuotas iš hex WCAG 2.1 formule, klasių vardai patikrinti
mechanine token'ų paieška, o **layout ir reduced-motion elgsena išmatuota realioje naršyklėje**
(Chrome headless per CDP, `Emulation.setDeviceMetricsOverride` + `setEmulatedMedia`), ne iš CSS spėliojant.

**PARTIJOS VERDIKTAS: PRIIMTA.** 3 iš 3. lp4–lp6 galima pradėti.
Lieka **vienas** nebaigtas kryžminės patikros punktas (§P.5) — vienos eilutės antraštės pakeitimas lp1;
jis nereikalauja naujo audito ir nestabdo kitos partijos.

---

## §P.0 Realių nuotraukų patikra — vis dar 0 (svarbiausia riba)

Atsirado vienas naujas binarinis failas — `variacijosv2/lp2/assets/og-image.png` (49 KB, 1200×630).
Patikrintas atskirai ir nuodugniai, nes tai vienintelis rastrinis failas visoje v2:

| Patikra | Rezultatas |
|---|---|
| PNG antraštė | `1200 x 630, 8-bit/color RGB, non-interlaced` — tiksliai OG dydis |
| PNG chunk'ai | tik `IHDR` + `IDAT` + `IEND` — **jokių `tEXt`/`iTXt`/EXIF/autorystės metaduomenų**, kokius palieka stock bibliotekos ar fotoaparatas |
| `xattr` | `com.apple.quarantine: 0081;…;Chrome;` — **be atsisiuntimo įvykio UUID** ketvirtame lauke. Taip macOS žymi bet kurį failą, kurį įrašo karantino aware programa (Chrome), įskaitant headless `--screenshot`. Realus atsisiuntimas turėtų UUID ir įrašą LSQuarantine DB |
| Turinio sutikrinimas su šaltiniu | PNG atvaizdas peržiūrėtas ir **pažodžiui atitinka** `assets/og-image.svg` (46 eilutės, lokaliai sukurtas): „Poros“, ta pati paantraštė, `#E11D48` piliulė „Sukurti kortelę“, `#1E293B` telefono korpusas, **tas pats 15 poligonų low-poly biustas** (`polygon points` sutampa), X ir širdies mygtukai |
| Fotografijos požymiai | jokių — vientisos spalvų plokštumos, aštrios vektorinės briaunos, nulis triukšmo/gradiento artefaktų |

**Išvada: `og-image.png` yra lokalus to paties SVG rasterizavimas, ne atsisiųstas/stock vaizdas.**
Kliento riba „jokių realių nuotraukų“ **išlaikyta 100 %** ir po taisymų.

Kitos mechaninės patikros visuose trijuose (pakartotos): `<img` — 0; `url(http…)` — 0; `base64` — 0;
`data:image/*` — 1 (lp2 inline SVG favicon, leistina); kitų `.jpg/.png/.webp/.gif/.avif` nėra.

> Smulkmena Jonui: prieš keliant į serverį verta nuimti macOS karantino žymę
> (`xattr -d com.apple.quarantine …`). FTP/HTTP keliant ji nepersiduoda, tad įtakos gyvam puslapiui nėra.

---

## §P.1 lp1 — **PRIIMTA**

| QA1 punktas | Būsena | Kaip patikrinta iš naujo |
|---|---|---|
| 1. Avatarai tik vienoje sekcijoje | **IŠTAISYTA** | Avatarų sistema dabar **2 sekcijose**: `.lp1-discovery` (22 vizualiniai vienetai) ir `#registracija` (6 mini-avatarai + „+37“). Suskaičiuota programiškai skaidant HTML per `<section>` ribas, ne pagal ataskaitą |
| 2. `prefers-reduced-motion` stumdė online tašką | **IŠTAISYTA — patvirtinta naršyklėje** | Žr. matavimą žemiau |

**Reduced-motion matavimas realioje naršyklėje** (Chrome, `Emulation.setEmulatedMedia`, 1280px):

| CSS | Įprastas judesys | `prefers-reduced-motion: reduce` |
|---|---|---|
| **Senas** (`scratchpad/lp1-backup/style.css.bak`) | taško poslinkis nuo kortelės krašto: 102 / 186 px | **110 / 194 px** ← taškas nušoka lygiai 8px abiem ašim |
| **Dabartinis** | 102 / 186 px | **102 / 186 px** ← nejuda |

Klaida buvo reali (ne teorinė) ir dabar jos nebėra. `.lp1-match__online` paliktas tik su `animation:none`.

**Diff prieš atsarginę kopiją — tik ketinti pakeitimai:** `index.html` +12 eilučių (presence juosta prieš
`.lp1-signup__inner`); `style.css` +35 eilutės naujo bloko + reduced-motion selektoriaus skaidymas.
Forma, laukų tvarka, žemėlapio SVG, paletė, `<!-- tracking: lp1_signup_submit -->` — nepaliesti.

**Naujo turinio kontrastas perskaičiuotas iš hex** (ne iš agento skaičių):
`.lp1-presence__label` `#A9C7B8` ant `#16241C` → **8,86:1**; `.lp1-presence__more` `#5EEAD4` ant `#16241C`
→ **10,89:1** (0,82rem smulkus tekstas, riba 4,5:1 — praeina su dideliu margin'u).

**Nauja problema neįvesta:** HTML žymų balansas švarus (0 neuždarytų), 1× `<h1>`, 0 pasikartojančių `id`,
visi laukai su `<label>` (checkbox'ai apgaubti `<label>`), 0 draudžiamų klasių vardų,
horizontalaus scroll nėra nė viename plotyje (žr. §P.4).

---

## §P.2 lp2 — **PRIIMTA**

| QA1 punktas | Būsena | Kaip patikrinta iš naujo |
|---|---|---|
| 1. Per plona vizualinė masė | **IŠTAISYTA** | Avatarai dabar **3 sekcijose**: hero (statinė kortelė + 2 JS), `.steps-zone` (3× 112px low-poly), `.gallery-zone` (10). Ekrano nuotrauka patvirtina, kad 112px avatarai realiai atsiranda ir kortelės nesulūžta |
| 2. Visas hero vizualas priklausė nuo JS | **IŠTAISYTA — patvirtinta naršyklėje** | Renderis su `--disable-javascript`: telefono rėme **matoma pilna pirma kortelė** (avataras + „Eglė, 27“ + „Vilnius“), ne tuščias rėmas |
| 3. `og:image` SVG neveiktų peržiūrose | **IŠTAISYTA** | `og:image` → `…/assets/og-image.png` + `og:image:width` 1200 / `og:image:height` 630. Failo kilmė patikrinta §P.0 |
| 4. `scroll-behavior` neišjungtas su reduced-motion | **IŠTAISYTA** | `style.css:21` — `@media(prefers-reduced-motion:reduce){ html{ scroll-behavior:auto; } }` |

**Regresijos rizika, kurią tikrinau atskirai:** ar statinė HTML kortelė nepasidubliuoja, kai paleidžia JS.
**Ne** — `app.js:38` naudoja `stage.innerHTML = html`, t. y. perrašo visą turinį; statinė kortelė yra
struktūriškai identiška `renderStage()` generuojamai `queue[0]` (`avatar--rose`, „Eglė, 27“, „Vilnius“),
tad perjungimas nematomas. `<symbol id="lowpoly-bust">` yra `index.html:62`, t. y. **prieš** kortelę
(`:116`) — `<use>` išsisprendžia. **`app.js` diff prieš atsarginę kopiją — tuščias**, swipe mechanika
nepaliesta (tai patvirtinau pats, ne pagal ataskaitą).

**CSS specifiškumo patikra:** `.step-avatar` (112px) niekur nekonfliktuoja su `.profile-card .avatar`
(56%) — pastarasis yra descendant selektorius ir veikia tik dėkle.

**Kontrastas perskaičiuotas iš hex:** `--text-muted #475569` ant `#FFFFFF` → 7,58:1;
`--accent-text #BE123C` (nauji `.step-tag`) ant `#FFFFFF` → 6,29:1, ant `--bg #FFF1F2` → 5,72:1;
baltas ant `--accent #E11D48` → 4,70:1 (kaip ir anksčiau — vos, bet praeina);
globalus `:focus-visible` outline `#BE123C` ant `#FFF1F2` → 5,72:1.

---

## §P.3 lp3 — **PRIIMTA**

| QA1 punktas | Būsena | Kaip patikrinta iš naujo |
|---|---|---|
| 1. 6 draudžiami klasių vardai | **IŠTAISYTA — patvirtinta grep'u** | Programiškai ištraukiau **visas** `class="…"` reikšmes iš HTML ir **visus** `.klasė` selektorius iš CSS ir sutikrinau su §4 sąrašu: `container · hero · btn · btn-primary · section · footer-links · wrapper · card · grid · row · col · cta · feature · testimonial` — **0 sutapimų** HTML'e ir 0 CSS'e. Iš viso pervadinta 13 vardų |
| 2. Draudžiama antraštė „Kaip tai veikia“ | **IŠTAISYTA** | `<h2 id="kaip-veikia-h2">Registracija, naršymas, pirmas pokalbis</h2>` — nėra §3 sąraše, nėra „Nuo X iki Y“ formos |
| 3. WCAG lūžis ant kortelių | **IŠTAISYTA — perskaičiuota iš hex** | Žr. lentelę žemiau |
| 4. Avatarai tik vienoje sekcijoje | **IŠTAISYTA** | Vizualinis raštas dabar **3 sekcijose**: `#tinklelis` (16 kortelių), `#kaip-veikia` (3 naujos 72px duotone figūros), `#registracija` (1). Ekrano nuotraukos patvirtina |
| Smulkmena: `defer` | **IŠTAISYTA** | `<script src="assets/app.js" defer>` |

**Kontrastas — `.lp3-avatar-meta`, perskaičiuotas iš hex (alfa sudėta su kortelės fonu):**

| Kortelės fonas | Buvo (gradientas, alfa ≈ 0,36 ties teksto centru) | Dabar (vientisas `rgba(24,24,27,0.82)`) |
|---|---|---|
| `#F4F4F5` | **2,46:1** ← lūžis | sudėta `#404042` → **10,34:1** |
| `#FAFAF9` | **2,35:1** ← lūžis | sudėta `#414143` → **10,18:1** |

(Agentas rašė 10,23 / 10,40 — apsivertė, kuris fonas kuris; skirtumas nereikšmingas, riba viršyta ~2,3×.)
Vizualiai patvirtinta ekrano nuotrauka: po kiekviena kortele — vientisa tamsi juosta, „21 m. · Vilnius“
tipo tekstas aiškiai įskaitomas. Šalutinis efektas: juosta dabar nepermatoma ir nukerpa apatinį kelių
figūrų kraštą (pvz. trikampio smaigalį). Vertinu kaip **priimtiną kompromisą** — įskaitomumas svarbiau,
figūros lieka atpažįstamos.

**Kitos lp3 poros (visos praeina):** tekstas 16,96:1 / 16,12:1; muted 10,00:1 / 9,50:1;
akcentas `#7C3AED` 5,46:1 / 5,18:1; baltas ant akcento 5,70:1; hover `#6D28D9` 7,10:1;
klaidos `#B91C1C` 6,19:1; statuso blokai 7,29:1 ir 7,60:1.

**Ar pervadinimas nieko nesulaužė (didžiausia regresijos rizika partijoje):** patikrinau abipusiai —
(a) **kiekviena** HTML klasė turi atitinkamą CSS selektorių: **0 „našlaičių“**;
(b) CSS selektorių be panaudojimo HTML/JS: tik `visually-hidden` (buvo ir anksčiau);
(c) JS diff rodo **tik** vardų keitimus (`.lp3-avatar-card`, `.lp3-chip`, `.lp3-field`, `lp3-form-status`) —
filtravimo pagal amžių/miestą logika, formos validacija, gimimo metų generavimas eilutė į eilutę identiški;
(d) naršyklėje užkrauta — filtrų chip'ai atsivaizduoja aktyvia `aria-pressed="true"` būsena, tinklelis
rodo 16 kortelių, „Rodoma 16 anketų pavyzdžių“ statusas veikia.
Sąmoningai NEPERVADINTI ir tai teisinga: `btn-ghost`, `btn-sm`, `section-head`, `section-alt`, `hero-lede`,
`hero-actions`, `hero-trust`, `faq-item` — tai ne §4 sąrašo įrašai, o CSS kintamasis `--container` nėra klasė.

---

## §P.4 Techninis pagrindas — išmatuota realioje naršyklėje (ne iš CSS matematikos)

Chrome headless + CDP `Emulation.setDeviceMetricsOverride`, tikras viewport'as (ne macOS 500px minimumas):

| Variantas | 360px | 768px | 1280px | 1440px |
|---|---|---|---|---|
| lp1 | scrollW 360 ✔ | 768 ✔ | 1280 ✔ | 1440 ✔ |
| lp2 | scrollW 360 ✔ | 768 ✔ | 1280 ✔ | 1440 ✔ |
| lp3 | scrollW 360 ✔ | 768 ✔ | 1280 ✔ | 1440 ✔ |

**Horizontalaus scroll nėra nė viename variante nė viename plotyje.** Papildomai išvardinau kiekvieną
elementą, kertantį viewport'o kraštą ir **neapgaubtą** `overflow-x:auto/scroll/hidden` protėvio —
**tuščias sąrašas visuose trijuose**. (Anksčiau matyti „kyšantys“ elementai — lp2 `avatar-strip` ir
lp3 filtrų juosta — yra sąmoningai slenkamos juostos, ne klaida.)

Kita: HTML žymų balansas — 0 neuždarytų visuose trijuose; 1× `<h1>`; 0 dublikuotų `id`;
visi laukai su `<label>` (radio/checkbox — apgaubiantis `<label>`, `<fieldset>`+`<legend>` grupėms);
`lang="lt"`; `canonical` → `vyrukambarys.lt/lp1|lp2|lp3`; JSON-LD `Organization`+`Service`+`PeopleAudience`
visuose; CSS 17,3 / 12,1 / 13,8 KB (limitas 60 KB); `:focus-visible` yra visuose (lp2 — globali taisyklė);
`prefers-reduced-motion` blokai: 1 / 3 / 6; nauji dekoratyvūs SVG — visi su `aria-hidden="true"`.

**Trackingo stekas nepaliestas.** Visi `<!-- tracking: … -->` žymekliai savo vietose ir nepakitę
(lp1: `lp1_signup_submit`, `lp1_signup_success`; lp2: `swipe_dislike`, `swipe_like`,
`registration_submit`, `registration_success`; lp3: `lead_form_submit`, `lead_form_success`).
Realaus GTM / Meta Pixel / OpenAI pixel kodo ar ID šiuose failuose nėra ir nebuvo — nieko pridėta,
nieko pašalinta. Ši patikra buvo tik skaitymo (produkciniai failai nekeisti).

---

## §P.5 Kryžminė patikra — kas užsidarė, kas ne

**Užsidarė:**
1. **Klasių vardų sutapimai lp2↔lp3** (`faq-list`, `field-error`, `form-status`) — **išspręsta**.
   Perskaičiavau visas tris poras: lp1∩lp2 = **0**, lp1∩lp3 = **0**, lp2∩lp3 = **0** bendrų klasių vardų.
   Nereikėjo net lp2 prefikso — užteko lp3 pervadinimo.
2. **lp3 „Kaip tai veikia“** — pakeista į „Registracija, naršymas, pirmas pokalbis“; nei „Nuo X iki Y“,
   nei §3 įrašas.

**LIEKA ATVIRA — vienintelis nebaigtas punktas:**

5. **Ta pati antraštės konstrukcija lp1↔lp2 (§6 pažeidimas).**
   `lp1/index.html:219` — `<h2>Nuo žymeklio iki pokalbio</h2>`
   `lp2/index.html:139` — `<h2>Nuo kortelės iki pokalbio</h2>`
   QA1 aiškiai nurodė „vienas iš dviejų turi būti perrašytas“ — nė vienas taisymo agentas šito nepaėmė,
   nes punktas buvo kryžminės patikros, o ne varianto skyriuje. Tai **vienos eilutės** teksto keitimas.
   **Rekomendacija:** keisti **lp1** (lp2 „kortelė“ yra jos krypties šerdis), pvz.
   `<h2>Trys žingsniai žemėlapyje</h2>` arba `<h2>Ką matai atidaręs žymeklį</h2>`.
   **Šito užtenka — pakartotinio audito nereikia ir lp4–lp6 jis nestabdo.**

**Palikta sąmoningai (kaip ir QA1):**
- Identiška 18+ sutikimo formuluotė visuose trijuose — teisinė formuluotė, perrašinėjimas didina teisinę
  riziką ir nekeičia konversijų. 4-gramų analizė rodo, kad **beveik visi** likę sutapimai
  (lp1↔lp2 18 vnt., lp1↔lp3 14, lp2↔lp3 8) yra būtent ši formuluotė + poraštės teisinės nuorodos
  + miestų sąrašas („Vilnius Kaunas Klaipėda Šiauliai Panevėžys“) — faktinis turinys, ne stilius.
  Nė vienas jų neatsirado per šį taisymo ciklą.
- lp3 `·` meta eilutėse (16 vnt.) — QA1 tai buvo rekomendacija, ne blokatorius; formaliai §5 draudžia
  tik „A · B · C“ trijų dalių eilutes, o čia visur dvi dalys.
- „Sukurk X“ CTA lp1/lp2 — QA1 įvardijo kaip ne kritinį.

**Paletės, šriftai, avatarų sistemos** — po taisymų nepakitę ir toliau visiškai atskirti
(tamsiai žalia+mėtinė / rožinė+raudona / beveik balta+violetinė; Manrope+Inter / Sora+Nunito Sans /
Plus Jakarta Sans+Inter; gradiento dėmė / low-poly / duotone geometrija).
Draudžiamų §7.1 hex reikšmių — 0 visuose trijuose; Bricolage Grotesque / Archivo — nenaudojami.

---

## §P.6 Ne verdiktas, bet verta žinoti (nešalinta, nes ne partijos reikalavimas)

1. **`og:image` lp1 ir lp3 vis dar nėra.** Kaip ir QA1, į verdiktą neįskaičiuoju — statybos promptas to
   nereikalavo. Bet lp2 dabar turi veikiantį pavyzdį: SVG → Chrome headless → 1200×630 PNG, be interneto,
   be naujos grafikos. **Siūlau tą patį pritaikyti lp1/lp3 ir įrašyti į lp4–lp10 statybos promptą.**
2. **lp1 registracijos sekcijos tuščia kairė kolona (desktop).** `.lp1-signup__inner` yra
   `grid-template-columns: 1fr 1.3fr`; kairėje tik `<h2>` + vienas sakinys, dešinėje — visa forma,
   todėl ties 1280px lieka ~700px tuščios kairės. **Buvo ir prieš taisymus** (ne regresija, todėl verdikto
   nekeičia), bet tai natūrali vieta trečiam avatarų blokui, jei Jonas norės dar sustiprinti lp1.
3. **Sisteminė QA1 rekomendacija galioja.** Po taisymų vizualinis raštas pasiskirstęs per 2 / 3 / 3
   sekcijas — kriterijus įvykdytas, bet pati taisyklė („bent 3 sekcijos, viena iš jų — žemiau puslapio
   vidurio; forma ir bent viena pasitikėjimo sekcija negali būti grynas tekstas“) į `06-statyba-v2.md`
   vis dar neįrašyta. **Jei ji būtų buvusi prompte, šio taisymo ciklo nebūtų reikėję.** Įrašyti prieš lp4.
