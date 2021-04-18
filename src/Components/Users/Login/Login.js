import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import { firebaseConfig } from '../../FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name } = LoggedInUser;

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
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });

    }

    return (
        <div className="login-body">
            <h1>This is Login {name} </h1>
            <button
                onClick={googleHandler}
            > Continue With google<img className="google-icon" src='' alt="" /></button>

        </div>
    );
};

export default Login;