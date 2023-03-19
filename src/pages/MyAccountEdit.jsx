import React from 'react';
import '@styles/MyAccountEdit.scss';

const MyAccountEdit = () => {
	return (
        <div className="my-account-edit__login">
            <div className="my-account-edit__form-container">
                <h1 className="my-account-edit__title">My account</h1>

                <form action="/" className="my-account-edit__form">
                    <div>
                        <label htmlFor="name" className="my-account-edit__label">
                            Name
                        </label>
                        <p className="value">Camila Yokoo</p>

                        <label htmlFor="email" className="my-account-edit__label">
                            Email
                        </label>
                        <p className="value">camilayokoo@gmail.com</p>

                        <label htmlFor="password" className="my-account-edit__label">
                            Password
                        </label>
                        <p className="my-account-edit__value">*********</p>
                    </div>

                    <input
                        type="submit"
                        value="Edit"
                        className="my-account-edit__secondary-button my-account-edit__login-button"
                    />
                </form>
            </div>
        </div>
    );
}

export default MyAccountEdit;