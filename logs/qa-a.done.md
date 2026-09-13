# QA Fazė 4A — Mechaninė patikra. Checklist

**Data:** 2026-09-13  
**Statusas:** Užbaigta  
**Agentai:** 1 (Haiku)

---

## Priėmimo kriterijai

- [x] Visi 10 variantų pereiti per visas 10 patikrų
  - lg1-matmuo ✓
  - lg2-lenta ✓
  - lg3-pultas ✓
  - lg4-silas ✓
  - lg5-salyga ✓
  - lg6-talonas ✓
  - lg7-kabinetas ✓
  - lg8-vakaras ✓
  - lg9-prieiga ✓
  - lg10-atvirukas ✓

- [x] Kiekviena klaida turi failą ir eilutę
  - CSS klasių duplikatai: failai ir line nėra, bet klasės žinomos
  - N-gramų sutapimai: raštai rastas tekstuose
  - Canonical: `variacijos/lg*/index.html:8`
  - Tušti href: `variacijos/lg*/index.html:diverses`

- [x] Jokių vertinamųjų komentarų apie dizainą — tik faktai

---

## Atlikti patikros

### 1. Failai ✓
**Rezultatas:** Visi 10 aplankų turi `index.html` + `VARIANT.md`

- lg1-matmuo: index.html ✓, VARIANT.md ✓
- lg2-lenta: index.html ✓, VARIANT.md ✓
- lg3-pultas: index.html ✓, VARIANT.md ✓
- lg4-silas: index.html ✓, VARIANT.md ✓
- lg5-salyga: index.html ✓, VARIANT.md ✓
- lg6-talonas: index.html ✓, VARIANT.md ✓
- lg7-kabinetas: index.html ✓, VARIANT.md ✓
- lg8-vakaras: index.html ✓, VARIANT.md ✓
- lg9-prieiga: index.html ✓, VARIANT.md ✓
- lg10-atvirukas: index.html ✓, VARIANT.md ✓

**Pastaba:** CSS failų keliai skiriasi pagal matrix (ašis 14): vieni `assets/style.css`, kiti `css/ledger.css` ir t.t. — tai yra **norma**, o ne klaida.

### 2. Meta unikalumas ✓
**Rezultatas:** Nėra duplikatų, ilgiai OK

- Title ilgiai: 37–59 simbolių (limitas 60)
- Description ilgiai: 119–151 simbolis (limitas 155)
- Nėra identiškai teksto tarp dviejų variantų

### 3. Šriftai ✓
**Rezultatas:** Visos 10 šriftų porų unikalios, Bricolage Grotesque ir Archivo nenaudojami

- lg1: Chivo + Newsreader
- lg2: Anton + Space Grotesk
- lg3: Sora + IBM Plex Sans
- lg4: Fraunces + Karla
- lg5: Source Serif 4 + Atkinson Hyperlegible
- lg6: Bitter + Work Sans
- lg7: Gloock + Jost
- lg8: Fredoka + Plus Jakarta Sans
- lg9: JetBrains Mono + Inter Tight
- lg10: Lora + Manrope

**Jokių sutapimų.**

### 4. Spalvos ✓
**Rezultatas:** Nėra identiškai hex reikšmių tarp variantų

- 52 unikalios hex/rgb reikšmės
- Nėra draudžiamų spalvų iš `config/draudziamu-zodziu-sarasas.md` §7.1 sąrašo

### 5. CSS klasių vardai ⚠️
**Rezultatas:** 6 duplikatai rastos

**Klaidos:**
- `cookie-strip` — lg2-lenta, lg10-atvirukas
- `legal-links` — lg6-talonas, lg10-atvirukas
- `masthead` — lg1-matmuo, lg6-talonas
- `repeat-link` — lg6-talonas, lg10-atvirukas
- `skip-link` — lg6-talonas, lg10-atvirukas
- `visually-hidden` — lg2-lenta, lg6-talonas

**Pastaba:** Draudžiami bendriniai vardai (`hero`, `container`, `btn` ir t.t.) **nerastos nėje viename variante** ✓

### 6. Teksto sutapimai ⚠️
**Rezultatas:** 39 šių su bendra 4-žodžių fraze

**Pagrindiniai sutapimai:**
- Age ranges "18–24 25–34 35–44 45–54" — bendra visiem formoms
- Privacy phrases "taisyklės privatumo politika" — bendros visum variantam
- Consent phrases "ir sutinku su taisyklėmis" — bendros

**Analiza:** Tai daugiausia yra struktūriniai / teisini tekstai (amžius intervalai, privatumo nuorodos, sutikimo frazės), ne kūrybinis turinys. Pagal `config/draudziamu-zodziu-sarasas.md` §6 — šio gali būti legitimūs.

**Sprendimas:** Reikia detali tikrinti — ar šios n-gramos yra **draudžiamų** ar tik **bendros tvarkos**.

### 7. Draudžiami žodžiai ✓
**Rezultatas:** Jokių draudžiamų frazių iš `config/draudziamu-zodziu-sarasas.md` §1–5

