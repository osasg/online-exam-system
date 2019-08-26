import React from 'react';

import './ExamList.css';
import Exam from '../../board/exam/Exam';
import TeacherMode from '../../board/exam/exam-mode/TeacherMode';
import { TeacherConsumer } from '../../../../context/TeacherContext';

export default function (props) {
    return (
        <div className="ExamList">
            <TeacherConsumer>
                {({ examList }) => examList.map(
                    ({ name, subject, duedate, duration, description, participants }, i) => 
                        <div className="item" key = {i}>
                            <Exam
                                name={name}
                                subject={subject}
                                duedate={duedate}
                                duration={duration}
                                description={description}
                            >
                                {<TeacherMode participants={participants}></TeacherMode>}
                            </Exam>
                        </div>
                )}
            </TeacherConsumer>
        </div>
    );
}