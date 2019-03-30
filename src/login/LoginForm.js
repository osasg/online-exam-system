import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/"><ButtonPrimary>Sign in</ButtonPrimary></Link>
            </div>
            <div className="goto-register">
                Don't have an account?
                <Link to="/register">Sign up</Link>
            </div>
        </div>
    );
}