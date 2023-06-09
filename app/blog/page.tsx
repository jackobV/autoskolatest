/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
const posts = [
    {
        id: 1,
        title: 'Jak zvládnout stres před testem z autoškoly',
        href: '/blog/jak_zvladnout_stres_pred_testem_z_autoskoly',
        description:
            'Poradíme vám několik užitečných rad a tipů, jak zajistit, aby vaše nervy na testy v autoškole nezničily vaše šance na jejich absolvování.',
        date: 'Bře 26, 2023',
        datetime: '2023-03-26',
        category: { title: 'Návody & Tipy', href: '#' },
    },
    {
        id: 2,
        title: 'Nové otázky 2023',
        href: '/blog/nove_otazky_autoskola_2023',
        description:
            'Vše o nově vydané sadě otázek pro testy z teorie při závěrečných zkouškách autoškoly',
        date: 'Bře 29, 2023',
        datetime: '2023-03-29',
        category: { title: 'Otázky', href: '#' },
    },
    {
        id: 3,
        title: 'Co očekávat při první jízdě v autoškole?',
        href: '/blog/prvni_jizda_v_autoskole',
        description:
            'Co očekávat při první jízdě v autoškole? Na jaké věci si dát pozor a čeho je zbytečné se obávat.',
        date: 'Dub 7, 2023',
        datetime: '2023-04-07',
        category: { title: 'Návody & Tipy', href: '#' },
    },
    // More posts...
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-4">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog z autoškoly</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Návody a tipy pro úspěšné zvládnutí autoškoly.
                    </p>
                    <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
