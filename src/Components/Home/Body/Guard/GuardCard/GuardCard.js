import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const GuardCard = ({ officer }) => {
    console.log(officer)
    const { image } = officer;
    const { name, description, designation } = officer.officer;
    return (
        <div className="col-md-6">
            <div className="row mb-2 align-items-center">
                <div className="col-6 text-right">
                    <h6>{name}</h6>
                    <h6 className="text-muted font-weight-normal text-capitalize mb-2">{designation}</h6>
                    <p>{description}</p>
                    <div className="d-flex justify-content-end">
                        <a className="m-1 text-danger " href=""><FontAwesomeIcon size="1x" icon={faFacebook} /></a>
                        <a className="m-1 text-danger" href=""><FontAwesomeIcon size="1x" icon={faInstagram} /></a>
                        <a className="m-1 text-danger" href=""><FontAwesomeIcon size="1x" icon={faLinkedinIn} /></a>
                        <a className="m-1 text-danger" href=""><FontAwesomeIcon size="1x" icon={faTwitter} /></a>
                    </div>
                </div>
                <div className="col-6">
                    <img className="img-thumbnail p-3" src={`data:image/png;base64,${image.img}`} alt="Image" />
                </div>
            </div>
        </div>
    );
};

export default GuardCard;