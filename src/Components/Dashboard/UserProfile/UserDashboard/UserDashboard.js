import React from 'react';
import { faSketch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import Booking from '../Booking/Booking';
import BookingList from '../BookingList/BookingList/BookingList';
import Review from '../Review/Review';
import Profile from '../Profile/Profile';

const UserDashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div class='row'>
            <div class="sidebar col-lg-2">
                <div class="sidebar-top">
                    <i class="logo fab fa-sketch">
                        <FontAwesomeIcon icon={faSketch} />
                    </i>
                    <span class="brand">The App</span>
                </div>
                <div class="sidebar-center">
                    <ul class="list">
                        <Link class='link' to="/home">
                            <li class="list-item">
                                <i class="list-item-icon fas fa-home"></i>
                                <span class="list-item-text">Home</span>
                            </li>
                        </Link>

                        <Link to={`${url}/profile`}>
                            <li class="list-item">
                                <i class="list-item-icon fas fa-book"></i>
                                <span class="list-item-text">Profile</span>
                            </li>
                        </Link>

                        <Link to={`${url}/booking`}>
                            <li class="list-item">
                                <i class="list-item-icon fas fa-stream"></i>
                                <span class="list-item-text">Booking</span>
                            </li>
                        </Link>
                        <Link to={`${url}/bookingList`}>
                            <li class="list-item">
                                <i class="list-item-icon fas fa-book"></i>
                                <span class="list-item-text">Booking List</span>
                            </li>
                        </Link>


                        <Link to={`${url}/review`}>
                            <li class="list-item">
                                <i class="list-item-icon fas fa-book"></i>
                                <span class="list-item-text">Review</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div class="sidebar-bottom">
                    <div class="color-box dark"></div>
                    <div class="color-box night"></div>
                    <div class="color-box light"></div>
                </div>
            </div>
            <div class="col-lg-10">
                <nav>
                    <Switch>
                        <Route path={`${path}/profile`} component={Profile} />
                        <Route path={`${path}/booking`} component={Booking} />
                        <Route path={`${path}/bookingList`} component={BookingList} />
                        <Route path={`${path}/review`} component={Review} />
                    </Switch>
                </nav>
            </div>
        </div>
    );
};

export default UserDashboard;