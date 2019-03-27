import React from 'react';

import './LoginForm.css';

import InputForm from '../form/InputForm';
import ButtonPrimary from '../buttons/ButtonPrimary';

export default function () {
    return (
        <div className="LoginForm">
            <div className="title">Sign in</div>
            <div className="form-wrap">
                <InputForm label="username" placeholder="quangdatpham"/>
                <InputForm label="password" placeholder="***********"/>
            </div>
            <div className="forgot">
                Forgot?
            </div>
            <div className="login-btn">
                <ButtonPrimary>Sign in</ButtonPrimary>
            </div>
        </div>
    );
}