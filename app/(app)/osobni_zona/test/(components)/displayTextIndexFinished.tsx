"use client"
import React from "react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/16/solid";
import DisplayTime from "@/app/(app)/osobni_zona/test/(components)/displayTime";
import {testQuestionFull, testResultData} from "@/app/(app)/osobni_zona/test/(components)/interfaces";

export default function DisplayTextIndexFinished({length,currentIndex,setIndex,showIndexOnMobile,setShowIndexOnMobile,finishedTestData}:{length:number,currentIndex:number,setIndex:React.Dispatch<React.SetStateAction<number>>,showIndexOnMobile:boolean,setShowIndexOnMobile:React.Dispatch<React.SetStateAction<boolean>>,finishedTestData:testResultData}){
    const changeIndexFunction = (number:number)=> {
        setIndex(number)
    }
    const changeShowOnMobile = () =>{
        setShowIndexOnMobile(!showIndexOnMobile)
    }
    return(
        <div>
            <div className="hidden sm:flex flex-col w-full max-w-sm ">
                <div className=" grid grid-cols-9 w-full gap-y-2">
                    {Array.from({ length: length }, (_, index) => (
                        <div key={index} className={`w-8 h-8 rounded-md flex flex-col items-center justify-center cursor-pointer text-white ${index === currentIndex ? 'bg-blue-500 text-white' : finishedTestData.questions[index].correct ?'hover:opacity-70 duration-75 text-white bg-green-500':"bg-red-500 hover:opacity-70 duration-75  hover:text-white"}` } onClick={()=>changeIndexFunction(index)}>
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex sm:hidden  flex-col text-gray-600">
                <div className=" flex flex-row justify-between" onClick={changeShowOnMobile}>
                    <div className="flex flex-row gap-x-2 items-center">
                        <p>
                            Otázka {currentIndex+1} / 25
                        </p>
                        {showIndexOnMobile?
                            <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                            :
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />

                        }
                    </div>
                </div>

                {showIndexOnMobile?<div className="grid grid-cols-9 gap-y-2 pt-5">
                    {Array.from({ length: length }, (_, index) => (
                        <div key={index} className={`w-8 h-8 rounded-md flex flex-col items-center justify-center cursor-pointer ${index === currentIndex ? 'bg-blue-500 text-white' : finishedTestData.questions[index].correct ?'hover:bg-blue-300 duration-75 text-white bg-green-500':"bg-red-500 hover:bg-blue-300 duration-75  hover:text-white"}` } onClick={()=>changeIndexFunction(index)}>
                             {index + 1}
                        </div>
                    ))}
                </div>:<div className="hidden"></div>}
            </div>
        </div>

    )
}