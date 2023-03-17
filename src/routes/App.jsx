import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import CreateNewPassword from '@containers/CreateNewPassword';
import Layout from '@containers/Layout';
import RecoveryPassword from '@containers/EmailHasBeenSent';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import '@styles/global.css';
import EmailHasBeenSent from '@containers/EmailHasBeenSent';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/create-new-password' element={<CreateNewPassword />} />
                    <Route path='/email-has-been-sent' element={<EmailHasBeenSent />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;