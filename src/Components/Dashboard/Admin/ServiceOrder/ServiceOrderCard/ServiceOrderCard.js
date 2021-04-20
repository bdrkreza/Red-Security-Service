import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceOrderCard = ({ orderList, fetchServiceOrder }) => {
    const { name, email, } = orderList.shipment;
    const { status, _id } = orderList;

    const handleChangeStatus = (evt) => {
        const targetAction = evt.target.value;
        const id = evt.target.id;
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: targetAction })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))

    }

    const OrderDelete = (serviceId) => {
        fetch(`http://localhost:5000/serviceOrderDelete/${serviceId}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                fetchServiceOrder();
                if (data) {
                    alert('Service Delete successfully')
                }
            })
    }



    return (
        <>
            <tr className="bg-info">
                <td>{name}</td>
                <td>{email}</td>
                <td>{orderList.service.name}</td>
                <td>Credit Card</td>
                <td>
                    <select onChange={handleChangeStatus} className="form-control" id={_id}>
                        <option value="Pending" >{status}</option>
                        <option value="Done">Done</option>
                        <option value="Going">Going</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </td>
                <td>
                    <p onClick={() => OrderDelete(_id)} className="delete-icon">
                        <FontAwesomeIcon size="2x" icon={faMinusCircle} />
                    </p>
                </td>
            </tr>
        </>
    );
};

export default ServiceOrderCard;