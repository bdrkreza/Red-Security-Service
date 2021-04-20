import React from 'react';
import './HeaderCard.css'

const HeaderCard = ({ data }) => {
    console.log(data)
    const { icon, description, title } = data;
    return (
        <div className=" col-lg-4 col-md-6 col-sm-12 card-container">
            <div className="card card-style">
                <h2>{title}</h2>
                <div className="circle"></div>
                <div className="row d-flex">
                    <div className="content col-md-4 col-sm-4">
                        <img className="card-logo ml-4" src={icon} alt="" />
                    </div>
                    <div className="col">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;