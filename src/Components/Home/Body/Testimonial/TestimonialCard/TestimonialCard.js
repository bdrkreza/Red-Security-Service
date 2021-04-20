import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({ testimonialData }) => {
    const { massage, name, profession } = testimonialData;
    return (
        <>
            <div className="testimonial-item col-md-6 mb-5 px-3">
                <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                    <p>{massage}</p>
                </div>
                <div className="d-flex align-items-center">
                    <img className="img-thumbnail bg-light rounded-circle" src="" alt="Img" />
                    <div className="pl-4">
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{profession}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;