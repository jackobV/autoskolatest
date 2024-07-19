"use client"
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import logo from "../../(general)/favicon.ico"
export default function Page(){
    const searchParams = useSearchParams()
    const status = searchParams.get("purchaseConfirmed")
    return(
        <div className="bg-gray-900 w-full h-full min-h-screen pt-10">
            {status === "true"?
                <div className="flex flex-col items-center mx-auto max-w-2xl w-full py-10 bg-gray-700 rounded-md">
                    <div className="">
                        <Image src={logo} alt={"Logo autoskolatest.cz"} className="shrink-0" />
                    </div>
                    <div className="pt-6 text-white flex flex-col items-center">
                        <h2 className="text-3xl tracking-wide text-center font-semibold">Děkujeme!</h2>
                        <p className="pt-6 text-center">Platba proběhla v pořádku, nyní Vám byla zpřístupněna aplikace
                            autoskolatest.cz</p>
                        <p className="pt-2 pb-6 text-sm text-center text-gray-300">Plná aktivace může zabrat pár minut, prosíme tedy o trpělivost v případě nesprávného načtení dat.</p>
                        <a
                            href={"https://www.autoskolatest.cz/osobni_zona"}
                            className="w-full py-2 text-center bg-green-400 text-green-800 font-semibold tracking-wide rounded-lg"
                            >Přejít do aplikace
                        </a>
                    </div>
                </div> :
                <div>No</div>
            }
        </div>
    )
}