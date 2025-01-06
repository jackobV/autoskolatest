import React from "react";
import {testQuestionFull, answear, testResultData} from "@/app/(app)/osobni_zona/test/(components)/interfaces";

export default function DisplayAnswearFinished({answear,testDataFinished,currentIndex}:{answear:answear,
    testDataFinished:testResultData,currentIndex:number}){
    const index_to_letter = ["A","B","C"]
    if(testDataFinished.questions[currentIndex].question.correctAnswear === answear.id){
        return (
            <div className="flex flex-row items-center gap-x-2 bg-gray-50 border p-2 rounded-xl hover:bg-gray-100 duration-75 cursor-pointer">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-green-500 shrink-0 rounded-xl text-white font-bold text-lg">{index_to_letter[answear.order-1]}</div>
                <div className="antialiased font-medium text-sm md:text-base">
                    <p>
                        {answear.text}
                    </p>
                </div>
            </div>
        )
    }else if(testDataFinished.questions[currentIndex].question.selectedAnswear?.id === answear.id && answear.id != testDataFinished.questions[currentIndex].question.correctAnswear) {
        return(
            <div className="flex flex-row items-center gap-x-2 bg-gray-50 border p-2 rounded-xl hover:bg-gray-100 duration-75 cursor-pointer">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-red-500 shrink-0 rounded-xl text-white font-bold text-lg">{index_to_letter[answear.order-1]}</div>
                <div className="antialiased font-medium text-sm md:text-base">
                    <p>
                        {answear.text}
                    </p>
                </div>
            </div>
        )
    }else{
        return(
            <div className="flex flex-row items-center gap-x-2 bg-gray-50 border p-2 rounded-xl hover:bg-gray-100 duration-75 cursor-pointer">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-300 shrink-0 rounded-xl text-white font-bold text-lg">{index_to_letter[answear.order-1]}</div>
                <div className="antialiased font-medium text-sm md:text-base">
                    <p>
                        {answear.text}
                    </p>
                </div>
            </div>
        )
    }

}