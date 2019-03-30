import React from 'react';

import './FinishTimerBox.css';
import FinishTimer from './FinishTimer';

export default function () {
    return (
        <div className="FinishTimerBox">
            <div className="finish-timer-wrap">
                <FinishTimer></FinishTimer>
            </div>
        </div>
    );
}