import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import '@styles/global.css';

import Layout from '@containers/Layout';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

import Login from '@pages/Login.jsx'
import CreateNewPassword from '@pages/CreateNewPassword';
import EmailHasBeenSent from '@pages/EmailHasBeenSent';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/create-new-password' element={<CreateNewPassword />} />
                    <Route path='/email-has-been-sent' element={<EmailHasBeenSent />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;