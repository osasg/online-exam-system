import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';
import BelowIcon from '../icons/below.png';

export default function () {
    return (
        <div className="Banner">
            <div className="menubar">
                <div className="brand">
                    <span className="logo">IC</span>
                    <span className="name">Examiner</span>
                </div>
                <div className="login">
                    <Link to="login">Login</Link>
                </div>
            </div>
            <div className="Banner-wrap">
                <p className="Banner-head">The best way to taking online exam</p>
                <p className="Banner-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
text of the printing and typesetting industry.
                </p>
            </div>
            <div className="see-below">
                <img src={BelowIcon} alt="See below" />
            </div>
        </div>
    );
}