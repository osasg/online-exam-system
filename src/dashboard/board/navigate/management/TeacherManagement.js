import React from 'react';
import { Link } from 'react-router-dom';

import './Management.css';

import Manager from '../../../../icons/teacher.png';
import Question from '../../../../icons/question.png';

export default function () {
    return (
        <div className="TeacherManagement">
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