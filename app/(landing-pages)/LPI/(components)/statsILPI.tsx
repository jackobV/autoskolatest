const stats = [
    { id: 1, name: 'Získaných řidičáků', value: '1,500+' },
    { id: 2, name: 'Zvládlo test na první pokus', value: '98%' },
    { id: 3, name: 'Rychlejší zvládnutí všech otázek', value: '~70%' },
    { id: 4, name: 'Zbavení stresu', value: '100%' },
]

export default function StatsILPI() {
    return (
        <div className="bg-gray-900 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <dl className=" grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
