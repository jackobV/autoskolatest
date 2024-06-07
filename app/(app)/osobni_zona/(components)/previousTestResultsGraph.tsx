"use client"
import { Card, LineChart, Title } from "@tremor/react";
import PocketBase from "pocketbase";
import {prevTestResults} from "@/app/(app)/osobni_zona/(components)/interfaces";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";
import formateUTCDateString from "@/app/helperFunctions/formatUTCDateString";
import {filteredResultForChart} from "@/app/(app)/osobni_zona/(components)/interfaces";


export default function PreviousTestResultsGraph({prevTestResults, loading}: {
    prevTestResults: Array<prevTestResults> | null,
    loading: boolean
}) {
    let filteredItems: Array<filteredResultForChart> = []
    if (prevTestResults && prevTestResults.length > 0){
        filteredItems = prevTestResults.map((item) => ({
            Body:item.score,
            Prošel:item.passed,
            Datum: `${formateUTCDateString(item.created).day}.${formateUTCDateString(item.created).month}.${formateUTCDateString(item.created).hour}.${formateUTCDateString(item.created).minute}`,
            index:item.index
        }))
    }else{
        filteredItems = []
    }
    const customTooltip = (props: { payload: any; active: any; }) => {

        const {payload, active} = props;
        if (!active || !payload) return null;
        return (
            <div
                className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                {payload.map((category: {
                    color: any;
                    dataKey: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                    value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                }, idx: Key | null | undefined) => (
                    <div key={idx} className="flex flex-1 space-x-2.5">
                        <div
                            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
                        />
                        <div className="space-y-1">
                            <p className="text-tremor-content">Výsledek</p>
                            <p className="font-medium text-tremor-content-emphasis">
                                {category.value} bodů
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return(
        <div className="w-full max-w-xl">
            {loading?<div>loading</div>:
                <div className="w-full max-w-xl">
                    <Card className="w-full max-w-xl h-48">
                        {prevTestResults?
                            <LineChart data={filteredItems} categories={["Body"]} index={"index"} showXAxis={false} yAxisWidth={20} customTooltip={customTooltip} showLegend={false} className=" w-full max-w-xl h-40" />
                        :
                            <p>d</p>
                        }
                    </Card>

                </div>
            }
        </div>
    )
}