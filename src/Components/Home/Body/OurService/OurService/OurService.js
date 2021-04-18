import React, { useEffect, useState } from 'react';
import "./OurService.css"
import ServiceCard from '../ServiceCard/ServiceCard';

const OurService = () => {

    const [loading, setLoading] = useState(null)
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://redserviceguard.herokuapp.com/service')
            .then(res => res.json())
            .then((data) => {
                setService(data);
                setLoading(data);
            })

    }, [])

    return (

        <div class="container pt-5">
            <div class="d-flex flex-column text-center mb-5">
                <h5 class="text-primary mb-3">Our Services</h5>
                <h1 class="m-0">Premium Security Services</h1>
            </div>
            <div class="row d-flex">
                {
                    service.map(data => <ServiceCard serviceData={data} />)
                }

            </div>
        </div>
    );
};

export default OurService;