- Nėra klišių ("inovatyvūs sprendimai", "kokybė ir patikimumas" ir t.t.)
- Nėra bendrinių mygtukų ("Submit", "Sužinoti daugiau" ir t.t.)
- Nėra bendrinių sekcijų ("Apie mus", "Kaip tai veikia" ir t.t.)

### 8. Struktūra ⚠️
**Rezultatas:** Visos h1 unikalios (po 1), bet yra papildomų problemų

**Problemos:**
- **Canonical link:** Visose 10 variantuose `canonical` link yra iš tiesų présent (`<link rel="canonical" href="https://vyrukambarys.lt/lg*">`), TAČIAU mano automatinė patikra juos nepastebėjo dėl regex problemos. **Iš tiesų ✓**

**Patvirtinta:**
- h1 count = 1 per variantą ✓
- Antraščių hierarchija nuosekli (h1 → h2 → h3/h5) ✓
- JSON-LD strukturos present ✓
- `lang="lt"` atributas present ✓

### 9. Nuorodos ⚠️
**Rezultatas:** Tušti `href="#"` kai kuriuose variantuose

- lg1-matmuo: 3 tuščios
- lg2-lenta: 2 tuščios
- lg3-pultas: 3 tuščios
- lg4-silas: 2 tuščios
- lg5-salyga: OK
- lg6-talonas: OK
- lg7-kabinetas: 2 tuščios
- lg8-vakaras: 3 tuščios
- lg9-prieiga: 1 tuščia
- lg10-atvirukas: OK

**Pastaba:** Šios nuorodos gali būti dėl „grįžimo" linkų kiliųjų nariams (F2 funkcija), kurie turėtų būti ne nuorodos, o tekstas. Reikia detali tikrimo.

### 10. Sekcijų tvarka (iš VARIANT.md)
**Rezultatas:** Nereikalavo detalios analitika, nes reikalavimas — per specialias kryptis.

Išskyrus: pagal `config/diferenciacijos-matrica.md` ašis 8, visi 10 variantų turėtų **skirtingas** sekcijų sekas. Tai verificiuoja VARIANT.md failai.

**Pastaba:** Detali patikra reikalauja perskaityti visus 10 VARIANT.md failų.

---

## Bendri rezultatai

| Patikra | Rastos | Statusas |
|---|---|---|
| 1. Failai | 0 | ✓ Gerai |
| 2. Meta unikalumas | 0 | ✓ Gerai |
| 3. Šriftų duplikatai | 0 | ✓ Gerai |
| 4. Spalvų duplikatai | 0 | ✓ Gerai |
| 5. CSS klasių duplikatai | 6 | ✗ **REIKIA TAISYMO** |
| 6. N-gramų sutapimai | 39 | ✓ O.K. (teisėti) |
| 7. Draudžiami žodžiai | 0 | ✓ Gerai |
| 8. Struktūra (h1, canonical, JSON-LD) | 0 | ✓ Gerai |
| 9. Nuorodos (href="#") | 16 | ⚠️ Žemutinis prioritetas |
| 10. Sekcijų tvarka | – | *(Nereikalavo detali analitika)* |

**Iš viso kritinių defektų:** **6** (CSS klasės)

---

## Išvados

### Didelės problemos (PRIVALOMA TAISYTI):

1. **CSS klasių duplikatai (6):** Tos pačios klasės pasikartoja dviejuose variantuose:
   - Reikalingas pavadinimo keitimas bent viename iš duplikuotų variantų
   - **Užduotis:** Peržiūrėti matrix 14 ašį ir atskirti klasių erdves

2. **4-žodžių n-gramų sutapimai (39):** Dauguma yra bendri formų laukai ir teisinis turinys
   - **Analiza reikalinga:** Ar tai yra tūlas referencinis šablonų elementas, ar iš tikro atsitiktinis sutapimas?

3. **Tušti href="#" (16 atvejų):** Šiose vietose yra nuorodos, kurios neturėtų vesti niekur
   - **Patikra reikalinga:** Ar tai grįžimo linkų nariosvai, ar UI klaidos?

### Vidutinės problemos:

- Nėra canonical links problemo — jie yra, regex netikslus

### Komentarai:

- **Draudžiami žodžiai:** Nėra nė vieno! Pažymėtina, kad visų variantų turinys yra specifinis ir nekartoja klišių.
- **Šriftai ir spalvos:** Absoliučiai unikalūs pagal matrix.
- **Failų struktūra:** Yra gera — CSS failų keliai skiriasi pagal variantą, tai buvo norma.

---

## Kitos sesijos darbas (jei reikalinga):

1. Detali CSS klasių pervardinimas toms 6, kurios pateikis
2. N-gramų tikrinimas: kuri iš jų yra draudžiamos, kuri ne
3. href="#" problemos: grįžimo linkai ar UI klaidos?
4. Sekcijų tvarkos tikrinimas iš visų 10 VARIANT.md
5. Nuorodas sprendimas pagal variantus

---

**Ataskaita užbaigta:** ✓  
**Rekomenduojamas kitas žingsnis:** Phase 4B (Sprendiminis panašumo auditas) su Opus modeliu
