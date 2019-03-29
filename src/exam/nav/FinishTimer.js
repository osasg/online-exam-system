import React from 'react';

import './FinishTimer.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';

export default function (props) {
    return (
        <div className="FinishTimer">
            <div className="finish">
                <ButtonPrimary>Finish attempt</ButtonPrimary>
            </div>
            <span className="timer">12 : 26</span>
        </div>
    );
}
