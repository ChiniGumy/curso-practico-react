import React from 'react';
import '@styles/MyAccountCreate.scss';

const MyAccountCreate = () => {
	return (
        <div className="my-account-create__login">
            <div className="my-account-create__form-container">
                <h1 className="my-account-create__title">My account</h1>

                <form action="/" className="my-account-create__form">
                    <div>
                        <label htmlFor="name" className="my-account-create__label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Teff"
                            className="my-account-create__input my-account-create__input-name"
                        />

                        <label htmlFor="email" className="my-account-create__label">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="platzi@example.com"
                            className="my-account-create__input my-account-create__input-email"
                        />

                        <label htmlFor="password" className="my-account-create__label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*********"
                            className="my-account-create__input my-account-create__input-password"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Create"
                        className="my-account-create__primary-button my-account-create__login-button"
                    />
                </form>
            </div>
        </div>
    );
}

export default MyAccountCreate;