import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

import Nav from '../../../components/auth/Nav';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import InputForm from '../../../components/form/InputForm';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.changeLogin = this.changeLogin.bind(this);
        this.login = this.login.bind(this);
    }

    changeLogin(prop, val) {
        this.setState({
            [prop]: val
        });
    }

    login(e) {
        e && e.preventDefault();
        const { username, password } = this.state;
        console.log(username, password);
    }

    render() {
        const { username, password } = this.state;

        return (
            <div className="Login">
                <Nav></Nav>
                <div className="login-form-wrap">
                    <form onSubmit={e => this.login(e)} className="login-form">
                        <div className="title">Sign in</div>
                        <div className="form-wrap">
                            <InputForm
                                tabIndex={1}
                                value={username}
                                onChange={(val) => this.changeLogin('username', val)}
                                label="username"
                                placeholder="quangdatpham"/>
                            <InputForm
                                tabIndex={2}
                                value={password}
                                onChange={(val) => this.changeLogin('password', val)}
                                label="password"
                                type="password"
                                placeholder="***********"/>
                        </div>
                        <div className="forgot">
                            Forgot?
                        </div>
                        <div className="login-btn">
                            <ButtonPrimary handleClick={this.login}>Sign in</ButtonPrimary>
                        </div>
                        <div className="goto-register">
                            Don't have an account?
                            <Link to="/register">Sign up</Link>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
