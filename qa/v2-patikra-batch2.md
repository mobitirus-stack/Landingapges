# v2 partija 2 (lp4, lp5, lp6) — nepriklausoma patikra

Vertintojas: atskiras QA agentas (Opus, aukštas effort), nepriklausomas nuo statytojų.
`logs/v2-build-lp4/5/6.done.md` ir `VARIANT.md` savikritikos **netikrintos aklai** — kiekvienas jų
teiginys perskaičiuotas arba peržiūrėtas iš naujo:

- kontrastas — perskaičiuotas iš hex WCAG 2.1 formule (61 pora),
- klasių vardai, antraštės, 4-gramos, vardai, hex reikšmės — mechanine token'ų paieška per visus
  **šešis** variantus (lp1–lp6),
- layout, `overflow`, `prefers-reduced-motion`, elgsena be JS ir **avatarų atvaizdavimas** —
  išmatuota realioje naršyklėje (Chrome headless per CDP, `Emulation.setDeviceMetricsOverride`,
  `--blink-settings=scriptEnabled=false`, ekrano nuotraukos), ne iš CSS spėliojant.

**PARTIJOS VERDIKTAS: NEPRIIMTA.** 0 iš 3. Kita partija (lp7–lp9) nepradedama.

Svarbi gera žinia: **kritinė riba nepažeista nė viename variante** — realių / atsisiųstų / stock
nuotraukų nėra jokių (§0). Nė vienas variantas nereikalauja statybos iš naujo; lp4 taisymai —
keturios eilutės teksto, lp5 ir lp6 — po vieną realų techninį defektą plius teksto pataisos.

---

## §0. Bendra patikra — realių nuotraukų NĖRA (patvirtinta)

| Patikra | lp4 | lp5 | lp6 |
|---|---|---|---|
| `<img` žymos | 0 | 0 | 0 |
| `url(http…)` fone | 0 | 0 | 0 |
| `base64` | 0 | 0 | 0 |
| `data:image/*` | 1 (SVG favicon) | 2 (SVG favicon + `select` rodyklė) | 1 (SVG favicon) |
| `.jpg/.jpeg/.webp/.gif/.avif` | 0 | 0 | 0 |
| `.png` | 1 — `og-image.png` | 1 — `og-image.png` | 1 — `og-image.png` |
| Išorinės nuorodos | tik `fonts.googleapis.com` / `fonts.gstatic.com` / `schema.org` / `vyrukambarys.lt` | tas pats | tas pats |

**Visi trys `og-image.png` patikrinti atskirai** (kaip lp2 batch1-e): visi trys —
`1200 x 630, 8-bit/color RGB, non-interlaced`, chunk'ai **tik `IHDR` + `IDAT` + `IEND`**, jokių
`tEXt`/`iTXt`/EXIF/autorystės metaduomenų, kokius palieka fotoaparatas ar stock biblioteka.
`xattr` — švarūs. Tai lokalūs SVG kompozicijų rasterizavimai, ne atsisiųsti vaizdai.
**Kliento riba „jokių realių nuotraukų" išlaikyta 100 %.**

Visi „nariai" — generuoti: lp4 — CSS gradiento apskritimai su monogramomis (be veido);
lp5 — 9 inline SVG `<symbol>` siluetai (vientisas kontūras, be veido bruožų);
lp6 — 10 inline SVG `<symbol>` flat veidų (apskritimas + 2 taškai + linija).

**Trackingo stekas.** Nė viename iš trijų failų nėra realaus GTM / Meta Pixel / OpenAI pixel kodo ar
ID — tik `<!-- tracking: … -->` žymos (lp4: `lp4_hero_cta_click`, `lp4_signup_submit`,
`lp4_faq_toggle`, `lp4_signup_success`; lp5: `lp5_hero_cta_click`, `lp5_form_submit`,
`lp5_form_success`; lp6: `lp6_view`, `lp6_signup_submit`, `lp6_signup_success`).
**Ši patikra buvo tik skaitymo — produkciniai failai nekeisti, nieko nepridėta ir nepašalinta.**

### Techninis pagrindas — išmatuota naršyklėje

