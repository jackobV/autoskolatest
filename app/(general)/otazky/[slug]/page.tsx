import PocketBase from "pocketbase";
import Question from "../(components)/question";
import QuestionListHeader from "@/app/(general)/otazky/(components)/questionListHeader";
interface Question {
    "id": string;
    "text":string;
}
interface SlugToIdMap {
    [key: string]: string;
}
const slugToId:SlugToIdMap = {
    "dopravni_znacky":"lfw9b1mdl1a7ao9",
    "dopravni_situace":"we10dfuu22j50qk",
    "zasady_bezpecne_jizdy_A":"wq8ils5ph00l87u",
    "zasady_bezpecne_jizdy_B":"eysdkjavl07ke2c",
    "zasady_bezpecne_jizdy_CD":"e3kh74w2vq5dap2",
    "zdravotnicka_priprava":"oqw98ds03hofyhb",
    "souvisejici_predpisy":"l4t3asvmg8tc873",
    "podminky_provozu_vozidla":"zawcp7ctmohtfts",
    "pojmy_povinnosti":"am7fli1w8fckmmm",
    "ostatni_ustanoveni":"sf10my3uhqik14q",
    "jizda_vozidla":"m447h3rqjy9vmve",
    "znalost_predpisu_souvisejici_s_provozem":"1xlri5vx466bfqt",
}
const idToTitle:SlugToIdMap = {
    "lfw9b1mdl1a7ao9":"Dopravní značky",
    "we10dfuu22j50qk":"Dopravní situace",
    "wq8ils5ph00l87u":"Zásady bezpečné jízdy [A]",
    "eysdkjavl07ke2c":"Zásady bezpečné jízdy [B]",
    "e3kh74w2vq5dap2":"Zásady bezpečné jízdy [C,D]",
    "oqw98ds03hofyhb":"Zdravotnická příprava",
    "l4t3asvmg8tc873":"Související předpisy",
    "zawcp7ctmohtfts":"Podmínky provozu vozidla",
    "am7fli1w8fckmmm": "Pojmy a povinnosti",
    "sf10my3uhqik14q":"Ostatní ustanovení",
    "m447h3rqjy9vmve":"Jízda vozidla",
    "1xlri5vx466bfqt":"Znalost předpisů souvisejících s provozem",
}

import { Metadata } from 'next'
type Props = {
    params: { slug: string }
}
export function generateMetadata({ params }: Props): Metadata {
    return {
        title: "Okruh - " + idToTitle[slugToId[params.slug]] + " - autoskolatest.cz",
    }
}
export default async function Page({params}: { params: {slug:string} }){

    const idCategory:string = slugToId[params.slug]
    const titleCategory:string = idToTitle[idCategory]
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    const res = await pb.collection('category').getOne(idCategory,{"expand":"questions"})

    const data:Array<Question> = res.expand.questions.map((record:any) => ({
        id:record.id,
        text: record.text
    }))

    return(
        <div className="">
            <div className="max-w-5xl px-4 mx-auto ">
                <nav className="md:text-lg pb-5 pt-5 tracking-tight subpixel-antialiased"><h1 className="inline text-gray-400">Otázky autoškola teorie</h1><h1 className="inline text-gray-400 px-4">/</h1><a href="/otazky/"><h1 className="inline text-gray-400">okruhy</h1></a><h1 className="text-gray-400 inline px-4">/</h1><h1 className="inline">{titleCategory}</h1></nav>
                <QuestionListHeader />
                <ul>
                {data.map((question:Question,index)=>(
                    <li>
                        <Question key={index} id={question.id} text={question.text} category_for_url={params.slug} />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}