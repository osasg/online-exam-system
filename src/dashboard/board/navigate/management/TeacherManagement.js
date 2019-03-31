import React from 'react';

import './Management.css';

import Manager from '../../../../icons/teacher.png';
import Question from '../../../../icons/question.png';

export default function (props) {
    const { changeTask } = props;
    return (
        <div className="TeacherManagement">
            <div className="mana">
                <div className="m" onClick={() => changeTask(0)}>
                    <img  src={Manager} alt="manager" />
                </div>
                <div className="m" onClick={() => changeTask(1)}>
                    <img src={Question} alt="Question" />
                </div>
            </div>
        </div>
    );
}