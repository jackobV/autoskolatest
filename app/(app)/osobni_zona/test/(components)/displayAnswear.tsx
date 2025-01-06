import React from "react";
import {testQuestionFull,answear} from "@/app/(app)/osobni_zona/test/(components)/interfaces";

export default function DisplayAnswear({answear,setTestData,testData,currentIndex}:{answear:answear,// @ts-ignore
    setTestData:React.Dispatch.SetStateAction<Array<testQuestionFull>|null>,testData:Array<testQuestionFull>|null,currentIndex:number}){
    const index_to_letter = ["A","B","C"]
    const selectAnswear = () =>{
        if(testData){
            const updatedTestData = testData.map(question=>{
                if(question === testData[currentIndex]){
                    return{...question,selectedAnswear:answear}
                }
                return question
            })
            setTestData(updatedTestData)
        }
    }
    if(!(testData) || testData[currentIndex].selectedAnswear === answear){
        return (
            <div className="flex flex-row items-center gap-x-2 bg-gray-50 border p-2 rounded-xl hover:bg-gray-100 duration-75 cursor-pointer">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-[#F8BC00] shrink-0 rounded-xl text-white font-bold text-lg">{index_to_letter[answear.order-1]}</div>
                <div className="antialiased font-medium text-sm md:text-base">
                    <p>
                        {answear.text}
                    </p>
                </div>
            </div>
        )
    }else {
        return(
            <div className="flex flex-row items-center gap-x-2 bg-gray-50 border p-2 rounded-xl hover:bg-gray-100 duration-75 cursor-pointer" onClick={selectAnswear}>
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