import React from 'react';

import './ExamList.css';
import Exam from '../exam/Exam';
import StudentMode from '../exam/exam-mode/StudentMode';
import TeacherMode from '../exam/exam-mode/TeacherMode';

export default function (props) {
    const { examList } = props;
    return (
        <div className="ExamList">
            {examList.map(({name, subject, duedate, duration, description, participants, teacher}, i) => 
                <div className="item" key = {i}>
                    <Exam
                        name={name}
                        subject={subject}
                        duedate={duedate}
                        duration={duration}
                        description={description}
                    >
                        {
                            teacher ? 
                            <StudentMode participants={participants} teacher={teacher}></StudentMode> :
                            <TeacherMode participants={participants}></TeacherMode>
                        }
                    </Exam>
                </div>
            )}
        </div>
    );
}