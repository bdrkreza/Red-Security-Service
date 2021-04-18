import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceOrderCard from '../ServiceOrderCard/ServiceOrderCard';

const ServiceOrder = () => {
    const [loading, setLoading] = useState(null)
    const [orderList, setOrderList] = useState([]);
    console.log(orderList)
    useEffect(() => {
        fetch('https://redserviceguard.herokuapp.com/serviceOrderList')
            .then(res => res.json())
            .then((data) => {
                setOrderList(data);
                setLoading(data);
            })

    }, [])
    return (
        <div class="container card bg-secondary mt-5">
            <h2 className='text-center'>Booking List</h2>
            <table class="table table-striped table-hover">
                <thead class="thead-dark w-100">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map(data => <ServiceOrderCard orderList={data} />)
                    }
                </tbody>
            </table>



        </div>
    );
};

export default ServiceOrder;