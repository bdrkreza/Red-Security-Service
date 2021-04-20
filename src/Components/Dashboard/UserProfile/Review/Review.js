import React from 'react';
import { faEnvelope, faGlobe, faHeart, faPencilAlt, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useForm } from "react-hook-form";
import './Review.css'
import { useState } from 'react';
const Review = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = (data) => {
        setLoading(true)
        const formData = new FormData()
        formData.append('star', data.star);
        formData.append('name', data.name);
        formData.append('profession', data.profession);
        formData.append('country', data.country);
        formData.append('email', data.email);
        formData.append('massage', data.massage);

        fetch('https://redserviceguard.herokuapp.com/AddReview', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setLoading(false)
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-info mb-2">WE APPRECIATE YOUR REVIEW!</h2>
            <h5 className="text-center text-primary mb-4">Your review will help us to improve our web hosting quality service, and customer services.</h5>


            <form id="feedback" onSubmit={handleSubmit(onSubmit)}>
                <div className="pinfo">Your personal info</div>

                <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"> <FontAwesomeIcon icon={faUser} /></span>
                            <input  {...register("name", { required: true })} placeholder="John Doe" className="form-control" type="text" />
                            {errors.name && "Name is required"}
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"> <FontAwesomeIcon icon={faUserTie} /></span>
                            <input  {...register("profession", { required: true })} placeholder="profession" className="form-control" type="text" />
                            {errors.profession && "Name is required"}
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <input  {...register("email")} type="email" className="form-control" placeholder="john.doe@yahoo.com" />
                            {errors.email && "email is required"}
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><FontAwesomeIcon icon={faGlobe} /></span>
                            <input {...register("country", { required: true })} placeholder="Country" className="form-control" type="text" />
                            {errors.country && "country is required"}

                        </div>
                    </div>
                </div>

                <div className="pinfo">Rate our overall services.</div>


                <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">

                        <div className="input-group">
                            <span className="input-group-addon"><FontAwesomeIcon icon={faHeart} /></span>
                            <select {...register("star")} className="form-control" id="rate">
                                <option value="1star">1</option>
                                <option value="2stars">2</option>
                                <option value="3stars">3</option>
                                <option value="4stars">4</option>
                                <option value="5stars">5</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="pinfo">Write your feedback.</div>
                <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><FontAwesomeIcon icon={faPencilAlt} /></span>
                            <textarea {...register("massage", { required: true })} className="form-control" id="review" rows="3"></textarea>
                            {errors.massage && "massage is required"}
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn w-25  btn-danger" disabled={loading}>
                    {loading && (
                        <div class="spinner-border spinner-border-sm" role="status">
                        </div>
                    )}
                    {loading && <span className="ml-1">Saving...</span>}
                    {!loading && <span>Submit</span>}
                </button>
            </form>
        </div>
    );
};

export default Review;