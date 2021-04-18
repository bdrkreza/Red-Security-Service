import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingListCard from '../BookingListCard/BookingListCard';
import { UserContext } from '../../../../../App';

const BookingList = () => {
    const [LoggedInUser,] = useContext(UserContext);
    const [loading, setLoading] = useState(null)
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch('https://redserviceguard.herokuapp.com/serviceOrderList?email=' + LoggedInUser.email)
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
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map(data => <BookingListCard orderList={data} />)
                    }
                </tbody>
            </table>



        </div>
    );
};

export default BookingList;