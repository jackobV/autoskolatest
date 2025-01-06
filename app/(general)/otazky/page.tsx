import PocketBase from "pocketbase";
import CategoryListComponent from "@/app/(general)/otazky/(components)/categoryListComponent";
interface IdToTitleMap {
    [key: string]: string;
}
interface Category {
    "title":string;
    "numberOfQuestions":number;
    "id":string;
}
export default async function Page(){
    const pb = new PocketBase("https://pocketbase-production-5de6.up.railway.app");
    const res = await pb.collection('category').getFullList()

    const idToTitle:IdToTitleMap = {
        "lfw9b1mdl1a7ao9":"Dopravní značky",
        "we10dfuu22j50qk":"Dopravní situace",
        "wq8ils5ph00l87u":"Zásady bezpečné jízdy [A]",
        "eysdkjavl07ke2c":"Zásady bezpečné jízdy [B]",
        "e3kh74w2vq5dap2":"Zásady bezpečné jízdy [C,D]",
        "oqw98ds03hofyhb":"Zdravotnická příprava",
        "l4t3asvmg8tc873":"Související předpisy",
        "zawcp7ctmohtfts":"Podmínky provozu vozidla",
        "tkonhkd9c2tjvch":"Pravidla provozu na pozemních komunikacích"
    }
    const idToSlug:IdToTitleMap = {
        "lfw9b1mdl1a7ao9":"dopravni_znacky",
        "we10dfuu22j50qk":"dopravni_situace",
        "wq8ils5ph00l87u":"zasady_bezpecne_jizdy_A",
        "eysdkjavl07ke2c":"zasady_bezpecne_jizdy_B",
        "e3kh74w2vq5dap2":"zasady_bezpecne_jizdy_CD",
        "oqw98ds03hofyhb":"zdravotnicka_priprava",
        "l4t3asvmg8tc873":"souvisejici_predpisy",
        "zawcp7ctmohtfts":"podminky_provozu_vozidla",
        "tkonhkd9c2tjvch":"pravidla-provozu-na-pozemnich-komunikacich"

    }
    const listOfCategories:Array<Category> = res.map((item,index)=>(
        {
            "title":idToTitle[item.id],
            "id":item.id,
            "numberOfQuestions":item["questions"].length,
        }
    ))
    console.log(res)
    return(
        <div className="max-w-5xl mx-auto px-4">
            <nav className="md:text-lg pb-5 pt-5 tracking-tight subpixel-antialiased"><h1 className="inline text-gray-400">Otázky autoškola teorie</h1><h1 className="inline text-gray-400 px-4">/</h1><h1 className="inline">okruhy</h1></nav>
            <ul role="list" className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 xl:gap-x-8 ">
                {listOfCategories.map((item,index)=>(
                    <CategoryListComponent title={item.title} numberOfQuestions={item.numberOfQuestions} id={idToSlug[item.id]} />
                ))}
            </ul>
        </div>
    )
}