
import './App.css'
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Users/Login/Login";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Payment from './Components/ProcessPayment/Payment/Payment';
import EditService from './Components/Dashboard/Admin/ManageService/EditService/EditService';
import UserDashboard from './Components/Dashboard/UserProfile/UserDashboard/UserDashboard';
import Profile from './Components/Dashboard/UserProfile/Profile/Profile';

export const UserContext = createContext();
const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/userDashboard">
              <UserDashboard />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/editService/:EditId">
              <EditService />
            </PrivateRoute>
            <PrivateRoute path="/order/:orderId">
              <Payment />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router >
      </UserContext.Provider>
    </>
  );
};

export default App;
