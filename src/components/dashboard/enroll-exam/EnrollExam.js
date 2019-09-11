import React from 'react';
import PropTypes from 'prop-types';

import './EnrollExam.css';

function EnrollExam(props) {
    const {
        name,
        subject, 
        duedate, 
        duration, 
        description, 
    } = props;

    return (
        <div className="EnrollExam">
            <div className="name">{name}</div>
            <div className="information">
                {[subject, duedate, duration].join(' -- ')}
            </div>
            <div className="description">{description}</div>
            <div className="bottom">
                {props.children}
            </div>
        </div>
    );
}

EnrollExam.propTypes = {
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    duedate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default EnrollExam;
