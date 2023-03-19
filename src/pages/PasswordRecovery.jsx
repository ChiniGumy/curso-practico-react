import React from 'react';
import '@styles/PasswordRecovery.scss'

const PasswordRecovery = () => {
    return (
        <div className="password-recovery__login">
            <div className="password-recovery__form-container">

                <h1 className="password-recovery__title">
                    Password Recovery
                </h1>

                <p className="password-recovery__subtitle">
                    Inform the email adress used to create your account
                </p>

                <form action="/" className='password-recovery__form'>

                    <label htmlFor="email" className="password-recovery__label">
                        Email address
                    </label>

                    <input
                        type="text"
                        id="email"
                        placeholder="platzi@example.cm"
                        className="password-recovery__input password-recovery__input-email"
                    />

                    <button className="password-recovery__primary-button password-recovery__signup-button" href="/email-has-been-sent">Submit</button>

                    <a href="/" className="back-to-login">Back to login</a>
                </form>
            </div>
        </div>
    );
};

export default PasswordRecovery;
