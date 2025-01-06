import PocketBase from "pocketbase";
import React from "react";
import AnswerComponent from "@/app/(general)/otazky/(components)/answerComponent";
interface Media {
    "id": string;
    "media":string;
    "isvideo":Boolean;
    formatCode:string
}
interface Answer {
    "id":string;
    "text":string;
    "order": number;
    "correct":boolean;
}
interface Question {
    "id":string;
    "answers": Answer[];
    "correctAnswer": string[];
    "category":string;
    "media":Media[]
}
interface IdToTitleMap {
    [key: string]: string;
}
export const revalidate = 0
export default async function Page({params}: { params: {id:string,slug:string} }){
    const pb = new PocketBase("https://pocketbase-production-5de6.up.railway.app");
    const res = await pb.collection('questions').getOne("aaaaaaa"+params.id,{"expand":"media,answers"})
    const correctAnswers: Array<string> = res.correct
    const answers:Array<Answer> = res.expand.answers.map((item:any, index:number)=>(
        {
            id:item.id,
            text:item.text,
            order: index,
            correct: correctAnswers.includes(item.id),
        }))
    const hasMedia = res.expand.hasOwnProperty("media");
    const media: Array<Media> = hasMedia
        ? res.expand.media.map((item: any) => ({
            id: item.id,
            media: item.mediaUrl,
            isvideo: item.isVideo,
            formatCode:item.formatCode
        }))
        : []
    const idToTitle:IdToTitleMap = {
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
    const slugToId:IdToTitleMap = {
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
    const categoryId = slugToId[params.slug]
    const categoryTitle = idToTitle[categoryId]
    const id_without_leading = params.id.substring(7)

    return(
        <div className="flex flex-col">
            <div className="grid grid-cols-12 w-full">
            <div className="col-span-12">
                <div className="bg-white rounded-t-lg border aspect-[16/8] flex flex-row gap-x-5 items-center justify-center overflow-clip ">
                    { hasMedia ?
                        media.map((item,index)=>(
                            item.formatCode === "video_mp4" ?
                                <video controls key={index}>
                                    <source src={item.media} type="video/mp4" />
                                    {/* Add additional source tags for different video formats if necessary */}
                                </video>
                                :
                                <div className="">
                                    <img src={item.media} className=""></img>
                                </div>
                        )):
                        <div className="bg-white w-full pt-6 px-4 text-xl font-semibold tracking-tight text-gray-800 ">
                            <h1 className="w-full text-center">{res.text}</h1>
                        </div>}
                </div>
                {hasMedia? <div className="bg-white w-full pt-6 px-4 text-xl font-semibold tracking-tight text-gray-800 "><h1 className="w-full">{res.text}</h1></div>:<div></div>}
                <div className="pt-5 bg-white rounded-b-2xl px-4 flex flex-col gap-y-3 pb-5">
                    {answers.map((item, index)=>(
                        <AnswerComponent id={item.id} text={item.text} order={item.order} correct={item.correct}  />
                    ))}
                </div>
            </div>
        </div>
            </div>
    )
}