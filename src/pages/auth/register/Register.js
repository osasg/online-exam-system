import React, { Component } from 'react';

import './Register.css';

import ControlTab from '../../../components/auth/ControlTab';
import ContainerTab from '../../../components/auth/ContainerTab';
import Nav from '../../../components/auth/Nav';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [ 'register', 'information', 'verify' ],
            currentTab: 0
        };
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

    render() {
        return (
            <div className="Register">
                <Nav></Nav>
                <div className="form-container">
                    <div className="form-navigate">
                        <ControlTab changeTab={this.changeTab}/>
                    </div>
                    <div className="form-content">
                        <ContainerTab currentTab={this.state.currentTab} changeTab={this.changeTab} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;