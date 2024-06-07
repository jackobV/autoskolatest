import {testQuestionLocalStorage} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import DisplayAnswearFinished from "@/app/(app)/osobni_zona/test/(components)/displayAnswearFinished";
import React from "react";

export default function QuestionModal({question}:{question:testQuestionLocalStorage}) {
    const index_to_letter = ["A","B","C"]
    return (
        <div className="flex flex-col w-full max-w-2xl">
            <div className="grid grid-cols-12 w-full">
                <div className="col-span-12 w-full">
                    <div className="bg-white rounded-t-lg border aspect-[16/8] flex flex-row gap-x-5 items-center justify-center overflow-clip   w-full">
                        {
                            question.media && question.media?.length != 0 ?
                                // @ts-ignore
                                question.media.map((item,index)=>(
                                    item.isVideo ?
                                        <video controls key={index} autoPlay={true}>
                                            <source src={"https://admin.autoskolatest.cz/api/files/00c3tkq61nyek18/"+item.id+"/"+item.media} type="video/mp4" />
                                            {/* Add additional source tags for different video formats if necessary */}
                                        </video>
                                        :
                                        <div className="">
                                            <img src={"https://admin.autoskolatest.cz/api/files/00c3tkq61nyek18/"+item.id+"/"+item.media} className=""></img>
                                        </div>
                                )):
                                <div className="bg-white w-full pt-6 px-4 text-xl font-semibold tracking-tight text-gray-800 ">
                                    <h1 className="w-full text-center">{question.text}</h1>
                                </div>}
                    </div>
                    {question.media && question.media?.length != 0? <div className="bg-white w-full pt-6 px-4 text-xl font-semibold tracking-tight text-gray-800 "><h1 className="w-full">{question.text}</h1></div>:<div></div>}
                    <div className="pt-5 bg-white rounded-b-2xl px-4 flex flex-col gap-y-3 pb-5">
                        {question.answear.map((item, index)=>(
                            <div className="flex flex-row items-center gap-x-2 bg-gray-50 border p-2 rounded-xl hover:bg-gray-100 duration-75 cursor-pointer">
                                {item.id === question.correctAnswear?
                                    <div className="flex flex-col items-center justify-center w-10 h-10 bg-green-500 shrink-0 rounded-xl text-white font-bold text-lg">{index_to_letter[item.order]}</div>
                                    :
                                    <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-300 shrink-0 rounded-xl text-white font-bold text-lg">{index_to_letter[item.order]}</div>
                                }
                                <div className="antialiased font-medium text-sm md:text-base text-left">
                                    <p>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}