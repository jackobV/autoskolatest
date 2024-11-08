"use client"
import { Card, CategoryBar, Tracker, type Color } from '@tremor/react';
import { useState, useEffect } from 'react';
import {prevTestResults} from "@/app/(app)/osobni_zona/(components)/interfaces";

interface tracker{
    color:Color
    tooltip:string
}

export default function PreviousXResultsBar({ previousResults, loading }: { previousResults: Array<prevTestResults> | null, loading: boolean }) {
    const [average, setAverage] = useState<number | undefined>(undefined);
    const [numberOfPrevAvg, setNumberOfPrevAvg] = useState<number>(3);
    const [trackerData, setTrackerData] = useState<Array<tracker>>([]);
    useEffect(() => {
        if (previousResults && previousResults.length > 0) {
            const resultsToConsider = previousResults.slice(-numberOfPrevAvg);
            const totalScore = resultsToConsider.reduce((sum, result) => sum + result.score, 0);
            const avgScore = totalScore / resultsToConsider.length;
            const avgPercentage = Math.floor((avgScore / 50) * 100);

            setAverage(avgPercentage);
        } else {
            setAverage(undefined);
        }
    }, [previousResults, numberOfPrevAvg]);

    const handleNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNumberOfPrevAvg(Number(e.target.value));
    };
    useEffect(() => {
        if (previousResults) {
            const resultsToConsider = previousResults.slice(-30); // Get the last 30 results or less

            const populatedTrackerData:Array<tracker> = resultsToConsider.map(result => ({
                color: result.passed ? 'emerald' : 'rose',
                tooltip: result.passed ? 'Prospěl' : 'Neprospěl'
            }));


            if (resultsToConsider.length < 30) {
                const missingCount = 30 - resultsToConsider.length;
                for (let i = 0; i < missingCount; i++) {
                    populatedTrackerData.push({
                        color: 'slate',
                        tooltip: 'Zatím nemáte dostatečně dokončených testů'
                    });
                }
            }


            setTrackerData(populatedTrackerData);
        }
    }, [previousResults]);
    return (
        <div className="w-full  max-w-xl">
            {loading?

                <Card className="w-full max-w-xl h-48 flex flex-col justify-between">

                </Card>
                :
                <Card className="w-full max-w-xl h-48 flex flex-col justify-between">
                    {trackerData?.length > 0 ? (
                        <>
                            <Tracker data={trackerData} />
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-x-1 items-center">
                                    <label htmlFor="numberOfResults" className="dark:text-tremor-background">Průměr z předešlých testů:</label>
                                    <select id="numberOfResults" value={numberOfPrevAvg} onChange={handleNumberChange} className="rounded-md dark:bg-dark-tremor-background-subtle border-dark-tremor-background-emphasis dark:border-dark-tremor-background-muted dark:text-tremor-background focus:ring-0 focus:outline-none ">
                                        <option value={3}>3</option>
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                    </select>
                                </div>
                                <CategoryBar values={[85,15]} markerValue={average} className="w-full  " tooltip={`${average}`} colors={['rose', 'emerald']} />

                            </div>
                        </>

                    ): (
                        <div className={"flex flex-col w-full h-full items-center justify-center"}>
                            <p className="text-white text-center">Zde uvidíte statistiku historie výsledků</p>
                        </div>
                    )}

                </Card>
            }


        </div>
    );
}
