
// Function to sync local storage with updated question data
import {testQuestionLocalStorage} from "@/app/(app)/osobni_zona/test/(components)/interfaces";

export function syncLocalStorage(updatedQuestions: testQuestionLocalStorage[]) {
    const existingDataJSON = localStorage.getItem('questions');
    if (existingDataJSON) {
        let existingData = JSON.parse(existingDataJSON);

        updatedQuestions.forEach(updatedQuestion => {
            if (existingData[updatedQuestion.questionId]) {
                existingData[updatedQuestion.questionId] = {
                    ...existingData[updatedQuestion.questionId],
                    learned: updatedQuestion.learned,
                    viewed: updatedQuestion.viewed,
                    learned_probability: updatedQuestion.learnedProbability
                };
            }
        });

        localStorage.setItem('questions', JSON.stringify(existingData));
    }
}