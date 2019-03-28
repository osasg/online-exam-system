import React from 'react';

import './RightNavigateBar.css';
import StudentManagement from '../student-group/StudentManagement';
import TeacherManagement from '../teacher-group/TeacherManagement';

function RightNavigateBar(props) {
    const { isTeacher, changeTask } = props;
    let management;
    if (isTeacher)
        management = <TeacherManagement changeTask={changeTask}></TeacherManagement> ;
    else
        management = <StudentManagement changeTask={changeTask}></StudentManagement>;

    return (
        <div className="RightNavigateBar">
            <div className="navigator">
                <div className="home">
                    <div className="icon"></div>
                </div>

                <div className="management">{management}</div>

                <div className="settings">
                    <div className="icon"></div>
                </div>
            </div>
            <div className="hambuger">
                <div className="icon"></div>
            </div>
        </div>
    );
}

export default RightNavigateBar;