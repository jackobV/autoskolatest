interface categroyBrickInterface{
    title:string
    learned:number
    viewed:number
    unseen:number
    id:string
}


export default function ShowCategoryBrick({catBrick}:{catBrick:categroyBrickInterface}){
    return(
        <div>
            <div>
                <li className="flex flex-col px-4 bg-white py-6 gap-y-2 rounded-xl dark:bg-dark-tremor-background">
                    <h2 className="font-medium tracking-tight dark:text-white">{catBrick.title}</h2>
                    <div className="flex flex-row gap-x-1 items-center pb-1">
                        <div className="h-2 w-2 shrink-0 bg-green-500 rounded-full"></div>
                        <p className="text-sm font-bold dark:text-white">{catBrick.learned}</p>
                        <p className="text-sm font-medium dark:text-gray-200 text-gray-400 tracking-tight subpixel-antialiased">naučených otázek</p>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center pb-1">
                        <div className="h-2 w-2 shrink-0 bg-yellow-400 rounded-full"></div>
                        <p className="text-sm font-bold dark:text-white">{catBrick.viewed}</p>
                        <p className="text-sm font-medium dark:text-gray-200 text-gray-400 tracking-tight subpixel-antialiased">zobrazených otázek</p>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center pb-2">
                        <div className="h-2 w-2 shrink-0 bg-gray-300 rounded-full"></div>
                        <p className="text-sm font-bold dark:text-white">{catBrick.unseen}</p>
                        <p className="text-sm font-medium dark:text-gray-200 text-gray-400 tracking-tight subpixel-antialiased">nezobrazených otázek</p>
                    </div>
                    <a className="w-full h-10 bg-[#3B88DA] flex flex-col items-center justify-center rounded-xl font-medium tracking-tight text-gray-50" href={`/osobni_zona/kategorie/${catBrick.id}/`}>
                        <p className="w-fit">Zobrazit</p></a>
                </li>
            </div>
        </div>
    )
}