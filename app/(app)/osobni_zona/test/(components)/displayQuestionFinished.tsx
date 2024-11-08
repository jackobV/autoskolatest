import AnswerComponent from "@/app/(general)/otazky/(components)/answerComponent";
import React from "react";
import {testQuestionFull, testResultData} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import DisplayAnswear from "@/app/(app)/osobni_zona/test/(components)/displayAnswear";
import DisplayAnswearFinished from "@/app/(app)/osobni_zona/test/(components)/displayAnswearFinished";
import SmartMediaDisplay from "@/app/(app)/osobni_zona/(components)/smartMediaDisplay";

export default function DisplayQuestionFinished({testDataFinished,currentIndex}:{// @ts-ignore
    testDataFinished:testResultData,currentIndex:number}){
    // @ts-ignore
        return(
            <div className="flex flex-col">
                <div className="grid grid-cols-12 w-full">
                    <div className="col-span-12">
                        <div className="bg-white rounded-t-lg border aspect-[16/8] flex flex-row gap-x-5 items-center justify-center overflow-clip ">
                            {testDataFinished.questions[currentIndex].question.media && testDataFinished.questions[currentIndex].question.media.length !== 0 ? (
                                testDataFinished.questions[currentIndex].question.media.map((item, index) => (
                                    <SmartMediaDisplay
                                        key={index}
                                        mediaItem={item}
                                    />
                                ))
                            ) : (
                                <div className="bg-white w-full pt-6 px-4 text-xl font-semibold tracking-tight text-gray-800">
                                    <h1 className="w-full text-center">{testDataFinished.questions[currentIndex].question.text}</h1>
                                </div>
                            )}


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