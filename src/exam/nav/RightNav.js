import React from 'react';
import { Link } from 'react-router-dom';

import './RightNav.css';
import Single from '../../icons/single.svg';
import Multi from '../../icons/multi.svg';
import Overview from '../../icons/overview.svg';

export default function () {
    return (
        <div className="RightNav">
            <div className="avatar"></div>
            <div className="management">
                <Link to="/exam/single-question"><img src={Single} alt="single"></img></Link>
                <Link to="/exam/multi-question"><img src={Multi} alt="multi"></img></Link>
                <Link to="/exam/overview"><img src={Overview} alt="overview"></img></Link>
            </div>
        </div>
    );
}