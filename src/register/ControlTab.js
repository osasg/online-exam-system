import React from 'react';

import './ControlTab.css';

export default function (props) {
    const { changeTab } = props;

    return (
        <div className="ControlTab">
            <div className="control">
                <div onClick={() => changeTab('register')} className="tab register active" data-tab-number="0">Register</div>
                <div onClick={() => changeTab('information')} className="tab information" data-tab-number="1">Information</div>
                <div onClick={() => changeTab('verify')} className="tab verify" data-tab-number="2">Verify</div>
            </div>
        </div>
    );
}