import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentCard = ({ handlePaymentSuccess }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [PaymentError, setPaymentError] = useState(null)
    const [PaymentSuccess, setPaymentSuccess] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)

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
            setLoading(false)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" className="btn w-50  btn-danger" disabled={!stripe}>
                    {loading && (
                        <div class="spinner-border spinner-border-sm" role="status">
                        </div>
                    )}
                    {loading && <span className="ml-1">Payment Processing..</span>}
                    {!loading && <span>Pay</span>}
                </button>
            </form>

            {
                PaymentError && <p className="text-danger">{PaymentError}</p>
            }

            {
                PaymentSuccess && <p className="text-success">Your payment was successful</p>
            }
        </div>
    );
};

export default PaymentCard;