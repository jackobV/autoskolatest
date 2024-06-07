import { testQuestionLocalStorage } from "@/app/(app)/osobni_zona/test/(components)/interfaces";

interface QuestionRecord {
    category: string;
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    learned: boolean;
    learned_probability: number;
    question: string;
    updated: string;
    user: string;
    viewed: boolean;
    expand: object;
}

function getRandomElements<T>(array: Array<T>, count: number, existingIds: Set<string>): Array<T> {
    const result: Array<T> = [];
    // @ts-ignore
    const availableElements = array.filter(item => !existingIds.has(item['id']));
    while (result.length < count && availableElements.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableElements.length);
        const [element] = availableElements.splice(randomIndex, 1);
        result.push(element);
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

    const sorted: Array<testQuestionLocalStorage> = arrayAll
        .filter(q => !existingQuestions.has(q.id))
        .sort((a, b) => a.learnedProbability - b.learnedProbability);

    let questionMix: Array<testQuestionLocalStorage> = [];

    if (arrayUnvisited.length > 0) {
        const unvisitedToBePushed = Math.min(Math.ceil(numEntries / 2), arrayUnvisited.length);
        const visitedToBePushed = numEntries - unvisitedToBePushed;

        questionMix = [
            ...getRandomElements(arrayUnvisited, unvisitedToBePushed, existingQuestions),
            ...sorted.splice(0, visitedToBePushed)
        ];
    } else {
        questionMix = sorted.splice(0, numEntries);
    }

    // Ensure we have the exact number of questions
    while (questionMix.length < numEntries) {
        const randomQuestions = getRandomElements(arrayAll, numEntries - questionMix.length, existingQuestions);
        questionMix = [...questionMix, ...randomQuestions];
    }

    // Add IDs of selected questions to the existing set
    questionMix.forEach(q => existingQuestions.add(q.id));

    return questionMix;
}