import AnswerComponent from "@/app/(general)/otazky/(components)/answerComponent";
import React from "react";
import {testQuestionFull, testResultData} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import DisplayAnswear from "@/app/(app)/osobni_zona/test/(components)/displayAnswear";
import DisplayAnswearFinished from "@/app/(app)/osobni_zona/test/(components)/displayAnswearFinished";

export default function DisplayQuestionFinished({testDataFinished,currentIndex}:{// @ts-ignore
    testDataFinished:testResultData,currentIndex:number}){
    return(
        <div className="flex flex-col">
            <div className="grid grid-cols-12 w-full">
                <div className="col-span-12">
                    <div className="bg-white rounded-t-lg border aspect-[16/8] flex flex-row gap-x-5 items-center justify-center overflow-clip ">
                        {
                            testDataFinished.questions[currentIndex].question.media && testDataFinished.questions[currentIndex].question.media?.length!= 0 ?
                                // @ts-ignore
                                testDataFinished.questions[currentIndex].question.media.map((item,index)=>(
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
                                <h1 className="w-full text-center">{testDataFinished.questions[currentIndex].question.text}</h1>
                            </div>}
                    </div>
                    {testDataFinished.questions[currentIndex].question.media && testDataFinished.questions[currentIndex].question.media?.length!= 0? <div className="bg-white w-full pt-6 px-4 text-xl font-semibold tracking-tight text-gray-800 "><h1 className="w-full">{testDataFinished.questions[currentIndex].question.text}</h1></div>:<div></div>}
                    <div className="pt-5 bg-white rounded-b-2xl px-4 flex flex-col gap-y-3 pb-5">
                        {testDataFinished.questions[currentIndex].question.answear.map((item, index)=>(
                            <DisplayAnswearFinished answear={item} testDataFinished={testDataFinished} currentIndex={currentIndex} />
                        ))}
                    </div>
                </div>
            </div>
        </div>)
}