interface categoryHeader{
    title:string
    seen:number
    unseen:number
    learned:number
}

export default function CategoryHeader({header}:{header:categoryHeader}){
    return(
        <div className="flex flex-col sm:items-center mx-auto max-w-6xl w-full dark:text-white">
            <div className="text-2xl font-semibold">{header.title}</div>
            <div className="flex flex-col sm:flex-row gap-x-4 pt-4">
                <div className="flex flex-row gap-x-1 items-center pb-1">
                    <div className="h-2 w-2 shrink-0 bg-green-500 rounded-full"></div>
                    <p className="text-sm font-bold dark:text-white">{header.learned}</p>
                    <p className="text-sm font-medium dark:text-gray-200 text-gray-400 tracking-tight subpixel-antialiased">naučených otázek</p>
                </div>
                <div className="flex flex-row gap-x-1 items-center pb-1">
                    <div className="h-2 w-2 shrink-0 bg-yellow-400 rounded-full"></div>
                    <p className="text-sm font-bold dark:text-white">{header.seen}</p>
                    <p className="text-sm font-medium dark:text-gray-200 text-gray-400 tracking-tight subpixel-antialiased">zobrazených otázek</p>
                </div>
                <div className="flex flex-row gap-x-1 items-center pb-2">
                    <div className="h-2 w-2 shrink-0 bg-gray-300 rounded-full"></div>
                    <p className="text-sm font-bold dark:text-white">{header.unseen}</p>
                    <p className="text-sm font-medium dark:text-gray-200 text-gray-400 tracking-tight subpixel-antialiased">nezobrazených otázek</p>
                </div>
            </div>
        </div>
    )
}