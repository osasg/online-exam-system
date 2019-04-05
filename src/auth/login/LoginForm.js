import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LoginForm.css';

import InputForm from '../../form/InputForm';
import ButtonPrimary from '../../buttons/ButtonPrimary';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.changeLogin = this.changeLogin.bind(this);
    }

    changeLogin(prop, val) {
        this.setState({
            [prop]: val
        });
    }

    render() {
        const { username, password } = this.state;

        return (
            <div className="LoginForm">
                <div className="title">Sign in</div>
                <div className="form-wrap">
                    <InputForm value={username} onChange={(val) => this.changeLogin('username', val)} label="username" placeholder="quangdatpham"/>
                    <InputForm value={password} onChange={(val) => this.changeLogin('password', val)} label="password" type="password" placeholder="***********"/>
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
}