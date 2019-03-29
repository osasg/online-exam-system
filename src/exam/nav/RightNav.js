import React from 'react';

import './RightNav.css';
import Single from '../../icons/single.svg';
import Multi from '../../icons/multi.svg';

export default function () {
    return (
        <div className="RightNav">
            <div className="avatar"></div>
            <div className="management">
                <img src={Single} alt="single"></img>
                <img src={Multi} alt="multi"></img>
            </div>
        </div>
    );
}