import React from 'react';
import './FeatureCard.css'

const FeatureCard = ({ featureData }) => {
    const { name, icon, description } = featureData;
    return (
        <>
            <div id="what-we-do" class="col-md-6 mb-2">
                <div class="card">
                    <div class="card-block block-1">
                        <div class="d-flex">
                            <img class="w-25 h-25 bg-info mr-4" src={icon} alt="" />
                            <h5 class="card-title">{name}</h5>
                        </div>
                        <p class="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureCard;