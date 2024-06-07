interface Category {
    "title":string;
    "numberOfQuestions":number;
    "id":string;
}

export default function CategoryListComponent(props:Category){
    return(
        <div>
            <li className="flex flex-col px-4 bg-white py-6 gap-y-2 rounded-xl">
                <h2 className="font-medium tracking-tight">{props.title}</h2>
                <div className="flex flex-row gap-x-1 items-center pb-4">
                    <div className="h-2 w-2 shrink-0 bg-[#3E9B42] rounded-full"></div>
                    <p className="text-sm font-bold">{props.numberOfQuestions}</p>
                    <p className="text-sm font-medium text-gray-400 tracking-tight subpixel-antialiased">Otázek</p>
                </div>
                <a className="w-full h-10 bg-[#3B88DA] flex flex-col items-center justify-center rounded-xl font-medium tracking-tight text-gray-50" href={`/otazky/${props.id}/`}>
                    <p className="w-fit">Zobrazit</p></a>
            </li>
        </div>
    )
}