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
import Footer from '../../Home/Footer/Footer/Footer';

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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://redserviceguard.herokuapp.com/service/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const onSubmit = data => {
        setShippingData(data);
        setLoading(true)
        console.log(data)

    };

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            shipment: shippingData,
            service: order,
            status: "pending",
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
                    console.log('your order Placed successfully')
                }
                setLoading(false)
            })
    }

    return (
        <div>
            <Navbar />
            <div className="container payment-container">
                <div className="row d-flex" style={{ display: shippingData ? 'none' : 'block' }}>
                    <div className="col-lg-4 mb-4">
                        <div className="card mb-2">
                            <img className="card-img-top" src={`data:image/png;base64,${image?.img}`} alt="" />
                            <div className="card-body bg-dark d-flex align-items-center p-1">
                                <h6 className="card-title text-white text-truncate m-0 ml-3">{name}</h6>
                                <a href="/" style={style} className="d-flex flex-shrink-0 align-items-center justify-content-center bg-danger text-white text-decoration-none m-0 ml-auto" >${price}</a>
                            </div>
                            <div className="card-footer py-3 px-4">
                                <p className="m-0">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form id="feedback" onSubmit={handleSubmit(onSubmit)}>
                            <div className="pinfo">Your personal info</div>

                            <div className="form-group">
                                <div className="col-md-12 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"> <FontAwesomeIcon icon={faUser} /></span>
                                        <input  {...register("name", { required: true })} value={loggedInUser.name} placeholder="John Doe" className="form-control" type="text" />
                                        <div className="ml-5">
                                            {errors.name && "Name is required"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                        <input  {...register("email")} value={loggedInUser.email} type="email" className="form-control" placeholder="john.doe@yahoo.com" />
                                        <div className="ml-5">
                                            {errors.email && "email is required"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-12 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <FontAwesomeIcon icon={faAddressCard} />
                                        </span>
                                        <input  {...register("address", { required: true })} placeholder="Enter your address" className="form-control" type="text" />
                                        <div className="ml-5">
                                            {errors.address && "address name is required"}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <FontAwesomeIcon icon={faMobileAlt} />
                                        </span>
                                        <input {...register("phone", { required: true })} placeholder="Your Phone Number" className="form-control" type="text" />
                                        <div className="ml-5">
                                            {errors.phone && "Phone Number is required"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn w-50  btn-danger" disabled={loading}>
                                {loading && (
                                    <div class="spinner-border spinner-border-sm" role="status">
                                    </div>
                                )}
                                {loading && <span className="ml-1">Order Processing...</span>}
                                {!loading && <span>Submit</span>}
                            </button>
                        </form>
                    </div>
                </div>
                <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
                    <h1>Please Pay for me</h1>
                    <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} loading={loading} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Payment;