import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ContainerTab.css';
import ButtonPrimary from '../buttons/ButtonPrimary';
import InputForm from '../form/InputForm';

export default class ContainerTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm: '',
            email: '',
            phone: '',
        }

        this.changeInfo = this.changeInfo.bind(this);
        this.register = this.register.bind(this);
    }

    changeInfo(prop, val) {
        this.setState({
            [prop]: val
        });
    }

    register(e) {
        e && e.preventDefault();
        const { username, password, confirm, email, phone } = this.state;
        console.log({ username, password, confirm, email, phone });
    }

    render() {
        const { changeTab } = this.props;
        const { username, password, confirm, email, phone } = this.state;

        return (
            <div onSubmit={e => this.register(e)} className="ContainerTab">
                <form className="boxes">
                    <div className="box-tab register active">
                        <InputForm tabIndex={1} value={username} onChange={(val) => this.changeInfo('username', val)} label="username" placeholder="quangdatpham" />
                        <InputForm tabIndex={2} value={password} onChange={(val) => this.changeInfo('password', val)} label="password" type="password" placeholder="************" />
                        <InputForm tabIndex={3} value={confirm} onChange={(val) => this.changeInfo('confirm', val)} label="confirm" type="password" placeholder="************" />
                    </div>
                    <div className="box-tab information">
                        <InputForm tabIndex={4} value={email} onChange={(val) => this.changeInfo('email', val)} label="email" placeholder="quangdat2000.pham@gmail.com" />
                        <InputForm tabIndex={5} value={phone} onChange={(val) => this.changeInfo('phone', val)} label="phone" placeholder="0383545450" />
                    </div>
                    <div className="box-tab verify">
                        <p>
                            Check your email inbox to verify.
                        </p>
                    </div>
                </form>
                <div className="wrap-next-btn">
                    {
                        this.props.currentTab === 1
                        ? <ButtonPrimary handleClick={() => {this.register(); changeTab(null, 'next')}}>Register</ButtonPrimary>
                        : this.props.currentTab === 2
                        ? <Link to='/'><ButtonPrimary>Home</ButtonPrimary></Link>
                        : <ButtonPrimary handleClick={() => changeTab(null, 'next')} >Next</ButtonPrimary>
                    }
                </div>
            </div>
        );
    }
}
