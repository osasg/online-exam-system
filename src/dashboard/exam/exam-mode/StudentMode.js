import React from 'react';
import { Link } from 'react-router-dom';

import './StudentMode.css';
import ButtonPrimary from '../../../buttons/ButtonPrimary';

function StudentMode(props) {
    const { teacher, participants } = props;

    return (
        <div className="StudentMode">
            <div className="attempt">
                <Link to="/exam/single-question"><ButtonPrimary>Attempt now</ButtonPrimary></Link>
            </div>
            <div className="participants">{participants} participants</div>
            <div className="teacher">{teacher}</div>
        </div>
    );
}

export default StudentMode;