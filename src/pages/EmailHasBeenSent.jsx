import React from 'react'
import '@styles/EmailHasBeenSent.scss';

import logoYardSale from '@logos/logo_yard_sale.svg'
import emailIcon from '@icons/email.svg'

const EmailHasBeenSent = () => {
	return (
        <div className="email-has-been-sent__container">
            <div className="email-has-been-sent__form-container">
                <img
                    src={logoYardSale}
                    alt="logo"
                    className="logo"
                />

                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">
                    Please check your inbox for instructions on how to reset the
                    password
                </p>

                <div className="email-image">
                    <img src={emailIcon} alt="email" />
                </div>

                <button className="primary-button login-button">Login</button>

                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default EmailHasBeenSent;