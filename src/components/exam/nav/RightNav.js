import React from 'react';
import { Link } from 'react-router-dom';

import './RightNav.css';
import Single from '../../../assets/icons/single.svg';
import Multi from '../../../assets/icons/multi.svg';
import Overview from '../../../assets/icons/overview.svg';
import QA from '../../../assets/icons/q-a.svg';

export default function RightNav() {
    return (
        <div className="RightNav">
            <div className="avatar"></div>
            <div className="control-group">
                <Link to="/exam/single-question"><img src={Single} alt="single"></img></Link>
                <Link to="/exam/multi-question"><img src={Multi} alt="multi"></img></Link>
                <Link to="/exam/question-answer"><img src={QA} alt="q-a"/></Link>
                <Link to="/exam/overview"><img src={Overview} alt="overview"></img></Link>
            </div>
        </div>
    );
}