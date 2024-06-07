import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Budeš dokonale znát všechny otázky.',
        description: 'Nepřekvapí tě žádná otázka, metodicky si projdeš a zdokonalíš všechny otázky.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Nenecháš nic náhodě.',
        description: 'Budeš mít k dispozici podrobné statistiky o tvých výsledcích.',
        icon: LockClosedIcon,
    },
    {
        name: 'Na zkoušku nepůjdeš ve stresu.',
        description: 'Díky přehledu o tom, jak si v testech vedeš tě u zkoušky nepřepadne nervozita.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Nic tě nenecháme zapomenout.',
        description: 'Náš algoritmus využívá metody fázového opakování. Otázky ti tedy ve správnou dobu připomene. ',
        icon: FingerPrintIcon,
    },
    {
        name: 'Na test se naučíš o ~70% rychleji.',
        description: 'Ideální řešení, pokud se nacházíš v časovém pressu.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Garance úspěchu.',
        description: 'Pokud zkoušku nedáš na první pokus, vrátíme ti celou částku.',
        icon: ServerIcon,
    },
]

export default function BenefitsILPI() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Vše co potřebuješ</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Zvládnout zkoušku na první pokus?<br /> To ti garantujeme.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Zajisti si úspěch u testu z teorie v autoškole. Na zkoušku přijdeš bez stresu a s jistotou ve svém úspěchu.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
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
    )
}
