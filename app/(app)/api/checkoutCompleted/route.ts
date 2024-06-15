import PocketBase from "pocketbase";
import {headers} from "next/headers";
import AssignQuestions from "@/app/(app)/api/checkoutCompleted/assignQuestions";
import {NextResponse} from "next/server";
import SendMail from "@/app/(app)/api/checkoutCompleted/sendMail";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const webhookSecret:string = "whsec_ZI0JD5ipBTmeUG3AVUqglRqaEbpkx1aV"
const pbKey:string = ""
export const maxDuration = 60;
export async function POST(req:Request,res:Response) {
    console.log("hit")
    const requestHeaders = new Headers(req.headers)
    const body = await req.text()
    const signature:string|null = headers().get("stripe-signature");
    const event = stripe.webhooks.constructEvent(body,signature,webhookSecret)
    switch (event.type) {
        case 'checkout.session.completed':
            const checkoutSessionCompleted = event.data.object;
            const userIDCompleted = checkoutSessionCompleted.metadata.userID;
            const emailCompleted = checkoutSessionCompleted.metadata.email;
            const categoryCompleted = checkoutSessionCompleted.metadata.category;
            console.log("completed")
            await AssignQuestions({categoryID: categoryCompleted, userID: userIDCompleted})
            await SendMail({recipient:emailCompleted})
            console.log("assigned")
            break;
        case 'checkout.session.expired':
            const checkoutSessionExpired = event.data.object;
            const userIDFailed = checkoutSessionExpired.metadata.userID;
            const emailFailed = checkoutSessionExpired.metadata.email;
            const categoryFailed = checkoutSessionExpired.metadata.category;
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json("hi")
}