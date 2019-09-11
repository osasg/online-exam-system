import React from 'react';

import './StudentDashboard.css';

import MainBoard from '../mainboard/MainBoard';
import { StudentProvider } from '../../../context/StudentContext';


function StudentDashboard() {
    return (
        <div className="StudentDashboard">
            <StudentProvider>
                <MainBoard></MainBoard>
            </StudentProvider>
        </div>
    );
}

export default StudentDashboard;