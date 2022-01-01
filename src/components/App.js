import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import LoginForm from './layout/auth/LoginForm';

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="login" element={<LoginForm/>} />
                </Route>
            </Routes>
    );
}

export default App;
