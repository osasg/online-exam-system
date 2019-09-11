import React from 'react';

import './ExamList.css';
import EnrollExam from '../../enroll-exam/EnrollExam';
import TeacherMode from '../../enroll-exam/exam-mode/TeacherMode';
import { TeacherConsumer } from '../../../../context/TeacherContext';

export default function (props) {
    return (
        <div className="ExamList">
            <TeacherConsumer>
                {({ examList }) => examList.map(
                    ({ name, subject, duedate, duration, description, participants }, i) => 
                        <div className="item" key = {i}>
                            <EnrollExam
                                name={name}
                                subject={subject}
                                duedate={duedate}
                                duration={duration}
                                description={description}
                            >
                                {<TeacherMode participants={participants}></TeacherMode>}
                            </EnrollExam>
                        </div>
                )}
            </TeacherConsumer>
        </div>
    );
}