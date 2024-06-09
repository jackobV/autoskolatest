import {NextRequest, NextResponse} from 'next/server';
import {redirect} from "next/navigation";
import PocketBase from "pocketbase";

export async function POST(req:Request,res:Response) {
    const requestHeaders = new Headers(req.headers)
    const body = await req.json()
    const stripe = require('stripe')(process.env.NEXT_PRIVATE_STRIPE_KEY);
    console.log(process.env.NEXT_PRIVATE_STRIPE_KEY);
    const pb = new PocketBase('https://admin.autoskolatest.cz');


    try {
        const checkou_session_database = await pb.collection("checkout_session").create({
            user:body.email,
        })
        console.log(body)
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            customer_email: body.email,
            metadata: {
                checkoutSessionId:checkou_session_database.id,
                userID:body.userId,
                category:body.category,
            },
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: "price_1PPhWtIEUnHwRV0oYVk5gprL",
                    quantity: 1,
                },
            ],
            mode: 'payment',
            allow_promotion_codes:true,
            locale:"auto",
            return_url: `${requestHeaders.get("origin")?.valueOf()}/rezervacepotvrzena?success=true&csid=${checkou_session_database.id}`,
        });
        console.log(session)
        return new Response(JSON.stringify({clientSecret: session.client_secret}));
    }catch (err) {
        console.log(err)
        return NextResponse.json({error:JSON.stringify(err)},)
    }
}