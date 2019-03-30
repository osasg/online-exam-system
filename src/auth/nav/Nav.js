import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function () {
    return (
        <div className="Nav">
            <Link to="/">
                <div className="brand">
                    <span className="logo">EX</span>
                    <span className="name">Examiner</span>
                </div>
            </Link>
        </div>
    );
}