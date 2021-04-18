import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const GuardCard = ({ teamData }) => {
    console.log(teamData)
    const { name, img, description, designation } = teamData;
    return (
        <div class="col-md-6">
            <div class="row mb-2 align-items-center">
                <div class="col-6 text-right">
                    <h6>{name}</h6>
                    <h6 class="text-muted font-weight-normal text-capitalize mb-2">{designation}</h6>
                    <p>{description}</p>
                    <div class="d-flex justify-content-end">
                        <a class="m-1 text-danger " href=""><FontAwesomeIcon size="1x" icon={faFacebook} /></a>
                        <a class="m-1 text-danger" href=""><FontAwesomeIcon size="1x" icon={faInstagram} /></a>
                        <a class="m-1 text-danger" href=""><FontAwesomeIcon size="1x" icon={faLinkedinIn} /></a>
                        <a class="m-1 text-danger" href=""><FontAwesomeIcon size="1x" icon={faTwitter} /></a>
                    </div>
                </div>
                <div class="col-6">
                    <img class="img-thumbnail p-3" src={img} alt="Image" />
                </div>
            </div>
        </div>
    );
};

export default GuardCard;