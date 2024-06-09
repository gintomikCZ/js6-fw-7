const data = [
  `This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`,
  `Ženy, které se chtějí během mateřství postupně vracet do práce, to mají v Česku složité. Do tří let věku dítěte jich podle statistik pracuje takřka nejméně v Evropě. Redakce iDNES.cz přináší rozdílné příběhy matek, které se rozhodly začít pracovat již během prvních let života svých dětí. Překážky bývají na straně státu i zaměstnavatelů. Změnit to má novela zákoníku práce.
Zdroj: https://www.idnes.cz/zpravy/domaci/zeny-pribehy-navrat-do-prace-materska-dovolena-problemy.A240604_092300_domaci_nema`,
  `!ronice F.se dcera narodila v pozdějším věku, před mateřskou tak stihla udělat poměrně dobrou kariéru jako personální manažerka. „Jako starší maminka jsem neměla pocit, že mi něco utíká, byla jsem ráda za malý zázrak,“ popisuje v rozhovoru pro iDNES.cz.Už před návratem do práce ale věděla, že na manažerskou pozici zpět nechce.
    Zdroj: https://www.idnes.cz/zpravy/domaci/zeny-pribehy-navrat-do-prace-materska-dovolena-problemy.A240604_092300_domaci_nema`
]


export const getData = (index) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data[index])
    }, 1000)
  })
}