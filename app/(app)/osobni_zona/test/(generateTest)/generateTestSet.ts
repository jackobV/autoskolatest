"use client"
import {CategorizedQuestions, testQuestionFull} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import {useAuth} from "@/app/(app)/osobni_zona/(context)/AuthContext";
import {categorizeQuestions} from "@/app/(app)/osobni_zona/(context)/categorizeQuestions";
import CategoryMixTestGen from "@/app/(app)/osobni_zona/test/(generateTest)/CategoryMixTestGen";

export function GenerateTestSet({category,categorized}:{category:string,categorized:CategorizedQuestions}):Array<testQuestionFull>{
            const userCat = category
            const pojmy = CategoryMixTestGen(categorized.am7fli1w8fckmmm.viewed,categorized.am7fli1w8fckmmm.notViewed,3)
            const jizda = CategoryMixTestGen(categorized.m447h3rqjy9vmve.viewed,categorized.m447h3rqjy9vmve.notViewed,4)
            const ostatni = CategoryMixTestGen(categorized.sf10my3uhqik14q.viewed,categorized.sf10my3uhqik14q.notViewed,3)
            const specific = CategoryMixTestGen(categorized[userCat].viewed,categorized[userCat].notViewed,4)
            const znacky = CategoryMixTestGen(categorized.lfw9b1mdl1a7ao9.viewed,categorized.lfw9b1mdl1a7ao9.notViewed,3)
            const situace = CategoryMixTestGen(categorized.we10dfuu22j50qk.viewed,categorized.we10dfuu22j50qk.notViewed,3)
            const podminky = CategoryMixTestGen(categorized.zawcp7ctmohtfts.viewed,categorized.zawcp7ctmohtfts.notViewed,2)
            const predpisy = CategoryMixTestGen(categorized.l4t3asvmg8tc873.viewed,categorized.l4t3asvmg8tc873.notViewed,2)
            const zdravotnicka = CategoryMixTestGen(categorized.oqw98ds03hofyhb.viewed,categorized.oqw98ds03hofyhb.notViewed,1)
            const combined = [...pojmy, ...jizda, ...ostatni, ...specific, ...znacky, ...situace, ...podminky, ...predpisy, ...zdravotnicka]
            const questionsCombinedTestVersion: Array<testQuestionFull> = combined.map((item,index)=>{
                let points:number
                if(index < 14){
                    points = 2
                }else if(index>13 && index < 15){
                    points = 1
                }else if(index>16 && index < 20){
                    points = 4
                }else if(index >19 && index < 21){
                    points = 1
                }else if(index > 21 && index < 24){
                    points = 2
                }else {
                    points = 1
                }
                return{
                    userId:item.userId,
                    id:item.id,
                    questionId:item.questionId,
                    category:item.category,
                    text:item.text,
                    media:item.media,
                    answear:item.answear,
                    selectedAnswear:null,
                    correctAnswear:item.correctAnswear,
                    points:points,
                }

            })
            return questionsCombinedTestVersion

}