import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentCard = ({ handlePaymentSuccess }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [PaymentError, setPaymentError] = useState(null)
    const [PaymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null)
            handlePaymentSuccess(paymentMethod.id)

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
                PaymentError && <p class="text-danger">{PaymentError}</p>
            }

            {
                PaymentSuccess && <p class="text-success">Your payment was successful</p>
            }
        </div>
    );
};

export default PaymentCard;