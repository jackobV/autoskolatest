"use client"
import {useAuth} from "@/app/(app)/osobni_zona/(context)/AuthContext";
import {useEffect, useState} from "react";
import {CategorizedQuestions} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import {categorizeQuestions} from "@/app/(app)/osobni_zona/(context)/categorizeQuestions";
import ShowCategoryBrick from "@/app/(app)/osobni_zona/(components)/showCategoryBrick";
import CategoryHeader from "@/app/(app)/osobni_zona/kategorie/[categoryId]/(components)/categoryHeader";
import QuestionList from "@/app/(app)/osobni_zona/kategorie/[categoryId]/(components)/questionList";

export default function Page({params}: { params: {categoryId:string} }){
    const { user } = useAuth();
    const [categorized, setCategorized] = useState<CategorizedQuestions|undefined>(undefined)
    useEffect(() => {
        if(user?.category){
            const category = user.category
            const questionDat = localStorage.getItem("questions")
            if(questionDat){
                const questions = JSON.parse(questionDat)
                const categorized = categorizeQuestions(questions)
                setCategorized(categorized)
            }
        }
    }, [user]);
    return(
        <div className="min-h-screen dark:bg-dark-tremor-background-subtle">
            {categorized?
                <div>
                    {Object.entries(categorized).map(([categoryId,categoryData])=>(
                        categoryId == params.categoryId?
                        <div className="w-full pt-10 px-2">
                            <CategoryHeader header={{title:categoryData.categoryName,seen:categoryData.viewed.length,unseen:categoryData.notViewed.length,learned:categoryData.learned.length}} />
                            <div className="pt-10">
                                <QuestionList seen={categoryData.viewed} unseen={categoryData.notViewed} learned={categoryData.learned} />
                            </div>
                        </div>:
                        <div className="hidden"></div>
                    ))}


                </div>:
                <div>no</div>
            }



        </div>
    )
}