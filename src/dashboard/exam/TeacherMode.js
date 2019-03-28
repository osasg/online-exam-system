import React from 'react';

import './TeacherMode.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import BWButton from '../../buttons/BWButton';

function TeacherMode(props) {
    const { participants } = props;

    return (
        <div className="TeacherMode">
            <div className="do">
                <ButtonPrimary>Start</ButtonPrimary>
                <BWButton>Edit</BWButton>
                <BWButton>Cancel</BWButton>
            </div>
            <div className="participants">{participants} participants</div>
        </div>
    );
}

export default TeacherMode;