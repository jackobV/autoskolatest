"use client";
import { useQuestions } from "@/app/(app)/osobni_zona/(context)/QuestionsContext";
import { categorizeQuestions } from "@/app/(app)/osobni_zona/(context)/categorizeQuestions";
import ShowCategoryBrick from "@/app/(app)/osobni_zona/(components)/showCategoryBrick";
import { useCallback, useEffect, useMemo } from "react";

export default function ShowCategories() {
    const { questions, loading, error, refetchQuestions } = useQuestions();

    // Memoize categorized data to prevent unnecessary recalculations
    const categorized = useMemo(() => {
        if (!questions) return null;
        return categorizeQuestions(questions);
    }, [questions]);

    const retry = useCallback(() => {
        refetchQuestions();
    }, [refetchQuestions]);

    // Show loading skeleton while initially loading or when we have no data
    if (loading || (!questions && !error)) {
        return (
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 xl:gap-x-8 w-full">
                    {[...Array(9)].map((_, index) => (
                        <div key={index} className="w-full">
                            <div className="animate-pulse flex flex-col px-4 bg-white/10 py-6 gap-y-2 rounded-xl dark:bg-dark-tremor-background h-48">
                                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                                <div className="mt-4 h-10 bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Show error state only if we have an error and no data
    if (error && !questions) {
        return (
            <div className="max-w-6xl mx-auto w-full flex justify-center items-center">
                <div className="text-red-500 flex flex-col items-center gap-4">
                    <div>{error}</div>
                    <button
                        onClick={retry}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Retry Loading
                    </button>
                </div>
            </div>
        );
    }

    if (!categorized) {
        return (
            <div className="max-w-6xl mx-auto w-full flex justify-center items-center">
                <div className="text-white">No categories available</div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 xl:gap-x-8 w-full">
                {Object.entries(categorized).map(([categoryId, categoryData]) => (
                    <div key={categoryId} className="w-full">
                        <ShowCategoryBrick
                            catBrick={{
                                learned: categoryData.learned.length,
                                unseen: categoryData.notViewed.length,
                                viewed: categoryData.viewed.length,
                                title: categoryData.categoryName,
                                id: categoryId
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}