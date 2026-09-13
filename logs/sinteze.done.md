# sinteze — darbo žurnalas

**Agentas:** sintezė (fazė 1, baigiamoji dalis)
**Data:** 2026-09-12
**Įvestis:** `analize/url-1.md`, `analize/url-2.md`, `analize/url-3.md`, `CLAUDE.md`, `promptai/00-MASTER.md`
**Output:** `analize/sinteze.md`

---

## Priėmimo kriterijai

- [x] **Funkcinis skeletas aprašytas tik funkcijomis, ne turiniu ar dizainu**
      17 funkcijų (F1–F17) + 8 struktūrinės taisyklės. Kiekviena funkcija formuluota kaip darbas, kurį
      atlieka puslapis („uždaryti prieštaravimą X“, „nustatyti įsipareigojimo dydį“), be jokių
      konkrečių formuluočių, spalvų, šriftų ar išdėstymo nurodymų. Forma, vieta ir eiliškumas
      eksplicitiškai palikti laisvi ir privalomai skirtingi kiekviename variante.

- [x] **FORMA — NEKARTOJAME sąrašas sujungia visus 3 šaltinius be dublikatų, ≥40 punktų**
      **67 punktai**, suskirstyti į 6 kategorijas: spalvos (14), šriftai ir tipografija (7),
      layout (18), vizualiniai motyvai ir elgsena (13), terminija (8), CTA modeliai (7).
      Šaltinių 3 × 20 = 60 punktų buvo sulieti (persidengimai — spalvos, šriftų pora, žingsninė
      forma, sticky antraštė, slapukų kortelė, kalbos perjungiklis, atitikties ženkliukai) ir
      papildyti punktais, kurie šaltinių 7 skyriuose nebuvo išskirti, bet aprašyti jų 4–5 skyriuose
      (rėmelių atspalviai, gradiento galai, praleisti antraščių lygiai, mobilus ženklo suspaudimo
      modelis, „be rastrinių vaizdų“ kaip signatūra).
      Papildyta bendra taisykle: draudžiamas ne tik atskiras punktas, bet ir atpažįstamas jų derinys.

- [x] **3 pozicionavimo kampai aiškiai skiriasi vienas nuo kito**
      A (skaidrumas ir įrodymas) / B (kontrolė ir diskretiškumas) / C (rezultatas ir momentumas).
      Kiekvienas paima kitą neuždarytą prieštaravimą iš šaltinių 6 skyrių, kitą auditorijos pjūvį ir
      remiasi kitomis skeleto funkcijomis (A → F5/F6/F8; B → F9/F7/F16; C → F6/F15/F17).
      Kiekviename kampo aprašyme įrašyta, kuo jis skiriasi nuo kitų dviejų, įskaitant priešpriešą
      dėl skubos elemento (C jį naudoja, B jį atmeta kaip spaudimą, A — kaip neįrodomą).

- [x] **Jokios 4+ žodžių citatos iš šaltinių**
      Patikrinta mechaniškai: normalizavus tekstą (mažosios raidės, nuimti kodo intarpai ir skyryba)
      ir palyginus visus 4 žodžių n-gramus su trimis šaltinių failais — **0 sutapimų** su kiekvienu
      iš `url-1.md`, `url-2.md`, `url-3.md`. Pirmasis juodraštis turėjo 122 sutapimus (neišvengiama
      rašant draudimų sąrašą tiems patiems objektams); visi perrašyti ir patikra pakartota.

---

## Pastabos kitoms fazėms

1. **Fazei 2 (diferenciacijos matrica):** Dalies 2 sąrašas pilnai perkeliamas į
   `config/draudziamu-zodziu-sarasas.md` §7 — jis ten šiuo metu tuščias, pažymėtas kaip fazės 2
   agento užduotis.
2. **Kampų ir variantų santykis:** kampai yra 3, variantai — 10, todėl kiekvienas kampas kartojasi.
   Tą patį kampą gavę variantai privalo skirtis visomis 14 matricos ašių ir skirtingais terminais
   (`config/terminu-zemelapis.md`), kad kampo kartojimas netaptų atpažįstamu panašumu 4B audite.
3. **Kodėl F8 (pinigų klausimas) padarytas privalomu:** nė vienas iš trijų šaltinių jo neturi, bet
   tai vienintelis prieštaravimas, kurio kaina krenta **po** konversijos — Jonas moka už paspaudimą,
   o prarastas pasitikėjimas po registracijos sudegina ir paspaudimą, ir vartotoją. Todėl tai
   vertinta kaip konversijų, ne kaip kodo grožio, sprendimas.
4. **Kodėl F4 gavo sąlygą „mechanizmas negali sugriūti“:** `url-1.md` 6.1 užfiksavo gyvą skaitiklį,
   rodantį nulį — socialinio įrodymo įrankis realiai veikė prieš save. Todėl draudžiamas ne skaitiklis
   kaip idėja, o bet koks pasitikėjimo mechanizmas be apatinės ribos ar atsarginės būsenos.
5. **Nespręsta sąmoningai:** jokia paletė, šriftas, dizaino kryptis ar jų priskyrimas variantams —
   tai fazės 2 kompetencija pagal `promptai/00-MASTER.md`.
