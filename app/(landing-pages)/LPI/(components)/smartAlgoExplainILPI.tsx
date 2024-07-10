import forgettingCurve from "./forgettingcurve.png"
import Image from "next/image";
export default function SmartAlgoExplainILPI(){
    return(
        <div className="bg-gray-900 py-24 sm:py-32 w-full flex flex-col">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
                <h2 className="text-base font-semibold leading-7 text-indigo-400">Chytrý algoritmus</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Jak funguje chytrý učební plán?</p>
                <div className={"flex flex-col max-w-2xl  leading-loose"}>
                    <p className="pt-4 ">Věříme, že budoucnost v přípravě na jakékoliv testy spočívá v individuálním
                        učebním plánu. Na naší platformě se právě díky individuálnímu plánu naučíte látku rychleji a
                        spolehlivěji.</p>
                    <h3 className="font-semibold text-xl pt-2">Model studenta</h3>
                    <p>V jádru autoskolatest.cz je právě model studenta, který sleduje u každého uživatele statistiky o
                        jednotlivých otázkách. Například jak často jste danou otázku viděli, zda jste si jí správně
                        zapamatovali atd... Tyto statistiky používáme k předpovědi správného zapamatování otázky v
                        jakémkoliv okamžiku. </p>
                    <p>Náš přístup spočívá ve spojení teorie "spaced practice method" a "half life regression". </p>
                    <h3 className="font-semibold text-xl pt-2">Spaced practice method</h3>
                    <p className="pb-2">Tato metoda spočívá v předkládání jednotlivých otázek ve správný čas. Podle studijí je
                        nejefektivnější otázku několikrát zapomenout a poté si ji v dobře načasovaném okamžiku
                        připomenout. Tímto přístupem se látka dostane do dlouhodobé paměti.</p>
                    <Image src={forgettingCurve} alt={"křivka zapomnění"} className="rounded-md overflow-hidden"/>
                    <p className=" pt-2">Na grafu lze vidět "křivku zapomenutí", předpokládáme, že otázka byla zodpovězena správně.
                        Hodnota y na začátku odpovídá 1, pravděpodobnost že otázku uživatel umí je 100%. Časem
                        (zobrazeným x) pravděpodobnost klesá až k nule. </p>
                    <p>Pravděpodobnost, že otázku uživatel umí můžeme předpovědět v daném okamžiku rovnicí p=2^(-x/r),
                        kdy p je pravděpodobnost, -x odpovídá času a r je subjektivní dovednost paměti.</p>
                    <h3 className="font-semibold text-xl pt-2">Half life regression</h3>
                    <p>
                        Dle počtu individuální statistiky ke každé otázce jsme schopni předpovědět nejlepší čas pro připomenutí dané látky. Čím vícekrát na otázku odpovíte, tím pravděpodobnější je, že budete znát správnou odpověď.
                    </p>
                </div>

            </div>
        </div>
    )
}