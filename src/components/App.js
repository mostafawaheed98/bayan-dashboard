import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import LoginForm from './auth/LoginForm';
import ConfirmForm from './auth/ConfirmFrom';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <PrivateRoute></PrivateRoute>
                    <Route path="login" element={<LoginForm/>} />
                    <Route path="confirm" element={<ConfirmForm/>}/>
                </Route>
            </Routes>
    );
}

export default App;
