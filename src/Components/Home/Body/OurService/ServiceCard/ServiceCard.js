
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceCard.css'
import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = ({ serviceData }) => {
    const { name, price, description, image, _id } = serviceData;
    return (
        <>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card mb-2 p-3">
                    <div class="inner">
                        <img class="card-img-top" src={`data:image/png;base64,${image.img}`} alt="" />
                    </div>
                    <div class="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 class="font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3"><FontAwesomeIcon size="2x" icon="" /></h3>
                        <h6 class="card-title text-white text-truncate m-0">{name}</h6>
                        <h5 class="price">${price}</h5>
                    </div>
                    <div class="card-footer">
                        <p>{description}</p>
                    </div>

                    <Link to={`/order/${_id}`} className="btn">
                        <button class="button btn-grad">Order Service</button>
                    </Link>
                </div>


            </div>
        </>
    );
};

export default ServiceCard;