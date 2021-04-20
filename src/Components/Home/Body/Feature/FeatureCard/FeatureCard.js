import React from 'react';
import './FeatureCard.css'

const FeatureCard = ({ featureData }) => {
    const { name, icon, description } = featureData;
    return (
        <>
            <div id="what-we-do" className="col-md-6 mb-2">
                <div className="card">
                    <div className="card-block block-1">
                        <div className="d-flex">
                            <img className="w-25 h-25 bg-info mr-4" src={icon} alt="" />
                            <h5 className="card-title">{name}</h5>
                        </div>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureCard;