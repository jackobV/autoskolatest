"use client"
import {useAuth} from "@/app/(app)/osobni_zona/(context)/AuthContext";
import axios from 'axios';
import React from "react";
import {testQuestionFull, media, answear} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import {GenerateTestSet} from "@/app/(app)/osobni_zona/test/(generateTest)/generateTestSet";
import {categorizeQuestions} from "@/app/(app)/osobni_zona/(context)/categorizeQuestions";

export default function TestGen({testData,setTestData,setTime}:{testData:Array<testQuestionFull>|null,// @ts-ignore
    setTestData:React.Dispatch.SetStateAction<Array<testQuestionFull>|null>,setTime:React.Dispatch.SetStateAction<number>}){
    const { user } = useAuth();
    const fetchQuestions = async () =>{
        console.log("fetch questions");
        if(user?.category){
            const category = user.category
            const questionDat = localStorage.getItem("questions")
            console.log("heyo")
            if(questionDat){
                const questions = JSON.parse(questionDat)
                const categorized = categorizeQuestions(questions)
                console.log(categorized)
                const testSet = GenerateTestSet({category,categorized})
                setTestData(testSet)
                setTime(60*30)
                console.log(testSet)
            }else{
                console.log("no questions")
            }

        }
    }
    return(
        <div className="flex flex-col items-center w-full max-w-6xl mx-auto h-full">
            <div className="w-full max-w-xl  bg-gray-200 rounded-md flex flex-col items-center py-5">
                <p className="text-xl font-semibold pb-2">Jste si jisti spuštěním testu?</p>
                <p className="text-sm pb-5">Po potvrzení budete mít 30 minut na dokončení testu</p>
                <button onClick={fetchQuestions} className="bg-dark-tremor-background text-white py-2 px-5 rounded-md">Potvrdit</button>
            </div>
        </div>
    )
}