"use client"
import { useState, useEffect } from "react";
import {
    testQuestionFinished,
    testQuestionFull,
    testResultData
} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import TestGen from "@/app/(app)/osobni_zona/test/(components)/testGen";
import DisplayQuestion from "@/app/(app)/osobni_zona/test/(components)/displayQuestion";
import TestIndex from "@/app/(app)/osobni_zona/test/(components)/testIndex";
import DisplayQuestionsInfo from "@/app/(app)/osobni_zona/test/(components)/displayQuestionsInfo";
import DisplayNavigation from "@/app/(app)/osobni_zona/test/(components)/displayNavigation";
import DisplayQuestionInfo from "@/app/(app)/osobni_zona/test/(components)/displayQuestionInfo";
import DisplayTestOverview from "@/app/(app)/osobni_zona/test/(components)/displayTestOverview";
import {categorizeQuestions} from "@/app/(app)/osobni_zona/(context)/categorizeQuestions";
import {GenerateTestSet} from "@/app/(app)/osobni_zona/test/(generateTest)/generateTestSet";
import {useAuth} from "@/app/(app)/osobni_zona/(context)/AuthContext";
import MarkTest from "@/app/(app)/osobni_zona/test/(components)/markTest";

export default function Page() {
    const [testInProgress, setTestInProgress] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [testData, setTestData] = useState<Array<testQuestionFull> | null>(null);
    const [showIndexOnMobile, setShowIndexOnMobile] = useState(false);
    const [testDataFinished, setTestDataFinished] = useState<testResultData | null>(null);
    const { user } = useAuth();

    // Time management
    const totalTestTime = 60 * 30;
    const [timeLeft, setTimeLeft] = useState(totalTestTime);
    const finishTest = async () => {
        if (!testData) {
            console.log("No test data available");
            return;
        }
        console.log("Finishing test with data:", testData);
        const finishedTest = await MarkTest({ testData:testData,time:0 });
        setTestDataFinished(finishedTest);
        console.log("Test finished:", finishedTest);
    };
    useEffect(() => {
        if (timeLeft <= 0) {
            console.log("Time's up! Ending test.");
            finishTest()
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div className="bg-slate-50 h-screen">
            {testDataFinished ? (
                <div className="max-w-6xl mx-auto pt-10 px-2">
                    <DisplayTestOverview testDataFinished={testDataFinished} />
                </div>
            ) : (
                <div className="max-w-6xl mx-auto pt-10 px-2">
                    {testData ? (
                        <div className="flex flex-col sm:flex-row sm:gap-x-5">
                            <div className="flex flex-col sm:gap-y-5">
                                <TestIndex length={testData.length} currentIndex={currentQuestion} setIndex={setCurrentQuestion} setShowIndexOnMobile={setShowIndexOnMobile} showIndexOnMobile={showIndexOnMobile} testData={testData} />
                                <DisplayQuestionsInfo currentIndex={currentQuestion} />
                            </div>
                            <div className="max-w-2xl w-full flex flex-col gap-y-5">
                                <DisplayQuestionInfo timeLeftSeconds={timeLeft % 60} timeLeftMinutes={Math.floor(timeLeft / 60)} questionIndex={currentQuestion} points={testData ? testData[currentQuestion].points : 0} />
                                <DisplayQuestion question={testData[currentQuestion]} currentIndex={currentQuestion} setTestData={setTestData} testData={testData} />
                                <DisplayNavigation currentIndex={currentQuestion} setCurrentIndex={setCurrentQuestion} testData={testData} setTestDataFinished={setTestDataFinished} testDataFinished={testDataFinished} time={timeLeft} />
                            </div>
                        </div>
                    ) : (
                        <TestGen testData={testData} setTestData={setTestData} setTime={setTimeLeft} />
                    )}
                </div>
            )}
        </div>
    );
}
