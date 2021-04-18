import React from 'react';
import './HeaderCard.css'

const HeaderCard = ({ data }) => {
    console.log(data)
    const { icon, description, title } = data;
    return (
        <div class="card-container container">
            <div class="card card-style">
                <h2>{title}</h2>
                <div class="circle"></div>
                <div class="row d-flex">
                    <div class="content col-md-4">
                        <img class="card-logo ml-4" src={icon} alt="" />
                    </div>
                    <div class="col-md-8">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;