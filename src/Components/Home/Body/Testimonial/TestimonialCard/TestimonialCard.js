import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({ testimonialData }) => {
    const { massage, name, profession } = testimonialData;
    return (
        <>
            <div class="testimonial-item col-md-6 mb-5 px-3">
                <div class="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
                    <p>{massage}</p>
                </div>
                <div class="d-flex align-items-center">
                    <img class="img-thumbnail bg-light rounded-circle" src="" alt="Img" />
                    <div class="pl-4">
                        <h6 class="text-primary">{name}</h6>
                        <p class="m-0">{profession}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;