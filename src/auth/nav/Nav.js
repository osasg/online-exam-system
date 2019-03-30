import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';
import BGNav from '../../images/bg-nav.png';

export default function () {

    const navStyle = {
        backgroundImage: `url(${BGNav})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    }
    return (
        <div className="Nav" style={navStyle}>
            <Link to="/">
                <div className="brand">
                    <span className="logo">EX</span>
                    <span className="name">Examiner</span>
                </div>
            </Link>
        </div>
    );
}