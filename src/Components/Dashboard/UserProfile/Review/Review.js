import React, { useState } from 'react';
import { faEnvelope, faGlobe, faHeart, faPencilAlt, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useForm } from "react-hook-form";
import './Review.css'
const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('star', data.star);
        formData.append('name', data.name);
        formData.append('profession', data.profession);
        formData.append('country', data.country);
        formData.append('email', data.email);
        formData.append('massage', data.massage);
        setLoading(true);
        fetch('https://redserviceguard.herokuapp.com/AddReview', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Upload successfully')
                }
                setLoading(false);
            })
    }


    return (
        <div>
            <h2 class="text-center text-info mt-5 mb-2">WE APPRECIATE YOUR REVIEW!</h2>
            <h5 class="text-center text-primary mb-4">Your review will help us to improve our web hosting quality service, and customer services.</h5>


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
                            <span class="input-group-addon"> <FontAwesomeIcon icon={faUserTie} /></span>
                            <input  {...register("profession", { required: true })} placeholder="profession" class="form-control" type="text" />
                            {errors.profession && "Name is required"}
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
                            <span class="input-group-addon"><FontAwesomeIcon icon={faGlobe} /></span>
                            <input {...register("country", { required: true })} placeholder="Country" class="form-control" type="text" />
                            {errors.country && "country is required"}

                        </div>
                    </div>
                </div>

                <div class="pinfo">Rate our overall services.</div>


                <div class="form-group">
                    <div class="col-md-12 inputGroupContainer">

                        <div class="input-group">
                            <span class="input-group-addon"><FontAwesomeIcon icon={faHeart} /></span>
                            <select {...register("star")} class="form-control" id="rate">
                                <option value="1star">1</option>
                                <option value="2stars">2</option>
                                <option value="3stars">3</option>
                                <option value="4stars">4</option>
                                <option value="5stars">5</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="pinfo">Write your feedback.</div>
                <div class="form-group">
                    <div class="col-md-12 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><FontAwesomeIcon icon={faPencilAlt} /></span>
                            <textarea {...register("massage", { required: true })} class="form-control" id="review" rows="3"></textarea>
                            {errors.massage && "massage is required"}
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Review;