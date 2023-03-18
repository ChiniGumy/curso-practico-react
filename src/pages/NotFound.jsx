import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found__container">
            <div className="not-found__form-container">
                <h1 className="not-found__error-title">ERROR 404</h1>

                <h1 className="not-found__title">Oops!</h1>

                <p className="not-found__subtitle">
                    It seems that you landed in a page that doesn't exist.
                </p>

                <button className="not-found__primary-button not-found__login-button">
                    Return
                </button>
            </div>
        </div>
    );
};

export default NotFound;
