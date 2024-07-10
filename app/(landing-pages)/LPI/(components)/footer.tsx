import { SVGProps } from "react"
import logo from "../../../../public/logo_white.svg"
import logonazkousku from "./na-zkousku-logo.png"
import Image from "next/image";
const navigation = {
    solutions: [
        {name: 'Aplikace', href: '/osobni_zona'},
        {name: 'Přihlásit se', href: '/unauthorized'},
        {name: 'Začít chytrý test', href: '/osobni_zona/test'},
    ],
    support: [
        {name: 'Kontakt', href: 'https://www.na-zkousku.cz/kontakt'},
    ],
    company:[
        {name: 'Soubor otázek', href: 'https://www.autoskolatest.cz/otazky'},
        {name: 'Blog', href: 'https://www.autoskolatest.cz/blog'},

    ],
    legal: [
        {name: 'GDPR', href: 'https://www.na-zkousku.cz/gdpr.pdf'},
        {name: 'Obchodní podmínky', href: '/'},
    ],
}

export default function Footer() {
    return (
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Image
                            className="h-7 w-fit "
                            src={logo}
                            alt="Logo autoskolatest.cz"
                        />
                        <a className="flex flex-row gap-x-2 pt-1 text-white" href={"https://www.na-zkousku.cz/"}>
                            <p>Od</p>
                            <Image
                                className="h-7 w-fit "
                                src={logonazkousku}
                                alt="Logo na-zkousku.cz"
                            />
                        </a>

                        <p className="text-sm leading-6 text-gray-300">
                            Naší misí je posunout vzdělávací systém do 21. století.
                        </p>
                        <div className="flex space-x-6">
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Řešení</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Podpora</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Ostatní</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Právní dokumenty</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">&copy; 2024 autoskolatest.cz, na-zkousku.cz</p>
                </div>
            </div>
        </footer>
    )
}
