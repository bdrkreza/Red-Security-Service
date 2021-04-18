import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Navbar from '../../../../Home/Header/Navbar/Navbar';
import Dashboard from '../../../Dashboard/Dashboard';

const EditService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const { EditId } = useParams();

    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);


    const onSubmit = (data) => {

        const formData = new FormData()
        formData.append('file', picture);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('description', data.description);
        setLoading(true);


        fetch(`https://redserviceguard.herokuapp.com/serviceUpdate/${EditId}`, {
            method: 'PATCH',
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



    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };


    return (
        <>
            <Navbar />
            <section class="get-in-touch ">
                <h1 class="title">Create Service</h1>
                <form onSubmit={handleSubmit(onSubmit)} class="contact-form row">
                    <div class="form-field col-lg-6">
                        <input {...register("name", { required: true })} id="name" class="input-text js-input" type="text" />
                        {errors.name && <span>This field is required</span>}
                        <label class="label" for="name">Service Name</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input {...register("price", { required: true })} id="price" class="input-text js-input" type="number" />
                        {errors.price && <span>This field is required</span>}
                        <label class="label" for="price">Service Price</label>
                    </div>
                    <div class="form-field col-lg-12">
                        <input {...register("description")} id="description" class="input-text js-input" type="text" />
                        {errors.description && <span>This field is required</span>}
                        <label class="label" for="description">Description</label>
                    </div>
                    <div class="card w-50 ml-3">
                        <img src={imgData} class="card-img-top img" alt="..." />
                        <div class="card-body">
                            <div class="center">
                                <div class="form-input">
                                    <label for="file-ip-1">Upload Image</label>
                                    <input onChange={onChangePicture} type="file" id="file-ip-1" accept="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-field col-lg-12">
                        <input disabled={loading} class="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </section>

        </>
    );
};

export default EditService;