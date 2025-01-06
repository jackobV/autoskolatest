"use client"
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import logo from "../../(general)/favicon.ico"
import {Suspense} from "react";
import {analyticsEvents, PurchaseEventParams} from "@/app/utils/analytics";






function PurchaseInfo(){
    const searchParams = useSearchParams()
    const status = searchParams.get("purchaseConfirmed")
    const purchase:PurchaseEventParams = {
        currency:"CZK",
        value:100,
        transaction_id:"",
        items:[
            {
                item_id:"subscription",
                item_name:"subscription",
                price:100,
                currency:"CZK",
                quantity:1
            }
        ]
    }
    if(status === "true"){
        analyticsEvents.purchase(purchase);
    }

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
                <div className="flex flex-col items-center mx-auto max-w-2xl w-full py-10 bg-gray-700 rounded-md">
                    <div className="">
                        <Image src={logo} alt={"Logo autoskolatest.cz"} className="shrink-0"/>
                    </div>
                    <div className="pt-6 text-white flex flex-col items-center">
                        <h2 className="text-3xl tracking-wide text-center font-semibold">Něco se nepovedlo!</h2>
                        <p className="pt-6 pb-10 text-center">Platba se nepodařila, prosíme kontaktujte nás na emailu info@na-zkousku.cz</p>
                        <a
                            href={"https://www.autoskolatest.cz/registrace"}
                            className="w-full py-2 text-center bg-green-400 text-green-800 font-semibold tracking-wide rounded-lg"
                        >Přejít zpět na registraci
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}

export default function Page(){
    return(
        <Suspense>
            <PurchaseInfo />
        </Suspense>
        )
}