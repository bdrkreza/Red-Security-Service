import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminProfile from '../Admin/AdminProfile/AdminProfile';
import UserDashboard from '../UserProfile/UserDashboard/UserDashboard';
import { UserContext } from '../../../App';
import './Dashboard.css'

const Dashboard = () => {
    const [loggedInUser,] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://redserviceguard.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
            {
                isAdmin ?
                    <div>
                        <AdminProfile />
                    </div>
                    :
                    <div>
                        <UserDashboard />
                    </div>
            }

        </div >
    );
};

export default Dashboard;