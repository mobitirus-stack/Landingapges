# v2 partija 2 (lp4, lp5, lp6) — PAKARTOTINĖ patikra po taisymo ciklo

Data: 2026-09-14. Vertintojas: tas pats nepriklausomas QA agentas (Opus, aukštas effort).
Ataskaita: `qa/v2-patikra-batch2.md` → skyrius „Pakartotinė patikra po taisymo (2026-09-14)".

**Verdiktas: PRIIMTA su trimis teksto eilutėmis, kurias reikia pataisyti.**
13 iš 13 ankstesnių punktų realiai ištaisyti. Taisymai įvedė 2 naujas kryžmines kolizijas.

---

## Metodas

- [x] Perskaityta ankstesnė patikra (`qa/v2-patikra-batch2.md`, 390 eil.) ir visi trys fix log'ai
- [x] Fix agentų ataskaitos **netikrintos aklai** — kiekvienas teiginys perskaičiuotas/peržiūrėtas
      dabartiniuose failuose
- [x] Chrome headless per CDP (`websocket-client` + `Page.captureScreenshot`), lokalus
      `python3 -m http.server`
- [x] Be-JS testas: `--blink-settings=scriptEnabled=false` (ne `--disable-javascript`)
- [x] Layout matuota 360 / 768 / 1024 / 1440 px per `Emulation.setDeviceMetricsOverride`
- [x] Kontrastas — iš **realių atvaizduotų pikselių**, ne iš `getComputedStyle` (gradientams meluoja)
- [x] Vardai / antraštės / 4-gramos / klasių vardai — mechaninė paieška per visus **6** variantus
- [x] Atsarginė kopija prieš keitimą: `scratchpad/qa-backup/v2-patikra-batch2.md`
- [x] Po keitimo patikrinta `diff`'u: pirmos 390 eilutės **identiškos**, pridėta tik apačioje

## Ankstesnių punktų checklistas

### lp4 (3 punktai)
- [x] 1. `index.html:219` perrašyta — 4-gramų analizė: **lp3∩lp4 = 0**
- [x] 2. `:473` antraštė — kolizija su lp6:421 išspręsta (lp6 pusėje), lp4 nepaliesta
- [x] 3. 6 lp2 vardai pakeisti — **lp4 ∩ lp2 = 0**; 12 vardų / 12 monogramų bijekcija be dublikatų
- [x] 3b. `VARIANT.md:132-138` — savikritika perrašyta teisingai, atskleidžia ir Neringa/Paulina
- [x] 4. (rekomendacija) `app.js:42-46` „ką tik" → „prieš 3/5/8/11 min" — įvykdyta

### lp5 (5 punktai)
- [x] 1a. `bust-c` — liemuo `y=84`→`y=66`, **6 vnt. persidengimas**; atvaizduota 76px realiame kontekste
- [x] 1b. `bust-e` — `A54,58`→`A54,92`, viršūnė `y=48`, **2 vnt. persidengimas**; atvaizduota 84px
- [x] 2. `--mosaic` alfa `.55`→`.28` — visi 8 „sienos" siluetai atskiriami (1400px ir 360px)
- [x] 3. `:218` — teiginys apie „realų narį" pašalintas
- [x] 4. `:369` — DUK antraštė gavo kontekstą (bet žr. NAUJA-2)
- [x] 5. `:315` „Trys žingsniai iki X" — dublis išspręstas lp6 pusėje; lieka tik lp5

### lp6 (5 punktai)
- [x] 1. **BLOKATORIUS be-JS — IŠTAISYTA**, patvirtinta naršyklėje (žr. žemiau)
- [x] 2. `:324` ir `:356` — „realūs žmonės" teiginiai perrašyti; grep: daugiau tokių nėra nė vieno
- [x] 3. `:421` — nauja DUK antraštė, su lp4:473 nebesutampa (bet žr. NAUJA-2)
- [x] 4. `:233` — „Kaip atrodo pirmas susirašinėjimas", nebėra „Trys žingsniai iki X"
- [x] 5. Vardai — Eglė/Rūta/Tomas/Giedrė/Aistė pašalinti, **lp6 ∩ lp1 = 0** (bet žr. NAUJA-1)
- [x] 6. `VARIANT.md` — „akių tarpo" teiginys patikslintas sąžiningai

