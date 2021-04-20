import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
const NoMatch = () => {
    return (
        <div>
            <div className="error">
                <div className="container-floud">
                    <div className="col-xs-12 ground-color text-center">
                        <div className="container-error-404">
                            <div className="clip"><div className="shadow"><span className="digit thirdDigit">4</span></div></div>
                            <div className="clip"><div className="shadow"><span className="digit secondDigit">0</span></div></div>
                            <div className="clip"><div className="shadow"><span className="digit firstDigit">4</span></div></div>
                            <div className="msg">OH!<span className="triangle"></span></div>
                        </div>
                        <h2 className="h1">Sorry! Page not found</h2>
                    </div>
                </div>
            </div>
            <Link to="/">
                <button type="" to="/" className='button btn-Style text-center h4'>
                    <FontAwesomeIcon icon={faHome} />
                    <span className="btn-text">Back To Home</span>
                </button>
            </Link>

        </div>
    );
};

export default NoMatch;