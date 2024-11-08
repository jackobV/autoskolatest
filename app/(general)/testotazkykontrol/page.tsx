'use client'
import {useEffect, useState} from "react";
import PocketBase from "pocketbase";
import QuestionElement0 from "@/app/(general)/testotazkykontrol/(components)/questionElement0";
export default function TerminyTestu(){
    interface Media {
        "id": String;
        "media":String;
        "isvideo":Boolean;
    }
    interface Answer {
        "id":String;
        "text":String;
        "correct":Boolean;
    }
    interface Question {
        "id":String;
        "answers": Answer[];
        "correctAnswer": String[];
        "category":String;
        "media":Media[]

    }
    const pb = new PocketBase(process.env.PBURL);
    pb.autoCancellation(false);
    const [testInstances, setTestInstances] = useState(Array);
    const [loading, setLoading] = useState(false);
    const [page,setPage] = useState(1)
    const [answersToProps, setAnswersToProps] = useState<Answer[]>()
    const [mediaToProps,setMediaToProps] = useState<Media[]>()
    function formatDate(props:string){
        const date = new Date(props)
        return date.toLocaleDateString();
    }
    const fetchData = async () =>{
        const records = await pb.collection('questions').getList(page,1 /* batch size */, {
            sort: 'id',
            expand: 'media,answers,category'
        });
        setTestInstances(records.items);
        const answers: Answer[] = []
        const media: Media[] = []
        // @ts-ignore
        records.items[0].expand.answers.map((item:any) => {
            let isCorrect:Boolean
            if(records.items[0].correct.includes(String(item.id))){
                isCorrect = true
            }else{
                isCorrect = false

            }
            console.log(records.items[0].correct)
            console.log(item.id)
            answers.push({
                "id": item.id,
                "text": item.text,
                "correct": isCorrect,
            })
        })
        if(records.items[0].expand.media) {
            records.items[0].expand.media.map((item: any) => {
                media.push({
                    "id": item.id,
                    "media": item.media,
                    "isvideo": item.isvideo,
                })
            })
        }
        // @ts-ignore
        setMediaToProps(media)
        setAnswersToProps(answers)
        console.log(testInstances)
        console.log(answers)
        setPage(page+1)
        setLoading(false);
    };
    useEffect(()=>{
        setLoading(true)
        try{
            fetchData().then(r => console.log(r));
        } catch (e){
            console.log(e);
        }
    },[])
    if(!loading){
        return(
            <div className="mx-auto max-w-5xl px-4">
                <h2 className="pt-20 pb-10 text-gray-600 text-3xl font-medium tracking-tight tracking-tight">Termíny testů na zkoušku</h2>
                {testInstances.map((item:any)=>(
                    // @ts-ignore
                    <QuestionElement0 id={item.id} answers={answersToProps} correctAnswer={item.correct} category={item.category} media={mediaToProps} />
                ))}
                <div onClick={fetchData}>next</div>
            </div>
        )}else{
        return(
            <div>
                nacitam
            </div>
        )
    }
}