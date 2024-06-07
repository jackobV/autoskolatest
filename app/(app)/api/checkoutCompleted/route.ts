import PocketBase from "pocketbase";
import {headers} from "next/headers";
import AssignQuestions from "@/app/(app)/api/checkoutCompleted/assignQuestions";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const webhookSecret:string = ""
const pbKey:string = ""
const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');

export async function POST(req:Request,res:Response) {
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

            await AssignQuestions({categoryID: categoryCompleted, userID: userIDCompleted})
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



}