import PocketBase from "pocketbase";
import {NextResponse} from "next/server";
import getRandomEntries from "@/app/(app)/api/generateTest/getRandomEntries";
import CreateCategoryMixQuestions from "@/app/(app)/api/generateTest/createCategoryMixQuestions";

interface userData{
    id:string
    userCat:string
}
export async function POST(req: Request){
    const pb = new PocketBase(process.env.PBURL);

    let finalQuestionSet={
        "znalostiPravidel":[],
        "zdravotnicka":[],
        "ZBJCUserSpecificCategory":[],
        "souvisejicipredpisy":[],
        "pojmypovinosti":[],
        "podminkyprovozuvozidla":[],
        "ostatniustanoveni":[],
        "jizdavozidla":[],
        "dopravniznacky":[],
        "dopravnisituace":[],

    }
    const data:userData = await req.json();
    const testArr = []
    const getZdravotnickaUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = 'oqw98ds03hofyhb' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    const getZdravotnickaAll= await pb.collection("question_user_data").getFullList({
        filter: `category = 'oqw98ds03hofyhb' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getOstatniUstanoveniUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = 'sf10my3uhqik14q' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    const getOstatniUstanoveniAll= await pb.collection("question_user_data").getFullList({
        filter: `category = 'sf10my3uhqik14q' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getJizdavozidlaAll = await pb.collection("question_user_data").getFullList({
        filter: `category = 'm447h3rqjy9vmve' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getJizdavozidlaUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = 'm447h3rqjy9vmve' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    const getDopravnisituaceAll = await pb.collection("question_user_data").getFullList({
        filter: `category = 'we10dfuu22j50qk' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getDopravnisituaceUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = 'we10dfuu22j50qk' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    const getDopravniznackyAll = await pb.collection("question_user_data").getFullList({
        filter: `category = 'lfw9b1mdl1a7ao9' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getDopravniznackyUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = 'lfw9b1mdl1a7ao9' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    const getPodminkyprovozuvozidlaAll = await pb.collection("question_user_data").getFullList({
        filter: `category = 'zawcp7ctmohtfts' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getPodminkyprovozuvozidlaUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = 'zawcp7ctmohtfts' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    const getPojmypovinostiAll = await pb.collection("question_user_data").getFullList({
        filter: `category = 'am7fli1w8fckmmm' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getPojmypovinostiUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = 'am7fli1w8fckmmm' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    const getSouvisejiciPredpisyAll = await pb.collection("question_user_data").getFullList({
        filter: `category = 'l4t3asvmg8tc873' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getSouvisejiciPredpisyUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = 'l4t3asvmg8tc873' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    const getCatSpecificZBJCAll = await pb.collection("question_user_data").getFullList({
        filter: `category = '${data.userCat}' && user = '${data.id}'`,
        expand: "question, question.answers, question.media"
    })
    const getCatSpecificZBJCUnvisited = await pb.collection("question_user_data").getFullList({
        filter: `category = '${data.userCat}' && user = '${data.id}' && learned = false`,
        expand: "question, question.answers, question.media"
    })
    // @ts-ignore
    const pojmy = CreateCategoryMixQuestions(getPojmypovinostiAll,getPojmypovinostiUnvisited,3)
    // @ts-ignore
    const jizda = CreateCategoryMixQuestions(getJizdavozidlaAll,getJizdavozidlaUnvisited,4)
    // @ts-ignore
    const ostatni = CreateCategoryMixQuestions(getOstatniUstanoveniAll,getOstatniUstanoveniUnvisited,3)
    // @ts-ignore
    const specific = CreateCategoryMixQuestions(getCatSpecificZBJCAll,getCatSpecificZBJCUnvisited,4)
    // @ts-ignore
    const znacky = CreateCategoryMixQuestions(getDopravniznackyAll,getDopravniznackyUnvisited,3)
    // @ts-ignore
    const situace = CreateCategoryMixQuestions(getDopravnisituaceAll,getDopravnisituaceUnvisited,3)
    // @ts-ignore
    const podminky = CreateCategoryMixQuestions(getPodminkyprovozuvozidlaAll,getPodminkyprovozuvozidlaUnvisited,2)
    // @ts-ignore
    const predpisy = CreateCategoryMixQuestions(getSouvisejiciPredpisyAll,getSouvisejiciPredpisyUnvisited,2)
    // @ts-ignore
    const zdravotnicka = CreateCategoryMixQuestions(getZdravotnickaAll,getZdravotnickaUnvisited,1)
    const combined = [...pojmy, ...jizda, ...ostatni, ...specific, ...znacky, ...situace, ...podminky, ...predpisy, ...zdravotnicka]
    // @ts-ignore


    return NextResponse.json(combined)

}