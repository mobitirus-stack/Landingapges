# fix-02-r2.done — lg2-lenta, antras taisymo ciklas (QA §R.7.1)

**Failas:** `variacijos/lg2-lenta/index.html`
**Pagrindas:** `qa/panasumo-auditas.md` §R.7.0 + §R.7.1, `config/diferenciacijos-matrica.md` DALIS 3 (lg2 kortelė),
`config/terminu-zemelapis.md` stulpelis 2.

## Pakeista — 2 vietos (3 eilutės), tiksliai tos, kurios nurodytos §R.7.1

| Eil. | Kas | Buvo | Tapo |
|---|---|---|---|
| 82 | F5 sakinys | „Kiekvieną naujai iškabintą lapelį prieš paskelbdami valome: tuščią, pasikartojantį ar akivaizdžiai netikrą — nuimame, ir jis lentoje nepasirodo.“ | „Tuščias, pasikartojantis ar akivaizdžiai netikras lapelis lentoje neprikimba. Kabo tik tai, kas realu.“ |
| 138 | DUK klausimas | „Ar tai tikri žmonės, ne robotai?“ | „Kas atsitinka su netikru lapeliu?“ |
| 139 | DUK atsakymas | „Kiekvieną lapelį valome prieš iškabindami — tuščias ar pasikartojantis į lentą nepatenka.“ | „Nepasirodo. Padirbtas vardas, dublis ar beprasmis tekstas iš lentos iškrenta savaime.“ |

## Kaip įvykdyta pagal §R.7.1 nurodymus

- **eil. 82** — „kiekvieną … prieš … valome“ griaučiai išmesti visai. Sakinys perrašytas iš **rezultato**
  pusės (ne proceso): pasakoma, kas *nekimba* lentoje, o ne kas *daroma* prieš paskelbimą. Naudotas tas pats
  veiksmas→pasekmė ritmas be tarpinių žodžių, koks jau veikia lg2 sakinyje „Netinka — nuimk lapelį, ir jo
  nebėra.“ Nei žodžio „prieš“, nei žodžio „kiekvieną“, nei veiksmažodžio „valome“ nebeliko.
- **eil. 139** — ta pati mintis (netikras turinys lentoje neatsiranda), bet **kitais žodžiais** nei eil. 82:
  kita leksika („padirbtas vardas“, „dublis“, „beprasmis tekstas“, „iškrenta savaime“ vietoj „neprikimba“ /
  „kabo tik tai, kas realu“), kita sakinio forma (trumpas faktas + sąrašas priežasčių, o ne dvi jungtos
  savarankiškos dalys). Puslapyje šis sakinio judesys nebesikartoja pažodžiui.
- **eil. 138** — klausimas perrašytas be „X, ne Y“ formos. Naujas klausimas eina per tai, kas atsitinka
  netikram lapeliui (audito pasiūlytas kelias), o ne per priešpriešą „žmonės / robotai“. Atsakymas (eil. 139)
  pakeistas kartu, kad atitiktų naują klausimą.

## Patvirtinimas — „kiekvieną … prieš … tikriname/valome/perskaito“ griaučių nebeliko

- `grep -n "iekvien"` visame faile: liko tik eil. 121 („Kiekviename rajone — bent 15 aktyvių lapelių…“) —
  tai F4 kiekybinio aktyvumo sekcija, nesusijusi su moderavimu, į §R.7.1 užduotį neįeina ir nebuvo liesta.
- `grep -n "rieš"` visame faile: **0 rezultatų** — žodžio „prieš“ faile nebeliko visai.
- „ne robotai“ / „ne robotu“ paieška: **0 rezultatų**.
- Vadinasi, S2b sakinio judesys („kiekvieną … prieš … valome/tikriname/perskaito … rankomis“) ir S2a
  priešprieša („žmogus, ne robotas“) lg2 faile pilnai pašalinti.

## Kas NEPALIESTA (patikrinta diff'u)

- `styles/main.css` — neatidarytas, 0 pakeitimų.
- Eil. 113 (F8) ir eil. 127/147 (F9) — nepakeistos, tokios pat kaip po fix-02.
- JS blokas, forma, validatoriai, modalo logika, slapukų logika — identiški.
- Sekcijų tvarka, `id`/`name`/`aria-*`, klasės, spalvos, šriftai — nepakeisti.
- Visos **8** `<!-- tracking: ... -->` / `// tracking: ...` žymos liko tose pačiose vietose, tais pačiais
  pavadinimais: `cta_open_modal_hero`, `cta_open_modal_repeat`, `cta_open_modal_faq`,
  `cookie_consent_accept`, `form_submit_attempt` (HTML komentaras), `modal_open`, `form_submit_attempt`
  (JS komentaras), `form_submit_success`.
- `diff` prieš/po (pilnas failas) rodo **tiktai** dvi pakeistas `<p>` eilutes ir vieną `<summary>` eilutę —
  nieko daugiau nepasikeitė nė vienu baitu.
- Kiti `variacijos/lgN*` katalogai neskaityti ir neliesti.
