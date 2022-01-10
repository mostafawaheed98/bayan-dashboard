import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import LoginForm from './auth/LoginForm';
import ConfirmForm from './auth/ConfirmFrom';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './dashboard/Dashboard';
import NotFound from './layout/NotFound';
import Home from './Home';

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="dashboard" element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<LoginForm/>} />
                    <Route path="confirm" element={<ConfirmForm/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
    );
}

export default App;
