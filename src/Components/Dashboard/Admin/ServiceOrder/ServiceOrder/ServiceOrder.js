import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceOrderCard from '../ServiceOrderCard/ServiceOrderCard';

const ServiceOrder = () => {
    const [loading, setLoading] = useState(null)
    const [orderList, setOrderList] = useState([]);

    const fetchServiceOrder = () => {
        fetch('http://localhost:5000/orderList')
            .then(res => res.json())
            .then((data) => {
                setOrderList(data);
                setLoading(data);
            })

    }

    useEffect(() => {
        fetchServiceOrder();
    }, [])


    return (
        <div className="container card bg-secondary mt-5">
            <h2 className='text-center'>Booking List</h2>
            <table className="table table-striped table-hover">
                <thead className="thead-dark w-100">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                {
                    loading ?
                        <tbody>
                            {
                                orderList.map(data => <ServiceOrderCard orderList={data} fetchServiceOrder={fetchServiceOrder} />)
                            }
                        </tbody> :
                        <div style={{ marginLeft: "350px" }} class="d-flex justify-content-around">
                            <div class="spinner-grow text-success" role="status">
                            </div>
                            <div class="spinner-grow text-danger" role="status">
                            </div>
                            <div class="spinner-grow text-warning" role="status">
                            </div>
                            <div class="spinner-grow text-info" role="status">
                            </div>
                        </div>
                }
            </table>
        </div >
    );
};

export default ServiceOrder;