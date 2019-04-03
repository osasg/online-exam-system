import React from 'react';

import './TeacherDashboard.css';

import Board from '../../board/page/Board';
import { TeacherProvider } from '../../../context/TeacherContext';

function TeacherDashboard() {
    return (
        <div className="TeacherDashboard">
            <TeacherProvider>
                <Board></Board>
            </TeacherProvider>
        </div>
    );
}

export default TeacherDashboard;