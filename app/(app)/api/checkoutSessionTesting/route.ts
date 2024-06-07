import {headers} from "next/headers";
import AssignQuestions from "@/app/(app)/api/checkoutCompleted/assignQuestions";
import {NextResponse} from "next/server";
const webhookSecret:string = "whsec_HMqAVcg855kag6gd23KyMDYdhMAZCqRA"
const pbKey:string = ""
export async function POST(req:Request,res:Response) {
    console.log("hit")
    const requestHeaders = new Headers(req.headers)
    const body = await req.json()
    const userIDCompleted = body.userID;
    const emailCompleted = body.email;
    const categoryCompleted = body.categoryID;
    console.log(userIDCompleted)
    console.log("completed")
    await AssignQuestions({categoryID: categoryCompleted, userID: userIDCompleted})
    console.log("assigned")

    return NextResponse.json("hi")
}