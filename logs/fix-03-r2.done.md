# fix-03-r2 — lg3-pultas antras taisymo ciklas (R.7.2)

**Failas:** `variacijos/lg3-pultas/index.html` — vienintelis liestas failas.
**Pagrindas:** `qa/panasumo-auditas.md` R.7.0 + R.7.2.

## Kas pakeista

1. **eil. ~257 (DUK „Ar reikės mokėti už kanalą?“) — N1 pažeidimas pašalintas.**
   Buvo: „Ne. Rodmuo „Mokamas lygis“ aukščiau rodo „nėra“ — **jei tai pasikeis, pasikeis ir jis**. Gali įjungti kanalą matydamas šį rodmenį jau dabar.“
   Dabar: „Ne. Rodmuo aukščiau rodo 0 € / mėn. Gali įjungti kanalą matydamas šį rodmenį jau dabar.“
   Išmestas visas lg1 parašo šalutinis sakinys apie ateitį; liko tik nuoroda į rodmenį.

2. **eil. ~229–232 (F8 `dt`/`dd` „Mokamas lygis“ / „Šiuo metu nėra“) — N2 pažeidimas pašalintas.**
   Etiketė „Mokamas lygis“ (priklauso lg1/lg9) pašalinta. Vietoje vienos poros dabar dvi eilutės
   toje pačioje `dl.pultas-timeline`, skalės/rodmens metafora:
   - `dt` „Rodmuo“ / `dd` „0 € / mėn.“ (skaičius su vienetu)
   - `dt` „Kai keičiasi“ / `dd` „Nauja suma atsinaujina čia pat, prie šio rodmens — kitur jos ieškoti nereikės.“
   FAQ atsakymas (p. 1) suderintas su nauja „Rodmuo“ etikete.

3. **eil. ~195–204 (F9 „Rodymo lygis“) — dvi S3 stovyklos pakeistos viena trijų pakopų `dl`.**
   Buvo: `dt` „Rodymo lygis: vieša“ / „Rodymo lygis: tik prietaise“ su lauku sąrašu antroje `dd`.
   Dabar: viena `dl.pultas-timeline` su trimis didėjančio rodomumo pakopomis:
   - „1/3 — tik zona“ → „Kitiems eteryje matoma tik plati zona.“
   - „2/3 — zona ir šaukinys“ → „Prisideda šaukinys — pagal jį tave atskirs nuo kitų tos pačios zonos.“
   - „3/3 — prietaise“ → „Likusi informacija matoma tik tau pačiam, prisijungus prie pulto.“
   Laukų sąrašas „grįžtamasis adresas, raktas, tiksli vietovė“ kaip atskira „niekada“ eilutė nebeliko.
   Sekantis sakinys „Rodymo lygį keiti bet kada nustatymuose…“ (eil. ~205) paliktas nepakeistas — juo
   dabar logiškai užbaigiama pakopų idėja.

## Kas NEKEISTA (patikrinta)

- `static/panel.css`, `static/panel.js` — nepaliesti (jokio failo modifikavimo).
- SVG skalės/rodyklės mechanika (`data-gauge`, `data-gauge-needle`, `data-gauge-readout`) — nepaliesta.
- `data-activity` reikšmės (89/76/71/58/63/46) — visos vietoje, nepaliestos.
- Visi 5 `pultas-hint` elementai — nepaliesti.
- eil. 49 „Jau abonentas? Prisijunk“ (S5, leista) — nepaliesta.
- eil. 208–220 (F5 „Stebėjimas“) — nepaliesta.
- Formos laukai (`name`, `id`, validacija, `aria-*`) — nepaliesti.
- `<!-- tracking: ... -->` žymos — abi vietoje: `channel_activated` (eil. 157) ir `cookie_choice`
  (eil. 301). Tracking ID/pavadinimai nepakeisti.
- Naujų CSS klasių nepridėta — naudotos tik esamos `pultas-timeline`, `pultas-timeline__row`, `dt`, `dd`.
- HTML balansas patikrintas skriptu: `div` 24/24, `dl` 4/4, `dt` 11/11, `dd` 11/11, `section` 9/9 —
  atitinka.

## Rezultatas

Visos trys R.7.2 užduotys atliktos. lg3 daugiau nebedalinasi F8/F9 sakinio judesiais su lg1/lg9:
„Mokamas lygis — nėra“ pora pakeista į skalės rodmenį su vienetu; dvi „vieša“/„tik prietaise“
stovyklos pakeistos į vieną 3 pakopų progresiją; N1 sąlyginis sakinys apie ateitį išmestas.
