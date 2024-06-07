import Image, {StaticImageData} from "next/image";
import {CalendarIcon, ClockIcon} from "@heroicons/react/24/outline";

type BlogHeader={
    title:string
    author:string
    date:string
    timetoread:string
    imagesrc:StaticImageData
    imagealt:string
}
export default function BlogHeader(props:BlogHeader){
    return(
        <header>
            <div className="bg-blue-500 px-4">
                <div className="py-10 max-w-2xl mx-auto flex flex-col">
                    <h1 className="text-white text-3xl md:text-4xl font-semibold md:font-bold tracking-wide text-center">{props.title}</h1>
                    <div className="flex flex-row text-blue-200 gap-x-2 self-center pt-5 items-center">
                        <div className="flex flex-row gap-x-1 items-center">
                            <div className="h-4 w-4 ">
                                <CalendarIcon />
                            </div>
                            <p>{props.date}</p>
                        </div>
                        <div className=" h-1 w-1 rounded-full bg-blue-200"></div>
                        <div className="flex flex-row gap-x-1 items-center">
                            <div className="h-4 w-4 ">
                                <ClockIcon />
                            </div>
                            <p>{props.timetoread}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-blue-500 to-white px-4">
                <div className="flex flex-col items-center max-w-xl mx-auto">
                    <Image className="w-full h-auto bg-blue-500 rounded-2xl" src={props.imagesrc} alt={props.imagealt} />
                </div>
            </div>

        </header>
    )
}