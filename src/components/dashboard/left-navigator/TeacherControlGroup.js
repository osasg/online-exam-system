import React from 'react';
import { Link } from 'react-router-dom';

import './ControlGroup.css';

import Manager from '../../../assets/icons/teacher.png';
import Question from '../../../assets/icons/question.png';

export default function TeacherControlGroup() {
    return (
        <div className="TeacherControlGroup">
            <div className="mana">
                <Link to="/dashboard/teacher">
                    <div className="m">
                        <img  src={Manager} alt="manager" />
                    </div>
                </Link>
                <Link to="/dashboard/teacher/questioning">
                    <div className="m">
                        <img src={Question} alt="Question" />
                    </div>
                </Link>
            </div>
        </div>
    );
}