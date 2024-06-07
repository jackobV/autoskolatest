import Picture from "./autoškola.jpg"
import BlogHeader from "@/app/(general)/blog/(components)/BlogHeader";
import BlogArticleNav from "@/app/(general)/blog/(components)/BlogArticleNav";
export const metadata = {
    title: 'Jak zvládnout stres před testem z autoškoly? Tipy pro zvládnutí dnu D',
    description: "Závěrečný test z autoškoly je stresujícím okamžikem. Připravili jsme si pro Vás pár rad, jak stres zvládnout a podat maximální výkon.",
    alternates: {
        canonical: 'https://www.autoskolatest.cz/jak_zvladnout_stres_pred_testem_z_autoskoly/',
    },
};
export default function Page() {
    return (
        <>
            <main>
                <BlogHeader title={"Jak zvládnout stres před testem z autoškoly?"} author={"Jakub Záloha"} date={"29.3"} timetoread={"7 minut"} imagesrc={Picture} imagealt={"stres před testem z autoškoly"} />
                <BlogArticleNav array={[
                    {title:"Občerstvení",link:"1"},
                    {title:"Připravenost",link:"2"},
                    {title:"Mindhack",link:"3"},
                    {title:"Oblečení",link:"4"},
                    {title:"Pozitivita",link:"5"},
                    {title:"První dojem",link:"6"},
                    {title:"Dech",link:"7"},
                    {title:"Den před testem",link:"8"},
                    {title:"Komu co říct?",link:"9"},
                    {title:"Nezoufejte",link:"10"},

                ]} />
                <article>
                <div className="px-4 mx-auto max-w-2xl">
                    <section id="1">

                        <div>
                            <h2 className="pt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide">Zvolte správné občerstvení</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Než vaše zkoušky začnou, je důležité se vhodným způsobem občerstvit. Před zkouškami si tedy
                                dopřejte svačinu, díky které budete mít energii na test a vaše hladina cukru v krvi se v nešťastnou
                                chvíli nesníží. Pokud si plánujete dát kávu, raději ji vyměňte za vodu. Kofein v kávě by pouze
                                zvýšil vaší nervozitu a také by káva mohla překyselit váš žaludek. Co se týče jídla, zvolte takové,
                                které vám zajistí pomalu se uvolňující energii a relativně nízký obsah cukru. Ideální volbou jsou
                                banány, celozrnný toast nebo třeba oříšky.</p>
                        </div>
                    </section>
                    <section id="2">

                        <div>
                            <h2 className="pt-20  text-3xl md:text-4xl text-center font-semibold tracking-wide ">Jděte na jistotu</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Než vaše zkoušky začnou, je důležité se vhodným způsobem občerstvit. Před zkouškami si tedy
                                U teoretické části nepodceňujte přípravu a naučte se otázky nazpaměť. Dělejte si <a className="underline text-blue-600" href="https://etesty2.mdcr.cz/">testy nanečisto</a> tak
                                dlouho, dokud všechny nezvládnete bez jediné chyby. V takovém momentě budete vědět, že
                                teoretickou část testu zvládnete bez sebemenších potíží a tím se zmenší váš stres.</p>
                        </div>
                    </section>
                    <section id="3">

                        <div>
                            <h2 className="pt-20  text-3xl md:text-4xl text-center font-semibold tracking-wide ">Předstírejte, že je to jen zkušební jízda</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Než vaše zkoušky začnou, je důležité se vhodným způsobem občerstvit. Před zkouškami si tedy
                                Nikdo po vás nebude chtít více než v testovacích jízdách, které jste už absolvovali. Není tedy žádný
                                důvod panikařit. Jednoduše předstírejte, že absolvujete jen další zkušební jízdu a nenechte se
                                znervóznit tím, že je to ostrý test. Nebojte se také požádat o <strong>zopakování pokynu</strong>, pokud si tím nejste
                                jisti. Je to lepší, než neudělat to, o co jste byli požádáni.</p>
                        </div>
                    </section>
                    <section id="4">

                        <div>
                            <h2 className="pt-20  text-3xl md:text-4xl text-center font-semibold tracking-wide ">Správně se oblečte</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Základem je pohodlné oblečení, ve kterém se budete cítit uvolněně. Zapomeňte tedy na těsné
                                oblečení, které vás bude škrtit nebo dokonce omezovat v pohybu. Co se týče samotné <strong>jízdy s
                                    instruktorem</strong>, myslete na oblečení, ve kterém se vám bude příjemně jezdit. Zvolte také dobře
                                padnoucí pevnou obuv, na kterou jste zvyklí a u které víte, že se vám v ní bude dobře řídit.</p>
                        </div>
                    </section>
                    <section id="5">

                        <div>
                            <h2 className="pt-20  text-3xl md:text-4xl text-center font-semibold tracking-wide ">Buďte pozitivní</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Pamatujte si, že zde nejde o život. Uvědomte si, že tyto testy nejsou žádnou šikanou a je důležité,
                                aby je <strong>každý absolvoval.</strong> Testy v autoškole se dělají proto, aby nezkušený řidič nezpůsobil
                                autonehodu a neublížil tím sobě nebo ostatním. Ať už jste nervózní nebo ne, zachovejte pozitivní
                                náladu, motivujte se a namísto malování čerta na zeď si řekněte, že to dokážete.</p>
                        </div>
                    </section>
                    <section id="6">

                        <div>
                            <h2 className="pt-20  text-3xl md:text-4xl text-center font-semibold tracking-wide ">Nenechte se vyvést z míry</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Začátek testu je zásadní, protože je to první dojem, který na zkoušejícího uděláte. Zaměřte se na
                                nastartování motoru a rozhlédněte se kolem vozu, zda nenajdete nějaká nebezpečí nebo překážky,
                                které byste mohli potřebovat zvážit, když se budete pohybovat z parkovacího místa. Nezapomeňte
                                také poslouchat svého zkoušejícího. A co je nejdůležitější, ať už se stane cokoliv, nepropadejte
                                panice. Pokud během testu narazíte na sirény, kolizi nebo jakýkoli jiný nový vývoj, zachovejte klid
                                a zhodnoťte svůj přístup, než budete pokračovat. I když je cílem dokonalý test, nepředpokládejte, že
                                jste selhali, pokud uděláte chybu. Máte nárok na určitý počet drobných chyb, takže je důležité
                                pokračovat v testu podle svých nejlepších schopností.</p>
                        </div>
                    </section>
                    <section id="7">

                        <div>
                            <h2 className="pt-20  text-3xl md:text-4xl text-center font-semibold tracking-wide ">Dýchejte</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Je snadné si říci: „Nebuď nervózní!“ Realita je taková, že nervy působí na lidi různě. Pokud zjistíte,
                                že jste před testem ve stresu, zhluboka se nadechněte a pokuste se vyčistit svou mysl od „co
                                kdyby“. Studie ukazují, že dýchací techniky mohou snížit pocity stresu a úzkosti. Začněte dlouhým,
                                pomalým nádechem, následně pomalu vydechněte ústy a uvolněte svaly na obličeji, rukou, čelisti,
                                ramenech a břiše. Opakujte tyto kroky tolikrát, kolikrát je potřeba.</p>
                        </div>
                    </section>
                    <section id="8">

                        <div>
                            <h2 className="pt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide ">Správně se připravte</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Před vaším testem si dojděte na záchod, napijte se a hlavně přijďte včas, protože pozdní příchod by
                                znamenal další nervy. Aby byl váš mozek dobře prokrvený a mohl podat nejlepší výkon, vhodná je
                                procházka, ta vás uklidní a pomůže vám rozproudit krev v těle. Den před testem jděte včas spát,
                                abyste byli na den D co nejlépe připravení.</p>
                        </div>
                    </section>
                    <section id="9">

                        <div>
                            <h2 className="pt-20  text-3xl md:text-4xl text-center font-semibold tracking-wide ">Neoznamujte to ostatním</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Pokud budete své rodině a přátelům říkat, že jdete dělat test, pouze to zvýší vaší nervozitu, abyste se
                                v jejich očích neztrapnili nebo je nezklamali. Když děláte testy na autoškolu, nechte si to pro sebe.
                                Oznamování zpráv nechte na moment, až budete mít řidičské testy úspěšně za sebou, teprve tehdy
                                se můžete hrdě pochlubit ostatním.</p>
                        </div>
                    </section>
                    <section id="10">

                        <div>
                            <h2 className="pt-20  text-3xl md:text-4xl text-center font-semibold tracking-wide ">Nenechte se odradit</h2>
                            <p className="max-w-xl leading-loose font-light pt-10 tracking-wide">Pokud test neuděláte napoprvé, není to žádná ostuda, nebudete prvními ani posledními, kterým se to
                                stalo. V každém případě, když testem neprojdete, snažte se neporazit sami sebe. Možná jste udělali
                                vše, co jste mohli, abyste se na test připravili. Chyby se stávají a neúspěšný test je příležitostí
                                pracovat na oblastech, se kterými jste možná dříve měli problémy. Nejprve se snažte zachovat
                                pozitivní přístup. Poté se přihlaste na další termín a zkoušky absolvujte znovu.</p>

                        </div>
                    </section>

                </div>
                </article>
            </main>
        </>

    )
}
