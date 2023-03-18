import React from 'react';
import '@styles/CreateNewPassword.scss';

import logoYardSale from '@logos/logo_yard_sale.svg';

const CreateNewPassword = () => {
	return (
        <div className="create-new-pass__container">
            <div className="create-new-pass__form-container">
                <img
                    src={logoYardSale}
                    alt="logo"
                    className="logo"
                />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">
                    Enter a new password for your account
                </p>
                <form action="/" className="form">
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <label htmlFor="new-password" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <input
                        type="submit"
                        value="Confirm"
                        className="primary-button login-button"
                    />
                </form>
            </div>
        </div>
    );
}

export default CreateNewPassword;
