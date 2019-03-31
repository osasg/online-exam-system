import React from 'react';
import { Link } from 'react-router-dom';

import './Management.css';

import Manager from '../../../../icons/teacher.png';
import History from '../../../../icons/history.png';

export default function () {
    return (
        <div className="StudentManagement">
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