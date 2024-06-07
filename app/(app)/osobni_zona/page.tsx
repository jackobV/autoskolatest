"use client"
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/app/(app)/osobni_zona/(context)/AuthContext';
import PreviousTestResultsGraph from "@/app/(app)/osobni_zona/(components)/previousTestResultsGraph";
import {prevTestResults} from "@/app/(app)/osobni_zona/(components)/interfaces";
import PocketBase from "pocketbase";
import PreviousXResultsBar from "@/app/(app)/osobni_zona/(components)/previousXResultsBar";
import StartATestBanner from "@/app/(app)/osobni_zona/(components)/startATestBanner";
import useFetchQuestions from "@/app/(app)/osobni_zona/(context)/useFetchQuestions";
import ShowCategories from "@/app/(app)/osobni_zona/(components)/showCategories";
import {testQuestionLocalStorage} from "@/app/(app)/osobni_zona/test/(components)/interfaces";

export default function Page() {
    useFetchQuestions()
    const pb = new PocketBase('https://admin.autoskolatest.cz');
    const { user, loading } = useAuth();
    const [prevResults, setPrevResults] = useState<Array<prevTestResults> | null>(null);
    const [loadingData, setLoadingData] = useState(true);
    const [questions, setQuestions] = useState<testQuestionLocalStorage[]>(() => {
        const storedQuestions = localStorage.getItem("questions");
        if (storedQuestions) {
            return JSON.parse(storedQuestions);
        }
        return []; // Return an empty array if nothing is stored
    });
    useEffect(() => {
        if (!loading && !user) {
            redirect('/unauthorized');
        } else {
            const fetchUserData = async () => {
                if (user) {
                    try {
                        const userData = await pb.collection("users").getOne(user.id, {
                            expand: 'testResults',
                        });
                        const prevResults = userData.expand;

                        // Sort testResults by the created date
                        const sortedTestResults = prevResults.testResults
                            // @ts-ignore
                            ? [...prevResults.testResults].sort((a: any, b: any) =>
                                new Date(a.created).getTime() - new Date(b.created).getTime()
                            )
                            : null;

                        // Map sorted testResults to prevTestResults array
                        // @ts-ignore
                        const TestResults: Array<prevTestResults> | null = sortedTestResults
                            ? sortedTestResults.map((item: any, index: number) => ({
                                id: item.id,
                                passed: item.passed,
                                score: item.score,
                                timeMinute: item.timeMinute,
                                timeSecond: item.timeSecond,
                                created: item.created,
                                index: index,
                            }))
                            : null;

                        setPrevResults(TestResults);
                        setLoadingData(false);
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                    }
                }
            };
            fetchUserData();
        }
    }, [user, loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="h-screen dark:bg-dark-tremor-background-subtle">
            <div className="flex flex-col w-full items-center px-2">
                <div className="flex flex-col gap-y-10 sm:flex-row gap-x-3 pt-10 w-full max-w-6xl">
                    <PreviousTestResultsGraph prevTestResults={prevResults} loading={loadingData} />
                    <PreviousXResultsBar previousResults={prevResults} loading={loadingData} />
                </div>
                <div className="w-full pt-10">
                    <StartATestBanner />
                </div>
                <div className="w-full pt-10"><ShowCategories /></div>
            </div>
        </div>
    );
}
