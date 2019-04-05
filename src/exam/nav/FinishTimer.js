import React from 'react';
import { Link } from 'react-router-dom';

import './FinishTimer.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';

export default function FinishTimer(props) {
    return (
        <div className="FinishTimer">
            <div className="finish">
                <Link to="/dashboard/student"><ButtonPrimary>Finish attempt</ButtonPrimary></Link>
            </div>
            <span className="timer">12 : 26</span>
        </div>
    );
}
