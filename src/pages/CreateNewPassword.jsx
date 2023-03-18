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
                    className="create-new-pass__logo"
                />
                <h1 className="create-new-pass__title">Create a new password</h1>
                <p className="create-new-pass__subtitle">
                    Enter a new password for your account
                </p>
                <form action="/" className="create-new-pass__form">
                    <label htmlFor="password" className="create-new-pass__label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="create-new-pass__input create-new-pass__input-password"
                    />
                    <label htmlFor="new-password" className="create-new-pass__label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        className="create-new-pass__input create-new-pass__input-password"
                    />
                    <input
                        type="submit"
                        value="Confirm"
                        className="create-new-pass__primary-button create-new-pass__login-button"
                    />
                </form>
            </div>
        </div>
    );
}

export default CreateNewPassword;
