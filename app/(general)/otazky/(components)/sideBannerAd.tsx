import {CheckIcon} from "@heroicons/react/20/solid";

export default function SideBannerAd(){
    const features = [
        "Chytrý algoritmus učení",
        "Neomezeně testů",
        "Odpovídající struktura reálné zkoušce",
        "Individuální složení testů",
        "Přizpůsobení na mobil",
        "Podrobné statistiky"
]
    return(
        <a className="flex flex-col flex-row bg-gray-800 rounded-xl w-full md:w-96 h-fit px-4 py-4 h-40 w-fit text-sm gap-y-2" href={"https://www.autoskolatest.cz/LPI?src=otazkaorganic"}>
            <div className="text-white text-lg">Chceš se připravit s jistotou?</div>
            <div className="text-gray-100 pt-2">Vyzkoušej testy, které se přizpůsobí tvým potřebám s pomocí <strong>AI!</strong></div>
            <ul className="flex flex-col items-start gap-y-4 py-5">
                {features.map((feature, i) => (
                    <li className="flex flex-row w-full gap-x-3" key={i}>
                        <CheckIcon className="h-5 w-5 text-indigo-400" aria-hidden="true"/>
                        <p className="text-gray-200">{feature}</p>
                    </li>
                ))}
            </ul>
            <button className="w-full rounded-md bg-indigo-500 py-3 font-semibold text-white">Zjistit více</button>
        </a>
    )
}