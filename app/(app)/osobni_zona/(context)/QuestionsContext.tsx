"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { useAuth } from './AuthContext';
import { testQuestionLocalStorage } from '@/app/(app)/osobni_zona/test/(components)/interfaces';

interface QuestionsContextType {
    questions: Record<string, testQuestionLocalStorage> | null;
    loading: boolean;
    error: string | null;
    refetchQuestions: () => Promise<void>;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export const QuestionsProvider = ({ children }: { children: ReactNode }) => {
    const [questions, setQuestions] = useState<Record<string, testQuestionLocalStorage> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user, loading: authLoading } = useAuth();
    const pb = new PocketBase("https://pocketbase-production-5de6.up.railway.app");

    const fetchQuestions = async (silent = false) => {
        if (!user?.id) return;

        try {
            if (!silent) {
                setLoading(true);
            }
            setError(null);

            const categories = [
                'tkonhkd9c2tjvch', 'oqw98ds03hofyhb', 'zawcp7ctmohtfts',
                'l4t3asvmg8tc873', 'lfw9b1mdl1a7ao9', 'we10dfuu22j50qk', user.category
            ].filter(Boolean);

            const allQuestions = {};

            for (const category of categories) {
                try {
                    const list = await pb.collection("question_user_data").getFullList({
                        filter: `category = '${category}' && user = '${user.id}'`,
                        expand: "question, question.answers, question.media"
                    });

                    if (list && Array.isArray(list)) {
                        list.forEach(data => {
                    const question = data.expand.question;
                    // Store in the same format as before
                    // @ts-ignore
                    allQuestions[data.id] = {
                        userId: user.id,
                        id: data.id,
                        // @ts-ignore
                        questionId: question.id,
                        // @ts-ignore
                        category: category,
                        // @ts-ignore
                        text: question.text,
                        // @ts-ignore
                        media: question.expand?.media ? question.expand.media.map(m => ({
                            id: m.id,
                            isVideo: m.isvideo || false,
                            mediaUrl: m.mediaUrl,
                            formatCode:m.formatCode

                        })) : [],
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
                }
            } catch (e) {
                console.error(`Error fetching category ${category}:`, e);
            }
        }

        if (Object.keys(allQuestions).length > 0) {
            setQuestions(allQuestions);
            localStorage.setItem('questions', JSON.stringify(allQuestions));
            setError(null);
        } else if (!silent) {
            setError('No questions available');
        }

    } catch (error) {
        console.error('Error fetching questions:', error);
        if (!silent) {
            setError('Failed to fetch questions');
        }
    } finally {
        if (!silent) {
            setLoading(false);
        }
    }
};

useEffect(() => {
    if (!authLoading && user) {
        const storedQuestions = localStorage.getItem('questions');

        if (storedQuestions) {
            try {
                const parsedQuestions = JSON.parse(storedQuestions);
                if (Object.keys(parsedQuestions).length > 0) {
                    setQuestions(parsedQuestions);
                    setLoading(false);
                    // Fetch fresh data silently in the background
                    fetchQuestions(true);
                } else {
                    fetchQuestions(false);
                }
            } catch (e) {
                console.error('Error parsing stored questions:', e);
                localStorage.removeItem('questions');
                fetchQuestions(false);
            }
        } else {
            fetchQuestions(false);
        }
    }
}, [user, authLoading]);

const contextValue = React.useMemo(() => ({
    questions,
    loading,
    error,
    refetchQuestions: () => fetchQuestions(false)
}), [questions, loading, error]);

return (
    <QuestionsContext.Provider value={contextValue}>
        {children}
    </QuestionsContext.Provider>
);
};

export const useQuestions = () => {
    const context = useContext(QuestionsContext);
    if (context === undefined) {
        throw new Error('useQuestions must be used within a QuestionsProvider');
    }
    return context;
};