| | lp4 | lp5 | lp6 |
|---|---|---|---|
| `scrollWidth` 360 / 768 / 1024 / 1440 | 360/768/1024/1440 ✔ | 360/768/1024/1440 ✔ | 360/768/1024/1440 ✔ |
| Elementai, kertantys viewport'ą be `overflow` protėvio | nėra | nėra | nėra |
| `<h1>` | 1 | 1 | 1 |
| Neuždarytos / neteisingai uždarytos žymos | 0 | 0 | 0 |
| Pasikartojantys `id` | 0 | 0 | 0 |
| Laukai be `<label>` | 0 (checkbox apgaubtas `<label>`) | 0 | 0 |
| CSS dydis (limitas 60 KB) | 20,3 KB | 19,4 KB | 15,4 KB |
| `canonical` | `vyrukambarys.lt/lp4` ✔ | `/lp5` ✔ | `/lp6` ✔ |
| JSON-LD | Organization + Service + PeopleAudience ✔ | + Offer ✔ | `@graph` Organization + Service ✔ |
| `og:image` PNG 1200×630 + width/height | ✔ | ✔ (+ `og:image:alt`) | ✔ |
| `:focus-visible` | globali taisyklė ✔ | globali ✔ | globali ✔ |
| `prefers-reduced-motion` + `html{scroll-behavior:auto}` | ✔ | ✔ | ✔ |
| Dekoratyvūs SVG `aria-hidden` | ✔ (informaciniai sparkline'ai turi `role="img"`+`<title>`) | ✔ | ✔ |

**Draudžiami klasių vardai (§4): 0 sutapimų visuose trijuose.** Programiškai ištraukiau visas
`class="…"` reikšmes ir visus `.klasė` selektorius ir sutikrinau su sąrašu
(`hero · container · wrapper · btn · btn-primary · btn-secondary · card · section · section-title ·
grid · row · col · cta · feature · feature-card · testimonial · footer-links`) — nulis.
**Kryžminiai klasių vardų sutapimai tarp visų 6 variantų: 0** (visos poros patikrintos).

**Kontrastas — perskaičiuotas iš hex, ne iš agentų skaičių.** Visos teksto poros visuose trijuose
variantuose praeina 4.5:1. Siauriausios vietos:
lp4 — `#96A3BF` ant `#1A2333` **6,22:1**; avataro rašalas `#04121A` ant `#3B82F6` **5,16:1**.
lp5 — `#A89A82` ant `#241F1A` **5,92:1**; `#F87171` ant `#241F1A` **5,90:1**; auksas
`#D4AF37` ant `#0C0A09` **9,39:1** (auksas ant juodo buvo pagrindinė rizika — praeina su atsarga).
lp6 — `#15803D` ant `#DCFCE7` **4,57:1**; `#B45309` ant `#FEF3C7` **4,51:1** (abi vos praeina,
bet praeina). Patvirtinu lp6 VARIANT.md §5 sprendimą: šviesusis `#16A34A` (3,30:1) **niekur**
nenaudojamas kaip teksto ar mygtuko fono spalva — tik avatarų fone ir varnelės ikonoje
(patikrinta grep'u: `var(--lp6-accent)` CSS'e nenaudojamas nė karto).

**§4 vizualinio pasiskirstymo reikalavimas — įvykdytas visuose trijuose** (išmatuota naršyklėje
ties 1280px, sekcijos ribos ir puslapio vidurys apskaičiuoti iš `scrollHeight`):

| | Sekcijų su realiu vizualu | Avatarų sistema `<section>`'ų | Po puslapio viduriu | Forma | Pasitikėjimo sekcija |
|---|---|---|---|---|---|
| lp4 | 6 iš 7 (86 %) | 6 | `#registracija` (top 2588 / vidurys 2064) ✔ | 6 avatarai ✔ | 7 vizualai ✔ |
| lp5 | 5 iš 7 (71 %) | 5 | `lp5-patikra` (2635) ir `lp5-atrakinimas` (3712 / vidurys 2440) ✔ | prieš/po pora ✔ | 3 siluetai ✔ |
| lp6 | 5 iš 6 (83 %) | 4 | `lp6-registracija` (1992 / vidurys 1770) ✔ | 5 avatarai ✔ | 14 vizualų ✔ |

Sisteminė batch1 problema (vizualas tik viršuje) **šioje partijoje nepasikartojo** — visuose
trijuose vizualinis raštas tęsiasi iki formos. Tai pagrindinis partijos laimėjimas.

---

## lp4 — „Vyrų kambarys" / Gyvo aktyvumo juosta → **PERDARYTI** (mažiausias taisymas partijoje)

Techniškai švariausias partijos variantas ir vienintelis, kuriame neradau nė vieno kodo defekto.
Live-feed juosta, 4 sparkline dashboard'as, patikrintų narių juosta, miestų sąrašas su mini
grafikais, „aktyvūs dabar" juosta prie formos — vizualas realiai tęsiasi per visą scroll'ą.
Hero vizualas **neprikausomas nuo JS** (5 įrašai įrašyti tiesiai į HTML, `index.html:117-156`) —
batch1 lp2 klaida čia nepakartota. `prefers-reduced-motion` išjungia ir feed rotaciją
(`app.js:68`), ir pulsą (`style.css:1145-1149`). Kontrastas — su dideliu atsargos margin'u.

**Kodėl vis dėlto PERDARYTI — 3 teksto pažeidimai, visi vienos eilutės:**

1. **Beveik pažodinis 9 žodžių sutapimas su lp3 (§6 — „bet koks 4+ žodžių sutapimas").**
   `lp4/index.html:219`: „Nuo profilio sukūrimo iki pirmo pokalbio – trys žingsniai, be paslėptų
   mokesčių ar spaudimo."
   `lp3/index.html:307`: „Nuo anketos sukūrimo iki pirmo pokalbio — trys žingsniai, be paslėptų
   mokesčių."
   Sutampa **„sukūrimo iki pirmo pokalbio … trys žingsniai, be paslėptų mokesčių"**. Tai ne teisinė
   formuluotė ir ne faktinis turinys (kaip 18+ sutikimas ar miestų sąrašas, kuriuos batch1
   sąmoningai paliko) — tai marketinginis sakinys, kurį reikia perrašyti.

2. **`lp4/index.html:473` `<h2>Klausimai prieš registruojantis</h2>` — pažodžiui identiška
   lp6 `index.html:421` antraštei.** Du tos pačios partijos variantai turi tą pačią sekcijos
   antraštę (§6, paskutinis punktas). Vienas iš dviejų turi būti perrašytas; rekomenduoju keisti
   **lp6**, nes lp4 turi labiau išplėtotą DUK įvadą — bet jei lengviau, keisk lp4.

3. **Pavyzdiniai vardai — 6 iš 12 paimti iš lp2, o `VARIANT.md` teigia priešingai.**
   lp4 naudoja Ugnė, Gabrielė, Aistė, Ieva, Simona, Karolina (`index.html:120-152`, `:311-331`,
   `:346-378`) — **visi šeši jau yra lp2** (`lp2/assets/app.js` ir `lp2/index.html` kortelėse).
   `lp4/VARIANT.md:132-133` rašo: „Nekartojami lp1 („Rūta") / lp2 („Eglė") pavyzdiniai vardai —
   naudojamas visiškai kitas 12 vardų sąrašas." Tai **neteisinga savikritika** — vardų sąrašai
   persidengia per pusę. Pati diferenciacija nėra kritinė (lankytojas mato tik vieną variantą), bet
   klaidinga ataskaita yra, todėl fiksuoju.
   Pakeisti pakanka 6 vardų + jų monogramų (`lp4-avatar--N` klasės nesikeičia).

**Nėra blokatorius, bet Jonas turi žinoti — „ką tik prisijungė" juosta ir §9.3.**
`config/draudziamu-zodziu-sarasas.md` §9.4 draudžia „ką tik užsiregistravo (netikras gyvo veiksmo
pranešimas)", o `config/vizualines-kryptys-v2.md` lp4 kryptis **tiesiogiai nurodo** tokį raštą
(„X ką tik prisijungė", „Y ir Z susirašinėja"). Statytojas konfliktą sprendė sąžiningai:
juosta pažymėta „Gyvo aktyvumo juosta · pavyzdys" + ženkliuku „iliustracija" (`index.html:113-114`),
statistika įvardinta kaip „pavyzdinis rodinys" (`:166`), o DUK klausimas tiesiai atsako „Ne"
(`:510-514`). **Tai vertinu kaip priimtiną** ir į verdiktą neįskaičiuoju.

Vienintelė vieta, kur atskleidimas nusilpsta: `app.js:42-47, 69-77` kas 6 s įterpia naują įrašą su
laiko žyma **„ką tik"**. Statinis pažymėtas sąrašas yra iliustracija; besisukantis srautas su „ką tik"
jau **elgiasi** kaip realaus laiko pranešimas. Rekomenduoju vieną iš dviejų (ne blokuoja):
(a) rotacijai palikti tas pačias reliatyvias žymas („prieš 3 min"), arba (b) rotaciją išjungti visai —
statiniai 5 įrašai vizualo neprarastų.

**Smulkmenos (ne verdiktas):** avatarų gradientai 1↔2, 3↔4, 5↔6, 8↔9, 10↔11 yra tos pačios spalvų
poros apversta kryptimi (`style.css:281-292`) — ties 34–60px tai nematoma, tad realiai yra ~7 spalvų
deriniai, o ne 12. Skiriamasis požymis čia yra **monograma**, ir jų iš tiesų 12 unikalių — kryptis
būtent to ir prašo („monogramos apskritimuose"), todėl kriterijų laikau įvykdytu.

**Užduotis taisymui (apimtis: ~10 eilučių):**
- `index.html:219` — perrašyti sakinį taip, kad su lp3:307 nesutaptų daugiau kaip 3 žodžiai iš eilės.
- `index.html:473` — suderinti su lp6 (vienas iš dviejų gauna kitą antraštę).
- Pakeisti 6 su lp2 sutampančius vardus ir atitinkamas monogramas; ištaisyti `VARIANT.md:132-133`
  teiginį, kad jis atitiktų tikrovę.
- (Rekomendacija) `app.js:43-46` — „ką tik" pakeisti reliatyviomis žymomis arba išjungti rotaciją.

---

## lp5 — „Aukso raktas" / VIP atrakinimas → **PERDARYTI**

Koncepcija stipri ir vizualiai brandžiausia partijoje: užrakinti siluetai, VIP piliulės, narystės
kortelės su kainomis (+ `Offer` JSON-LD), prieš/po pora prie formos. **Batch1 nurodytas veidrodžio
bug'as realiai ištaisytas** — patikrinau `<symbol>` `<path>`/`<circle>` duomenis, ne klasių skaičių:
9 siluetai turi iš esmės skirtingą geometriją (galvos spindulys 20–32, pečių plotis 2–118, tiesios
linijos vs lankai vs arc), o `lp5-avatar--mirror` dabar uždėtas tik ant **asimetriško** `bust-f`,
kur veidrodis realiai keičia vaizdą. Kontrastas praeina visur su atsarga.

**Kodėl PERDARYTI — vienas realus grafikos defektas ir trys teksto pažeidimai:**

1. **Du iš devynių siluetų atvaizduojami sulūžę — galva atskirta nuo liemens.**
   Ne teorija: atvaizdavau visus 9 `<symbol>` po 110px realioje naršyklėje.
   - **`lp5-bust-c` (`index.html:96-99`)** — galva `cy=40 r=32` baigiasi ties `y=72`, liemuo
     prasideda ties `y=84` (`M34,140 L34,120 C34,100 44,84 60,84`). **12 vienetų tarpas**, be to
     galva (28–92) platesnė už pečius (34–86). Atrodo kaip plaukiojantis rutulys virš atskiro
     stulpelio, ne kaip siluetas.
   - **`lp5-bust-e` (`index.html:104-107`)** — galva `cy=28 r=22` baigiasi ties `y=50`, o lankas
     `A54,58 0 0 1` viršūnę turi ties `y=82`. **32 vienetų tarpas** — dar blogiau.

   Ir abu naudojami **neužblurinti, konversijai svarbiausiose vietose**:
   `bust-e` — „Auksinė narystė" kortelėje (`index.html:283`, 84px),
   `bust-c` — patikros sekcijoje „Patvirtinta" kortelėje (`index.html:349`, 76px).
   Variante, kurio visas pozicionavimas yra „premium / VIP", sulūžusi grafika ties kaina ir ties
   patikros ženklu kainuoja konversijų.
   Taisymas trivialus: `bust-c` liemens pradžią kelti iš `y=84` į ~`y=66` ir praplėsti iki ~26–94;
   `bust-e` — arba `ry` iš 58 į ~92, arba galvą nuleisti iki `cy≈52`.

2. **„Siena" — 4 iš 8 kortelių praranda siluetą po mozaika.**
   `style.css:268-278` `--mosaic` (du `repeating-linear-gradient` po `rgba(12,10,9,.55)` +
   `mix-blend-mode: overlay`) uždėtas ant `blur(2.6px)` (`style.css:264-267`) kortelėse
   `index.html:222, 234, 247, 260` (siluetai a, c, e, g). Ekrano nuotraukoje šios keturios atrodo
   kaip **vienodi šachmatiniai dėmių kvadratai** — formos neįmanoma atskirti. Likusios keturios
   (b, d, f, h) yra legibilios ir tikrai skirtingos.
   `VARIANT.md:113` teigia „siena (a, b, c, d, e, f, g, h — visos 8 skirtingos vienoje sekcijoje,
   be pasikartojimo)" — formaliai tiesa kode, bet **realiai matomos tik 4**. Priėmimo kriterijus
   („bent 8-12 **skirtingų** avatarų") tenkinamas tik jei skirtumas matomas.
   Taisymas: mozaiką palikti ne daugiau kaip 2 kortelėms arba sumažinti alfa iki ~0,3.
   (Hero juosta, kur yra tik blur be mozaikos, veikia puikiai — ten visi 4 siluetai atskiriami.)

3. **`index.html:218` — neteisingas teiginys apie iliustracijas.**
   „Kiekvienas siluetas apačioje **priklauso realiam, amžių patvirtinusiam nariui**."
   Tai iliustracijos, ne nariai — tą patį sako pats `VARIANT.md:57-59` („statinė iliustracija
   … fiksuoti pavyzdiniai profiliai"). Puslapio tekstas prieštarauja savo paties dokumentacijai ir
   patenka į §9.4 („netikras socialinis įrodymas"). Mokamoje reklamoje tai ne stiliaus, o
   vartotojų teisių klausimas. Vieno sakinio pataisa (pvz. „Kiekvienas siluetas žymi anketos tipą,
   kurį pamatysi atrakinęs — pavyzdinis rodinys.").

4. **`index.html:369` `<h2>Dažniausiai užduodami klausimai</h2>` — §3 draudžiamas bendrinis
   pavadinimas** („DUK kaip antraštė be konteksto"). lp1 ir lp3 tą pačią problemą išsprendė
   pridėdami kontekstą („…apie žemėlapį ir paskyrą", „…apie Randu"); lp5 to nepadarė.

5. **`index.html:315` „Trys žingsniai iki atrakinimo" ↔ lp6 `index.html:233` „Trys žingsniai iki
   pirmo pokalbio"** — ta pati antraštės konstrukcija dviejuose tos pačios partijos variantuose
   (§6). Vienas iš dviejų turi būti perrašytas (žr. ir lp6 §4 — ten ta pati frazė dar ir kartoja
   lp3/lp4 kūno tekstą, todėl taisyti logiškiau lp6).

**Patikrinta ir NĖRA problema (kad taisymo agentas nešvaistytų laiko):**
- `body { overflow-x: hidden }` (`style.css:43`) — nuėmiau jį naršyklėje ir pamatavau iš naujo:
  po juo slepiasi **tik** `-999px` paslinkta `.lp5-skip` nuoroda. Realaus layout overflow nėra nė
  viename plotyje. Palikti galima.
- Vienas orkestruotas judesys (`lp5-shimmer`, `animation-iteration-count` numatytas 1,
  `style.css:316-323`) + funkcinis ženkliuko pulsas — atitinka taisyklę; abu išjungiami
  reduced-motion (`style.css:728-729`).
- Forma: visi laukai su `<label for>`, sėkmės būsena keičia `form.hidden` (`app.js:141-142`) —
  veikia, be dublikatų.

**Smulkmena (ne verdiktas):** `index.html:200` „Klaipėda, 24 m." hero kortelėje persilaužia į dvi
eilutes ir trečios kortelės antraštė nusileidžia žemiau kitų. Kosmetika.

**Užduotis taisymui:**
- Pertvarkyti `lp5-bust-c` ir `lp5-bust-e` `<path>` duomenis taip, kad galva ir liemuo liestųsi;
  po pakeitimo **atvaizduoti ir pažiūrėti**, ne tik perskaičiuoti koordinates.
- `style.css` / `index.html` — palikti `--mosaic` daugiausia 2 kortelėms arba sumažinti dangos alfa.
- `index.html:218` — perrašyti sakinį, kad neteigtų, jog siluetai yra realūs nariai.
- `index.html:369` — pridėti kontekstą prie DUK antraštės.
- `index.html:315` arba lp6:233 — panaikinti „Trys žingsniai iki X" dubliavimą.

---

## lp6 — „Vyrų kambarys" / Pokalbio peržiūra → **PERDARYTI** (vienas techninis blokatorius)

Šviesiausias ir lengviausias partijos variantas (CSS 15,4 KB), telefono makete realus chat srautas su
„Rašo…" indikatoriumi, sėkmės kortelės su avatarų poromis, patikros juosta su 6 varnelėmis,
avatarų eilutė prie formos. Vizualas pasiskirstęs gerai (4 sekcijos, forma ir pasitikėjimo sekcija
abi su vizualu). Kontrastas visur praeina.

**Kodėl PERDARYTI:**

1. **BLOKATORIUS: be JavaScript hero pokalbis yra nematomas — tiksliai ta pati klaida, dėl kurios
   batch1 atmetė lp2.**
   `style.css:288-292` visiems `.lp6-bubble` ir `.lp6-typing` uždeda `opacity: 0`, o `opacity: 1`
   grąžina tik `.lp6-phone--played` klasė (`style.css:293-298`), kurią prideda
   `app.js:14-24` per `IntersectionObserver`.
   **Išmatuota realioje naršyklėje** (`--blink-settings=scriptEnabled=false`, 1280px): visi 5
   burbulai lieka `opacity: 0`. Ekrano nuotrauka rodo **tuščią telefono rėmą su vien antrašte
   „Eglė, 29"** — viso varianto koncepcija („pokalbio peržiūra") dingsta. Su JS — `opacity: 1`,
   viskas gerai.
   Mokamoje reklamoje tai reiškia, kad kiekvienas lankytojas, kuriam JS neužsikrovė ar buvo
   užblokuotas, mato tuščią dėžę vietoje pagrindinio vizualo.
   **Taisymas:** `lp6-phone--played` įrašyti tiesiai į `index.html:188` (`class="lp6-phone
   lp6-phone--played"`), o `app.js` prieš grojant animaciją klasę nuimti ir grąžinti — tada be JS
   puslapis rodo pilną pokalbį, o su JS animacija lieka.
   (Reduced-motion atšaka jau sutvarkyta teisingai — `style.css:559-563` + `app.js:9-10`.)

2. **Du neteisingi teiginiai apie iliustracijas (§9.4).**
   - `index.html:324`: „**Realūs žmonės**, patvirtintos anketos – kiekviena peržiūrima prieš
     patenkant į naršymą." — parašyta tiesiai po 6 iliustruotų avatarų juosta su žaliais patikros
     ženkliukais (`:299-323`). Skaitytojui tai teigia, kad matomi „žmonės" yra realūs nariai.
   - `index.html:356`: „**Šie žmonės jau naršo** Vyrų kambaryje." — po 5 iliustruotų avatarų eilute
     prie formos (`:349-355`).
   Kitur lp6 atskleidžia sąžiningai (`:262` „iliustracinės situacijos, ne konkrečių narių citatos";
   DUK `:425-426` tiesiai sako „Ne, tai iliustracinis pavyzdys") — todėl šios dvi eilutės tiesiog
   prasilenkė su paties varianto standartu. Abi vienos eilutės pataisos.

3. **`index.html:421` `<h2>Klausimai prieš registruojantis</h2>` — pažodžiui identiška
   lp4 `index.html:473`.** Žr. lp4 §2; vieną iš dviejų reikia perrašyti.

4. **`index.html:233` „Trys žingsniai iki pirmo pokalbio" — trigubas sutapimas.**
   Kartoja lp3 `index.html:307` ir lp4 `index.html:219` kūno tekstą („…iki pirmo pokalbio — trys
   žingsniai…") **ir** susiduria su lp5 `index.html:315` „Trys žingsniai iki atrakinimo"
   konstrukcija. Iš visų trijų šis yra labiausiai keistinas.

5. **Personažai perimti iš lp1 vienas prie vieno.**
   `index.html:194` — „**Eglė, 29**"; `lp1/index.html:209` — „**Eglė, 29**". Tas pats vardas, tas
   pats amžius, abu Vilniuje. Be to, lp6 sėkmės istorijose (`:270, :278, :286`) — **Rūta**, **Tomas**,
   **Giedrė**, **Aistė**, o visi keturi yra lp1 žemėlapio žymekliuose. („Eglė" dar ir lp2:
   „Eglė, 27, Vilnius".) Pakeisti — keturios eilutės.

**Nėra blokatorius, bet fiksuoju kaip netikslią savikritiką:** `VARIANT.md:101` teigia, kad avatarai
skiriasi ir „akių tarpu/dydžiu — nedideli skirtumai, kad avatarai neatrodytų štampuoti". Iš tikrųjų
skirtumai yra 1–2 vienetai iš 64 `viewBox` ir 0,1–0,4 vieneto spindulyje (`index.html:62-121`) —
atvaizduojant 28–40px dydžiu tai **mažiau nei vienas pikselis**, t. y. nematoma. Realiai avatarus
skiria **10 skirtingų veido spalvų ir 3 burnos formos**, ir to pakanka: ekrano nuotraukoje
šešios patikros juostos figūros aiškiai atskiriamos. Statybos promptas „spalvų derinius" mini kaip
teisėtą variacijos būdą, todėl kriterijų laikau įvykdytu — bet `VARIANT.md` teiginį reikėtų
patikslinti, kad kita sesija nepasikliautų neegzistuojančiu skirtumu.

**Patikrinta ir NĖRA problema:** `body { overflow-x: hidden }` (`style.css:38`) — kaip ir lp5, po juo
slepiasi tik `-999px` skip-link; realaus overflow nėra. Formos validacija, `aria-pressed`
slaptažodžio perjungiklis, `role="alert"` klaidos, `role="status"` sėkmė — veikia korektiškai.

**Užduotis taisymui:**
- `index.html:188` + `assets/app.js:7-39` — padaryti, kad be JS pokalbis būtų matomas (žr. §1).
  **Po pataisymo būtinai patikrinti su išjungtu JS, ne tik perskaityti kodą.**
- `index.html:324` ir `:356` — perrašyti taip, kad neteigtų, jog iliustracijos yra realūs žmonės.
- `index.html:421` — nauja DUK antraštė (nesutampanti su lp4:473).
- `index.html:233` — nauja antraštė, nenaudojanti „Trys žingsniai iki X" ir „iki pirmo pokalbio".
- `index.html:194, 204, 270, 278, 286` — pakeisti Eglę / Rūtą / Tomą / Giedrę / Aistę kitais vardais.
- `VARIANT.md:99-101` — patikslinti, kad variacija remiasi spalva ir burnos forma.

---

## Kryžminė patikra — lp4 / lp5 / lp6 tarpusavyje IR su lp1 / lp2 / lp3

**Gerai atskirta (0 pastabų):**

| Kriterijus | Rezultatas |
|---|---|
| Klasių vardai | **0 sutapimų** visose 15 porų tarp lp1…lp6; 0 draudžiamų §4 vardų |
| Paletės | lp4 tamsiai mėlyna + žydra/žalia; lp5 beveik juoda + auksinė; lp6 šviesiai žalia + sodri žalia — tarpusavyje ir su lp1/lp2/lp3 nesikartoja |
| §7.1 draudžiamos hex reikšmės | **0 tikslių sutapimų** visuose trijuose |
| §7.2 Bricolage Grotesque / Archivo | **nenaudojami nė viename** |
| Avatarų sistemos | monogramos / aukso siluetai / flat veidai — trys skirtingi principai, nesutampantys su lp1–lp3 (gradiento dėmė / low-poly / duotone geometrija) |
| Vizualiniai raštai | live-feed + dashboard / užrakinta siena / telefono chat — nesikartoja |

**Atviri kryžminiai punktai (visi įtraukti į variantų užduotis aukščiau):**

1. **Identiška antraštė lp4:473 ↔ lp6:421** — „Klausimai prieš registruojantis".
2. **Ta pati konstrukcija lp5:315 ↔ lp6:233** — „Trys žingsniai iki X".
3. **Kūno teksto sutapimas lp3:307 ↔ lp4:219 ↔ lp6:233** — „…iki pirmo pokalbio … trys žingsniai…".
4. **Vardų persidengimas:** lp4 ∩ lp2 = 6 vardai; lp6 ∩ lp1 = Eglė (dar ir tas pats amžius 29),
   Rūta, Tomas, Giedrė, Aistė.
5. **Šriftas „Karla" naudojamas ir lp5, ir lp6.** Poros skiriasi (Cormorant+Karla vs Poppins+Karla),
   ir tai **nurodyta pačiame `config/vizualines-kryptys-v2.md`** (lp5 ir lp6 eilutės), todėl
   statytojų klaida tai nėra. Bet partijos lygiu tai vienintelis šriftas, pasirodantis dukart.
   **Sprendimą palieku Jonui:** jei norisi visiškos atskirties, lp6 kūno šriftą verta pakeisti
   (pvz. Mulish arba Rubik) — 1 eilutė `<link>` + 1 eilutė CSS. Į verdiktą neįskaičiuoju.

**Sąmoningai palikta (kaip ir batch1):**
- Identiška 18+ sutikimo formuluotė visuose šešiuose — teisinė formuluotė, perrašinėjimas didina
  teisinę riziką ir nekeičia konversijų. 4-gramų analizė patvirtina, kad **didžioji dalis** likusių
  sutapimų (lp4∩lp5 27 vnt., lp4∩lp6 22, lp5∩lp6 24) yra būtent ši formuluotė + poraštės teisinės
  nuorodos + miestų `<option>` sąrašas („Vilnius Kaunas Klaipėda Šiauliai Panevėžys Kitas") —
  faktinis turinys, ne stilius.
- `·` dviejų dalių meta eilutėse (lp5 „Vilnius, 27 m.", lp6 „Rūta ir Tomas · Vilnius") — §5 draudžia
  trijų dalių „A · B · C" eilutes; čia visur dvi dalys.
- lp5 `#0C0A09` kaip beveik juoda — §8/5 („`#0B0B0B` / `#111` vietoje juodos") ribos pakraštys, bet
  spalva **priskirta pačiame `config/vizualines-kryptys-v2.md`** lp5 aprašyme, ir ji šilta, o ne
  violetinio atspalvio kaip draudžiamas `#0d0b13`. Neblokuoju.

---

## Partijos lygio pastabos Jonui

1. **Vizualinio pasiskirstymo taisyklė suveikė.** Šioje partijoje nė vienas variantas nepakartojo
   batch1 problemos („gražus pirmas ekranas + 4 ekranai teksto"). Vizualas pasiekia formą visuose
   trijuose. Jei `06-statyba-v2.md` §4 dar neįrašytas kaip privalomas kriterijus (batch1 §P.6.3),
   šios partijos rezultatas yra argumentas jį įrašyti prieš lp7–lp10.

2. **`og:image` nuo lp4 sutvarkytas.** Visi trys turi realų PNG 1200×630 su `og:image:width/height`.
   lp1 ir lp3 vis dar be `og:image` — jei jie eis į reklamas, verta pritaikyti tą patį būdą
   (SVG → headless Chrome → PNG, be interneto).

3. **Kur statytojų savikritika nesutapo su tikrove** (naudinga kitoms partijoms — tai vietos, kur
   verta reikalauti ekrano nuotraukos, o ne teksto):
   - lp4 `VARIANT.md:132` — teiginys apie nesikartojančius vardus neteisingas.
   - lp5 `VARIANT.md:98` — „Skirtumai TIKRAI matomi (patikrinta realiu render'iu)" galioja hero
     juostai, bet ne mozaikuotai sienos pusei; du siluetai apskritai sulūžę.
   - lp6 `VARIANT.md:101` — „akių tarpo" variacija sub-pikselinė, praktiškai neegzistuoja; be to
     savikritikoje neužfiksuota, kad hero vizualas be JS dingsta.
   **Bendras dėsnis: kiekvienas teiginys „patikrinta render'iu" turi būti paremtas ekrano nuotrauka
   atitinkamame kontekste ir dydyje, o ne tik koordinačių perskaičiavimu.**

4. **Trys teiginiai apie „realius žmones" prie iliustracijų** (lp5:218, lp6:324, lp6:356) — verta
   įrašyti į lp7–lp10 promptą aiškų draudimą: *iliustracijos niekada neaprašomos kaip konkretūs
   realūs nariai; leidžiama tik „pavyzdinis rodinys / iliustracija".* Visi trys variantai tai
   padarė nepriklausomai, tad tai ne atsitiktinumas, o prompto spraga.

---

## Santrauka

| Variantas | Verdiktas | Blokuojančių punktų | Sunkiausias punktas |
|---|---|---|---|
| lp4 | **PERDARYTI** | 3 (visi tekstiniai) | Beveik pažodinis 9 žodžių sutapimas su lp3 (`index.html:219`) |
| lp5 | **PERDARYTI** | 5 (1 grafikos + 1 vizualinis + 3 tekstiniai) | `bust-c` ir `bust-e` atvaizduojami sulūžę, abu neužblurinti kainos ir patikros kortelėse |
| lp6 | **PERDARYTI** | 5 (1 techninis + 4 tekstiniai) | Be JS hero pokalbis nematomas — batch1 lp2 klaidos pakartojimas |

Nė vienas variantas nereikalauja perstatymo. Įvertinta taisymo apimtis: lp4 ~10 eilučių,
lp5 ~20 eilučių (iš jų 2 SVG `<path>`), lp6 ~15 eilučių (iš jų 1 CSS/JS logikos pakeitimas).

---
---

# Pakartotinė patikra po taisymo (2026-09-14)

Vertintojas: tas pats nepriklausomas QA agentas. `logs/v2-fix-lp4/5/6.done.md` **netikrinti aklai** —
kiekvienas taisymo teiginys perskaičiuotas arba peržiūrėtas iš naujo dabartiniuose failuose.

Metodas: Chrome headless per CDP (`--blink-settings=scriptEnabled=false` be-JS testui,
`Emulation.setDeviceMetricsOverride` 360/768/1024/1440, `Page.captureScreenshot` su elementų
`clip`), lokalus `python3 -m http.server`; kontrastas perskaičiuotas iš **realių atvaizduotų
pikselių** (ne iš `getComputedStyle` fono, kuris gradientams meluoja); vardai, antraštės, 4-gramos
ir klasių vardai — mechanine token'ų paieška per visus **šešis** variantus.

**PARTIJOS VERDIKTAS: PRIIMTA SU DVIEM PRIVALOMOMIS MIKRO-PATAISOMIS.**
Visi **13 iš 13** anksčiau nurodytų punktų realiai ištaisyti. Techninis pagrindas nepablogėjo nė
vienoje vietoje. Bet taisymai **įvedė dvi naujas kryžmines kolizijas** (§N žemiau) — abi yra
vieno žodžio / vienos eilutės teksto pataisos, be jokio atvaizdavimo ar CSS/JS rizikos.

---

## §A. Ankstesnių punktų patikra — 13 iš 13 IŠTAISYTA

| # | Variantas | Punktas | Būsena | Kuo patikrinta |
|---|---|---|---|---|
| 1 | lp4 | `index.html:219` — 9 žodžių sutapimas su lp3:307 | **IŠTAISYTA** | Sakinys perrašytas. 4-gramų analizė per visą `body.innerText`: **lp3∩lp4 = 0** sutapimų, atmetus 18+ formuluotę ir poraštę |
| 2 | lp4 | `:473` antraštė = lp6:421 | **IŠTAISYTA (lp6 pusėje)** | lp4:473 „Klausimai prieš registruojantis" nepaliesta; lp6:421 dabar „Dažniausi klausimai apie pokalbių peržiūrą" — sutapimo nėra |
| 3 | lp4 | 6 vardai iš lp2 + neteisinga `VARIANT.md` savikritika | **IŠTAISYTA** | Programinė vardų ekstrakcija per lp1–lp6: **lp4 ∩ lp2 = 0**. 12 vardų / 12 monogramų — bijekcija be dublikatų (regex patikra). `VARIANT.md:132-138` perrašyta sąžiningai ir tiksliai |
| 4 | lp4 | (rekomendacija) `app.js` „ką tik" rotacijoje | **ĮVYKDYTA** | `app.js:42-46` — visos 4 rotuojamos žymos dabar „prieš 3/5/8/11 min" |
| 5 | lp5 | `bust-c` sulūžęs (12 vnt. tarpas) | **IŠTAISYTA** | Naujas `path` viršus `y=66` vs galvos apačia `y=72` → **6 vnt. persidengimas**. Atvaizduota 76px dydžiu realiame kontekste (`#lp5-patikra`) — kontūras vientisas |
| 6 | lp5 | `bust-e` sulūžęs (32 vnt. tarpas) | **IŠTAISYTA** | `A54,58` → `A54,92`, viršūnė `y=48` vs galvos apačia `y=50` → **2 vnt. persidengimas**. Atvaizduota 84px dydžiu „Auksinė narystė" kortelėje — vientisas |
| 7 | lp5 | 4 iš 8 „sienos" kortelių prarado siluetą | **IŠTAISYTA** | `--mosaic` alfa `.55` → `.28` (`style.css:272-274`). Atvaizduota 1400px ir **360px** — visi 8 siluetai atskiriami, mozaikuotos keturios rodo aiškų galvos+pečių kontūrą per lengvą tekstūrą |
| 8 | lp5 | `:218` teiginys „priklauso realiam nariui" | **IŠTAISYTA** | Dabar: „Kiekvienas siluetas žymi anketos tipą, kurį pamatysi atrakinęs — pavyzdinis rodinys." Patvirtinta ekrano nuotraukoje |
| 9 | lp5 | `:369` bendrinė DUK antraštė (§3) | **IŠTAISYTA** | „Dažniausi klausimai apie VIP atrakinimą" — kontekstas yra (bet žr. §N.2) |
| 10 | lp5 | `:315` „Trys žingsniai iki X" dublis | **IŠTAISYTA (lp6 pusėje)** | Grep per lp1–lp6: „Trys žingsniai iki X" antraštė lieka **tik** lp5:315 |
| 11 | lp6 | **BLOKATORIUS** — be JS pokalbis nematomas | **IŠTAISYTA** | Žr. §B — išmatuota naršyklėje su realiai išjungtu JS |
| 12 | lp6 | `:324` ir `:356` teiginiai apie „realius žmones" (§9.4) | **IŠTAISYTA** | Abu perrašyti („Iliustracijos, ne tikrų narių nuotraukos…", „Iliustracinis pavyzdys – panašiai atrodo…"). Papildomas grep per lp4/lp5/lp6: **daugiau tokių teiginių nėra nė vieno** |
| 13 | lp6 | `:233` „Trys žingsniai iki pirmo pokalbio" trigubas sutapimas | **IŠTAISYTA** | Dabar „Kaip atrodo pirmas susirašinėjimas" — nei „Trys žingsniai iki X", nei „iki pirmo pokalbio" |
| 13b | lp6 | 5 vardai iš lp1 | **IŠTAISYTA iš dalies** | Eglė/Rūta/Tomas/Giedrė/Aistė pašalinti — **lp6 ∩ lp1 = 0**. Bet naujas vardas sukūrė koliziją su lp4, žr. §N.1 |

---

## §B. lp6 be-JS blokatorius — patikrinta realioje naršyklėje (buvo pagrindinis blokatorius)

Chrome headless, `--blink-settings=scriptEnabled=false`, 1280×1400, aptarnauta per lokalų HTTP:

| Matavimas | Be JS | Su JS |
|---|---|---|
| `.lp6-phone` klasė | `lp6-phone lp6-phone--played` | `lp6-phone lp6-phone--played` |
| 5 burbulų `getComputedStyle().opacity` | `["1","1","1","1","1"]` | `["1","1","1","1","1"]` |
| „Rašo…" indikatoriaus `opacity` | `1` | `1` |
| Inline `style.transitionDelay` ant burbulų | `["-","-","-","-","-"]` | `["0s","0.16s","0.32s","0.48s","0.64s"]` |

**Inline `transitionDelay` eilutė yra įrodymas, kad tai ne savaime suprantamas rezultatas:** be JS
puslapio `app.js` realiai **nepasileido** (delay'ų nėra), ir pokalbis vis tiek matomas; su JS
`app.js` nuima klasę, nustato delay'us ir grąžina klasę per `requestAnimationFrame` — animacija
išlieka. Ekrano nuotrauka be JS rodo **visą telefoną su 5 burbulais, pilnu tekstu ir „Rašo…"
indikatoriumi**, kontaktas „Monika, 28". Tuščio rėmo nebėra.

Sprendimas teisingas ir savo esme geresnis už CSS `@media` triuką: pradinė HTML būsena = galutinė
būsena, JS tik „atsuka atgal". `style.css` nepakeistas nė viena eilute — `opacity:0` / `--played`
logika (`style.css:287-298`) nepaliesta. Reduced-motion šaka (`app.js:9-10`) iškart prideda klasę.

**Batch1 lp2 klaidos pakartojimas — pašalintas.**

---

## §C. lp5 siluetai — atvaizduota, ne perskaičiuota

Atvaizdavau **visus 9** `<symbol>` tikrais puslapio dydžiais tikrose sekcijose (ne izoliuotai):

- **`bust-c` @ 76px** (`#lp5-patikra`, „Patvirtinta" kortelė, be blur) — galva ir liemuo susilieja,
  kontūrai kertasi, plaukiojančio rutulio efekto nebėra. Galva lieka platesnė už kaklo sritį —
  tai sąmoningas „galva-akcentas" (`VARIANT.md` `bust-c` aprašymas), ne defektas.
- **`bust-e` @ 84px** (`#lp5-narystes`, „Auksinė narystė" kortelė, be blur) — kupolas dabar pakyla
  iki `y=48` ir apgaubia galvos apačią. Vientisas.
- **Papildomai patikrinau `bust-i`** (ankstesnėje patikroje nebuvo tikrintas): geometriškai tarp
  galvos apačios (`y=56`) ir pečių linijos (`y=58`) yra **2 vnt. tarpas**, bet `stroke-width: 2.4`
  (po 1,2 vnt. į kiekvieną pusę) jį uždengia — atvaizdavus 84px dydžiu **jokio plyšio nematyti**.
  Palikti galima, bet jei kada nors kas nors keis `stroke-width` mažyn, šis siluetas suskils pirmas.
  **Kitų 6 siluetų (a, b, d, f, g, h) persidengimas: 1, 0, 0, 1, 0, 3 vnt. — visi atvaizduojami
  korektiškai.**

**„Siena" po alfa sumažinimo** (atvaizduota 1400px ir 360px): visų 8 kortelių forma atskiriama.
Mozaikuotos keturios (Vilnius/a, Klaipėda/c, Šiauliai/e, Marijampolė/g) dabar rodo aiškų kontūrą
per šachmatinę tekstūrą, o ne vienalytį kvadratą. **Hero juosta** (a, f-veidrodis, i, g) taip pat
perpatikrinta padidinus: keturios formos akivaizdžiai skirtingos — apvalūs pečiai / asimetriški
pečiai / **kampuoti plokšti pečiai** / **kuodas ant galvos**. Priėmimo kriterijus „bent 8-12
skirtingų avatarų, matomai skirtingų" — **įvykdytas**.

---

## §D. Neringa / Paulina — lp4 fix agento saviniciatyva (specialiai užprašyta patikra)

lp4 taisymo agentas pastebėjo, kad originalus 12 vardų sąrašas turėjo **savo vidinį dublikatą**
(#9 Justina ir #11 Dovilė būtų susidūrę su užduotyje nurodytu mapping'u Karolina→Justina,
Simona→Dovilė) ir savo iniciatyva pervadino #9→**Neringa**, #11→**Paulina**, bet **negalėjo jų
patikrinti** prieš kitus variantus (užduotis draudė skaityti kitų `lpN` katalogus).

**Patikra atlikta — rezultatas ŠVARUS:**

| Vardas | lp1 | lp2 | lp3 | lp4 | lp5 | lp6 |
|---|---|---|---|---|---|---|
| **Neringa** | – | – | – | `index.html:331`, `app.js:43`, `VARIANT.md:97` | – | – |
| **Paulina** | – | – | – | `index.html:315`, `app.js:46`, `VARIANT.md:99` | – | – |

Nė vieno sutapimo. **Agento sprendimas buvo teisingas ir jis pats jį atskleidė log'e — tai
pavyzdinis elgesys.** Jo įspėjimas („verta perpatikrinti") buvo pagrįstas ir dabar uždarytas.

Papildomai patikrinta visa lp4 vardų sistema: **12 unikalių vardų, 12 unikalių monogramų**,
kiekvienas `lp4-avatar--N` turi lygiai vieną monogramą, kiekviena monograma — lygiai vieną avatarą
(VĖ ŽI OD RA KA VI DO MI NE JU PA AU). Monogramos atitinka vardus. `lp4-avatar--N` CSS klasės ir
gradientai nepakeisti.

---

## §N. NAUJOS problemos, kurių taisymai NEĮVEDĖ ANKSČIAU (privalomos mikro-pataisos)

### N.1. Naujas vardų sutapimas: „Viltė" lp4 ↔ lp6 — **PRIVALOMA PATAISYTI (1 žodis)**

- `lp6/index.html:278` — „**Viltė** ir Mindaugas · Kaunas" (lp6 taisymo agento **naujai įrašytas**
  vardas: buvo „Giedrė ir Mindaugas", Giedrė sutapo su lp1).
- `lp4/index.html:152` — „**Viltė** ir Dovilė" (avataras #6, monograma VI — **originalus, nekeistas**).

Taisymo agentas patikrino naują vardą tik prieš `lp6` vidų („grep patvirtino: jokių kitų šių vardų
pasikartojimų `index.html`/`app.js`/`style.css` nebuvo") — bet ne prieš kitus variantus, nes
užduotis to neleido. Tai **lygiai ta pati klaidos klasė, dėl kurios lp4 ir lp6 praėjusiame raunde
gavo PERDARYTI** (vardų persidengimas tarp variantų), todėl negaliu jos praleisti.

**Taisyti reikia `lp6` pusėje**, ne lp4: lp4 „Viltė" yra įaugusi į 12 vardų / 12 monogramų
bijekciją (VI), o lp6 tai tik viena eilutė sėkmės istorijoje.
**Užduotis:** `lp6/index.html:278` — „Viltė ir Mindaugas" → kitas moteriškas vardas, nesantis
lp1–lp5 sąrašuose. Patikrintai laisvi (0 sutapimų visuose šešiuose): **Rimantė, Gintarė, Austėja,
Indrė, Jurga, Goda**. Po pakeitimo atnaujinti ir `lp6/VARIANT.md`, jei vardas ten minimas.

### N.2. Nauja antraštės konstrukcija trijuose variantuose — **PRIVALOMA PATAISYTI (1-2 eilutės)**

`config/draudziamu-zodziu-sarasas.md` §6, paskutinis punktas: *„Ta pati antraštės konstrukcija
dviejuose variantuose."* Po taisymų **„Dažniausi klausimai apie {objektas}" yra trijuose**:

| Variantas | Eilutė | Antraštė | Būsena |
|---|---|---|---|
| lp3 | `index.html:367` | „**Dažniausi klausimai apie** Randu" | senas, PRIIMTAS batch1-e |
| lp5 | `index.html:369` | „**Dažniausi klausimai apie** VIP atrakinimą" | **naujas — šio taisymo rezultatas** |
| lp6 | `index.html:421` | „**Dažniausi klausimai apie** pokalbių peržiūrą" | **naujas — šio taisymo rezultatas** |

(Ketvirtas artimas: lp1:384 „Dažniausiai užduodami klausimai apie žemėlapį ir paskyrą".)

Abu taisymo agentai pasirinko teisingą **sprendimą** (§3 reikalavo pridėti kontekstą prie DUK
antraštės) ir abu pasirinko tą pačią **formą** — nes dirbo izoliuotai ir nematė vienas kito.
Tikslus 4 žodžių sutapimas čia nesusidaro (bendras ruožas — 3 žodžiai), todėl §6 pirmas punktas
nepažeistas, **bet ketvirtas pažeistas aiškiai**: tai lygiai toks pat atvejis kaip „Trys žingsniai
iki X", už kurį praėjusiame raunde buvo duotas PERDARYTI.

**Užduotis (kad liktų unikalus tik lp3, kuris tai turėjo pirmas):**
- `lp5/index.html:369` → pvz. „Kas dažniausiai neaišku apie atrakinimą" arba „Prieš atrakinant —
  atsakymai" (turi likti kontekstas, §3 draudžia bendrinį „DUK").
- `lp6/index.html:421` → pvz. „Ką klausia prieš pirmą pokalbį" arba „Neaiškumai apie pokalbių
  peržiūrą".
- `lp3:367` **nekeisti** — jis šią formą turėjo pirmas ir jau PRIIMTAS.

### N.3. Smulkmena, ne blokatorius: lp4 `index.html:121` vidinis prieštaravimas

Rotuojamos juostos žymos sutvarkytos („prieš 3/5/8/11 min"), bet **statinio** sąrašo pirmas įrašas
liko: veiksmas „**ką tik** prisijungė" + laikas „**prieš 2 min**" toje pačioje eilutėje. Du
skirtingi laiko teiginiai apie tą patį įvykį, ir „ką tik prisijungė" yra artimiausias
`config/draudziamu-zodziu-sarasas.md` §9.3 formuluotei („ką tik užsiregistravo").

**Neblokuoju**, nes juosta aiškiai pažymėta „Gyvo aktyvumo juosta · pavyzdys" + ženkliuku
„iliustracija" (`index.html:111-114`, `aria-label="Pavyzdinė gyvo aktyvumo juosta"`), o DUK tiesiai
atsako „Ne". Bet rekomenduoju suvienodinti: `:121` „ką tik prisijungė" → „prisijungė" arba
„sukūrė profilį" — tada visa juosta kalba viena laiko logika.

---

## §E. Ar taisymai ko nors nesugadino — kryžminė patikra su lp1/lp2/lp3

### Techninis pagrindas — perskaičiuota iš naujo, NEPABLOGĖJO NIEKUR

| | lp4 | lp5 | lp6 |
|---|---|---|---|
| `scrollWidth/clientWidth` 360 / 768 / 1024 / 1440 | 360/768/1024/1440 ✔ | ✔ | ✔ |
| Elementai už viewport'o be `overflow` protėvio | **0** visuose pločiuose | **0** | **0** |
| `<h1>` | 1 | 1 | 1 |
| Pasikartojantys `id` | 0 | 0 | 0 |
| Laukai be `<label>` / `aria-label` | 0 | 0 | 0 |
| CSS dydis (limitas 60 KB) | 20,3 KB | 19,4 KB | 15,4 KB |
| `<img>` žymų | 0 | 0 | 0 |
| `url(http…)` / `base64` | 0 / 0 | 0 / 0 | 0 / 0 |
| `og-image.png` | 1200×630 RGB ✔ | ✔ | ✔ |

**Kontrastas — perskaičiuotas iš realių atvaizduotų pikselių.** Automatinis auditas per visus
teksto elementus: **lp5 — 0 neatitikimų iš 94, lp6 — 0 iš 65.** lp4 pradinis auditas parodė 25
„neatitikimus", bet **visi 25 yra mano skripto klaidos**: avatarų monogramos sėdi ant CSS
gradiento, o `getComputedStyle().backgroundColor` gradientams grąžina `transparent`, tad skriptas
paėmė sekcijos foną. Patikrinau pikselių lygiu (`lp4-avatar--1` ekrano nuotrauka): rašalas
`rgb(4,18,26)` ant realaus gradiento `rgb(34,211,238)→rgb(74,222,128)` = **10,67–10,89:1**.
Be to visos monogramos yra `aria-hidden="true"` — dekoratyvios. **lp4 kontrastas — 0 realių
neatitikimų.**

### Trackingo stekas — NEPALIESTAS

Žymos suskaičiuotos po taisymų ir sutampa su prieš-taisymo sąrašu iš šios ataskaitos §0:
lp4 — `lp4_hero_cta_click` ×1, `lp4_signup_submit` ×2, `lp4_faq_toggle` ×6, `lp4_signup_success` ×2;
lp5 — `lp5_hero_cta_click` ×2, `lp5_form_submit` ×2, `lp5_form_success` ×2;
lp6 — `lp6_view` ×1, `lp6_signup_submit` ×1, `lp6_signup_success` ×1.
**Realaus GTM / Meta Pixel / OpenAI pixel kodo ar ID nė viename faile nėra ir nebuvo — keisti
nebuvo ko, ir niekas nepridėta.** Ši patikra buvo tik skaitymo; produkciniai failai nekeisti.

### Klasių vardai — 0 regresijų

0 draudžiamų §4 vardų visuose šešiuose. Kryžminiai sutapimai visose 15 porų: **lp4∩lp5 = 0,
lp4∩lp6 = 0, lp5∩lp6 = 0, lp1/lp2/lp3 ∩ lp4/lp5/lp6 = 0.** (Liko tik du senų variantų
utilitariniai vardai — lp2∩lp3 `is-hidden` ir lp2∩lp5 `md` — nė vienas nėra §4 sąraše, abu
pripažinti batch1-e.)

### 4-gramų analizė po taisymų (viso matomo teksto, visos 15 porų)

Po teisinių/miestų/formos laukų filtro:

- **lp3∩lp4 = 0** (buvo pagrindinis lp4 blokatorius — **išspręstas**)
- **lp2∩lp3 = 0**, **lp3∩lp5 = 0**
- lp4∩lp6 = 2, lp2∩lp6 = 2, lp5∩lp6 = 3, lp1∩lp2 = 3 — **visi iki vieno yra 18+ sutikimo
  formuluotė** („patvirtinu kad man yra bent…") ir poraštės teisinės nuorodos, sąmoningai palikta
- lp2∩lp4, lp2∩lp5, lp4∩lp5 = po 7 — ta pati 18+ formuluotė ilgesne versija
- Du nauji *faktinio turinio* sutapimai, kurie **nėra taisymų rezultatas** ir kurių ankstesnė
  patikra taip pat neblokavo: „pagal miestą ir amžių" (lp4:484/504, lp5:290, lp6:245 — filtrų
  aprašymas) ir „anketos sukūrimas ir naršymas" (lp3:372, lp6:348 — kainos atsakymas). Abu —
  faktinis funkcionalumo aprašymas, kaip ir miestų sąrašas. **Neblokuoju.**

### Kas dar patikrinta ir NĖRA problema

- lp5 `VARIANT.md:98` teiginys „Skirtumai TIKRAI matomi (patikrinta realiu render'iu)" — po alfa
  sumažinimo **dabar jis tapo teisingas**; ankstesnė pastaba uždaryta.
- lp6 `VARIANT.md` „akių tarpo" teiginys — patikslintas sąžiningai, dabar tiksliai sako, kad tai
  sub-pikselinis skirtumas ir NĖRA variacijos priemonė.
- lp4 `VARIANT.md:132-138` — perrašyta teisingai, atskleidžia ir Neringa/Paulina pervadinimą.
- lp5 kosmetinis „Klaipėda, 24 m." persilaužimas hero kortelėje — **vis dar yra** (nebuvo užduotyje),
  kosmetika, neblokuoja.
- lp1↔lp4 „Sukurk profilį…" CTA antraščių panašumas — senas, batch1 QA jį jau įvardijo kaip
  nekritinį; nauja nėra.
- lp7/lp8/lp9 `assets/hero-portrait.jpg` jau paruošti (visi 1024×1536 JPEG, be fotoaparato EXIF,
  tik Photoshop IRB — atitinka „klientas sugeneravo per AI įrankį"). Kitos partijos statybai
  medžiaga vietoje.

---

## §F. Galutiniai verdiktai

| Variantas | Ankstesnis | Dabar | Likę veiksmai |
|---|---|---|---|
| **lp4** | PERDARYTI (3 pkt.) | **PRIIMTA** | Nėra privalomų. Rekomendacija: `index.html:121` „ką tik prisijungė" → „prisijungė" (§N.3) |
| **lp5** | PERDARYTI (5 pkt.) | **PRIIMTA su 1 eilutės pataisa** | `index.html:369` — pakeisti DUK antraštės konstrukciją (§N.2) |
| **lp6** | PERDARYTI (5 pkt., 1 blokatorius) | **PRIIMTA su 2 eilučių pataisa** | `index.html:278` — „Viltė" → kitas vardas (§N.1); `index.html:421` — DUK antraštė (§N.2) |

**Blokuojančių techninių ar grafikos defektų nebeliko nė viename variante.** Be-JS blokatorius
išspręstas, sulūžę siluetai sutvarkyti ir patikrinti atvaizdavimu, netikro socialinio įrodymo
teiginiai pašalinti visi trys, vardų sistema lp4 sutvarkyta iki 12/12 bijekcijos.

Likusios trys eilutės (§N.1 + §N.2) yra **gryno teksto pataisos be jokios atvaizdavimo, CSS, JS ar
layout rizikos** — jų nereikia iš naujo tikrinti naršyklėje, pakanka grep'o po pakeitimo.

**Todėl: lp7–lp9 statybą galima pradėti nelaukiant** — šios trys eilutės neliečia nei šablono, nei
bendros sistemos, ir gali būti padarytos lygiagrečiai. Vienintelė sąlyga: jos turi būti padarytos
**prieš** lp7–lp9 patikrą, kad naujoji partija nebūtų lyginama su dar nešvariu pagrindu.

## §G. Ką verta įrašyti į lp7–lp10 promptą (pamoka iš šio raundo)

Abi naujos problemos (§N.1 vardas, §N.2 antraštė) atsirado dėl **vienos ir tos pačios priežasties**:
taisymo agentams buvo uždrausta skaityti kitų `lpN` katalogus, todėl jie fiziškai negalėjo
patikrinti savo naujo teksto prieš kitus variantus — ir abu nepriklausomai pasirinko tą pačią
„natūraliausią" formuluotę.

**Rekomendacija:** taisymo/statybos promptuose vietoje draudimo skaityti kitus katalogus įrašyti
**privalomą baigiamąjį žingsnį**: *„kiekvieną naują vardą ir kiekvieną naują `<h2>` prieš įrašant
patikrink `grep -rn` per visus `variacijosv2/lp*/index.html`; jei randi sutapimą — rink kitą."*
Tai kainuoja vieną grep'ą ir uždaro visą šios klasės defektų šeimą.

Antra pamoka pasitvirtino ir teigiamai: lp4 agentas savo iniciatyvos pakeitimą (Neringa/Paulina)
**atskleidė log'e su aiškiu įspėjimu, ko nepatikrino** — dėl to patikra užtruko minutę ir baigėsi
švariai. Tai elgesys, kurio verta reikalauti iš visų agentų.
