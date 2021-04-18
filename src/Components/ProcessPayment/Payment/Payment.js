import React, { useEffect, useState } from 'react';
import './Payment.css'
import Navbar from '../../Home/Header/Navbar/Navbar';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import { faAddressCard, faEnvelope, faMobileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProcessPayment from '../ProcessPayment/ProcessPayment';



const style = {
    width: "55px",
    height: '45px'
};

const Payment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [shippingData, setShippingData] = useState(null);
    const [loggedInUser,] = useContext(UserContext);
    const { orderId } = useParams();
    const [order, setOrder] = useState([]);
    const { image, name, description, price } = order;

    useEffect(() => {
        fetch(`https://redserviceguard.herokuapp.com/service/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const onSubmit = data => {
        setShippingData(data);
        console.log(data)

    };



    const handlePaymentSuccess = paymentId => {
        const pending = null;
        const orderDetails = {
            ...loggedInUser,
            shipment: shippingData,
            service: order,
            Status: pending,
            orderTime: new Date(),
            paymentId
        };

        fetch('https://redserviceguard.herokuapp.com/serviceOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order Placed successfully')
                }
            })
    }

    return (
        <div>
            <Navbar />
            <div class="container payment-container">
                <div class="row d-flex" style={{ display: shippingData ? 'none' : 'block' }}>
                    <div class="col-lg-4 mb-4">
                        <div class="card mb-2">
                            <img class="card-img-top" src={`data:image/png;base64,${image?.img}`} alt="" />
                            <div class="card-body bg-dark d-flex align-items-center p-1">
                                <h6 class="card-title text-white text-truncate m-0 ml-3">{name}</h6>
                                <a href="/" style={style} class="d-flex flex-shrink-0 align-items-center justify-content-center bg-danger text-white text-decoration-none m-0 ml-auto" >${price}</a>
                            </div>
                            <div class="card-footer py-3 px-4">
                                <p class="m-0">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <form id="feedback" onSubmit={handleSubmit(onSubmit)}>
                            <div class="pinfo">Your personal info</div>

                            <div class="form-group">
                                <div class="col-md-12 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"> <FontAwesomeIcon icon={faUser} /></span>
                                        <input  {...register("name", { required: true })} placeholder="John Doe" class="form-control" type="text" />
                                        {errors.name && "Name is required"}
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"><FontAwesomeIcon icon={faEnvelope} /></span>
                                        <input  {...register("email")} type="email" class="form-control" placeholder="john.doe@yahoo.com" />
                                        {errors.email && "email is required"}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-12 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"> <FontAwesomeIcon icon={faAddressCard} /></span>
                                        <input  {...register("address", { required: true })} placeholder="Enter your address" class="form-control" type="text" />
                                        {errors.address && "address name is required"}
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"><FontAwesomeIcon icon={faMobileAlt} /></span>
                                        <input {...register("phone", { required: true })} placeholder="Your Phone Number" class="form-control" type="text" />
                                        {errors.phone && "Phone Number is required"}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
                    <h1>Please Pay for me</h1>
                    <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} />
                </div>
            </div>

        </div>
    );
};

export default Payment;