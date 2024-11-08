import logo from "../../../../public/logo_white.svg"
import Image from "next/image";
import {CheckIcon} from "@heroicons/react/20/solid";
import {GiftIcon} from "@heroicons/react/24/outline";

export default function FeaturesAfirmCheckout(){
    const features = [
        "Zbavíme tě stresu",
        "Připravíme tě za rekordní čas",
        "Žádná otázka tě u testu nezaskočí",
        "Garantujeme ti splnění zkoušky na první pokus",
        "Budeš mít přehled o své připravenosti",
    ]
    return(
        <div className="w-full bg-gray-900 h-full px-6 md:px-10 md:py-10 max-w-xl">
            <div className="w-full h-full bg-gray-800 rounded-md rounded-b-none md:rounded-b-md flex flex-col  py-6 px-4">
                <div className="">
                    <Image src={logo} alt={"logo"} className="h-8 w-auto opacity-80" />
                </div>
                <div className="pt-6">
                    <p className="text-gray-200 font-bold text-xl tracking-wide">
                        Zajisti si úspěch v autoškole
                    </p>
                    <p className="text-white pt-6 pb-2 text-3xl font-bold tracking-wide"><span className="line-through text-lg pr-2 text-gray-300">199,-</span>99 <span className="text-sm">CZK / měsíc</span></p>
                    <div className="text-gray-300 text-sm flex flex-row items-center gap-x-1"><div className="h-6 w-6 text-green-500 animate-pulse duration-700"><GiftIcon /></div><p className="text-green-500">CZK 100 sleva</p> <p>pro prvních 1000 uživatelů (zbývá 7 licencí)</p></div>
                    <ul className="flex flex-col items-start gap-y-4 pt-4">
                        {features.map((feature, i) => (
                            <li className="flex flex-row w-full gap-x-3" key={i}>
                                <CheckIcon className="h-5 w-5 text-yellow-400" aria-hidden="true"/>
                                <p className="text-gray-200 text-sm">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pt-6 hidden md:inline">
                    <div className=" py-6 px-3 rounded-md bg-gray-600">
                        <div className="text-white text-sm tracking-wide italic  ">"Na testy jsem se
                            připravila za méně než týden. S ostatními metody autoskolatest.cz opravdu nelze srovnávat.
                            Díky podrobným statistikám jsem věděla, že zkoušku zvládnu a bylo to tak. Dostala jsem plný
                            počet bodů. "
                        </div>
                        <div className="flex flex-row pt-3 text-white items-center gap-x-2 text-sm">
                            <div className="w-6 h-6 text-xs  flex flex-col items-center justify-center rounded-full border border-white ">G</div>
                            <div>Gabriela N. 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}