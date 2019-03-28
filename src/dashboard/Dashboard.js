import React from 'react';
import { Route } from 'react-router-dom';

import './Dashboard.css';

import StudentDashboard from './student/StudentDashboard';
import UserLogin from './UserLogin';
import TopNav from './mobile/TopNav';
import TeacherDashboard from './teacher/TeacherDashboard';

function Dashboard() {
    return (
        <div className="Dashboard">
            <TopNav />
            <Route path="/dashboard/student" exact component={StudentDashboard} />
            <Route path="/dashboard/teacher" exact component={TeacherDashboard} />
            <UserLogin avatarSrc="" fullName="Quang Dat Pham" />
        </div>
    );
}

export default Dashboard;