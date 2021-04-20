import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import { firebaseConfig } from '../../FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../../Home/Header/Navbar/Navbar';
import brandLogo from '../../../Icon/RedSecurity.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer/Footer';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [, setLoggedInUser] = useContext(UserContext);
    const googleHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const SignInUser = {
                    isSignedIn: true,
                    email: email,
                    name: displayName,
                    photo: photoURL,
                    success: true
                }
                setLoggedInUser(SignInUser);
                storeAuthToken();
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });

    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <>
            <Navbar />
            <div className="container login-body ">
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
                            <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
                            <div className="message">
                                <div><input type="checkbox" /> Remember ME</div>
                                <div><a href="/">Forgot your password</a></div>
                            </div>
                        </form>
                        <div className="social">
                            <a onClick={googleHandler} href="#"><FontAwesomeIcon size="2x" icon={faGoogle} /></a>
                            <a href="/"><FontAwesomeIcon size="2x" icon={faTwitter} /></a>
                            <a href="/"><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
                        </div>
                        <h5 class="text-danger text-center">Don't have an account? <Link to="/register">Register</Link></h5>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;