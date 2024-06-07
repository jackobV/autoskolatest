interface Answer {
    "id":String;
    "text":String;
    "correct":Boolean;
    "index": number;
}
export default function AnswerElement0(param:Answer){
    console.log(param)
    const indexes = ["A","B","C"]
    if(param.correct === true){
        return(
            <>
                <div className="flex flex-row bg-green-300 py-3 gap-x-4 px-2 items-center">
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg w-10 h-10">{indexes[param.index]}</div>
                    <div>{param.text}</div>
                </div>
            </>
        )}
    else{
        return(
            <>
                <div className="flex flex-row bg-red-300 py-3 gap-x-4 px-2 items-center">
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg w-10 h-10">{indexes[param.index]}</div>
                    <div>{param.text}</div>
                </div>
            </>
        )
    }
}