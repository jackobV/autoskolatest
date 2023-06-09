
interface Question {
    "id": string;
    "text":string;
    "category_for_url":string;
}
export default function Question(props:Question){
    const id_without_leading = props.id.substring(7)
    const url = props.id.substring(7)
    return(
        <a href={`/otazky/${props.category_for_url}/${url}`}>
        <div className="grid grid-cols-12 border-b items-center py-4 px-4">
            <div className="text-center py-[1px] bg-gray-300 rounded-full text-xs text-gray-600 tracking-tight col-span-1 h-fit font-medium">{id_without_leading}</div>
            <div className="col-span-1"></div>
            <div className=" text-sm col-span-7 ">{props.text}</div>
            <div className="col-span-1"></div>
            <div className="text-sm w-full col-span-1 text-gray-500 font-thin italic">nehodnoceno</div>
            <div className="col-span-1"></div>

        </div>
        </a>
    )
}