"use client"
import {testResultData} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import {useState} from "react";
import TestIndex from "@/app/(app)/osobni_zona/test/(components)/testIndex";
import DisplayQuestionsInfo from "@/app/(app)/osobni_zona/test/(components)/displayQuestionsInfo";
import DisplayQuestionInfo from "@/app/(app)/osobni_zona/test/(components)/displayQuestionInfo";
import DisplayQuestion from "@/app/(app)/osobni_zona/test/(components)/displayQuestion";
import DisplayNavigation from "@/app/(app)/osobni_zona/test/(components)/displayNavigation";
import DisplayQuestionFinished from "@/app/(app)/osobni_zona/test/(components)/displayQuestionFinished";
import DisplayTextIndexFinished from "@/app/(app)/osobni_zona/test/(components)/displayTextIndexFinished";
import DisplayQuestionInfoFinished from "@/app/(app)/osobni_zona/test/(components)/displayQuestionInfoFinished";

export default function DisplayTestOverview({testDataFinished}:{testDataFinished:testResultData}){
    const [currentIndex,setCurrentIndex] = useState(2)
    const [showIndexOnMobile, setShowIndexOnMobile] = useState(false)
    return(
        <div>
            <div className="flex flex-col sm:flex-row sm:gap-x-5">
                <div className="flex flex-col sm:gap-y-5">

                    <DisplayTextIndexFinished length={testDataFinished.questions.length} currentIndex={currentIndex} setIndex={setCurrentIndex} showIndexOnMobile={showIndexOnMobile} setShowIndexOnMobile={setShowIndexOnMobile} finishedTestData={testDataFinished} />
                    <DisplayQuestionsInfo currentIndex={currentIndex} />
                </div>
                <div className="max-w-2xl w-full flex flex-col gap-y-5">
                    <DisplayQuestionInfoFinished testDataFinished={testDataFinished} currentIndex={currentIndex} />
                    <DisplayQuestionFinished testDataFinished={testDataFinished} currentIndex={currentIndex} />
                    {//<DisplayNavigation currentIndex={currentQuestion} setCurrentIndex={setCurrentQuestion} testData={testData} setTestDataFinished={setTestDataFinished} testDataFinished={testDataFinished} />
                    }
                </div>
            </div>
        </div>
    )
}