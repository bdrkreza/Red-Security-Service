import React from 'react';

const ServiceOrderCard = ({ orderList }) => {
    console.log(orderList)
    const { status, _id } = orderList;
    function updateProduct(id) {
        const product = status;
        console.log(id)
        fetch(`https://redserviceguard.herokuapp.com/statusUpdate/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result, 'update success');
            })

    }

    const { name, email, } = orderList.shipment;
    console.log(orderList)
    return (
        <>
            <tr className="bg-info">
                <td>{name}</td>
                <td>{email}</td>
                <td>{orderList.service.name}</td>
                <td>Credit Card</td>
                <td>
                    <select onBlur={updateProduct(_id)} class="form-control">
                        <option value="pending" >{status}</option>
                        <option value="approved">Done</option>
                        <option value="going">On Going</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </td>
            </tr>
        </>
    );
};

export default ServiceOrderCard;