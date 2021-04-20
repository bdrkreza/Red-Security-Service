import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddBlog from '../AddBlog/AddBlog';
import AddOfficer from '../AddOfficer/AddOfficer';
import CreateAdmin from '../CreateAdmin/CreateAdmin';
import CreateService from '../CreateService/CreateService';
import ManageService from '../ManageService/ManageService/ManageService';
import ServiceOrder from '../ServiceOrder/ServiceOrder/ServiceOrder';
import logo from '../../../../Icon/RedSecurity.png'

import "./AdminProfile.css"
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import ClientReview from '../ClientReview/ClientReview/ClientReview';

const AdminProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photo, name } = loggedInUser;
    console.log(loggedInUser)
    let { path, url } = useRouteMatch();
    return (
        <div className="row">
            <div className="col-lg-2">
                <div className="sidebar">
                    <img className='brand-logo' src={logo} alt="" />
                    <div className="mt-1">
                        <img src={photo} alt="Avatar" className="avatar" />
                        <br />
                        <span className="brand">{name}</span>
                    </div>
                    <div className="sidebar-center">
                        <ul className="list">
                            <Link className='link' to="/home">
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-home"></i>
                                    <span className="list-item-text">Home</span>
                                </li>
                            </Link>
                            <Link className='link' to="/dashboard">
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-home"></i>
                                    <span className="list-item-text">Dashboard</span>
                                </li>
                            </Link>
                            <Link to={`${url}/orderList`}>
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-stream"></i>
                                    <span className="list-item-text">Order List</span>
                                </li>
                            </Link>
                            <Link to={`${url}/createService`}>
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-book"></i>
                                    <span className="list-item-text">Create Service</span>
                                </li>
                            </Link>


                            <Link to={`${url}/manageService`}>
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-book"></i>
                                    <span className="list-item-text">Manage Service</span>
                                </li>
                            </Link>
                            <Link to={`${url}/createAdmin`}>
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-users"></i>
                                    <span className="list-item-text">Create Admin</span>
                                </li>
                            </Link>
                            <Link to={`${url}/addOfficer`}>
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-toolbox"></i>
                                    <span className="list-item-text">Add Officer</span>
                                </li>
                            </Link>
                            <Link to={`${url}/addBlog`}>
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-shopping-basket"></i>
                                    <span className="list-item-text">Add Blog</span>
                                </li>
                            </Link>
                            <Link to={`${url}/clientReview`}>
                                <li className="list-item">
                                    <i className="list-item-icon fas fa-shopping-basket"></i>
                                    <span className="list-item-text">Client review</span>
                                </li>
                            </Link>
                        </ul>

                    </div>
                    <button className="log-btn" onClick={() => setLoggedInUser({})}>
                        Logout
                    </button>
                    <div className="sidebar-bottom">
                        <div className="color-box dark"></div>
                        <div className="color-box night"></div>
                        <div className="color-box light"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-10">
                <nav>
                    <h1 className="text-center text-info mt-5">Welcome Admin Dashboard</h1>
                    <Switch>
                        <Route path={`${path}/orderList`} component={ServiceOrder} />
                        <Route path={`${path}/createService`} component={CreateService} />
                        <Route path={`${path}/manageService`} component={ManageService} />
                        <Route path={`${path}/createAdmin`} component={CreateAdmin} />
                        <Route path={`${path}/addOfficer`} component={AddOfficer} />
                        <Route path={`${path}/addBlog`} component={AddBlog} />
                        <Route path={`${path}/clientReview`} component={ClientReview} />
                    </Switch>
                </nav>
            </div>
        </div>
    );
};

export default AdminProfile;