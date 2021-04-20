
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../../Icon/RedSecurity.png'
import Footer from '../../Home/Footer/Footer/Footer';
import Navbar from '../../Home/Header/Navbar/Navbar';

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="container login-body mx-auto">
                <div className="form-box mx-auto">
                    <div className="header-form">
                        <h4 className="text-primary text-center">
                            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                        <div className="image">
                            <img className="w-75" src={brandLogo} alt="" />
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                                </div>
                                <input type="text" className="form-control" placeholder="confirm Password" />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block">SIGNUP</button>
                            <div className="message">
                                <div><input type="checkbox" /> Remember ME</div>
                                <div><a href="/">Forgot your password</a></div>
                            </div>
                        </form>
                    </div>
                    <h5 class="text-danger text-center mt-4">Already have an account? <Link to="/login">Login</Link></h5>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Register;