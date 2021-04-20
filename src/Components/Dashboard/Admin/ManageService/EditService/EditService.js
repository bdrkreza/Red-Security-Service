import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Navbar from '../../../../Home/Header/Navbar/Navbar';

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
                    alert('Edit service successfully')
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
            <section style={{ marginTop: "120px" }} className="get-in-touch">
                <h1 className="title">Edit Service</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form row mt-1">
                    <div className="form-field col-lg-6">
                        <input {...register("name", { required: true })} id="name" className="input-text js-input" type="text" />
                        {errors.name && <span>This field is required</span>}
                        <label className="label" for="name">Service Name</label>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <input {...register("price", { required: true })} id="price" className="input-text js-input" type="number" />
                        {errors.price && <span>This field is required</span>}
                        <label className="label" for="price">Service Price</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input {...register("description")} id="description" className="input-text js-input" type="text" />
                        {errors.description && <span>This field is required</span>}
                        <label className="label" for="description">Description</label>
                    </div>
                    <div className="card w-50 ml-3">
                        <img src={imgData} className="card-img-top img" alt="..." />
                        <div className="card-body">
                            <div className="center">
                                <div className="form-input">
                                    <label for="file-ip-1">Upload Image</label>
                                    <input onChange={onChangePicture} type="file" id="file-ip-1" accept="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-field col-lg-12">
                        <button disabled={loading} className="btn bg-danger submit-btn w-25 d-flex text-center" type="submit" >
                            <FontAwesomeIcon size="2x" icon={faSave} />
                            <h4 className="ml-3">Save</h4>
                        </button>
                    </div>
                </form>
            </section>

        </>
    );
};

export default EditService;