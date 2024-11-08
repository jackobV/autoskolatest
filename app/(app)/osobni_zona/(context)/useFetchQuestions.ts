import { useEffect } from 'react';
import PocketBase from "pocketbase";
import { useAuth } from "@/app/(app)/osobni_zona/(context)/AuthContext";
import { testQuestionLocalStorage } from "@/app/(app)/osobni_zona/test/(components)/interfaces";

interface StoredQuestions {
    [key: string]: testQuestionLocalStorage;
}

const useFetchQuestions = () => {
    const { user, loading } = useAuth();
    const pb = new PocketBase("https://pocketbase-production-5de6.up.railway.app");
    pb.autoCancellation(false);

    useEffect(() => {
        if (!user || loading) return;

        const stored = localStorage.getItem('questions');
        const questions: StoredQuestions = stored ? JSON.parse(stored) : {};

        if (Object.keys(questions).length > 0) return;

        const fetchData = async () => {
            const categories = [
                'oqw98ds03hofyhb', 'sf10my3uhqik14q', 'm447h3rqjy9vmve',
                'we10dfuu22j50qk', 'lfw9b1mdl1a7ao9', 'zawcp7ctmohtfts',
                'am7fli1w8fckmmm', 'l4t3asvmg8tc873', user.category
            ];

            const questionsIndexed: StoredQuestions = {};

            await Promise.all(categories.map(async category => {
                const list = await pb.collection("question_user_data").getFullList({
                    filter: `category = '${category}' && user = '${user.id}'`,
                    expand: "question, question.answers, question.media"
                });

                list.forEach(data => {
                    const question = data.expand?.question;
                    if (!question) return;

                    // @ts-ignore
                    questionsIndexed[data.id] = {
                        userId: user.id,
                        id: data.id,
                        // @ts-ignore
                        questionId: question.id,
                        // @ts-ignore
                        category: category,
                        // @ts-ignore
                        text: question.text,
                        // @ts-ignore
                        media: question.expand?.media?.map(m => ({
                            id: m.id,
                            isVideo: m.isvideo || false,
                            mediaUrl: m.mediaUrl
                        })) || [],
                        // @ts-ignore
                        answear: question.expand?.answers?.map(a => ({
                            id: a.id,
                            order: a.order,
                            text: a.text
                        })) || [],
                        // @ts-ignore
                        correctAnswear: question.correct,
                        viewed: data.viewed,
                        learned: data.learned,
                        learnedProbability: data.learned_probability
                    };
                });
            }));

            localStorage.setItem('questions', JSON.stringify(questionsIndexed));
        };

        fetchData();
    }, [user, loading]);
};

export default useFetchQuestions;