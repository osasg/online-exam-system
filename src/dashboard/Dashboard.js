import React from 'react';

import './Dashboard.css';

import StudentDashboard from './student/StudentDashboard';
import UserLogin from './UserLogin';

function Dashboard() {
    return (
        <div className="Dashboard">
            <StudentDashboard />
            <UserLogin />
        </div>
    );
}

export default Dashboard;