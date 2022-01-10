import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import {Helmet} from 'react-helmet';

function Dashboard() {
    const {user} = useAuth();
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <h1>Dashboard</h1>
            <p>Welcome, {user.email}</p>
        </>
    );
}

export default Dashboard;