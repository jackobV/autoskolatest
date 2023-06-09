export default function QuestionListHeader(){
    return(
            <div className="grid grid-cols-12 border-b items-center pb-4 px-4">
                <div className="col-span-1 text-gray-500 font-medium tracking-tight px-4 text-sm">id</div>
                <div className="col-span-1"></div>
                <div className="col-span-7 text-gray-500 font-medium tracking-tight text-sm">znění otázky</div>
                <div className="col-span-1"></div>
                <div className="col-span-1 text-gray-500 font-medium tracking-tight text-sm">náročnost</div>
                <div className="col-span-1"></div>

            </div>
    )
}