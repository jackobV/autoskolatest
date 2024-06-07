"use client"
export default function DisplayTime({timeLeftMinute,timeLeftSecond}:{timeLeftMinute:number,timeLeftSecond:number}){
    return(
        <div>{timeLeftMinute}:{timeLeftSecond}</div>
    )
}