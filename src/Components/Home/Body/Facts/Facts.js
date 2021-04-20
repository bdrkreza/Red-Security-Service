import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faShieldAlt, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons';

const Facts = () => {
    return (
        <div>
            <div className="container-fluid bg-primary my-5 py-5 text-center">
                <div className="row  pt-5">
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="mb-2 d-inline-flex border rounded-circle w-25 h-50  align-items-center justify-content-center"><FontAwesomeIcon size="2x" icon={faUserShield} /></h5>
                        <h4 className="display-4 text-white mb-3" data-toggle="counter-up">250</h4>
                        <h6 className="text-white m-0">Our Staff</h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className=" mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle w-25 h-50 text-white"><FontAwesomeIcon size="2x" icon={faUsers} /></h5>
                        <h4 className="display-4 text-white mb-3" data-toggle="counter-up">1500</h4>
                        <h6 className="text-white m-0">Happy Client</h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="mb-4  d-inline-flex align-items-center justify-content-center border rounded-circle w-25 h-50  text-white"><FontAwesomeIcon size="2x" icon={faShieldAlt} /></h5>
                        <h4 className="display-4 text-white mb-3" data-toggle="counter-up">10000</h4>
                        <h6 className="text-white m-0">Project Complete</h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-5">
                        <h5 className="mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle w-25 h-50 text-white"><FontAwesomeIcon size="2x" icon={faAward} /></h5>
                        <h4 className="display-4 text-white mb-3" data-toggle="counter-up">25</h4>
                        <h6 className="text-white m-0">Award Winning</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;