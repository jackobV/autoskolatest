import {NextResponse} from "next/server";
import PocketBase from "pocketbase";
import {list} from "postcss";

interface userData{
    id?:string
    category?:string
}
export async function POST(req: Request){
    const data:userData = await req.json();
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    pb.autoCancellation(false);
    const questionsRaw = await pb.collection("category").getFullList()
    questionsRaw.map(category => {
        if (category.id === "1xlri5vx466bfqt"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "1xlri5vx466bfqt",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }else if (category.id === "oqw98ds03hofyhb"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "oqw98ds03hofyhb",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "e3kh74w2vq5dap2" && data.category === "D"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "e3kh74w2vq5dap2",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "eysdkjavl07ke2c" && data.category === "B"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "eysdkjavl07ke2c",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "wq8ils5ph00l87u" && data.category === "A"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "wq8ils5ph00l87u",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "l4t3asvmg8tc873"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "l4t3asvmg8tc873",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "am7fli1w8fckmmm"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "am7fli1w8fckmmm",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "zawcp7ctmohtfts"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "zawcp7ctmohtfts",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "sf10my3uhqik14q"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "sf10my3uhqik14q",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "m447h3rqjy9vmve"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "m447h3rqjy9vmve",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "lfw9b1mdl1a7ao9"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "lfw9b1mdl1a7ao9",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        else if (category.id === "we10dfuu22j50qk"){
            category.questions.map(async (item: any) => {
                await pb.collection("question_user_data").create({
                    "user": data.id,
                    "category": "we10dfuu22j50qk",
                    "question": item,
                    "learned_probability": 0,
                    "viewed": false,
                    "learned": false
                })
            })
        }
        }
    )
    console.log(questionsRaw)
    return NextResponse.json({data})
}