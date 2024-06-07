"use client"
import userSvg from "../../../(media)/user-128.svg"
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import PocketBase from "pocketbase";
import Register from "@/app/(auth)/registrace/(components)/register";
import FeaturesAfirmCheckout from "@/app/(auth)/registrace/(components)/FeaturesAfirmCheckout";
interface Date{
    id:string;
    day:string;
    month:string;
    active:boolean;
    inCart:number;
}
export default function Page(){
    return(
        <div className="h-screen w-full bg-gray-900">
            <div className="flex flex-col md:flex-row h-full">
                <FeaturesAfirmCheckout />
                <Register />
            </div>
        </div>
    )
}