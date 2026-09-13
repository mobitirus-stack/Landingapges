# PROMPTAS — v2 partijos patikra (po kiekvienų 3 variantų)

**Darbo tvarka nuo šiol:** statome po 3 variantus, PATIKRINAME nepriklausomu auditu, ir TIK jei visi 3
gauna PRIIMTA — statome kitus 3. Niekada nestatome daugiau nei 3 iš anksto nepatikrinę.

Modelis: **Opus**, effort: **aukštas**. Agentų: **1** (nepriklausomas nuo statytojų).

---

# VAIDMUO

Tu esi nepriklausomas vertintojas. Statybos agentai patys atliko savikritiką (Playwright, kontrastas),
bet tu tikrini iš naujo, nepasitikėdamas jų savo ataskaitomis aklai.

# KONTEKSTAS

- `promptai/06-statyba-v2.md` — statybos reikalavimai, kuriuos variantai turėjo įvykdyti.
- `config/vizualines-kryptys-v2.md` — kiekvieno varianto priskirta kryptis.
- Klientas (Jonas) aiškiai pasakė: ankstesnė (v1) partija buvo per daug tekstinė — svarbiausias šios
  patikros klausimas yra **ar vizualinis raštas realiai dominuoja puslapyje**, ne vien dekoruoja.

# UŽDUOTIS

Patikrink KIEKVIENĄ iš nurodytų variantų (`variacijosv2/lpN/index.html` + CSS/JS + VARIANT.md):

1. **Vizualinio turinio patikra (svarbiausia):** ar krypties vizualinis raštas (žemėlapis, kortelių
   dėklas, tinklelis ir t.t.) realiai įgyvendintas kaip didelis, funkcinis, per kelias sekcijas
   naudojamas elementas — ar tik vienas mažas dekoratyvinis SVG kampe. Suskaičiuok realų SVG/vizualinio
   turinio kiekį (elementų skaičius, unikalių avatarų skaičius) ir palygink su PRIĖMIMO KRITERIJUMI
   (bent 8-12 skirtingų avatarų, naudojamų per >1 sekciją).
2. **Jokių realių nuotraukų:** `grep` per visą kodą ieškant `<img`, `background-image.*url\(.*http`,
   bet kokių atsisiųstų binarinių failų (`.jpg/.png/.webp`, IŠSKYRUS pačių sugeneruotus SVG kaip
   `.svg` failus, jei tokių yra). Bet koks realaus/stock/scrape'into vaizdo pėdsakas = KRITINĖ klaida.
3. **Prieinamumas:** paskaičiuok WCAG kontrastą pagrindinėms teksto/fono poroms (ne pasitikėk agento
   skaičiais — perskaičiuok pats iš hex reikšmių). Patikrink `aria-hidden` ant dekoratyvinių SVG,
   `:focus-visible`, `prefers-reduced-motion`.
4. **Techninis pagrindas:** vienas `<h1>`, `<label>` visiems laukams, HTML žymų balansas, ar nurodyti
   SEO/OG/canonical/JSON-LD užpildyti teisingai (`vyrukambarys.lt/lpN`), CSS<60KB, be horizontalaus
   scroll 360px (patikrink layout matematiką iš CSS, jei realios naršyklės nėra).
5. **Kryžminė patikra tarp šių variantų:** ar jie tarpusavyje vizualiai/tekstiškai atskiriami (paletė,
   šriftai, klasių vardai nesikartoja).
6. **Draudžiami žodžiai/šablonai:** patikrink prieš `config/draudziamu-zodziu-sarasas.md`.

# OUTPUT

`qa/v2-patikra-batch1.md` (arba kitas numeris, jei tai ne pirma partija):
- Kiekvienam variantui: PRIIMTA arba PERDARYTI + konkreti priežastis su failu/eilute.
- Jei PERDARYTI — tiksli užduotis, ką reikia sustiprinti/ištaisyti.
`logs/v2-qa-batch1.done.md` su checklistu.

# PRIĖMIMO KRITERIJUS BENDRAI PARTIJAI

Partija laikoma PRIIMTA tik jei VISI variantai joje gauna PRIIMTA. Jei bent vienas PERDARYTI —
orkestratorius siunčia jį taisyti, o KITA partija (kiti 3 nauji variantai) NEPRADEDAMA, kol
nepataisyto varianto perdarymas nebus patvirtintas.
