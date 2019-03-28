import React from 'react';

import './StudentMode.css';
import ButtonPrimary from '../../../buttons/ButtonPrimary';

function StudentMode(props) {
    const { teacher, participants } = props;

    return (
        <div className="StudentMode">
            <div className="attempt">
                <ButtonPrimary>Attempt now</ButtonPrimary>
            </div>
            <div className="participants">{participants} participants</div>
            <div className="teacher">{teacher}</div>
        </div>
    );
}

export default StudentMode;