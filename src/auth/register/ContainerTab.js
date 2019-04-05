import React, { Component } from 'react';

import './ContainerTab.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import InputForm from '../../form/InputForm';

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
    }

    changeInfo(prop, val) {
        this.setState({
            [prop]: val
        });
    }

    render() {
        const { changeTab } = this.props;
        const { username, password, confirm, email, phone } = this.state;

        return (
            <div className="ContainerTab">
                <div className="boxes">
                    <div className="box-tab register active">
                        <InputForm value={username} onChange={(val) => this.changeInfo('username', val)} label="username" placeholder="quangdatpham" />
                        <InputForm value={password} onChange={(val) => this.changeInfo('password', val)} label="password" type="password" placeholder="************" />
                        <InputForm value={confirm} onChange={(val) => this.changeInfo('confirm', val)} label="confirm" type="password" placeholder="************" />
                    </div>
                    <div className="box-tab information">
                        <InputForm value={email} onChange={(val) => this.changeInfo('email', val)} label="email" placeholder="quangdat2000.pham@gmail.com" />
                        <InputForm value={phone} onChange={(val) => this.changeInfo('phone', val)} label="phone" placeholder="0383545450" />
                    </div>
                    <div className="box-tab verify">
                        <p>
                            Check your email inbox to verify.
                        </p>
                    </div>
                </div>
                <div className="wrap-next-btn">
                    <ButtonPrimary handleClick={() => changeTab(null, 'next')} >Next</ButtonPrimary>
                </div>
            </div>
        );
    }
}