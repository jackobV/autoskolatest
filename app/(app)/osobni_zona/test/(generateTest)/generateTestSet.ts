import {CategorizedQuestions, testQuestionFull} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import CategoryMixTestGen from "@/app/(app)/osobni_zona/test/(generateTest)/CategoryMixTestGen";

export function GenerateTestSet({ category, categorized }: { category: string, categorized: CategorizedQuestions }): Array<testQuestionFull> {
    const userCat = category;
    const existingQuestions = new Set<string>();
    const pravidla = CategoryMixTestGen(categorized.tkonhkd9c2tjvch.viewed,categorized.tkonhkd9c2tjvch.notViewed,10,existingQuestions);
    const specific = CategoryMixTestGen(categorized[userCat]["viewed"], categorized[userCat]["notViewed"], 4, existingQuestions);
    console.log(specific)
    const znacky = CategoryMixTestGen(categorized.lfw9b1mdl1a7ao9.viewed, categorized.lfw9b1mdl1a7ao9.notViewed, 3, existingQuestions);
    const situace = CategoryMixTestGen(categorized.we10dfuu22j50qk.viewed, categorized.we10dfuu22j50qk.notViewed, 3, existingQuestions);
    const podminky = CategoryMixTestGen(categorized.zawcp7ctmohtfts.viewed, categorized.zawcp7ctmohtfts.notViewed, 2, existingQuestions);
    const predpisy = CategoryMixTestGen(categorized.l4t3asvmg8tc873.viewed, categorized.l4t3asvmg8tc873.notViewed, 2, existingQuestions);
    const zdravotnicka = CategoryMixTestGen(categorized.oqw98ds03hofyhb.viewed, categorized.oqw98ds03hofyhb.notViewed, 1, existingQuestions);

    const combined = [...pravidla, ...specific, ...znacky, ...situace, ...podminky, ...predpisy, ...zdravotnicka];
    console.log(combined)
    // Ensure there are exactly 25 questions
    return combined.slice(0, 25).map((item, index) => {
        let points: number;
        if (index < 14) {
            points = 2;
        } else if (index >= 14 && index < 17) {
            points = 1;
        } else if (index >= 17 && index < 20) {
            points = 4;
        } else if (index >= 20 && index < 22) {
            points = 1;
        } else if (index >= 22 && index < 24) {
            points = 2;
        } else {
            points = 1;
        }
        return {
            userId: item.userId,
            id: item.id,
            questionId: item.questionId,
            category: item.category,
            text: item.text,
            media: item.media,
            answear: item.answear,
            selectedAnswear: null,
            correctAnswear: item.correctAnswear,
            points: points,
        };
    });
}