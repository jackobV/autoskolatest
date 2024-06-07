import logo from "../../../../public/logo_white.svg"
import Image from "next/image";
import {CheckIcon} from "@heroicons/react/20/solid";

export default function FeaturesAfirmCheckout(){
    const features = [
        "Chytrý algoritmus učení",
        "Neomezeně testů",
        "Odpovídající struktura reálné zkoušce",
        "Individuální složení testů",
        "Přizpůsobení na mobil",
        "Jednoduché vyhledávání otázek",
        "Plná sada otázek",
        "Statistiky ke každé otázce",
        "Historie výsledků",
        "Online podpora"
    ]
    return(
        <div className="w-full bg-gray-900 h-full px-10 py-10 max-w-xl">
            <div className="w-full h-full bg-gray-800 rounded-md flex flex-col  py-6 px-4">
                <div className="">
                    <Image src={logo} alt={"logo"} className="h-12 w-auto" />
                </div>
                <div className="pt-40">
                    <p className="text-white font-bold text-2xl tracking-wide">
                        Zajisti si úspěch v autoškole
                    </p>
                    <ul className="flex flex-col items-start gap-y-4 pt-10">
                        {features.map((feature, i) => (
                            <li className="flex flex-row w-full gap-x-3" key={i}>
                                <CheckIcon className="h-5 w-5 text-indigo-400" aria-hidden="true"/>
                                <p className="text-gray-200">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}