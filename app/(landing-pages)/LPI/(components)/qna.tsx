import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Prodlužuje se automaticky platba za licenci?",
        answer:
            "Licence se automaticky prodlužuje, můžete si ji kdykoliv zrušit ve správě předplatného.",
    },
    {
        question: "Funguje aplikace na mobilu?",
        answer:
            "Ano, webová aplikace je plně uzpůsobená ke správnému zobrazení na mobilním displeji. Není třeba si stahovat další aplikaci, ke spuštění Vám stačí standardní mobilní prohlížeč.",
    },
    {
        question: "Lze licenci reklamovat?",
        answer:
            "Pokud z pádných důvodů nebudete s aplikací spokojeni, kontaktujte nás emailem a my se vašemu případu budeme věnovat. Při nesprávném fungování, či jiném nežádoucím chování aplikace Vám vrátíme celou částku.",
    },
    {
        question: "Pokud teorii nezlvádnu na první pokus, opravdu mi vátíte celou částku?",
        answer:
            "Ano! Stačí nám napsat na email a přiložit scan o výsledku závěrečného testu a my Vám peníze obratem vrátíme. Aplikaci stále budete moct používat až do vypršení licence.",
    },
    // More questions...
]

export default function QnaILPI() {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Často kladené otázky</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
