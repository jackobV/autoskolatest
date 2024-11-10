import axios from "axios";
import {testQuestionFull, testResultData} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import {syncLocalStorage} from "@/app/(app)/osobni_zona/(context)/syncLocalStorage";

async function postMarks({testData}:{testData:testResultData}) {
    const response = await axios.post("/api/postMarks", testData);
    console.log("API Response:", response.data);
    return response.data;  // Assuming the API returns the updated questions
}
function constructFinished({testData}:{testData:Array<testQuestionFull>}): { questionsFinished: Array<{ question: testQuestionFull, correct: boolean }>, totalPoints: number } {
    let totalPoints = 0;  // Initialize total points
    const questionsFinished = testData.map(item => {
        const correct = item.correctAnswear === item.selectedAnswear?.id;
        // Add points immediately if the answer is correct
        if (correct) {
            totalPoints += item.points;
        }
        return {
            question: item,
            correct: correct,
        };
    });
    return { questionsFinished, totalPoints };
}

export default async function MarkTest({testData, time}:{testData:Array<testQuestionFull>|null, time:number}): Promise<testResultData|null> {
    if (testData) {
        const { questionsFinished, totalPoints } = constructFinished({testData});  // Use destructuring to get the results and total points
        const finalData: testResultData = {
            timeSecond: (1800 - time) % 60,
            timeMinute: Math.floor((1800 - time) / 60),
            totalPoints: totalPoints,
            questions: questionsFinished,
            passed: totalPoints > 42,  // Depending on your criteria
            percentage: totalPoints / 50 * 100
        };

        const updatedQuestions = await postMarks({testData: finalData});

        // Now update local storage with the returned data
        if (updatedQuestions) {
            syncLocalStorage(updatedQuestions.updatedQuestions)
        }

        return finalData;
    } else {
        return null;
    }
}