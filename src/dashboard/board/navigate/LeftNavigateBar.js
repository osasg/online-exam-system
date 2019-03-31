import React from 'react';
import { Route } from 'react-router-dom';

import './LeftNavigateBar.css';
import StudentManagement from './management/StudentManagement';
import TeacherManagement from './management/TeacherManagement';
import Hamburger from '../../../icons/hamburger.png';
import Home from '../../../icons/home.png';
import { Link } from 'react-router-dom';

function LeftNavigateBar() {
    return (
        <div className="LeftNavigateBar">
            <div className="navigator">
                <div className="home">
                    <Link to="/"><img className="icon" src={Home} alt="home"></img></Link>
                </div>

                <div className="management" onClick={closeMenu}>
                    <Route path="/dashboard/student" component={StudentManagement}/>
                    <Route path="/dashboard/teacher" component={TeacherManagement}/>
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

export default LeftNavigateBar;