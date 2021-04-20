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
        <div className="container mt-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">ServiceName</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                {
                    loading ?
                        <tbody>
                            {
                                service.map(data => <ManageCard manageData={data} fetchService={fetchService} />)
                            }
                        </tbody>
                        :
                        <div className="d-flex justify-content-around">
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
        </div>
    );
};

export default ManageService;