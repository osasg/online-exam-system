import React from 'react';
import { Route } from 'react-router-dom';

import './Dashboard.css';

import StudentDashboard from './student/StudentDashboard';
import TeacherDashboard from './teacher/TeacherDashboard';

import UserLogin from '../../components/dashboard/user-login/UserLogin';
import TopNav from '../../components/dashboard/mobile-nav/TopNav';

function Dashboard() {
    return (
        <div className="Dashboard">
            <TopNav />
            <Route path="/dashboard/student" component={StudentDashboard} />
            <Route path="/dashboard/teacher" component={TeacherDashboard} />
            <UserLogin avatarSrc="" fullname="Quang Dat Pham" />
        </div>
    );
}

export default Dashboard;
