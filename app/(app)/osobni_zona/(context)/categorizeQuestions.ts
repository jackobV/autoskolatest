// Function to categorize questions by their category
import {
    CategorizedQuestions,
    CategoryInfo,
    testQuestionFull, testQuestionLocalStorage
} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
const CATEGORY_INFO: { [key: string]: CategoryInfo } = {
    'oqw98ds03hofyhb': { name: 'Zdravotnická', points: 1 },
    'we10dfuu22j50qk': { name: 'Dopravní situace', points: 4 },
    'lfw9b1mdl1a7ao9': { name: 'Dopravní značky', points: 1 },
    'zawcp7ctmohtfts': { name: 'Podmínky provozu vozidla', points: 1 },
    'l4t3asvmg8tc873': { name: 'Související předpisy', points: 2 },
    'e3kh74w2vq5dap2': { name: 'Zásady bezpečné jízdy CD', points: 2 },
    'eysdkjavl07ke2c': { name: 'Zásady bezpečné jízdy B', points: 2 },
    'wq8ils5ph00l87u': { name: 'Zásady bezpečné jízdy A', points: 2 },
    "tkonhkd9c2tjvch":{name:"Pravidla provozu na pozemních komunikacích",points:2}

    // Add other categories as needed
};
export function categorizeQuestions(questions: { [key: string]: testQuestionLocalStorage }): CategorizedQuestions {
    const categorized: CategorizedQuestions = {};

    Object.values(questions).forEach(question => {
        const category = question.category;
        if (!categorized[category]) {
            const categoryInfo = CATEGORY_INFO[category] || { name: 'Unknown Category', points: 0 };
            categorized[category] = {
                categoryName: categoryInfo.name,
                points: categoryInfo.points,
                viewed: [],
                notViewed: [],
                learned: [],
                notLearned: []
            };
        }

        if (question.viewed) {
            categorized[category].viewed.push(question);
        } else {
            categorized[category].notViewed.push(question);
        }

        if (question.learned) {
            categorized[category].learned.push(question);
        } else {
            categorized[category].notLearned.push(question);
        }
    });
    return categorized;
}
