"use client"
export default function DisplayQuestionInfo({timeLeftSeconds,timeLeftMinutes,questionIndex,points}:{timeLeftSeconds:number,timeLeftMinutes:number,questionIndex:number,points:number}){


    return(
        <div className="flex flex-row bg-gray-100 w-full justify-between py-2 px-2 rounded-xl border ">
            <div className="flex flex-row gap-x-2 items-center">Zbývá:  <p className="bg-white p-1 rounded-md">{timeLeftMinutes}:{timeLeftSeconds}</p></div>
            <div className="flex flex-row gap-x-2 items-center">
                Body za otázku: <p className="bg-white py-1 px-4 rounded-md">{points}</p>
            </div>
        </div>
    )
}