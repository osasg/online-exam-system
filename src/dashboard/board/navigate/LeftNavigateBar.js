import React from 'react';

import './LeftNavigateBar.css';
import StudentManagement from '../student-group/StudentManagement';
import TeacherManagement from '../teacher-group/TeacherManagement';
import Hamburger from '../../../icons/hamburger.png';
import Home from '../../../icons/home.png';
import { Link } from 'react-router-dom';

function LeftNavigateBar(props) {
    const { isTeacher, changeTask } = props;
    let management;
    if (isTeacher)
        management = <TeacherManagement changeTask={(t) => {changeTask(t); closeMenu();}}></TeacherManagement> ;
    else
        management = <StudentManagement changeTask={(t) => {changeTask(t); closeMenu();}}></StudentManagement>;

    return (
        <div className="LeftNavigateBar">
            <div className="navigator">
                <div className="home">
                    <Link to="/"><img className="icon" src={Home} alt="home"></img></Link>
                </div>

                <div className="management">{management}</div>

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