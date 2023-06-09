const navigation = {
    general: [
        { name: 'Domů', href: 'https://www.autoskolatest.cz/' },
        { name: 'Blog', href: 'https://www.autoskolatest.cz/blog' },
        { name: 'Otázky', href: 'https://www.autoskolatest.cz/otazky' },
    ],
    blog: [
        { name: 'Jak zvládnout stres před testem z autoškoly', href: 'https://www.autoskolatest.cz/blog/jak_zvladnout_stres_pred_testem_z_autoskoly' },
        { name: 'Nové otázky 2023', href: 'https://www.autoskolatest.cz/blog/nove_otazky_autoskola_2023' },
        { name: 'Co očekávat při první jízdě', href: 'https://www.autoskolatest.cz/blog/prvni_jizda_v_autoskole' },
    ],
    company: [
        { name: 'Dopravní situace', href: '#' },
        { name: 'Dopravní značky', href: '#' },
        { name: 'Jízda vozidlem', href: '#' },
        { name: 'Ostatní ustanovení', href: '#' },
        { name: 'Podmínky provozu vozidla', href: '#' },
        { name: 'Pojmy a povinnosti', href: '#' },

    ],
    legal: [
        { name: 'Související předpisy', href: '#' },
        { name: 'Zásady bezpečné jízdy [A]', href: '#' },
        { name: 'Zásady bezpečné jízdy [B]', href: '#' },
        { name: 'Zásady bezpečné jízdy [CD]', href: '#' },
        { name: 'Zdravotnická příprava', href: '#' },
        { name: 'Znalost předpisů souvisejících s provozem', href: '#' },
    ]}

export default function Footer() {
    return (
        <footer className="bg-gray-200 mt-10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-5xl px-4 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <img
                            className="h-7"
                            src="/logo.svg"
                            alt="autoskolatest logo"
                        />
                        <p className="text-sm leading-6 text-gray-600">
                            Naše mise je zlepšit vzdělávací systém v ČR.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Obecné</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.general.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Z blogu</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.blog.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Okruhy testových otázek</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">...</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">&copy; autoskolatest.cz</p>
                </div>
            </div>
        </footer>
    )
}