## Be-JS blokatoriaus patvirtinimas (lp6)

| Matavimas | Be JS | Su JS |
|---|---|---|
| 5 burbulų `opacity` | `["1","1","1","1","1"]` | `["1","1","1","1","1"]` |
| „Rašo…" `opacity` | `1` | `1` |
| Inline `transitionDelay` | `["-","-","-","-","-"]` | `["0s","0.16s","0.32s","0.48s","0.64s"]` |

- [x] Inline `transitionDelay` nebuvimas be JS = `app.js` realiai nepasileido, o pokalbis vis tiek matomas
- [x] Ekrano nuotrauka be JS: visas telefonas, 5 burbulai pilnu tekstu, „Rašo…", kontaktas „Monika, 28"
- [x] Su JS animacija vis dar veikia (delay'ai nustatomi, klasė grąžinama per `requestAnimationFrame`)
- [x] `style.css` nepakeistas nė viena eilute

## Specialiai užprašyta patikra: Neringa / Paulina

- [x] **Neringa** — randama TIK lp4 (`index.html:331`, `app.js:43`, `VARIANT.md:97`)
- [x] **Paulina** — randama TIK lp4 (`index.html:315`, `app.js:46`, `VARIANT.md:99`)
- [x] Sutapimų su lp1 / lp2 / lp3 / lp5 / lp6 — **nėra**
- [x] lp4 fix agento saviniciatyvus sprendimas buvo teisingas; jo įspėjimas dabar uždarytas

## Ar taisymai nesugadino kito (regresijų patikra)

- [x] `scrollWidth` = `clientWidth` visiems trims ties 360/768/1024/1440
- [x] Elementų už viewport'o be `overflow` protėvio: **0** visur
- [x] `<h1>` = 1, pasikartojančių `id` = 0, laukų be `<label>` = 0 — visiems trims
- [x] CSS: lp4 20,3 KB / lp5 19,4 KB / lp6 15,4 KB (limitas 60 KB)
- [x] Kontrastas: lp5 **0 neatitikimų iš 94**, lp6 **0 iš 65**, lp4 **0 realių** (25 „neatitikimai" —
      mano skripto klaida ties gradientais; pikselių patikra: monograma ant gradiento **10,67–10,89:1**)
- [x] `<img>` = 0, `url(http…)` = 0, `base64` = 0 visuose trijuose — **realių nuotraukų riba išlaikyta**
- [x] `og-image.png` visi trys 1200×630 RGB, nepaliesti
- [x] **Trackingo žymos nepaliestos** — suskaičiuotos ir sutampa su prieš-taisymo sąrašu
      (lp4: `lp4_hero_cta_click`×1, `lp4_signup_submit`×2, `lp4_faq_toggle`×6, `lp4_signup_success`×2;
      lp5: `lp5_hero_cta_click`×2, `lp5_form_submit`×2, `lp5_form_success`×2;
      lp6: `lp6_view`×1, `lp6_signup_submit`×1, `lp6_signup_success`×1).
      Realaus GTM / Meta Pixel / OpenAI pixel kodo ar ID failuose nėra ir nebuvo
- [x] Klasių vardai: 0 draudžiamų §4; kryžminiai sutapimai lp4∩lp5, lp4∩lp6, lp5∩lp6 = **0**
- [x] Papildomai patikrinta lp5 `bust-i` (anksčiau netikrinta): 2 vnt. tarpas, bet `stroke-width: 2.4`
      jį uždengia — atvaizdavus plyšio nematyti; kitų 6 siluetų persidengimai 0–3 vnt., visi OK
- [x] lp5 hero juosta padidinta ir perpatikrinta: 4 siluetai (a / f-veidrodis / i / g) akivaizdžiai skiriasi
- [x] **Ši patikra buvo tik skaitymo — produkciniai failai NEKEISTI**

## NAUJOS problemos (taisymų įvestos)

- [ ] **NAUJA-1 — „Viltė" sutampa lp4↔lp6.** `lp6/index.html:278` („Viltė ir Mindaugas") vs
      `lp4/index.html:152` („Viltė ir Dovilė", avataras #6 / monograma VI).
      lp6 agentas naują vardą tikrino tik lp6 viduje — kitų katalogų skaityti negalėjo.
      **Ta pati klaidos klasė, dėl kurios abu gavo PERDARYTI praėjusiame raunde.**
      Taisyti **lp6 pusėje** (lp4 „Viltė" įaugusi į 12/12 monogramų bijekciją).
      Laisvi vardai (0 sutapimų visuose 6): Rimantė, Gintarė, Austėja, Indrė, Jurga, Goda.
- [ ] **NAUJA-2 — „Dažniausi klausimai apie X" trijuose variantuose.** lp3:367 (senas, priimtas),
      lp5:369 (naujas) ir lp6:421 (naujas). `draudziamu-zodziu-sarasas.md` §6: „Ta pati antraštės
      konstrukcija dviejuose variantuose." Tikslaus 4 žodžių sutapimo nėra (bendras ruožas — 3 žodžiai),
      bet konstrukcijos draudimas pažeistas aiškiai — lygiai kaip „Trys žingsniai iki X" praeitą kartą.
      Taisyti **lp5:369 ir lp6:421**; lp3:367 palikti (turėjo pirmas).
- [ ] **NAUJA-3 (neblokuoja) — lp4 `index.html:121`.** Statinis įrašas: veiksmas „ką tik prisijungė"
      + laikas „prieš 2 min" toje pačioje eilutėje. Rotacija sutvarkyta, statinis įrašas — ne.
      Juosta pažymėta „pavyzdys"/„iliustracija", DUK atsako „Ne", todėl neblokuoju.
      Rekomendacija: „ką tik prisijungė" → „prisijungė".

## Verdiktai

| Variantas | Ankstesnis | Dabar | Likę veiksmai |
|---|---|---|---|
| lp4 | PERDARYTI (3) | **PRIIMTA** | nėra privalomų (rekomendacija: `:121`) |
| lp5 | PERDARYTI (5) | **PRIIMTA su 1 eilutės pataisa** | `index.html:369` |
| lp6 | PERDARYTI (5, 1 blokatorius) | **PRIIMTA su 2 eilučių pataisa** | `index.html:278`, `index.html:421` |

**Blokuojančių techninių ar grafikos defektų nebeliko.** Likusios 3 eilutės — gryno teksto pataisos
be atvaizdavimo / CSS / JS / layout rizikos; po pakeitimo pakanka `grep`, naršyklės nereikia.

**lp7–lp9 statybą galima pradėti nelaukiant** (nuotraukos `variacijosv2/lp7-9/assets/hero-portrait.jpg`
jau vietoje: 1024×1536 JPEG, be fotoaparato EXIF). Sąlyga: 3 eilutės turi būti pataisytos **prieš**
lp7–lp9 patikrą.

## Pamoka kitam promptui

Abi naujos problemos kilo iš to, kad taisymo agentams buvo **uždrausta skaityti kitus `lpN`
katalogus** — jie fiziškai negalėjo patikrinti savo naujo teksto ir abu nepriklausomai pasirinko
tą pačią „natūraliausią" formuluotę. Rekomendacija: vietoje draudimo įrašyti privalomą baigiamąjį
žingsnį — *„kiekvieną naują vardą ir kiekvieną naują `<h2>` prieš įrašant patikrink
`grep -rn` per visus `variacijosv2/lp*/index.html`"*. Vienas grep uždaro visą šią defektų šeimą.
