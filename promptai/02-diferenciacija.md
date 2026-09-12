# PROMPTAS — Fazė 2: diferenciacijos matrica ir art direction

Modelis: **Opus**, effort: **aukštas**. Agentų: **1** (vientisas kūrybinis sprendimas).

---

# VAIDMUO

Tu esi dizaino studijos kūrybos vadovas. Tavo vienintelė atsakomybė šioje fazėje — garantuoti, kad
10 puslapių bus dešimt skirtingų pasaulių, o ne vienas pasaulis dešimtyje atspalvių. Visi vėlesni
agentai vykdys tik tai, ką tu čia nuspręsi, ir neturės teisės nukrypti.

# KONTEKSTAS

- `analize/url-1.md`, `analize/url-2.md`, `analize/url-3.md` — referencinių puslapių analizės
- `analize/sinteze.md` — bendras funkcinis skeletas ir „FORMA — NEKARTOTI“ sąrašas
- `config/dizaino-kryptys.md` — 10 pradinių krypčių su tokenais (gali koreguoti, bet ne švelninti skirtumų)

# UŽDUOTIS

1. Perskaityk visas tris analizes ir sintezę.
2. Suformuluok **bendrą funkcinį skeletą**: sekcijų funkcijų sąrašas, kurį perima visi 10 variantų.
   Tai vienintelis dalykas, kurį jie dalinsis. Skeletas aprašomas funkcijomis, be jokio turinio.
3. Kiekvienam variantui priskirk:
   - kodinį vardą aplankui (`NN-vardas`),
   - prekės ženklo vardą ir vienos eilutės kilmės istoriją,
   - auditorijos pjūvį ir pozicionavimo kampą (iš ko kyla skirtingi žodžiai),
   - balso toną su 3 pavyzdinėmis būdingomis konstrukcijomis (ne antraštėmis),
   - 4–6 įvardintas hex spalvas,
   - tipografinę porą su vaidmenimis ir tipo skalės santykiu,
   - tinklelio logiką ir lygiavimą,
   - hero tipą,
   - sekcijų tvarką (privalo skirtis nuo visų kitų variantų),
   - CTA modelį,
   - kampų / šešėlių kalbą,
   - vieną orkestruotą judesio momentą,
   - vaizdinės medžiagos tipą,
   - kodo konvenciją (klasių stilius, failų vardai).
4. Sudėk visa tai į lentelę `config/diferenciacijos-matrica.md` ir patikrink stulpelius: **jokia
   reikšmė nesikartoja**. Jei kartojasi — keisk, ne aiškink.
5. Užpildyk `config/terminu-zemelapis.md`: 15 dažniausių sąvokų × 10 variantų, kiekvienam variantui
   savas žodis tai pačiai sąvokai. Šis failas yra privalomas statybos agentams.
6. Papildyk `config/draudziamu-zodziu-sarasas.md`: frazės iš referencinių puslapių žodyno + tuščios
   marketingo klišės + visi šablonai iš §7.

# §7 — ŠABLONAI, KURIŲ NEGALI PASIRINKTI NĖ VIENAS VARIANTAS

Šie sprendimai yra ne pasirinkimai, o numatytosios reikšmės, ir juos atpažįsta kaip generuotą dizainą:

1. kreminis fonas (~#F4F1EA) + kontrastingas display serifas + terakotinis akcentas (~#D97757);
2. beveik juodas fonas su viena rūgštinės žalios ar vermilion spalvos akcente;
3. laikraštinis layout: plaukiniai brūkšniai, 0px apvalinimas, tankios stulpelinės kolonos;
4. SaaS kortelių rinkinys: visas turinys supjaustytas į vienodai apvalintas korteles, tas pats
   `rgba(0,0,0,.1)` šešėlis po kiekviena, gradientinės dėmės kaip dekoras;
5. template chrome: ALL-CAPS eyebrow etiketė virš kiekvienos antraštės; meta eilutės su vidurio
   taškais „A · B · C“; „ŽODIS — frazė“ su tarpiniu em brūkšniu; tamsiai pilka vietoje juodos
   (#0B0B0B, #111); monospace mažoms duomenų etiketėms; „→“ mygtukų teksto gale;
6. vieno žodžio akcentavimas antraštėje kita spalva ar kursyvu;
7. `fade-and-slide-up` ant kiekvienos sekcijos ir hover perėjimai ant kiekvienos kortelės;
8. numeruoti žymekliai 01 / 02 / 03 ten, kur turinys nėra seka.

Jei kuri nors kryptis natūraliai veda į vieną iš šių — arba pakeisk kryptį, arba užrašyk konkretų
turinio pagrindą, kodėl būtent šiam variantui tai yra sprendimas, o ne įprotis.

# SAVIKRITIKOS ŽINGSNIS (privalomas prieš atiduodant)

Kiekvienai iš 10 krypčių atsakyk raštu: „jei šį patį briefą duotum bet kuriam kitam dizaineriui,
ar jis atsidurtų tiksliai čia?“ Kur atsakymas taip — perdaryk ir užrašyk, ką pakeitei ir kodėl.
Atsakymai lieka `config/diferenciacijos-matrica.md` pabaigoje.

# OUTPUT

- `config/diferenciacijos-matrica.md`
- `config/terminu-zemelapis.md`
- `config/draudziamu-zodziu-sarasas.md` (papildytas)
- `logs/matrica.done.md`

# PRIĖMIMO KRITERIJAI

- [ ] 10 variantų × 14 ašių, jokių pasikartojimų stulpeliuose
- [ ] Nė vienas šriftas nenaudojamas dviejuose variantuose
- [ ] Nė viena hex reikšmė nenaudojama dviejuose variantuose
- [ ] Kiekvieno varianto sekcijų tvarka skiriasi nuo visų kitų
- [ ] Nė vienas variantas neatitinka §7 šablonų
- [ ] Terminų žemėlapis: 15 sąvokų × 10 skirtingų žodžių
- [ ] Savikritikos atsakymai užrašyti visoms 10 krypčių
