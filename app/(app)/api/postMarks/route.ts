import PocketBase from "pocketbase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    const data = await req.json();  // Assuming this matches the expected structure
    pb.autoCancellation(false)
    // Update question_user_data for each question and collect updates to return
    const updates = await Promise.all(data.questions.map(async (item: { question: { id: string; }; correct: any; }) => {
        const previousData = await pb.collection("question_user_data").getOne(item.question.id);

        let learnedProbability: number;
        let learned: boolean = false;

        if (previousData.learned_probability === 0 && !item.correct) {
            learnedProbability = 0;
        } else if (previousData.learned_probability !== 0 && !item.correct) {
            learnedProbability = previousData.learned_probability - 1;
        } else if (previousData.learned_probability === 3 && item.correct) {
            learned = true;
            learnedProbability = previousData.learned_probability + 1;
        } else {
            learnedProbability = previousData.learned_probability + 1;
        }

        // Update the record
        await pb.collection("question_user_data").update(item.question.id, {
            learned: learned,
            viewed: true,
            learned_probability: learnedProbability
        });
        // Return the updated data for the response
        return {
            questionId: item.question.id,
            learned: learned,
            viewed: true,
            learnedProbability: learnedProbability
        };
    }));

    // Log new test result and update user's test results
    const newTestResult = await pb.collection("test_results").create({
        user: data.questions[0].question.userId,
        passed: data.passed,
        score: data.totalPoints,
        timeMinute: data.timeMinute,
        timeSecond: data.timeSecond
    });
    const prevTestResults = await pb.collection("users").getOne(data.questions[0].question.userId);
    const newPrevTestResults = [...prevTestResults.testResults, newTestResult.id];

    await pb.collection("users").update(data.questions[0].question.userId, {
        testResults: newPrevTestResults
    });

    // Return the updated question data alongside the newly created test result id
    return NextResponse.json({ updatedQuestions: updates, newTestResultId: newTestResult.id });
}