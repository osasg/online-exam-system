import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

import ControlTab from '../../../components/auth/ControlTab';
import Nav from '../../../components/auth/Nav';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import InputForm from '../../../components/form/InputForm';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [ 'signup', 'information', 'verify' ],
            currentTab: 0,
            info: {
                username: '',
                password: '',
                confirm: '',
                email: '',
                phone: ''
            }
        };

        this.changeInfo = this.changeInfo.bind(this);
        this.signUp = this.signUp.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(tabName, next) {
        const { currentTab, tabs } = this.state;
        if (next === 'next') {
            tabName = tabs[(currentTab + 1) % tabs.length];
        }

        const activeBoxTab = document.querySelector(`.box-tab.active`);
        const activeTab = document.querySelector(`.tab.active`);
        const boxTab = document.querySelector(`.box-tab.${tabName}`);
        const tab = document.querySelector(`.tab.${tabName}`);
        
        activeBoxTab.classList.remove('active');
        activeTab.classList.remove('active');

        boxTab.classList.add('active');
        tab.classList.add('active');

        this.setState({
            currentTab: parseInt(tab.dataset.tabNumber)
        });
    }

    changeInfo(prop, val) {
        this.setState({
            info: { [prop]: val }
        });
    }

    signUp(e) {
        e && e.preventDefault();
        const { username, password, confirm, email, phone } = this.state.info;
        
        console.log({ username, password, confirm, email, phone });
    }

    render() {
        const { currentTab } = this.state;
        const { username, password, confirm, email, phone } = this.state.info;

        return (
            <div className="Register">
                <Nav></Nav>
                <div className="form-container">
                    <div className="form-navigate">
                        <ControlTab changeTab={this.changeTab}/>
                    </div>
                    <div className="form-content">
                        <form className="boxes" onSubmit={e => this.register(e)}>
                            <div className="box-tab register active">
                                <InputForm
                                    tabIndex={1}
                                    value={username}
                                    onChange={(val) => this.changeInfo('username', val)}
                                    label="username"
                                    placeholder="quangdatpham" />
                                <InputForm
                                    tabIndex={2}
                                    value={password}
                                    onChange={(val) => this.changeInfo('password', val)}
                                    label="password"
                                    type="password"
                                    placeholder="************" />
                                <InputForm
                                    tabIndex={3}
                                    value={confirm}
                                    onChange={(val) => this.changeInfo('confirm', val)}
                                    label="confirm"
                                    type="password"
                                    placeholder="************" />
                            </div>
                            <div className="box-tab information">
                                <InputForm
                                    tabIndex={4}
                                    value={email}
                                    onChange={(val) => this.changeInfo('email', val)}
                                    label="email"
                                    placeholder="quangdat2000.pham@gmail.com" />
                                <InputForm
                                    tabIndex={5}
                                    value={phone}
                                    onChange={(val) => this.changeInfo('phone', val)}
                                    label="phone"
                                    placeholder="0383545450" />
                            </div>
                            <div className="box-tab verify">
                                <p>
                                    Check your email inbox to verify.
                                </p>
                            </div>
                        </form>
                        <div className="wrap-next-btn">
                            {
                                (function () {
                                    if (currentTab === 1)
                                        return <ButtonPrimary handleClick={() => {this.register(); this.changeTab(null, 'next')}}>Register</ButtonPrimary>
                                    else if (currentTab === 2)
                                        return <Link to='/'><ButtonPrimary>Home</ButtonPrimary></Link>
                                    else
                                        return <ButtonPrimary handleClick={() => this.changeTab(null, 'next')} >Next</ButtonPrimary>
                                })()
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
