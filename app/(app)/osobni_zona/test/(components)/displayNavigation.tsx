import React from "react";
import {
    testQuestionFinished,
    testQuestionFull,
    testResultData
} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import MarkTest from "@/app/(app)/osobni_zona/test/(components)/markTest";

export default function DisplayNavigation({currentIndex,setCurrentIndex,testData,testDataFinished,setTestDataFinished,time}:{currentIndex:number,setCurrentIndex:React.Dispatch<React.SetStateAction<number>>,testData:Array<testQuestionFull>|null,testDataFinished:testResultData|null,setTestDataFinished:React.Dispatch<React.SetStateAction<testResultData|null>>,time:number}){
    const changeIndexFunction = (number:number)=> {
        if(number === 0){
            setCurrentIndex(currentIndex - 1)
        }else {
            setCurrentIndex(currentIndex + 1)
        }
    }
    const finishTest = async () => {
        if (!testData) {
            console.log("No test data available");
            return;
        }
        console.log("Finishing test with data:", testData);
        const finishedTest = await MarkTest({ testData, time });
        setTestDataFinished(finishedTest);
        console.log("Test finished:", finishedTest);
    };
    return(
        <div className="flex flex-col gap-y-2">
            <div className="flex flex-row justify-between gap-x-2">
                {currentIndex === 0 ?
                    <button disabled={true}
                            className="bg-blue-200 text-white py-2 w-full sm:w-28 rounded-xl">Předchozí</button>
                    :
                    <button onClick={() => changeIndexFunction(0)}
                            className="bg-blue-400 text-white py-2 w-full sm:w-28 rounded-xl  hover:bg-blue-500 duration-75">Předchozí</button>

                }
                <button className="hidden sm:inline" onClick={finishTest}>Ukončit a vyhodnotit test</button>
                {currentIndex === 24 ?
                    <button disabled={true}
                            className="bg-blue-300 text-white py-2 w-full sm:w-28 rounded-xl">Další</button>
                    :
                    <button onClick={() => changeIndexFunction(1)}
                            className="bg-blue-500 text-white py-2 w-full sm:w-28 rounded-xl  hover:bg-blue-600 duration-75">Další</button>
                }

            </div>
            <button className="sm:hidden" onClick={finishTest}>Ukončit a vyhodnotit test</button>

        </div>

    )
}