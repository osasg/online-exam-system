import React from 'react';

import './RightNavigateBar.css';

function RightNavigateBar() {
    return (
        <div className="RightNavigateBar">
            <div className="navigator">
                <div className="home">
                    <div className="icon"></div>
                </div>
                <div className="management">
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
                <div className="settings">
                    <div className="icon"></div>
                </div>
            </div>
            <div className="icon hambuger"></div>
        </div>
    );
}

export default RightNavigateBar;