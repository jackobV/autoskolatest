"use client"
import userSvg from "../../../(media)/user-128.svg"
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import PocketBase from "pocketbase";
import Register from "@/app/(auth)/registrace/(components)/register";
import FeaturesAfirmCheckout from "@/app/(auth)/registrace/(components)/FeaturesAfirmCheckout";
import QnaCheckout from "@/app/(auth)/registrace/(components)/Qna";
interface Date{
    id:string;
    day:string;
    month:string;
    active:boolean;
    inCart:number;
}
export default function Page(){
    return(
        <div className="h-full min-h-screen w-full bg-gray-900">

                <div className="flex flex-col md:flex-row md:items-center pt-4 md:pt-0">
                    <FeaturesAfirmCheckout/>
                    <Register/>
                </div>
        </div>
    )
}