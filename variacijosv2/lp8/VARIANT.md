# lp8 — „Taurė“

Skirtingai nuo lp4–lp6 (kortelė šone, greta figūros), lp8 registracijos kortelė iškyla **apačioje per visą plotį** kaip bottom-sheet modalas su suapvalintais viršutiniais kampais — didesniame ekrane ji lieka centruota ir ribota `max-width: 680px`, kad fone matytųsi nuotrauka iš abiejų pusių, o mobiliajame plečiasi beveik per visą plotį.

Tema pakeista iš nakties/miesto pažinčių į intymų vakaro vyno barą — bordo (`#7F1D1D`) ir žvakės gintaro (`#F59E0B`) paletė, `Playfair Display` + `Karla` šriftai (vietoj `Cormorant`/`Mulish`), prekės ženklas „Taurė“, visiškai perrašytas tekstas (antraštė, badge'ai, social proof).

Fono nuotraukos `background-position` sudėliota atskirais „bucket'ais“ pagal ekrano aukštį (ne tik plotį), nes `cover` mastelis portretinei nuotraukai plačiame/žemame lange priklauso nuo pločio — kiekvienas bucket'as (mobili portretinė, planšetė, itin žemas desktop ≤620px, vidutiniškai žemas 621–820px, įprastas 821–960px, didelis >960px) empiriškai patikrintas Playwright screenshot'ais, kad veidas visada liktų virš kortelės krašto. Itin žemam 901×550 atvejui papildomai sutankintas kortelės turinys (paslėpta poantraštė/sutikimo tekstas, sumažinti tarpai), kad ir kortelė, ir veidas tilptų be jokio slinkimo.
