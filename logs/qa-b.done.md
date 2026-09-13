# qa-b.done — Fazė 4, DALIS B užbaigta

**Vykdyta:** `promptai/04-qa.md` DALIS B (sprendiminis panašumo auditas).
**Data:** 2026-09-13.
**Įvestys:** `analize/url-1.md`, `url-2.md`, `url-3.md` (§7 FORMA — NEKARTOTI), `analize/sinteze.md`
(DALIS 2), `config/diferenciacijos-matrica.md` (DALIS 4, §7 šablonų patikra).
**Tirta:** visų 10 variantų `index.html` + CSS + JS — realus kodas ir realus tekstas.

**Išvestys:**
- `qa/panasumo-auditas.md`
- `qa/santrauka.md`
- `logs/qa-b.done.md` (šis failas)

---

## Priėmimo kriterijų checklistas

- [x] **Visos 45 poros įvertintos.**
      `qa/panasumo-auditas.md` §1 — numeruota 1–45 lentelė, kiekvienoje eilutėje TAIP/NE + priežastis.
      Kiekviena pora turi atskirą vizualinį vertinimą ir atskirą teksto vertinimą, todėl nė viena
      eilutė nėra bendra frazė.

- [x] **Kiekvienas verdiktas pagrįstas konkrečiu elementu, ne bendra fraze.**
      Porų testas remiasi keturiomis įvardytomis konstrukcijomis (S1–S5) su nurodytu kiekiu
      (10/10, 10/10, 10/10, 7/10, 9/10) ir grep'u patvirtintomis eilutėmis. Referencijos testas
      nurodo konkretų §7 punktą ir konkrečią CSS eilutę (pvz. lg4 `garden.css:191` — piliulės formos
      ženkliukas). Šablonų testas kiekvienam iš 8 šablonų nurodo, kas būtent kode buvo patikrinta
      (hex reikšmės, `border-radius`, `IntersectionObserver` nebuvimas, numeracijos pobūdis).
      Kokybės verdiktas kiekvienam variantui įvardija „įsimenamą“ elementą su jo įgyvendinimo vieta
      (pvz. lg1 `app.js` → `updateHeadingCallout`; lg7 `Figure` susisukimas į 00).

- [x] **Kiekviena PERDARYTI užduotis pakankamai konkreti, kad statybos agentas ją įvykdytų be klausimų.**
      `qa/panasumo-auditas.md` §7.1–§7.10: kiekvienam variantui nurodyti **failai ir eilučių numeriai**,
      kas keičiama, kokia varianto sava konstrukcija naudojama vietoj bendros, ir atskiras
      **„Nekeisti“** sąrašas. §7.0 nustato bendras taisykles ir priėmimo kriterijų po perdarymo;
      §8 — draudimų sąrašas.

---

## Verdiktai

| Variantas | Verdiktas | Apimtis |
|---|---|---|
| lg1-matmuo | PERDARYTI | tik tekstas (3 vietos) |
| lg2-lenta | PERDARYTI | tik tekstas (5 vietos) |
| lg3-pultas | PERDARYTI | tekstas (4 vietos) + formos užuominų kalibravimas |
| lg4-silas | PERDARYTI | tekstas (5 vietos) + 3 CSS `border-radius` eilutės + hero vaizdinys |
| lg5-salyga | PERDARYTI | tik tekstas (4 vietos) |
| lg6-talonas | PERDARYTI | tekstas (5 vietos) + šriftų `@import` → `<link>` |
| lg7-kabinetas | PERDARYTI | tik tekstas (3 vietos) |
| lg8-vakaras | PERDARYTI | tekstas (5 vietos) + 3 sekcijos perdedamos į esamą bento tinklelį |
| lg9-prieiga | PERDARYTI | tekstas (5 vietos) + DUK nuorodų retinimas |
| lg10-atvirukas | PERDARYTI | tik tekstas (4 vietos) |

**PRIIMTA: 0 · PERDARYTI: 10.**

---

## Ką svarbu perduoti orkestratoriui

1. **Priežastis viena visiems dešimčiai ir ji ne dizaino.** Vizualiai visos 45 poros atskiriamos —
   porų testas nedavė nė vieno TAIP dėl paletės, tipografijos, tarpų, kampų ar tinklelio. Krenta tik
   teksto sluoksnis: keturios retorinės konstrukcijos tose pačiose funkcinėse vietose.

2. **Perdarymas negali būti „perrašyk puslapį“.** Jei statybos agentui bus duotas platus promptas, jis
   perkurs dizainą, kuris testus jau praėjo, ir sugadins tai, kas veikia. Promptas turi cituoti
   `qa/panasumo-auditas.md` §7.0 draudimus ir konkretaus varianto §7.x eilučių numerius.

3. **Perdarymas turi vykti kaip vienas rinkinys, ne po vieną.** S3 ir S4 taisyklės yra kvotinės
   (dvipusis matomumo sąrašas leidžiamas tik lg4 ir lg7; „Jei dar dvejoji“ — tik vienam; „Jau ...?“ —
   ne daugiau kaip trims). Taisant variantus atskirai ir nežinant kitų, kvotos bus pažeistos.

4. **Tracking stekas švarus.** Nė viename iš 10 failų nėra gyvo GTM, Meta Pixel ar OpenAI/ChatGPT
   pikselio — tik `<!-- tracking: ... -->` komentarų žymos būsimam prijungimui. Perdarymas jokios
   tracking rizikos nekelia, jei tos žymos lieka savo vietose (įrašyta į §8).

5. **Trys radiniai, kurie nėra bendro pobūdžio ir kuriuos verta atskirai patikrinti po perdarymo:**
   - lg4 `garden.css:191` — piliulės formos ženkliukas, tiesioginis `sinteze` §2.3 p. 31 pažeidimas.
   - lg8 — bento koncepcija nustoja veikti iškart po formos; penkios sekcijos vienodo formato.
   - lg4 hero — bendrinis gradientas + banguota forma; vienintelė vieta rinkinyje, kur kyla
     „sugeneruota“ įtarimas.

6. **Persidengimas su DALIS A.** Mechaninei patikrai perduodami trys dalykai, kuriuos pastebėjau, bet
   kurie priklauso jos apimčiai: `assets/style.css` kelias sutampa lg1 ir lg6; lg6 šriftai kraunami
   per CSS `@import` be atitinkamo `<link>`; lg2 (`#B00020`), lg8 (`#7A1230`, `#FFFFFF`) ir lg9
   (`#FFC96B`) naudoja spalvas, kurių nėra jų paletėse.
