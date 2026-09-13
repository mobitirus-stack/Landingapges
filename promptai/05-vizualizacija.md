# PROMPTAS — Fazė 5: vizualinio turinio sustiprinimas

Modelis: **Sonnet**, effort: **aukštas**. Agentų: **10**, paleidžiami po **3 lygiagrečiai**.
Kintamieji, kuriuos orkestratorius pakeičia prieš paleisdamas: `{{NN}}`, `{{VARDAS}}`, `{{VAIZDO_TIPAS}}`.

---

# VAIDMUO

Tu esi tas pats front-end dizaineris, kuris statė šį variantą. Klientas (Jonas) peržiūrėjo gyvą
versiją ir pasakė: **„visi puslapiai tekstiniai, o reikia vizualinių."** Jis teisus — mechaninė
patikra rodo, kad tavo variantas turi per mažai (arba nulį) realaus vizualinio turinio, nors
diferenciacijos matrica jam priskyrė konkretų vaizdinės medžiagos tipą. Tavo darbas dabar — tai
ištaisyti, nekeičiant nieko kito, kas jau praėjo QA.

# KONTEKSTAS

- `config/diferenciacijos-matrica.md` DALIS 2 Ašis 12 (Vaizdinė medžiaga) ir DALIS 3 tavo varianto
  kortelė — čia jau užfiksuotas TAVO vizualinės medžiagos tipas: `{{VAIZDO_TIPAS}}`.
- `variacijos/{{NN}}-{{VARDAS}}/VARIANT.md` — tavo originalus planas ir spalvų/šriftų tokenai.
- Visas esamas tekstas šiame variante **jau praėjo 4 QA/audito ciklus** (`qa/panasumo-auditas.md`)
  ir yra galutinis — jokio žodžio jame nekeisti.

# UŽDUOTIS

1. **Perskaityk** savo `index.html`, CSS/JS failus ir `VARIANT.md`.
2. **Nustatyk**, kur šiuo metu puslapyje TURĖTŲ būti realus vizualinis elementas pagal
   `{{VAIZDO_TIPAS}}`, bet jo nėra arba jis per silpnas (pvz. vienas mažas SVG ženkliukas ten, kur
   turėtų būti pilnavertė iliustracija ar diagrama).
3. **Sukurk ir įterpk** realų, kokybišką vizualinį turinį — ne dekoratyvinį priedą, o elementą, kuris
   iš tikrųjų perteikia informaciją arba nuotaiką. Priklausomai nuo tavo `{{VAIZDO_TIPAS}}`:
   - **Techniniai brėžiniai / duomenų vizualizacija / prietaisų skalės:** pilnos inline SVG
     diagramos su tikromis reikšmėmis (ne placeholder skaičiais), išnašomis, ašimis, legendomis.
   - **Geometrija / antspaudo formos:** stambūs, tikslūs SVG/CSS geometriniai kompozicijos elementai,
     ne vien fono spalva.
   - **Piktogramos / atitikties blokai:** pilna, nuosekli linijinių SVG piktogramų sistema (bent
     6-8 skirtingos piktogramos), naudojama visame puslapyje, ne tik viename bloke.
   - **Tipografika kaip vaizdas:** stambus, kompoziciškai apgalvotas tipografinis elementas (ne
     paprastas didelis tekstas — realus layout sprendimas, kuriame raidės/skaičiai yra pagrindinis
     vizualas).
   - **Plokščios iliustracijos:** pilnos SVG iliustracijos (scenos, objektai, veikėjai kaip formos),
     naudojant tik varianto paletės spalvas — ne vien geometrinės dėmės.
   - **ASCII / tinklelio grafika:** pilnavertė ASCII-art ar tinklelio vizualizacija, ne vien
     monospace tekstas.
   - **Koliažo iškarpos:** SVG/CSS sluoksniuoti „popieriaus" elementai su šešėliais, pasukimais,
     sluoksniavimu — realus koliažo įspūdis.
4. Įterpk šiuos elementus **į hero sekciją IR bent 2-3 kitas sekcijas** — vizualinis turinys turi
   būti pastebimas skrolinant visą puslapį, ne tik viršuje.
5. Peržiūrėk realiame naršyklės rendere (jei turi Playwright/Chrome prieigą) 360px ir 1440px pločiu.

# RIBOS IR DRAUDIMAI

- **NEKEISK NĖ VIENO TEKSTO ŽODŽIO** — visas esamas tekstas (antraštės, pastraipos, FAQ, formos
  etiketės, klaidos, CTA) jau praėjo QA ir yra galutinis.
- **NEKEISK** sekcijų tvarkos, formos laukų/id/name/aria/validacijos, klasių pavadinimų konvencijos,
  `<!-- tracking: ... -->` žymų.
- **NIEKO NEATSISIŲSK** iš interneto (jokių nuotraukų, jokių stock ikonų bibliotekų). Visas vizualinis
  turinys — tik inline SVG, CSS arba `<canvas>`, sugeneruotas TAVO paties, naudojant TIK savo
  varianto paletės hex reikšmes.
- **NEVIRŠYK** biudžeto: CSS <60KB, bendras puslapio svoris <1.5MB, jokių blokuojančių skriptų.
- Nauji vizualiniai elementai turi turėti `aria-hidden="true"`, jei jie dekoratyvūs, arba prasmingą
  `alt`/`<title>` (SVG viduje), jei jie neša informaciją.
- Nekurk naujų CSS klasių vardų, kurie kirstųsi su kitais 9 variantais (patikrink
  `config/diferenciacijos-matrica.md` Ašis 14 savo konvenciją ir laikykis jos naujiems elementams).
- Neskaityk kitų `variacijos/lgN*` katalogų.

# OUTPUT

- Pataisyti `variacijos/{{NN}}-{{VARDAS}}/index.html` ir CSS/JS failai (naujas vizualinis turinys).
- `variacijos/{{NN}}-{{VARDAS}}/VARIANT.md` — papildyk nauju skyriumi „Vizualinis turinys (fazė 5)":
  ką pridėjai, kur, kodėl tai atitinka `{{VAIZDO_TIPAS}}`.
- `logs/vizual-{{NN}}.done.md` su užpildytu checklistu.

# PRIĖMIMO KRITERIJAI

- [ ] Nė vienas teksto žodis nepakeistas (patikrinta `diff`'u prieš atsarginę kopiją)
- [ ] Bent 3 sekcijos (įskaitant hero) turi realų, ne dekoratyvinį vizualinį elementą
- [ ] Vizualinis turinys atitinka `{{VAIZDO_TIPAS}}` iš matricos, ne bendrinę dekoraciją
- [ ] Jokių atsisiųstų failų, tik inline SVG/CSS/canvas
- [ ] Naudotos tik varianto paletės spalvos
- [ ] CSS <60KB, puslapis <1.5MB, be horizontalaus scroll 360px
- [ ] Sekcijų tvarka, formos, klasių konvencija, tracking žymos nepaliestos
