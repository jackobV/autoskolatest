import { CheckIcon } from '@heroicons/react/20/solid'
import {GiftIcon} from "@heroicons/react/24/outline";

const includedFeatures = [
    'Individuální příprava',
    'Podrobné statistiky',
    'Garance vrácení peněz',
    'Online podpora',
]

export default function PricingILPI() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Žádné předplatné, jednoduchá cena.</h2>
                    <p className="mt-6 text-md leading-8 text-gray-200">
                        autoskolatest.cz si zaplatíš jednou a získáš přístup na 1 rok, což je více než dostatek času na dokončení autoškoly!
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Jednorázová cena autoskolatest.cz</h3>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            Za tuto cenu získáš všechny výhody, které autoskolatest.cz poskytuje. <br></br>Pokud testy nezvládneš na první pokus, celou částku ti vrátíme.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-500">K čemu získáš přístup</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-500" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="pb-2">
                            <div className="text-gray-300 text-sm flex-col flex md:flex-row md:items-center gap-x-1">
                                <div className="flex flex-row items-center gap-x-1">
                                    <div className="h-6 w-6 text-green-500 animate-pulse duration-700"><GiftIcon/></div>
                                    <p className="text-green-500">CZK 500 sleva</p>
                                </div>
                                <p>pro prvních 1000 uživatelů (zbývá 7
                                    licencí)</p></div>
                        </div>
                        <div
                            className="rounded-2xl bg-gray-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-300">Přístup na 12 měsíců</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="line-through text-gray-400">1099</span>
                                    <span className="text-5xl font-bold tracking-tight text-gray-100">599</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CZK</span>
                                </p>
                                <a
                                    href="/registrace"
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Získat přístup
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-300">
                                    Pokud nezvládneš teorii na první pokus, vrátíme ti celou částku.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
