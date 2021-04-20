import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { guardData } from '../../../../FakeData/FakeData';
import GuardCard from '../GuardCard/GuardCard';

const Guard = () => {

    const [loading, setLoading] = useState(null)
    const [officers, setOfficers] = useState([]);
    console.log(officers)
    useEffect(() => {
        fetch('http://localhost:5000/officer')
            .then(res => res.json())
            .then((data) => {
                setOfficers(data);
                setLoading(data);
            })

    }, [])
    return (
        <div>
            <div className="container pt-5 pb-3">
                <div className="d-flex flex-column text-center mb-5">
                    <h5 className="text-primary mb-3">Security Officers</h5>
                    <h1 className="m-0">Meet Our Security Officers</h1>
                </div>

                {
                    loading ?
                        <div className="row">

                            {
                                officers?.map(data => <GuardCard officer={data} />)
                            }

                        </div> :
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

            </div>
        </div>
    );
};

export default Guard;