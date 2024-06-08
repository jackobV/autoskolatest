import { testQuestionLocalStorage } from "@/app/(app)/osobni_zona/test/(components)/interfaces";

function getRandomElements<T>(array: Array<T>, count: number, existingIds: Set<string>): Array<T> {
    const result: Array<T> = [];
    // @ts-ignore
    const availableElements = array.filter(item => !existingIds.has(item['id']));
    for (let i = 0; i < count && availableElements.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableElements.length);
        result.push(availableElements.splice(randomIndex, 1)[0]);
    }
    return result;
}

export default function CategoryMixTestGen<T>(
    arrayAll: Array<testQuestionLocalStorage>,
    arrayUnvisited: Array<testQuestionLocalStorage>,
    numEntries: number,
    existingQuestions: Set<string>
): Array<testQuestionLocalStorage> {
    existingQuestions = existingQuestions || new Set<string>();

    // Filter out questions that are already in existingQuestions
    const filteredAll = arrayAll.filter(q => !existingQuestions.has(q.id));
    const sorted: Array<testQuestionLocalStorage> = filteredAll.sort((a, b) => a.learnedProbability - b.learnedProbability);

    let questionMix: Array<testQuestionLocalStorage> = [];

    if (arrayUnvisited.length > 0) {
        const unvisitedToBePushed = Math.min(numEntries, arrayUnvisited.length);
        questionMix = getRandomElements(arrayUnvisited, unvisitedToBePushed, existingQuestions);
    }

    if (questionMix.length < numEntries) {
        const remainingNeeded = numEntries - questionMix.length;
        const additionalQuestions = sorted.slice(0, remainingNeeded);
        questionMix = [...questionMix, ...additionalQuestions];
    }

    // If still not enough questions, fill in with additional random questions, ensuring no duplicates
    if (questionMix.length < numEntries) {
        const remainingNeeded = numEntries - questionMix.length;
        const additionalRandomQuestions = getRandomElements(filteredAll, remainingNeeded, existingQuestions);
        questionMix = [...questionMix, ...additionalRandomQuestions];
    }

    // Add IDs of selected questions to the existing set
    questionMix.forEach(q => existingQuestions.add(q.id));

    return questionMix;
}
