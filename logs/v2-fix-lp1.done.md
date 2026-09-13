# v2 lp1 — taikinis taisymas (pagal qa/v2-patikra-batch1.md)

## 1. Avatarai pridėti antroje sekcijoje
Pasirinkta (b) iš dviejų pasiūlymų: juosta „kas jau žemėlapyje“ virš registracijos formos
(`index.html`, sekcija `#registracija`).

- Naujas blokas `.lp1-shell.lp1-signup__presence` įterptas prieš esamą `.lp1-signup__inner`
  (pati `<section id="registracija">`, forma, laukai, mygtukas, tvarka — nepaliesti).
- 6 mini-avatarai (36px, sutampantys per `margin-left:-10px`), naudojantys TĄ PATĮ komponentą
  (`.lp1-avatar`, `--lp1-c1/--lp1-c2` variantus `--2,3,6,7,9,10`, `.lp1-avatar__initial`,
  `.lp1-avatar__grain`) — jokios naujos vizualinės sistemos, tik esamos pritaikymas mažesniu dydžiu.
- `+37` skaitiklis šalia (tekstas, ne avataras).
- Vienas naujas trumpas antraštės sakinys: „Šią savaitę žemėlapyje jau atsirado nauji žymekliai“ —
  leidžiama pagal užduoties išlygą (trumpa naujos juostos etiketė).
- Visa `<ul class="lp1-presence__avatars">` pažymėta `aria-hidden="true"` (dekoratyvi, informacija
  jau perteikta tekstiniu sakiniu virš jos — nėra dubliuoto ar orphan interaktyvaus turinio).
- CSS: naujas blokas `.lp1-signup__presence / .lp1-presence__label / .lp1-presence__avatars /
  .lp1-presence__avatar / .lp1-presence__more` (`assets/style.css`, prieš „Signup“ skyrių) — ~30 eilučių,
  jokių naujų spalvų kintamųjų, viskas per esamus `--lp1-*` tokenus.

Rezultatas: avatarų sistema dabar matoma DVIEJOSE sekcijose (žemėlapis + registracijos juosta),
atitinka QA priėmimo kriterijų „>1 sekcija“.

## 2. Reduced-motion bug (style.css)
Buvęs bendras selektorius:
```
.lp1-pin, .lp1-match, .lp1-match__online {
  animation: none !important;
  opacity: 1 !important;
  transform: translate(-50%, -50%) !important;
}
```
`.lp1-match__online` išimtas iš šio sąrašo (jo bazinis pozicionavimas yra `right:4px;bottom:4px`
BE transform — bendras `translate(-50%,-50%)` jį stumdavo ~8px į vidų, ant avataro).
Dabar:
```
.lp1-pin, .lp1-match { animation:none!important; opacity:1!important; transform:translate(-50%,-50%)!important; }
.lp1-match__online { animation: none !important; }
```
Online taškas su reduced-motion lieka savo tikroje vietoje (right:4px/bottom:4px), tik nustoja pulsuoti.

## Kas NEPALIESTA (patikrinta)
- Žemėlapio SVG, forma, sekcijų tvarka, paletė — nekeista.
- Tracking žymė `<!-- tracking: lp1_signup_submit -->` (vienintelė šiame faile) — nepakitusi, ta pati vieta.
- Jokių GTM/Meta Pixel/OpenAI pixel elementų faile nėra (dar neįdiegti šiame variante) — grep patvirtino.
- `diff` prieš/po (backup `/private/tmp/.../scratchpad/lp1-backup/`) parodė TIK ketintus pakeitimus:
  12 naujų eilučių `index.html` (presence juosta) ir 2 CSS blokai (`assets/style.css`) — HTML `<div>`
  ir CSS `{}` skaičiai subalansuoti abiejuose failuose.

## Failai
- `variacijosv2/lp1/index.html`
- `variacijosv2/lp1/assets/style.css`
