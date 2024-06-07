import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';

// @ts-ignore
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function EstablishCheckout({email,category,userId}:{email:string,category:string,userId:string|undefined}) {

    const fetchClientSecret = useCallback(() => {
        console.log("EstablishCheckout");

        // Create a Checkout Session
        return fetch("/api/checkout_session", {
            method: "POST",
            body: JSON.stringify({email:email,category:category,userId:userId}),
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, []);

    const options = {fetchClientSecret};

    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={options}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}