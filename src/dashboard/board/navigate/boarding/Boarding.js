import React from 'react';
import { Route } from 'react-router-dom';

import BWButtonBorder from '../../../../buttons/BWButtonBorder';

export default function (props) {
    const teacherBoarding = function () {
        return (
            <div className="teacher-boarding">
                <BWButtonBorder>Save</BWButtonBorder>
            </div>
        );
    }

    const studentBoarding = function () {
        return (
            <div className="student-boarding">
                <BWButtonBorder>New enroll</BWButtonBorder>
            </div>
        );
    }

    return (
        <div className="Boarding">
            <Route path="/dashboard/teacher" component={teacherBoarding}/>
            <Route path="/dashboard/student" component={studentBoarding}/>
        </div>
    );
}