# v2 lp4 taisymas pagal QA verdiktą (qa/v2-patikra-batch2.md → lp4 → PERDARYTI)

Šaltinis: `qa/v2-patikra-batch2.md`, skyrius „lp4" (eilutės 98–149).
Pataisyti failai: `variacijosv2/lp4/index.html`, `variacijosv2/lp4/VARIANT.md`, `variacijosv2/lp4/assets/app.js`.
Atsarginės kopijos prieš keičiant: scratchpad `lp4-backup/{index.html,VARIANT.md,app.js}.bak`.

## 1. `index.html:219` — sakinio perrašymas (QA punktas 1)

Senas (beveik pažodžiui sutapo su lp3): „Nuo profilio sukūrimo iki pirmo pokalbio – trys
žingsniai, be paslėptų mokesčių ar spaudimo."

Naujas: „Paskyra atsiranda sąraše iškart po sukūrimo, pokalbis prasideda, kai kas nors tau
atsako – ir nė viename žingsnyje neatsiranda papildomas mokestis ar raginimas skubėti."

Kitas sakinio judesys (ne „Nuo X iki Y — N žingsnių, be Z"), nenaudoja frazių „sukūrimo iki
pirmo pokalbio", „trys žingsniai", „be paslėptų mokesčių".

## 2. `index.html:473` — NEPALIESTA

`<h2>Klausimai prieš registruojantis</h2>` paliktas toks, koks buvo — tai lp6 atsakomybė (pagal
užduotį). Patikrinta grep'u prieš ir po: eilutė identiška.

## 3. Vardų pakeitimai — su svarbiu papildomu radiniu

Užduotyje nurodytas mapping: Ugnė→Vėjūnė, Gabrielė→Živilė, Aistė→Odeta, Ieva→Raminta,
Simona→Dovilė, Karolina→Justina.

**Rastas konfliktas, kurio užduoties tekstas nenumatė:** lp4 originaliame 12 vardų sąraše (žr.
VARIANT.md §4) jau egzistavo avataras #9 „Justina" (monograma JU) ir avataras #11 „Dovilė"
(monograma DO) — abu NE tarp šešių keičiamų. Jei būtų pritaikytas tik nurodytas mapping,
Karolina→Justina ir Simona→Dovilė būtų sukūrę **dublikatus lp4 viduje** (2× Justina, 2× Dovilė) —
tą pačią problemą, kurią QA fiksavo tarp failų, bet dabar viename faile. Tai realiai blogesnis
rezultatas nei originalus defektas.

**Sprendimas (mano iniciatyva, nurodžius šiame log'e skaidriai):** originalūs #9 ir #11 taip pat
pervadinti — Justina(9)→**Neringa**, Dovilė(11)→**Paulina** — kad galutiniame sąraše liktų 12
unikalių vardų ir 12 unikalių monogramų. Nauji vardai (Neringa, Paulina) sugalvoti, NĖRA
patikrinti prieš lp1/lp2/lp3/lp5/lp6 (užduotis draudžia skaityti kitų lpN katalogų), tad jei
Jonas turi projekto lygio vardų registrą — **verta perpatikrinti šiuos du papildomus vardus**
prieš kitą QA raundą.

### Galutinė 12 vardų lentelė (visos vietos atnaujintos `index.html` + `app.js`)

| # | sena monograma | senas vardas | naujas vardas | nauja monograma | pakeista? |
|---|---|---|---|---|---|
| 1 | UG | Ugnė | **Vėjūnė** | **VĖ** | taip (užduotis) |
| 2 | GB | Gabrielė | **Živilė** | **ŽI** | taip (užduotis) |
| 3 | AI | Aistė | **Odeta** | **OD** | taip (užduotis) |
| 4 | IE | Ieva | **Raminta** | **RA** | taip (užduotis) |
| 5 | KA | Kamilė | Kamilė | KA | ne |
| 6 | VI | Viltė | Viltė | VI | ne |
| 7 | SI | Simona | **Dovilė** | **DO** | taip (užduotis) |
| 8 | MI | Milda | Milda | MI | ne (tik VARIANT.md turėjo vardą, HTML tekste nerodomas) |
| 9 | JU | Justina | **Neringa** | **NE** | taip (mano fix, kolizijai išvengti) |
| 10 | KR | Karolina | **Justina** | **JU** | taip (užduotis) |
| 11 | DO | Dovilė | **Paulina** | **PA** | taip (mano fix, kolizijai išvengti) |
| 12 | AU | Aušra | Aušra | AU | ne |

Atnaujintos visos naudojimo vietos: hero live-feed (`index.html:118-152`), statistikos avatarų
klasteris (`:201-205`), pasitikėjimo/patikros juosta (`:309-331`), miestų sąrašas (`:346-378`),
„aktyvūs dabar" juosta prie formos (`:402-408`), ir `app.js` live-feed rotacijos duomenys
(`extraEntries` masyvas + `initials` map, eilutės 43-46 ir 65).

`lp4-avatar--N` CSS klasės ir gradientai **nekeisti** — tik teksto turinys (vardas + monogramos
raidės viduje `<span>`). Patikrinta programiškai (python regex), kad kiekvienam `avatar--N`
priskirta lygiai viena unikali 2 raidžių monograma, be dublikatų.

## 4. `VARIANT.md:132-133` — teiginio pataisymas (QA punktas 3)

Senas (neteisingas): „Nekartojami lp1 („Rūta") / lp2 („Eglė") pavyzdiniai vardai — naudojamas
visiškai kitas 12 vardų sąrašas."

Naujas tekstas paaiškina: 6 vardai iš pradžių sutapo su lp2 ir buvo pakeisti, o 2 papildomi
originalūs vardai (Justina, Dovilė) pervadinti į Neringa/Paulina, kad išvengti dublikatų pačiame
lp4 faile. Taip pat atnaujinta VARIANT.md §4 lentelė (monogramos + vardai) ir ASCII wireframe
(hero pavyzdžiai eilutėse ~55-57).

## 5. `app.js:43-46` — „ką tik" laiko žymos (rekomendacija, įvykdyta)

Pakeista: visų 4 rotuojamų `extraEntries` `time` reikšmė iš vienodo „ką tik" į skirtingas
reliatyvias žymas („prieš 3 min", „prieš 5 min", „prieš 8 min", „prieš 11 min"), kad besisukanti
juosta nebeatrodytų kaip realaus laiko pranešimas. Rotacijos mechanizmas ir
`prefers-reduced-motion` išjungimas (nekeista) paliktas kaip buvo.

## Patikrinta po pakeitimų

- `diff` prieš/po kiekvienam iš 3 failų peržiūrėtas — pakeista tik tai, kas išvardyta aukščiau.
- Visos `<!-- tracking: ... -->` / `/* tracking: ... */` žymos (`lp4_hero_cta_click`,
  `lp4_signup_submit`, `lp4_faq_toggle` ×5, `lp4_signup_success`) identiškos prieš/po — patikrinta
  grep'u, ID nepaliesti.
- `index.html:473` antraštė identiška prieš/po.
- CSS/JS struktūra, sekcijų tvarka, `lp4-avatar--N` klasės, gradientai — nekeisti (tik teksto
  turinys span'uose).
- 12 monogramų galutiniame faile — unikalios (patikrinta regex skriptu).

## Neužbaigta / kam atkreipti dėmesį

- Nauji vardai „Neringa" ir „Paulina" (mano papildomas fix'as) nepatikrinti prieš lp1/lp3/lp5/lp6
  sąrašus — užduotis draudė skaityti kitus lpN katalogus. Rekomenduoju įtraukti į kitą QA raundą.
