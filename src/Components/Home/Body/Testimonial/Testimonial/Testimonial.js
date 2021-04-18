import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';


const Testimonial = () => {
    const [loading, setLoading] = useState(null)
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://redserviceguard.herokuapp.com/review')
            .then(res => res.json())
            .then((data) => {
                setReview(data);
                setLoading(data);
            })

    }, [])

    return (
        <>
            <div class="container-fluid card bg-dark p-0">
                <div class="container p-0 py-5">
                    <div class="d-flex flex-column text-center mb-5">
                        <h5 class="text-primary mb-3">Testimonial</h5>
                        <h1 class="m-0">What Our Clients Say</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel row">
                        {
                            review.map(data => <TestimonialCard testimonialData={data} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;