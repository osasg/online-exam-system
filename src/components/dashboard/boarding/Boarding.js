import React from 'react';
import { Route } from 'react-router-dom';

import TeacherBoarding from './Teacherboarding';
import StudentBoarding from './StudentBoarding';

export default function Boarding() {
    return (
        <div className="Boarding">
            <Route path="/dashboard/teacher" component={TeacherBoarding}/>
            <Route path="/dashboard/student" component={StudentBoarding}/>
        </div>
    );
}

Boarding.propTypes = {}
