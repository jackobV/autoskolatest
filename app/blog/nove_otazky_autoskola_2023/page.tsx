import Picture1 from "./noveotazky2023.png"
import Picture2 from "./1495.png"
import BlogHeader from "@/app/blog/(components)/BlogHeader";
import BlogArticleNav from "@/app/blog/(components)/BlogArticleNav";
import Image from "next/image";
export const metadata = {
    title: 'Nové otázky pro testy v autoškole 2023',
    description: "O čem je nová generace otázek použitá v závěrečné zkoušce? Zaměřuje se zejména na řidiče nákladních vozů, autobusů a kamionů. ",
    alternates: {
        canonical: 'https://www.autoskolatest.cz/jak_zvladnout_stres_pred_testem_z_autoskoly/',
    },
};
export default function Page(){

    return(
    <article>
        <BlogHeader title={"Nové otázky pro testy v autoškole 2023"} author={"Jakub Záloha"} date={"29.3"} timetoread={"3 minut"} imagesrc={Picture1} imagealt={"Nové otázky autoškola"} />
        <BlogArticleNav array={[
            {title:"Obecné informace", link:"1"},
            {title:"Tématické okruhy", link:"2"},
            {title:"Podmínky závěrečné zkoušky", link:"3"},


        ]}/>
        <div className="px-4 max-w-2xl mx-auto">
            <section id="1">
                <div>
                    <h2 className="pt-20 text-3xl md:text-3xl text-center font-semibold tracking-wide">Nové otázky jako reakce na nejčastější problémy</h2>
                    <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">
                        Kvůli postupnému vývoji dopravního značení a celkové situace na silnicích se od roku 2021 projekt
                        <a href="https://www.noveotazky.cz" className="text-blue-700 "> Nová generace testových otázek</a> zabírá aktualizací teoretického testu ministerstva dopravy.
                    </p>
                    <p className="max-w-xl leading-loose font-light pt-5 tracking-wide">
                        Otázky představené v roce 2023 navazují na snahu promítnout v dopravních testech časté problémy řidičů. Žák autoškoly se s aktualizovanou sbírkou otázek setká od 13.března 2023.
                    </p>
                    <p className="max-w-xl leading-loose font-light pt-5 tracking-wide">
                        V letošním roce bylo představeno celkem <strong>38 otázek</strong>, z nichž je <strong>35 statických a 3 dynamické.</strong>
                    </p>
                    <p className="max-w-xl leading-loose font-light pt-5 tracking-wide">
                        Nové otázky si můžete vyzkoušet na stránce <a href="https://www.noveotazky.cz/public-module.questions/?category=50" className="text-blue-700"> noveotazky.cz (statické),</a> nebo si stáhnout <a className="text-blue-700" href="https://www.mdcr.cz/getattachment/Media/Media-a-tiskove-zpravy/Nove-autoskolske-otazky,-zamerene-na-ridice-autobu/nove-otazky_brezen_2023.pdf.aspx">dynamické otázky.</a>
                    </p>
                </div>
            </section>
            <section id="2">
                <div>
                    <h2 className="pt-20 text-3xl md:text-3xl text-center font-semibold tracking-wide">Téma nových otázek</h2>
                    <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">
                        Otázky jsou letos zaměřené zejména na zájemce o řidičské oprávnění skupin <strong>C,C+E,D, D+E.</strong>
                        Adresují uchazeče o <strong>řidičské oprávnění</strong> v kategoriích těžších vozidel.
                    <Image className="py-5" src={Picture2} alt={"vozidlo přepravující dřevo"} />
                    </p>
                    <p className="max-w-xl leading-loose font-light pt-5 tracking-wide">
                        Sada se ovšem věnuje také soupravám vozidel <strong>B, B+E, B96.</strong> Reaguje tak mimo jiné na rozvoj karavaningu.
                    </p>
                </div>
            </section>
            <section id="3">
                <div>
                    <h2 className="pt-20 text-3xl md:text-3xl text-center font-semibold tracking-wide">Podmínky složení závěrečné zkoužky</h2>
                    <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">
                        Pro <strong>úspěšné složení závěrečné zkoušky</strong> a získání řidičského oprávnění potřebujete splnit teoretický test alespoň na <strong>43 bodů. Další kritéria zkoušky najdete v článku <a className="text-blue-500" href="https://autoskolaopacne.cz/co-vsechno-musim-zvladnout-pri-zaverecne-zkousce-z-prakticke-jizdy/">Co všechno musím zvládnout při závěrečné zkoušce z praktické jízdy ?</a></strong>
                    </p>
                    <p className="max-w-xl leading-loose font-light pt-5 tracking-wide">
                        Test z předpisů budete skládat v <strong>elektronické podobě</strong> na počítači. V nové generaci se nachází i otázky <strong>dynamické, </strong> které prověří vaše znalosti za pomocí videa.
                    </p>
                </div>
            </section>

        </div>
    </article>
    )
}