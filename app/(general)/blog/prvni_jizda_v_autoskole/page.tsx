import BlogHeader from "@/app/(general)/blog/(components)/BlogHeader";
import Picture1 from "@/app/(general)/blog/nove_otazky_autoskola_2023/noveotazky2023.png";
import BlogArticleNav from "@/app/(general)/blog/(components)/BlogArticleNav";
import Image from "next/image";
import Picture2 from "./1509558.jpg";
export const metadata = {
    title: 'První jízda v autoškole',
    description: "Co očekávat při první jízdě v autoškole? Na jaké věci si dát pozor a čeho je zbytečné se obávat. ",
    alternates: {
        canonical: 'https://www.autoskolatest.cz/prvni_jizda_v_autoskole/',
    },
};
export default function Page(){
    return(
        <article>
            <BlogHeader title={"Co očekávat při první jízdě v autoškole?"} author={"Jakub Záloha"} date={"29.3"} timetoread={"3 minut"} imagesrc={Picture1} imagealt={"Co očekávat při první jízdě v autoškole"} />
            <BlogArticleNav array={[
                {title:"Úvod", link:"1"},
                {title:"Někdo má již před první jízdou zkušenosti", link:"2"},
                {title:"Co se naučíte při první jízdě", link:"3"},
                {title:"Základy", link:"4"},
                {title:"Nikdo není dokonalý", link:"5"},



            ]}/>

            <div className="px-4 max-w-2xl mx-auto">
                <section id="1">
                    <div>
                        <h2 className="pt-20 text-3xl md:text-3xl text-center font-semibold tracking-wide">První jízda v autoškole</h2>
                        <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">
                            Blíží se vaše první jízda v autoškole? Základem absolvování autoškoly je nejen znát teorii, ale
                            především se naučit správně řídit. Když se do autoškoly přihlásíte, čeká na vás první jízda ve
                            vozidle s instruktorem na vedlejším sedadle.
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Mnoho lidí má z první jízdy doslova panický strach,
                            ale zcela zbytečně. Nikdo neočekává, že za volant usedá zkušený závodník Formule 1, ale člověk,
                            který teprve bude sbírat <strong>řidičské zkušenosti.</strong>
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            První jízda není stresující, naučí vás pouze nezbytné
                            základy a nemusíte se obávat, že by vás instruktor poslal během špičky do <strong>městského provozu,</strong>
                            dokud by nevěděl, že jízdu v pořádku zvládnete.</p>
                        </p>
                    </div>
                </section>
                <section id="2">
                    <div>
                        <h2 className="pt-20 text-3xl md:text-3xl text-center font-semibold tracking-wide">Zkušený nebo nezkušený začátečník?</h2>
                        <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">
                            Někteří lidé se naučí řídit ještě před absolvováním autoškoly, obvykle tak, že je kamarád nebo
                            příbuzný vezme na polní cestu, prázdné parkoviště nebo jiné místo, kde se lze bezpečně učit.

                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Instruktor autoškoly se obvykle zeptá, jestli jste vůz někdy řídili. Pokud už vůz řídit umíte, může
                            začít první jízda v městském provozu.
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Pokud ne, nemáte se čeho obávat, instruktor vás vše naučí.
                            Pro první jízdu se zvolí místo, kde <strong>nehrozí žádné nebezpečí</strong> od okolních vozů a kde máte dostatek
                            klidu, abyste se mohli soustředit na činnosti, které souvisí s řízením. <a href="https://lukasovacesta.cz/blog-lukasovacesta/ze-zivota/jak-jsem-delal-autoskolu-prvni-jizda.html" className="text-blue-700 underline">(první jízda popsaná očima studenta)</a>
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Samotné <strong>jízdy v autoškole</strong>
                            vyžadují intenzivní trénink, proto je důležité si dělat řidičský průkaz tehdy, když na to máte
                            dostatek času, ideálně alespoň dvakrát týdně.
                        </p>
                    </div>
                </section>
                <section id="3">
                    <div>
                        <h2 className="pt-20 text-3xl md:text-3xl text-center font-semibold tracking-wide">Co se naučíte při první jízdě?</h2>
                        <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">
                            V první řadě se naučíte, co je potřeba udělat ještě <strong>před jízdou.</strong> První jízda by vás měla naučit
                            základy. Existují určité zvyky, které si musí každý řidič osvojit.

                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Když nasednete do jakéhokoliv
                            vozu, je třeba, abyste se zde cítili pohodlně a měli přehled o dění kolem vás.
                        </p>

                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Znamená to, že byste
                            si měli nastavit polohu sedadla tak, aby pro vás bylo komfortní, nastavili si zrcátka a připoutali se.
                        </p>
                        <ul className="max-w-xl leading-loose font-light tracking-wide list-disc px-4 text-blue-700 underline">
                            <li>
                                <a href="https://www.garaz.cz/clanek/jak-si-spravne-v-aute-nastavit-zpetna-zrcatka-21005784">Více o nastavení zrcátek</a>
                            </li>
                            <li>
                                <a href="https://www.havex.cz/cz/jak-si-spravne-a-bezpecne-nastavit-sedadlo-ve-voze-a-operku-hlavy#:~:text=Spr%C3%A1vn%C4%9B%20nastaven%C3%A9%20op%C4%9Bradlo%20m%C3%A1%20b%C3%BDt,je%20z%C3%A1p%C4%9Bst%C3%AD%20nepatrn%C4%9B%20za%20volantem.">Více o nastavení sedadla</a>
                            </li>
                            <li>
                                <a href="https://autoskolaopacne.cz/kontrola-vozidla-pred-jizdou/">Předvíjezdová kontrola</a>
                            </li>
                        </ul>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Naučíte se, že se máte před jízdou připoutat, nastartovat, zkontrolovat, co se děje kolem vás,
                            zapnout blinkr a teprve následně vyjet. Naučíte se správně točit volantem, řadit, používat blinkry,
                            stěrače, světla, spojku a pochopitelně brzdy.
                        </p>
                        <Image className="py-5" src={Picture2} alt={"Osoba nastavující zrcátko"} />
                    </div>
                </section>
                <section id="4">
                    <div>
                        <h2 className="pt-20 text-3xl md:text-3xl text-center font-semibold tracking-wide">Nejprve základy</h2>
                        <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">
                            Ostřílení řidiči považují tyto činnosti za samozřejmé, i vy si na ně postupně zvyknete, ale zpočátku
                            je třeba se na tyto činnosti plně soustředit a nezanedbat je.
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Když se zapomenete připoutat nebo se
                            nepodíváte před rozjezdem do zrcátka, je to problém.
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Když zvládnete tyto základy, teprve následně
                            začnou jízdy v ostrém provozu. Instruktor vedle vás není proto, aby vás znervózňoval, je to váš
                            pomocník a rádce, který je tu od toho, aby vám poradil v nesnázích a mohl kdykoliv zasáhnout.
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Nebojte se ho kdykoliv zeptat nebo ho požádat o pomoc.
                        </p>
                    </div>
                </section>
                <section id="5">
                    <div>
                        <h2 className="pt-20 text-3xl md:text-3xl text-center font-semibold tracking-wide">Nikdo není dokonalý</h2>
                        <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">
                            Pokud vám při první jízdě nic nepůjde a budete zmatkovat, je to zcela běžné. Poprvé sedíte ve
                            vozidle a je třeba si zvyknout na činnosti, které jsou pro vás nové.

                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Pokud se vám nepodaří hned
                            napoprvé nastartovat, spletete si pedály, zapomenete dát blinkr nebo zařadíte jinou rychlost,
                            nepropadejte panice, uklidněte se teprve následně pokračujte.
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            První jízda vás do jisté míry zbaví stresu a každá vaše další jízda bude plynulejší a vy budete mít
                            větší sebevědomí, odhad i cit pro jízdu. Jakmile se naučíte základní manipulaci s vozem, ježdění vás
                            začne bavit.
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Jízdy si následně můžete přehrávat i v hlavě a představovat si, co všechno máte udělat
                            před jízdou a jak s vozem řídit. Každá vaše další jízda vás posune blíže k získání řidičského
                            průkazu.
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Po první jízdě zajisté pochopíte, že váš strach byl zbytečný a že vůz není vaším
                            protivníkem, ale parťákem, který je tu proto, aby vám usnadnil život.
                        </p>
                        <p className="max-w-xl leading-loose font-light pt-2 tracking-wide">
                            Rady a tipy jak se uklidnit naleznete také v článku <a className="text-blue-700 underline" href="https://www.autoskolatest.cz/blog/jak_zvladnout_stres_pred_testem_z_autoskoly">jak zvládnout stres před testem z autoškoly</a>
                        </p>
                    </div>
                </section>
            </div>


        </article>
    )
}