import React from 'react';

import './StudentDashboard.css';

import Board from '../../../components/dashboard/board/page/Board';
import { StudentProvider } from '../../../context/StudentContext';


function StudentDashboard() {
    return (
        <div className="StudentDashboard">
            <StudentProvider>
                <Board></Board>
            </StudentProvider>
        </div>
    );
}

export default StudentDashboard;