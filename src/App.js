
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
import Register from './Components/Users/Register/Register';
import Blog from './Components/Home/Body/Blogs/Blog/Blog';
import Contact from './Components/Home/Body/Contact/Contact/Contact';
import AboutUs from './Components/Home/Body/AboutUs/AboutUs';


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
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/editService/:EditId">
              <EditService />
            </PrivateRoute>
            <PrivateRoute path="/order/:orderId">
              <Payment />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
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
