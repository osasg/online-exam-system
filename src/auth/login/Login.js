import React from 'react';

import './Login.css';

import LoginForm from './LoginForm';
import Nav from '../nav/Nav';

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