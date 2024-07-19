"use client"
import React from "react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/16/solid";
import DisplayTime from "@/app/(app)/osobni_zona/test/(components)/displayTime";
import {testQuestionFull} from "@/app/(app)/osobni_zona/test/(components)/interfaces";

export default function TestIndex({length,currentIndex,setIndex,showIndexOnMobile,setShowIndexOnMobile,testData}:{length:number,currentIndex:number,setIndex:React.Dispatch<React.SetStateAction<number>>,showIndexOnMobile:boolean,setShowIndexOnMobile:React.Dispatch<React.SetStateAction<boolean>>,testData:Array<testQuestionFull>|null}){
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
                        <div key={index} className={`w-8 h-8 rounded-md flex flex-col items-center justify-center cursor-pointer ${index === currentIndex ? 'bg-blue-500 text-white' : !(testData) || testData[index].selectedAnswear != null ?'hover:bg-blue-300 duration-75 text-white bg-[#F8BC00]':"bg-white hover:bg-blue-300 duration-75  hover:text-white"}` } onClick={()=>changeIndexFunction(index)}>
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

                {showIndexOnMobile?<div className="grid grid-cols-9 gap-y-2 pt-5 pb-4">
                    {Array.from({ length: length }, (_, index) => (
                        <div key={index} className={`w-8 h-8 rounded-md flex flex-col items-center justify-center cursor-pointer ${index === currentIndex ? 'bg-blue-500 text-white' : !(testData) || testData[index].selectedAnswear != null ?'hover:bg-blue-300 duration-75 text-white bg-[#F8BC00]':"bg-white hover:bg-blue-300 duration-75  hover:text-white"}` } onClick={()=>changeIndexFunction(index)}>
                            {index + 1}
                        </div>
                    ))}
                </div>:<div className="hidden"></div>}
            </div>
        </div>

    )
}