import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from ' @stripe/react-stripe-js';



const stripePromise = loadStripe('your-public-stripe-key');


function PaymentPage() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe|| !elements) return;


        const card = elements.getElement(CardElement);
        const{ paymentMethod, error } = await stripe.createPaymentMethod({
            type:'card',
            card,
        });


        if(error) {
            console.error(error);
        }else{
            console.log('Payment successful:', paymentMethod);

            // handle payment success logic here
        }
           

    };


    return (
        <Elements stripe={stripePromise}>
            <form onSubmit={handleSubmit}>
                <CardElement/>
                <button type="submit" disbled={!stripe}>Pay</button>
            </form>
        </Elements>
    );
}


export default PaymentPage;