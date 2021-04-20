import React from 'react';
import './UserDashboard.css'
import logo from '../../../../Icon/RedSecurity.png'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import BookingList from '../BookingList/BookingList/BookingList';
import Review from '../Review/Review';
import Profile from '../Profile/Profile';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const UserDashboard = () => {
    let { path, url } = useRouteMatch();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photo, name } = loggedInUser;
    return (
        <div className='row'>
            <div className="sidebar bg-warning col-lg-2">
                <img className='brand-logo' src={logo} alt="" />
                <div className="mt-1">
                    <img src={photo} alt="Avatar" className="avatar" />
                    <br />
                    <span className="brand">{name}</span>
                </div>

                <div className="sidebar-center-2">
                    <ul className="list">
                        <Link className='link' to="/home">
                            <li className="list-item">
                                <i className="list-item-icon fas fa-home"></i>
                                <span className="list-item-text">Home</span>
                            </li>
                        </Link>

                        <Link to={`${url}/profile`}>
                            <li className="list-item">
                                <i className="list-item-icon fas fa-book"></i>
                                <span className="list-item-text">Profile</span>
                            </li>
                        </Link>
                        <Link to={`${url}/bookingList`}>
                            <li className="list-item">
                                <i className="list-item-icon fas fa-book"></i>
                                <span className="list-item-text">Booking List</span>
                            </li>
                        </Link>


                        <Link to={`${url}/review`}>
                            <li className="list-item">
                                <i className="list-item-icon fas fa-book"></i>
                                <span className="list-item-text">Review</span>
                            </li>
                        </Link>
                        <button className="log-btn" onClick={() => setLoggedInUser({})}>
                            Logout
                        </button>
                    </ul>
                </div>
                <div className="sidebar-bottom">
                    <div className="color-box dark"></div>
                    <div className="color-box night"></div>
                    <div className="color-box light"></div>
                </div>
            </div>
            <div className="col-lg-10">
                <nav>
                    <Switch>
                        <Route path={`${path}/profile`} component={Profile} />
                        <Route path={`${path}/bookingList`} component={BookingList} />
                        <Route path={`${path}/review`} component={Review} />
                    </Switch>
                </nav>
            </div>
        </div >
    );
};

export default UserDashboard;