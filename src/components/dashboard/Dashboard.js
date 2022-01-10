import React from 'react';
import { useAuth } from '../../hooks/useAuth';

function Dashboard() {
    const {user} = useAuth();
    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome, {user.email}</p>
        </>
    );
}

export default Dashboard;