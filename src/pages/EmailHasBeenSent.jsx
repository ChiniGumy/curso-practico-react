import React from 'react';
import '@styles/EmailHasBeenSent.scss';

import logoYardSale from '@logos/logo_yard_sale.svg';
import emailIcon from '@icons/email.svg';

const EmailHasBeenSent = () => {
	return (
        <div className="email-has-been-sent__container">
            <div className="email-has-been-sent__form-container">
                <img
                    src={logoYardSale}
                    alt="logo"
                    className="email-has-been-sent__logo"
                />

                <h1 className="email-has-been-sent__title">Email has been sent!</h1>
                <p className="email-has-been-sent__subtitle">
                    Please check your inbox for instructions on how to reset the
                    password
                </p>

                <div className="email-has-been-sent__email-image">
                    <img src={emailIcon} alt="email" />
                </div>

                <button className="email-has-been-sent__primary-button email-has-been-sent__login-button">Login</button>

                <p className="email-has-been-sent__resend">
                    <span>Didn't receive the email?</span>
                    <a href="/"> Resend</a>
                </p>
            </div>
        </div>
    );
}

export default EmailHasBeenSent;