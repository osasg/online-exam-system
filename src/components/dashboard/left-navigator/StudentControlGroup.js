import React from 'react';
import { Link } from 'react-router-dom';

import './ControlGroup.css';

import Manager from '../../../assets/icons/teacher.png';
import History from '../../../assets/icons/history.png';

export default function StudentControlGroup() {
    return (
        <div className="StudentControlGroup">
            <div className="mana">
                <Link to="/dashboard/student">
                    <div className="m">
                        <img  src={Manager} alt="manager" />
                    </div>
                </Link>
                <Link to="/dashboard/student/history">
                    <div className="m">
                        <img src={History} alt="History" />
                    </div>
                </Link>
            </div>
        </div>
    );
}