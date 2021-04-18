import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from '../PaymentCard/PaymentCard';
const stripePromise = loadStripe('pk_test_51IeCtgImkxV9DawVFBMNpm2dLoC7s8dMfvev1EJZTN85joEUoXua99KMbY0cOlcljaQGyiPTfkhEVomIkPZChmfQ001GN9Y5Ei');
const ProcessPayment = ({ handlePaymentSuccess }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentCard handlePaymentSuccess={handlePaymentSuccess} />
            </Elements>
        </div>
    );
};

export default ProcessPayment;