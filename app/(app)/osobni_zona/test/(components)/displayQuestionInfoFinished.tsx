"use client"
import {testResultData} from "@/app/(app)/osobni_zona/test/(components)/interfaces";

export default function DisplayQuestionInfoFinished({testDataFinished,currentIndex}:{testDataFinished:testResultData,currentIndex:number}){
    return(
        <div className="flex flex-col gap-y-2 bg-gray-100 w-full justify-between py-2 px-2 rounded-xl border">
            <div className="flex flex-row  w-full justify-between items-center">
                <div className="flex flex-row gap-x-2 items-center">{testDataFinished.passed? <p>Prospěl</p>:<p>Neprospěl</p>}</div>
                <div className="flex flex-row gap-x-2 items-center">
                    Body za otázku: <p className="bg-white py-1 px-4 rounded-md">{testDataFinished.questions[currentIndex].question.points}</p>
                </div>
            </div>
            <div className="flex flex-col w-full gap-y-3">
                <div className="flex flex-row w-full justify-between items-end">
                    <div className="">Z potřebných 85%, tedy 43 bodů</div>
                    <div className={`p-2 rounded-md flex flex-col items-center justify-center ${testDataFinished.passed?'bg-green-200 text-green-800':'bg-red-200 text-red-700'}` }>{testDataFinished.percentage}% / {testDataFinished.totalPoints} bodů</div>
                </div>
                <div className="h-4 border w-full rounded-full flex flex-col overflow-hidden">
                    <div className={`h-full ${testDataFinished.passed ? 'bg-green-500 ' : 'bg-red-500'}` } style={{ width: `${testDataFinished.percentage}%` }}></div>
                </div>
            </div>

        </div>

    )
}