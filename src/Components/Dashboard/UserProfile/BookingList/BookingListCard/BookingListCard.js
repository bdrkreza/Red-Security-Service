import React from 'react';

const BookingListCard = ({ orderList }) => {
    const { image, name, price } = orderList.service;
    console.log(orderList)
    return (
        <>
            <tr className="bg-info">
                <th scope="row">1</th>
                <td>
                    <img src={`data:image/png;base64,${image?.img}`} alt="Avatar" class="avatar" />
                </td>
                <td>{name}</td>

                <td>{price}</td>

                <td>{orderList.status}</td>
            </tr>
        </>
    );
};

export default BookingListCard;