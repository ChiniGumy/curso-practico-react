import React, {useRef} from 'react';
import '@styles/Login.scss';

import logoYardSale from '@logos/logo_yard_sale.svg';

const Login = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current);

        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        };
        console.log(data);
    };

	return (
        <div className="login__container">
            <div className="login__form-container">
                <img src={logoYardSale} alt="logo" className="login__logo" />

                <form action="/" className="login__form" ref={form}>
                    <label htmlFor="email" className="login__label">
                        Email address
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="platzi@example.cm"
                        className="login__input login__input-email"
                    />

                    <label htmlFor="password" className="login__label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*********"
                        className="login__input login__input-password"
                    />

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        value="Log in"
                        className="login__primary-button login__login-button"
                    >
                        Log in
                    </button>

                    <a href="/password-recovery">Forgot my password</a>
                </form>
                <button
                    className="login__secondary-button login__signup-button"
                >
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Login;