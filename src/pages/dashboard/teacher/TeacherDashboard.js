import React from 'react';

import './TeacherDashboard.css';

import MainBoard from '../mainboard/MainBoard';
import { TeacherProvider } from '../../../context/TeacherContext';

function TeacherDashboard() {
    return (
        <div className="TeacherDashboard">
            <TeacherProvider>
                <MainBoard></MainBoard>
            </TeacherProvider>
        </div>
    );
}

export default TeacherDashboard;