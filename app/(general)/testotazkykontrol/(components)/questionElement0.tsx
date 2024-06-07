import {useEffect, useState} from "react";
import PocketBase from "pocketbase";
import AnswerElement0 from "@/app/(general)/testotazkykontrol/(components)/answerElement0";
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
export default function QuestionElement0(param:Question){
    console.log(param)
    return(
        <>
            <div>{param.media.map((media:Media,index)=>(
                media.isvideo ?
                    <video controls key={index}>
                        <source src={"https://admin.autoskolatest.cz/api/files/00c3tkq61nyek18/"+media.id+"/"+media.media} type="video/mp4" />
                        {/* Add additional source tags for different video formats if necessary */}
                    </video>

                    :
                    <img src={"https://admin.autoskolatest.cz/api/files/00c3tkq61nyek18/"+media.id+"/"+media.media}/>

            ))}</div>
        <div>{param.answers.map((answer:Answer,index)=>(
            <AnswerElement0 id={answer.id} text={answer.text} correct={answer.correct} index={index} />
        ))}</div>

        </>
        )
}