import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddBlog from '../AddBlog/AddBlog';
import AddOfficer from '../AddOfficer/AddOfficer';
import CreateAdmin from '../CreateAdmin/CreateAdmin';
import CreateService from '../CreateService/CreateService';
import ManageService from '../ManageService/ManageService/ManageService';
import ServiceOrder from '../ServiceOrder/ServiceOrder/ServiceOrder';

import "./AdminProfile.css"

const AdminProfile = () => {
    let { path, url } = useRouteMatch();
    return (
        <div class="row">
            <div class="col-lg-2">
                <div class="sidebar">
                    <div class="sidebar-top">
                        <i class="logo fab fa-sketch"></i>
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
                            <Link class='link' to="/dashboard">
                                <li class="list-item">
                                    <i class="list-item-icon fas fa-home"></i>
                                    <span class="list-item-text">Dashboard</span>
                                </li>
                            </Link>
                            <Link to={`${url}/orderList`}>
                                <li class="list-item">
                                    <i class="list-item-icon fas fa-stream"></i>
                                    <span class="list-item-text">Order List</span>
                                </li>
                            </Link>
                            <Link to={`${url}/createService`}>
                                <li class="list-item">
                                    <i class="list-item-icon fas fa-book"></i>
                                    <span class="list-item-text">Create Service</span>
                                </li>
                            </Link>


                            <Link to={`${url}/manageService`}>
                                <li class="list-item">
                                    <i class="list-item-icon fas fa-book"></i>
                                    <span class="list-item-text">Manage Service</span>
                                </li>
                            </Link>
                            <Link to={`${url}/createAdmin`}>
                                <li class="list-item">
                                    <i class="list-item-icon fas fa-users"></i>
                                    <span class="list-item-text">Create Admin</span>
                                </li>
                            </Link>
                            <Link to={`${url}/addOfficer`}>
                                <li class="list-item">
                                    <i class="list-item-icon fas fa-toolbox"></i>
                                    <span class="list-item-text">Add Officer</span>
                                </li>
                            </Link>
                            <Link to={`${url}/addBlog`}>
                                <li class="list-item">
                                    <i class="list-item-icon fas fa-shopping-basket"></i>
                                    <span class="list-item-text">Add Blog</span>
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
            </div>
            <div class="col-lg-10">
                <nav>
                    <Switch>
                        <Route path={`${path}/orderList`} component={ServiceOrder} />
                        <Route path={`${path}/createService`} component={CreateService} />
                        <Route path={`${path}/manageService`} component={ManageService} />
                        <Route path={`${path}/createAdmin`} component={CreateAdmin} />
                        <Route path={`${path}/addOfficer`} component={AddOfficer} />
                        <Route path={`${path}/addBlog`} component={AddBlog} />
                    </Switch>
                </nav>
            </div>
        </div>
    );
};

export default AdminProfile;