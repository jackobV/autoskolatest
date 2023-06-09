interface Answer {
    "id":string;
    "text":string;
    "order": number;
    "correct":boolean;
}
export default function AnswerComponent(props:Answer){
    const index_to_letter = ["A","B","C"]

    if(props.correct){
    return(
        <div className="flex flex-row items-center gap-x-2 bg-gray-50 border p-2 rounded-xl">
            <div className="flex flex-col items-center justify-center w-10 h-10 bg-[#399E41] shrink-0 rounded-xl text-white font-bold text-lg">{index_to_letter[props.order]}</div>
            <div className="font-medium antialiased text-sm md:text-base">
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )}else{
        return(
            <div className="flex flex-row items-center gap-x-2 bg-gray-50 border p-2 rounded-xl">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-[#fd4d50] shrink-0 rounded-xl text-white font-bold text-lg">{index_to_letter[props.order]}</div>
                <div className="antialiased font-medium text-sm md:text-base">
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
        )
    }
}