import { useEffect } from 'react';
import PocketBase from "pocketbase";
import { useAuth } from "@/app/(app)/osobni_zona/(context)/AuthContext";
import { testQuestionFull } from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import {categorizeQuestions} from "@/app/(app)/osobni_zona/(context)/categorizeQuestions";

// Custom hook to fetch and store questions data
const useFetchQuestions = () => {
    const { user, loading } = useAuth();  // Use the authentication context
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    pb.autoCancellation(false);

    useEffect(() => {
        const questionDat = localStorage.getItem("questions")
        if(questionDat){
            const questions = JSON.parse(questionDat)
            const categorized = categorizeQuestions(questions)
            console.log(categorized)
        }
        const fetchData = async () => {
            if (!user || loading) {
                return; // Do not fetch data if there is no user or still loading user data
            }

            const categories = [
                'oqw98ds03hofyhb', 'sf10my3uhqik14q', 'm447h3rqjy9vmve',
                'we10dfuu22j50qk', 'lfw9b1mdl1a7ao9', 'zawcp7ctmohtfts',
                'am7fli1w8fckmmm', 'l4t3asvmg8tc873', user.category
            ];

            const questionsIndexed = {};

            await Promise.all(categories.map(async category => {
                const list = await pb.collection("question_user_data").getFullList({
                    filter: `category = '${category}' && user = '${user.id}'`,
                    expand: "question, question.answers, question.media"
                });
                list.forEach(data => {
                    const question = data.expand.question; // Assuming the API structure you provided
                    // @ts-ignore

                    questionsIndexed[data.id] = {
                        userId: user.id,
                        id: data.id,
                        // @ts-ignore
                        questionId: question.id,
                        category: category,
                        // @ts-ignore
                        text: question.text,
                        // @ts-ignore
                        media: question.expand.media ? question.expand.media.map(m => ({
                            id: m.id,
                            isVideo: m.isvideo || false, // Set default false if isVideo isn't defined
                            media: m.media
                        })) : [], // Ensure media is always an array
                        // @ts-ignore
                        answear: question.expand.answers.map(a => ({
                            id: a.id,
                            order: a.order,
                            text: a.text
                        })),
                        // @ts-ignore
                        correctAnswear: question.correct[0], // Assuming 'correct' contains IDs of correct answers,
                        viewed:data.viewed,
                        learned:data.learned,
                        learnedProbability:data.learned_probability
                    };
                });
            }));

            localStorage.setItem('questions', JSON.stringify(questionsIndexed));
        };
        const questions = localStorage.getItem('questions');

        if (!questions || JSON.parse(questions).length === 0 || JSON.parse(questions).length === undefined) {
            console.log("No questions found.");
            fetchData();
        }else{
            console.log(JSON.parse(questions).length)
        }
    }, [user, loading]); // Depend on user and loading state
};

export default useFetchQuestions;