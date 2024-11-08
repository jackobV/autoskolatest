import { headers } from "next/headers";
import { NextResponse } from "next/server";
import sendEmail from "@/app/(app)/api/checkoutCompleted/sendMail";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const webhookSecret: string = "whsec_ZI0JD5ipBTmeUG3AVUqglRqaEbpkx1aV";
const NODE_SERVER_URL = "https://assignquestionssimple-production.up.railway.app";

export const maxDuration = 60;

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.text();
        const signature: string | null = headers().get("stripe-signature");
        const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

        switch (event.type) {
            case 'checkout.session.completed':
                const checkoutSessionCompleted = event.data.object;
                const userIDCompleted = checkoutSessionCompleted.metadata.userID;
                const categoryCompleted = checkoutSessionCompleted.metadata.category;

                console.log("Checkout completed, calling assignment service");

                // Call the Node.js server to handle question assignments
                const assignmentResponse = await fetch(`${NODE_SERVER_URL}/assign-questions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any necessary authentication headers
                        'Authorization': `Bearer ${process.env.NODE_SERVER_API_KEY}`
                    },
                    body: JSON.stringify({
                        userID: userIDCompleted,
                        categoryID: categoryCompleted
                    })
                });

                if (!assignmentResponse.ok) {
                    throw new Error(`Assignment service error: ${assignmentResponse.statusText}`);
                }

                // Send confirmation email
                const emailData = {
                    to: "test@blackhole.postmarkapp.com",
                    from: "jakubzaloha@na-zkousku.cz",
                    subject: "Děkujeme za zakoupení!",
                    message: "Nyní již můžete používat aplikaci"
                };
                await sendEmail(emailData);

                console.log("Assignment and email completed successfully");
                break;

            case 'checkout.session.expired':
                const checkoutSessionExpired = event.data.object;
                console.log("Checkout session expired:", checkoutSessionExpired.metadata);
                break;

            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 400 }
        );
    }
}