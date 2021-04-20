
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceCard.css'
import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    width: "55px",
    height: '45px'
};

const ServiceCard = ({ serviceData }) => {
    const { name, price, description, image, _id } = serviceData;
    return (
        <>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2">
                    <div className="inner">
                        <img className="card-img-top" src={`data:image/png;base64,${image.img}`} alt="" />
                    </div>
                    <div className="card-body bg-dark d-flex align-items-center p-1">
                        <h6 className="card-title text-white text-truncate m-0 ml-3">{name}</h6>
                        <a href="/" style={style} className="d-flex flex-shrink-0 align-items-center justify-content-center bg-danger text-white text-decoration-none m-0 ml-auto" >${price}</a>
                    </div>
                    <div className="card-footer">
                        <p>{description}</p>
                    </div>

                    <Link to={`/order/${_id}`} className="btn">
                        <button className="button service-btn">Order Service</button>
                    </Link>
                </div>


            </div>
        </>
    );
};

export default ServiceCard;