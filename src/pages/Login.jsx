import React from 'react';
import '@styles/Login.scss';

import logoYardSale from '@logos/logo_yard_sale.svg';

const Login = () => {
	return (
        <div className="login__container">

            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="login__form-container">
                <img src={logoYardSale} alt="logo" className="login__logo" />

                <form action="/" className="login__form">
                    <label htmlFor="email" className="login__label">
                        Email address
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="platzi@example.cm"
                        className="login__input login__input-email"
                    />

                    <label htmlFor="password" className="login__label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="login__input login__input-password"
                    />

                    <input
                        type="submit"
                        value="Log in"
                        className="login__primary-button login__login-button"
                    />
                    <a href="/">Forgot my password</a>
                </form>
                <button className="login__secondary-button login__signup-button">Sign up</button>
            </div>
        </div>
    );
}

export default Login;