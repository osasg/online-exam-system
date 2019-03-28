import React from 'react';

import './Boarding.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import BWButtonBorder from '../../buttons/BWButtonBorder';

export default function (props) {
    const { isTeacher } = props;
    let newDo;
    if (isTeacher) 
        newDo = <ButtonPrimary>New enroll</ButtonPrimary>;
    else
        newDo = <BWButtonBorder>New Exam</BWButtonBorder>
    return (
        <div className="Boarding">
            <div className="do">
                {newDo}
            </div>
            <div className="filter">
                Teacher
            </div>
            <div className="filter">
                Student
            </div>
        </div>
    );
}