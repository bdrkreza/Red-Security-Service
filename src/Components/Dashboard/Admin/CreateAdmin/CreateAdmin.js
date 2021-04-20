import { faEnvelope, faSave, faUser } from '@fortawesome/free-solid-svg-icons';
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

        fetch('https://redserviceguard.herokuapp.com/admins', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Create successfully')
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
                <div className="pinfo">Create Admin personal info</div>
                <div className="row d-flex">
                    <div className='col-md-6'>
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
                                    <span className="input-group-addon"><FontAwesomeIcon icon={faEnvelope} /></span>
                                    <input  {...register("email")} type="email" className="form-control" placeholder="john.doe@yahoo.com" />
                                    {errors.email && "email is required"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 '>
                        <div className="card w-75 ml-3">
                            <img src={imgData} className="card-img-top img" alt="..." />
                            <div className="card-body">
                                <div className="center">
                                    <div className="form-input">
                                        <label for="file-ip-1">Upload Image</label>
                                        <input onChange={onChangePicture} type="file" id="file-ip-1" accept="image" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button disabled={loading} className="btn bg-danger submit-btn w-25 d-flex text-center" type="submit" >
                    <FontAwesomeIcon size="2x" icon={faSave} />
                    <h4 className="ml-3">Save</h4>
                </button>
            </form>
        </div>
    );
};

export default CreateAdmin;