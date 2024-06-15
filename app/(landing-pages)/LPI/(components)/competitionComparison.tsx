import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

type Tier = {
    name: string,
    id: string,
    href: string,
    priceMonthly: string,
    description: string,
    mostPopular: boolean
}

const tiers: Tier[] = [
    {
        name: 'eTesty2',
        id: 'tier-basic',
        href: '#',
        priceMonthly: '$9',
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        mostPopular: false,
    },
    {
        name: 'autoskolatest.cz',
        id: 'tier-essential',
        href: '#',
        priceMonthly: '$29',
        description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
        mostPopular: true,
    },
    {
        name: 'Učebnice',
        id: 'tier-premium',
        href: '#',
        priceMonthly: '$59',
        description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
        mostPopular: false,
    },
]

type Feature = {
    name: string,
    tiers: {
        [key: string]: boolean | string
    }
}

type Section = {
    name: string,
    features: Feature[]
}

const sections: Section[] = [
    {
        name: 'Zkušební testy',
        features: [
            { name: 'Neomezeně testů', tiers: { eTesty2: true, "autoskolatest.cz": true, "Učebnice": false } },
            { name: 'Odpovídající struktura reálné zkoušce', tiers: { eTesty2: true, "autoskolatest.cz": true, "Učebnice": false } },
            { name: 'Individuální složení', tiers: { eTesty2: false, "autoskolatest.cz": true, "Učebnice": false } },
            { name: 'Přizpůsobení na mobil', tiers: { eTesty2: false, "autoskolatest.cz": true, "Učebnice": false } },
        ],
    },
    {
        name: 'Databáze otázek',
        features: [
            { name: 'Plná sada otázek', tiers: { eTesty2: true, "autoskolatest.cz": true, "Učebnice": true } },
            { name: 'Jednoduché vyhledávání', tiers: { eTesty2: false, "autoskolatest.cz": true, "Učebnice": false } },
            { name: 'Statistiky ke každé otázce', tiers: { eTesty2: false, "autoskolatest.cz": true, "Učebnice": false }},
        ],
    },
    {
        name: 'Statistiky',
        features: [
            { name: 'Historie výsledků', tiers: { eTesty2: false, "autoskolatest.cz": true, "Učebnice": false } },
            { name: 'Údaje o jednotlivých otázkách', tiers: { eTesty2: false, "autoskolatest.cz": true, "Učebnice": false } },
        ],
    },
    {
        name: 'Podpora',
        features: [
            { name: 'Online podpora', tiers: { eTesty2: false, "autoskolatest.cz": true, "Učebnice": false } },
        ],
    },
]

function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function CompetitionComparison() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32" id={"comparison" +
            ""}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                        Jednoznačně nejlepší volba.
                    </p>
                </div>
                <p className="mx-auto mt-4 max-w-2xl text-center leading-8 text-gray-300">
                    Přinášíme revoluční řešení v přípravě na testy z autoškoly.
                </p>

                {/* xs to lg */}
                <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
                    {tiers.map((tier) => (
                        <section
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-inset ring-white/10' : '',
                                'p-8'
                            )}
                        >
                            <h3 id={tier.id} className="text-sm font-semibold leading-6 text-white">
                                {tier.name}
                            </h3>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-white">
                                {sections.map((section) => (
                                    <li key={section.name}>
                                        <ul role="list" className="space-y-4">
                                            {section.features.map((feature) =>
                                                    feature.tiers[tier.name] ? (
                                                        <li key={feature.name} className="flex gap-x-3">
                                                            <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                                            <span>
                              {feature.name}{' '}
                                                                {typeof feature.tiers[tier.name] === 'string' ? (
                                                                    <span className="text-sm leading-6 text-gray-400">({feature.tiers[tier.name]})</span>
                                                                ) : null}
                            </span>
                                                        </li>
                                                    ) : null
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="isolate mt-20 hidden lg:block">
                    <div className="relative -mx-8">
                        {tiers.some((tier) => tier.mostPopular) ? (
                            <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                                <div
                                    className="flex w-1/4 px-4"
                                    aria-hidden="true"
                                    style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%` }}
                                >
                                    <div className="w-full rounded-t-xl border-x border-t border-white/10 bg-white/5" />
                                </div>
                            </div>
                        ) : null}
                        <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                            <caption className="sr-only">Pricing plan comparison</caption>
                            <colgroup>
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                            </colgroup>
                            <thead>
                            <tr>
                                <td />
                                {tiers.map((tier) => (
                                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                                        <div className="text-lg
                                         font-semibold leading-7 text-white">{tier.name}</div>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            </tr>
                            {sections.map((section, sectionIdx) => (
                                <Fragment key={section.name}>
                                    <tr>
                                        <th
                                            scope="colgroup"
                                            colSpan={4}
                                            className={classNames(
                                                sectionIdx === 0 ? 'pt-8' : 'pt-16',
                                                'pb-4 text-sm font-semibold leading-6 text-white'
                                            )}
                                        >
                                            {section.name}
                                            <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                                        </th>
                                    </tr>
                                    {section.features.map((feature) => (
                                        <tr key={feature.name}>
                                            <th scope="row" className="py-4 text-sm font-normal leading-6 text-white">
                                                {feature.name}
                                                <div className="absolute inset-x-8 mt-4 h-px bg-white/5" />
                                            </th>
                                            {tiers.map((tier) => (
                                                <td key={tier.id} className="px-6 py-4 xl:px-8">
                                                    {typeof feature.tiers[tier.name] === 'string' ? (
                                                        <div className="text-center text-sm leading-6 text-gray-300">
                                                            {feature.tiers[tier.name]}
                                                        </div>
                                                    ) : (
                                                        <>
                                                            {feature.tiers[tier.name] === true ? (
                                                                <CheckIcon className="mx-auto h-5 w-5 text-indigo-400" aria-hidden="true" />
                                                            ) : (
                                                                <MinusIcon className="mx-auto h-5 w-5 text-gray-500" aria-hidden="true" />
                                                            )}

                                                            <span className="sr-only">
                                  {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                </span>
                                                        </>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
