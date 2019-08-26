import React from 'react';

import './Login.css';

import LoginForm from '../../../components/auth/LoginForm';
import Nav from '../../../components/auth/Nav';

export default function () {
    return (
        <div className="Login">
            <Nav></Nav>
            <div className="login-form-wrap">
                <LoginForm />
            </div>
        </div>
    );
}