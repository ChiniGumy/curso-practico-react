import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import '@styles/global.css';

import Layout from '@containers/Layout';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

import Login from '@pages/Login.jsx'
import CreateNewPassword from '@pages/CreateNewPassword';
import EmailHasBeenSent from '@pages/EmailHasBeenSent';
import MyAccountCreate from '@pages/MyAccountCreate';
import MyAccountEdit from '@pages/MyAccountEdit';
import PasswordRecovery from '@pages/PasswordRecovery';
import Checkout from '@pages/Checkout'
import Orders from '@pages/Orders'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/login' element={<Login />} />

                    <Route path='/password-recovery' element={<PasswordRecovery/>} />
                    <Route path='/email-has-been-sent' element={<EmailHasBeenSent />} />
                    <Route path='/create-new-password' element={<CreateNewPassword />} />

                    <Route path='/my-account-create' element={<MyAccountCreate/>} />
                    <Route path='/my-account-edit' element={<MyAccountEdit/>} />

                    <Route path='/orders' element={<Orders/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;