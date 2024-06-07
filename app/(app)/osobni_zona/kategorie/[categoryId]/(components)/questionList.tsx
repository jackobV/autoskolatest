"use client"
import {CategorizedQuestions, testQuestionLocalStorage} from "@/app/(app)/osobni_zona/test/(components)/interfaces";
import {useState} from "react";
import {Dialog, Transition, TransitionChild, DialogPanel} from "@headlessui/react";
import QuestionModal from "@/app/(app)/osobni_zona/kategorie/[categoryId]/(components)/questionModal";

export default function QuestionList({seen,unseen,learned}:{seen:testQuestionLocalStorage[],unseen:testQuestionLocalStorage[],learned:testQuestionLocalStorage[]}){
    const [open,setOpen] = useState(false)
    const [selectedQuestion,setSelectedQuestion] = useState<undefined|testQuestionLocalStorage>(undefined)
    const showQuestion = (question:testQuestionLocalStorage) =>{
        setSelectedQuestion(question)
        setOpen(true)
    }


    return(
        <div className="flex flex-col max-w-6xl mx-auto">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    {seen.map((item,index)=>(
                        <div key={index} onClick={()=>showQuestion(item)}>
                            <div className="grid grid-cols-9 border-b items-center py-4 cursor-pointer">
                                <div className=" text-sm col-span-7 text-gray-300">{item.text}</div>
                                <div className="col-span-1"></div>
                                <div className="flex col-span-1 flex-row gap-x-1 justify-end">
                                    {item.learned?
                                        <div className="h-2 w-2 shrink-0 bg-green-500 rounded-full"></div>
                                        :
                                        <div className="hidden"></div>
                                    }
                                    {item.viewed?
                                        <div className="h-2 w-2 shrink-0 bg-yellow-400 rounded-full"></div>
                                        :
                                        <div className="h-2 w-2 shrink-0 bg-gray-300 rounded-full"></div>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                    {unseen.map((item,index)=>(
                        <div key={index} onClick={()=>showQuestion(item)}>
                            <div className="grid grid-cols-9 border-b items-center py-4">
                                <div className=" text-sm col-span-7 text-gray-300">{item.text}</div>
                                <div className="col-span-1"></div>
                                <div className="flex col-span-1 flex-row gap-x-1 justify-end">
                                    {item.learned?
                                        <div className="h-2 w-2 shrink-0 bg-green-500 rounded-full"></div>
                                        :
                                        <div className="hidden"></div>
                                    }
                                    {item.viewed?
                                        <div className="h-2 w-2 shrink-0 bg-yellow-400 rounded-full"></div>
                                        :
                                        <div className="h-2 w-2 shrink-0 bg-gray-300 rounded-full"></div>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Transition show={open}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <DialogPanel className="">
                                    {selectedQuestion?
                                        <QuestionModal question={selectedQuestion} />
                                        :
                                        <div></div>
                                    }
                                </DialogPanel>

                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}