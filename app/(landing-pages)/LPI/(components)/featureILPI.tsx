import {
    BoltIcon,
    ChartBarIcon,
    CheckBadgeIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon
} from '@heroicons/react/20/solid'
import Image from "next/image";
import appscreenshot from "./appscreenshot.png"
const features = [
    {
        name: 'Chytrý algoritmu,',
        description:
            'který ti podle tvých předešlích výsledků sestavý každý test na míru. Díky tomu tě u skutečné zkoušky nezaskočí žádná otázka',
        icon: BoltIcon,
    },
    {
        name: 'Podrobná statistika',
        description: 'tvých předešlých výsledků ti dodá jistotu a zbavý tě stresu před testem.',
        icon: ChartBarIcon,
    },
    {
        name: 'Garance úspěchu.',
        description: 'Pokud se ti nepovede zvládnout zkoušku na první pokus, vrátíme ti celou částku. S námi prostě získáš jistotu.',
        icon: CheckBadgeIcon,
    },
]

export default function FeatureILPI() {
    return (
        <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-400">Připrav se efektivně</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Chytrá příprava přímo pro tebe</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Pomocí chytrých algoritmů tě připravíme rychleji a efektivněji. Jsme si natolik jistí, že poskytujeme garanci úspěchu. Nepovede se ti zvládnout test na první pokus? Vrátíme ti všechny peníze.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <Image
                        src={appscreenshot}
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}
