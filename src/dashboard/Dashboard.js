import React from 'react';
import { Route } from 'react-router-dom';

import './Dashboard.css';

import StudentDashboard from './student/page/StudentDashboard';
import UserLogin from './board/navigate/UserLogin';
import TopNav from './board/navigate/mobile/TopNav';
import TeacherDashboard from './teacher/page/TeacherDashboard';

function Dashboard() {
    return (
        <div className="Dashboard">
            <TopNav />
            <Route path="/dashboard/student" component={StudentDashboard} />
            <Route path="/dashboard/teacher" component={TeacherDashboard} />
            <UserLogin avatarSrc="" fullName="Quang Dat Pham" />
        </div>
    );
}

export default Dashboard;