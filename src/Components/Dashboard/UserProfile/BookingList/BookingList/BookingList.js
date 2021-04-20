import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingListCard from '../BookingListCard/BookingListCard';
import { UserContext } from '../../../../../App';

const BookingList = () => {
    const [loggedInUser,] = useContext(UserContext);
    const [loading, setLoading] = useState(null)
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/serviceOrderList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then((data) => {
                setOrderList(data);
                setLoading(data);
            })

    }, [])

    return (
        <div className="container card bg-primary mt-5">
            <h2 className='text-center'>Booking List</h2>
            <table className="table table-striped table-hover">
                <thead className="thead-dark w-100">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {
                    loading ? <tbody>
                        {
                            orderList?.map(data => <BookingListCard orderList={data} />)
                        }
                    </tbody> :
                        <div className=" text-center d-flex justify-content-around">
                            <div class=" spinner-grow text-success" role="status">
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

export default BookingList;