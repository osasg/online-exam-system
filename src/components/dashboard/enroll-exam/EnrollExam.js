import React from 'react';

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

export default EnrollExam;