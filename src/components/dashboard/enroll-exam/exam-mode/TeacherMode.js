import React from 'react';
import PropTypes from 'prop-types';

import './TeacherMode.css';
import ButtonPrimary from '../../../buttons/ButtonPrimary';
import BWButton from '../../../buttons/BWButton';

function TeacherMode(props) {
    const { participants } = props;

    return (
        <div className="TeacherMode">
            <div className="do">
                <ButtonPrimary handleClick={() => {}}>Start</ButtonPrimary>
                <BWButton handleClick={() => {}}>Edit</BWButton>
                <BWButton handleClick={() => {}}>Cancel</BWButton>
            </div>
            <div className="participants">{participants} participants</div>
        </div>
    );
}

TeacherMode.propTypes = {
    participants: PropTypes.number.isRequired
};

export default TeacherMode;
