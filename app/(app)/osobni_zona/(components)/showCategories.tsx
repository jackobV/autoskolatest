"use client"
import {useEffect, useState} from "react";
import {CategorizedQuestions} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import {useAuth} from "@/app/(app)/osobni_zona/(context)/AuthContext";
import {categorizeQuestions} from "@/app/(app)/osobni_zona/(context)/categorizeQuestions";
import {GenerateTestSet} from "@/app/(app)/osobni_zona/test/(generateTest)/generateTestSet";
import ShowCategoryBrick from "@/app/(app)/osobni_zona/(components)/showCategoryBrick";

export default function ShowCategories(){
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
                console.log(categorized + "categorized")
            }

        }
    }, []);
    return(
        <div className="max-w-6xl mx-auto w-full">{categorized?
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 xl:gap-x-8 w-full">
                {Object.entries(categorized).map(([categoryId,categoryData])=>(
                        <div className="w-full"><ShowCategoryBrick catBrick={{learned:categoryData.learned.length,unseen:categoryData.notViewed.length,viewed:categoryData.viewed.length,title:categoryData.categoryName, id:categoryId}} /></div>
                    ))}
            </div>:<div></div>
        }</div>
    )
}