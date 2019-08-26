import React from 'react';
import { Route } from 'react-router-dom';

import './LeftNavigator.css';
import StudentControlGroup from './StudentControlGroup';
import TeacherControlGroup from './TeacherControlGroup';
import Hamburger from '../../../assets/icons/hamburger.png';
import Home from '../../../assets/icons/home.png';
import { Link } from 'react-router-dom';

function LeftNavigator() {
    return (
        <div className="LeftNavigator">
            <div className="navigator">
                <div className="home">
                    <Link to="/"><img className="icon" src={Home} alt="home"></img></Link>
                </div>

                <div className="control-group-container" onClick={closeMenu}>
                    <Route path="/dashboard/student" component={StudentControlGroup}/>
                    <Route path="/dashboard/teacher" component={TeacherControlGroup}/>
                </div>

                <div className="settings">
                    <div className="icon"></div>
                </div>
            </div>
            <div className="hamburger close">
                <img onClick={toggleHamburger} className="icon" src={Hamburger} alt="hamburger" />
            </div>
        </div>
    );
}

function toggleHamburger() {
    const navigator = document.querySelector('.navigator');

    navigator.classList.toggle('open');
}

function closeMenu() {
    const navigator = document.querySelector('.navigator');

    navigator.classList.remove('open');
}

export default LeftNavigator;