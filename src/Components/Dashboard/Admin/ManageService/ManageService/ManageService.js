import React, { useEffect, useState } from 'react';
import ManageCard from '../ManageCard/ManageCard';

const ManageService = () => {

    const [loading, setLoading] = useState(null)
    const [service, setService] = useState([]);
    // console.log(service)

    const fetchService = () => {
        fetch('https://redserviceguard.herokuapp.com/service')
            .then(res => res.json())
            .then((data) => {
                setService(data);
                setLoading(data);
            })
    }

    useEffect(() => {
        fetchService()
    }, [])

    return (
        <div class="container mt-5">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">ServiceName</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        service.map(data => <ManageCard manageData={data} fetchService={fetchService} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageService;