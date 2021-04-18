
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './ManageCard.css'

const ManageCard = ({ manageData, fetchService }) => {
    const { name, price, image, _id } = manageData;

    const ServiceDelete = (serviceId) => {
        fetch(`https://redserviceguard.herokuapp.com/serviceDelete/${serviceId}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                fetchService();
                if (data) {
                    alert('Product Delete successfully')
                }
            })
    }

    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>
                    <img src={`data:image/png;base64,${image.img}`} alt="Avatar" class="avatar" />
                </td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <div class="d-flex justify-content-around ">
                        <p onClick={() => ServiceDelete(_id)} class="delete-icon">
                            <FontAwesomeIcon size="2x" icon={faTrash} />
                        </p>
                        <Link to={`/editService/${_id}`} class="edit-icon">
                            <FontAwesomeIcon size="2x" icon={faEdit} />
                        </Link>
                    </div>
                </td>

            </tr>
        </>
    );
};

export default ManageCard;