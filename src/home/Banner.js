import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';
import BelowIcon from '../icons/below.png';

export default function () {
    return (
        <div className="Banner">
            <div className="menubar">
                <div className="brand">
                    <span className="logo">EX</span>
                    <span className="name">Examiner</span>
                </div>
                <div className="login">
                    <Link to="login">Login</Link>
                </div>
            </div>
            <div className="banner-container">
                <h1 className="head">Online Examing</h1>
                <p className="content">
                    The best way to taking online exam
                </p>
            </div>
            <div className="see-below">
                <img onClick={scrollDown} src={BelowIcon} alt="See below" />
            </div>
        </div>
    );
}

function scrollDown() {
    console.log('scroll');
    window.scroll(0, window.screen.availHeight);
}