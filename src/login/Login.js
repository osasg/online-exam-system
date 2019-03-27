import React from 'react';

import './Login.css';

import LoginForm from './LoginForm';

export default function () {
    return (
        <div className="Login">

            <div className="login-form-wrap">
                <LoginForm />
            </div>
        </div>
    );
}