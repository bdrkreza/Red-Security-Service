import React from 'react';

const BookingListCard = ({ orderList }) => {
    const { image, name, price } = orderList.service;
    console.log(orderList)
    return (
        <>
            <tr classNameName="bg-info">
                <th scope="row">1</th>
                <td>
                    <img src={`data:image/png;base64,${image?.img}`} alt="Avatar" className="avatar" />
                </td>
                <td className="text-success">{name}</td>

                <td className="text-dark">${price}</td>

                <td className="text-warning">{orderList.status}</td>
            </tr>
        </>
    );
};

export default BookingListCard;