import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);


    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);


    const onSubmit = (data) => {

        const formData = new FormData()
        formData.append('file', picture);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('role', 1);
        setLoading(true);

        fetch('https://redserviceguard.herokuapp.com/adminCreate', {
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
        <div>
            <form id="feedback" onSubmit={handleSubmit(onSubmit)}>
                <div class="pinfo">Create Admin personal info</div>
                <div class="row d-flex">
                    <div class='col-md-6'>
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
                    </div>

                    <div class='col-md-6 '>
                        <div class="card w-75 ml-3">
                            <img src={imgData} class="card-img-top img" alt="..." />
                            <div class="card-body">
                                <div class="center">
                                    <div class="form-input">
                                        <label for="file-ip-1">Upload Image</label>
                                        <input onChange={onChangePicture} type="file" id="file-ip-1" accept="image" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary w-25">Submit</button>
            </form>
        </div>
    );
};

export default CreateAdmin;