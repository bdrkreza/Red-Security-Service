import { faPencilAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../AddOfficer/addOfficer.css'

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);

    const onSubmit = (data) => {

        const formData = new FormData()
        formData.append('file', picture);
        formData.append('name', data.name);
        formData.append('admin', data.admin);
        formData.append('description', data.description);
        setLoading(true);

        fetch('http://localhost:5000/addBlogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Create service successfully')
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
        <div style={{ marginLeft: "250px" }}>
            <div className="card card-body w-75 py-5 bg-info">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row d-flex justify-content-lg-around ">
                        <div className="col-lg-6">
                            <div class="group">
                                <input {...register("name", { required: true })} type="text" placeholder="Enter Blogs Title Name..." />
                                <div>
                                    {errors.name && <span>This name is required</span>}
                                </div>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                            </div>
                            <div class="group">
                                <input {...register("admin", { required: true })} type="text" placeholder="Enter admin Name.." />
                                <div>
                                    {errors.admin && <span>This Designation is required</span>}
                                </div>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                            </div>
                            <div className="form-group">
                                <div className="inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><FontAwesomeIcon icon={faPencilAlt} /></span>
                                        <textarea {...register("description", { required: true })} className="form-control" placeholder="Write Blogs Description" id="review" rows="3"></textarea>
                                    </div>
                                    <div className="ml-5">
                                        {errors.description && <span>This Description is required</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card card-body">
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

                    <div className="form-field col-lg-12">
                        <button disabled={loading} className="btn bg-danger submit-btn w-25 d-flex text-center" type="submit" >
                            <FontAwesomeIcon size="2x" icon={faSave} />
                            <h4 className="ml-3">Save</h4>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;