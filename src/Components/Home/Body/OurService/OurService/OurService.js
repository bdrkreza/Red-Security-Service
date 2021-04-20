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

        <div className="container pt-5">
            <div className="d-flex flex-column text-center mb-5">
                <h5 className="text-primary mb-3">Our Services</h5>
                <h1 className="m-0">Premium Security Services</h1>
            </div>

            {loading ?
                <div className="row d-flex">
                    {
                        service.map(data => <ServiceCard serviceData={data} />)
                    }
                </div>
                :
                <div class="text-center">
                    <div class="spinner-grow text-primary" role="status">

                    </div>
                    <div class="spinner-grow text-secondary" role="status">

                    </div>
                    <div class="spinner-grow text-success" role="status">

                    </div>
                    <div class="spinner-grow text-danger" role="status">

                    </div>
                </div>
            }



        </div >
    );
};

export default OurService;