import React from "react";
import PocketBase from "pocketbase";
interface SlugToIdMap {
    [key: string]: string;
}
import { Metadata } from 'next'
import {CSPostHogProvider} from "@/app/providers";
import SideBannerAd from "@/app/(general)/otazky/(components)/sideBannerAd";
type Props = {
    params: { id: string }
}
export function generateMetadata({ params }: Props): Metadata {
    return {
        title: "Otázka " + params.id + " - autoskolatest.cz",
    }
}

export default async function QuestionLayout({children,params}: { children: React.ReactNode,params: {slug:string,id:string} }) {
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
    const categoryId = slugToId[params.slug]
    const categoryTitle = idToTitle[categoryId]
    const id_without_leading = params.id.substring(7)

    const idCategory:string = slugToId[params.slug]
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    const res = await pb.collection('category').getOne(idCategory)
    const data:Array<string> = res.questions
    const placeInArray = data.indexOf("aaaaaaa"+params.id)
    let next = data[placeInArray+1]
    let prev = data[placeInArray-1]
    console.log(prev + "prev")
    if(placeInArray === 0){
        prev = data[data.length-1]
    }
    if(placeInArray === data.length-1){
        next = data[0]
    }
    next = next.substring(7)
    prev = prev.substring(7)
    return(
        <CSPostHogProvider>
        <div className=" ">
            <div className="flex flex-col max-w-5xl mx-auto px-4">
                <nav className="md:text-lg pb-5 pt-5 tracking-tight subpixel-antialiased"><h2 className="inline text-gray-400">Otázky autoškola teorie</h2><h2 className="inline text-gray-400 px-4">/</h2><a href="/otazky/"><h2 className="inline text-gray-400">okruhy</h2></a><h2 className="text-gray-400 inline px-4">/</h2><a href={`/otazky/${params.slug}/`}><h2 className="inline text-gray-400">{categoryTitle}</h2></a><h2 className="text-gray-400 inline px-4">/</h2><h2 className="inline">{params.id}</h2></nav>
                <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
                    <div className="md:w-8/12">{children}</div>
                    <div className='flex flex-col gap-y-4'>
                        <div
                            className="flex flex-col flex-row bg-white rounded-xl w-full md:w-96 h-fit px-4 py-4 h-40 w-fit text-sm gap-y-2">
                            <a href={`/otazky/${params.slug}/`}
                               className="bg-[#F8BC00] text-white w-fit px-2 py-1 rounded-xl">{categoryTitle}</a><a
                            className="bg-[#378F2D] text-white w-fit px-2 py-1 rounded-xl"
                            href={`/otazky/${params.slug}/${next}`}>Další otázka </a><a
                            className="bg-[#AFCA00] text-white w-fit px-2 py-1 rounded-xl"
                            href={`/otazky/${params.slug}/${prev}`}>Předchozí otázka </a></div>
                        <SideBannerAd />
                    </div>
                </div>
            </div>
        </div>
        </CSPostHogProvider>
    )
}