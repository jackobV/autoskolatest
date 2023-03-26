import Head from "next/head";

export const metadata = {
    title: 'Autoškola Test - vše o testech z autoškoly přehledně',
    description: "Na stránce autoškolatest.cz se dozvíte veškeré potřebné informace o testu teorie v autoškole.",
    alternates: {
        canonical: 'https://www.autoskolatest.cz/',
    },
};
export default function Home() {
  return (
      <>
      <Head>
          <title>Autoškola Test - vše o testech z autoškoly přehledně</title>
          <meta name="description" content="Na stránce autoškolatest.cz se dozvíte veškeré potřebné informace o testu teorie v autoškole." />

      </Head>
    <main>
        <article className="flex flex-col px-4 max-w-5xl mx-auto">
            <header>
                <link rel="canonical" href="https://www.autoskolatest.cz/" />
                <h1 className="text-4xl pt-20 font-medium tracking-tight">Autoškola Test - vše o testech z autoškoly</h1>
                <p className="pt-5">Na stránce <a href="https://www.autoskolatest.cz">autoškolatest.cz</a> se dozvíte veškeré potřebné informace o testu teorie v autoškole.</p>
            </header>
            <div className="pt-10">
                <h2 className="font-medium text-2xl">Obecně o zkoušce z předpisů o provozu na pozemních komunikacích</h2>
                <dl className="max-w-md leading-relaxed">
                    <dt className="font-semibold pb-2 pt-5">Z kolika otázek se test z teorie skládá?</dt>
                    <dd>Test v autoškole se skládá z 25 otázek</dd>
                    <dt className="font-semibold pb-2 pt-5">Kolik je možno získat bodů?</dt>
                    <dd>Maximální počet bodů je 50</dd>
                    <dt className="font-semibold pb-2 pt-5">Kolik bodů potřebuji pro zvládnutí testu?</dt>
                    <dd>Minimálně musíte dosáhnout 43 bodů.</dd>
                    <dt className="font-semibold pb-2 pt-5">Jak dlouho test trvá?</dt>
                    <dd>Absolvovat test musíte do 30 minut.</dd>
                    <dt className="font-semibold pb-2 pt-5">Lze čas na test prodloužit?</dt>
                    <dd>Ano, pokud jste dysgrafik, nebo dyslektik.</dd>
                    <dt className="font-semibold pb-2 pt-5">Liší se soubory otázek pro jednotlivé skupiny řidičského oprávnění?</dt>
                    <dd>Ano, pokud tedy žádáte o řidičské oprávnění skupiny B doporučujeme se od začátku připravovat s materiály vztahujícími se na tuto skupinu. Může se poté stát, že například otázku ohledně hloubky dezénu si vybavíte u testu špatně. </dd>
                </dl>
                <h2 className="font-medium text-3xl pt-10">Na co si dát pozor při přípravě?</h2>
                <p className="max-w-xl leading-loose text-lg pt-5">Naučit se všechny otázky může být velmi náročné. Studenti autoškoli se setkávají s potížemi nejčastěji kvůli pozdě započaté přípravě, či špatnému systému přípravy. </p>
                <h3 className="text-xl font-medium pt-5">Pozor na slovíčkaření a komplikovaný jazyk</h3>
                <p className="max-w-xl leading-loose text-lg pt-2">Ty nejtěžší otázky bývají často ty nejhůře formulované. Dopravní teorie a testy vychází z legislativy. Proto plno otázek připomíná spíše jazykolam, než informaci, která má usnadnit provoz po pozemních komunikacích.</p>
                <h3 className="text-xl font-medium pt-5">Nebojte se časového limitu</h3>
                <p className="max-w-xl leading-loose text-lg pt-2">Pokud jste si již zkoušeli test nanečisto, víte, že 30 minut je více než dostatek pro analyzování a správného označení 25 otázek. Dávejte si pozor na přebytečnou kontrolu označených odpovědí. Jak již víte ze školy, napoprvé to je většinou správně.</p>
                <h3 className="text-xl font-medium pt-5">Začněte včas!</h3>
                <p className="max-w-xl leading-loose text-lg pt-2">Testy z teorie jsou zvládnutelné, ale je potřeba se na ně začít připravovat s předstihem. Neočekávejte, že Vám bude stačit projít otázkové sady týden před zkouškou.</p>
                <h2 className="font-medium text-3xl pt-10">Užitečné zdroje pro přípravu</h2>
                <ul className="text-blue-600 list-disc px-5 pt-5">
                    <li><a href="https://etesty2.mdcr.cz/">Testy na nečisto od ministerstva dopravy</a></li>
                    <li><a href="https://lukasovacesta.cz/blog-lukasovacesta/ze-zivota/jak-jsem-delal-autoskolu-teorie.html">Blog o autoškole</a></li>
                    <li><a href="https://www.bezpecnecesty.cz/cz/autoskola/testy-autoskola-on-line">Bezpečné cesty</a></li>

                </ul>

            </div>

        </article>
    </main>
      </>

  )
}
