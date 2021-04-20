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
            <div className="container-fluid card bg-dark p-0">
                <div className="container p-0 py-5">
                    <div className="d-flex flex-column text-center mb-5">
                        <h5 className="text-primary mb-3">Testimonial</h5>
                        <h1 className="m-0">What Our Clients Say</h1>
                    </div>
                    {
                        loading ? <div className="owl-carousel testimonial-carousel row">
                            {
                                review.map(data => <TestimonialCard testimonialData={data} />)
                            }
                        </div> : <div>
                            <div class="spinner-grow text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-secondary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-success" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-danger" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Testimonial;