import React from 'react';

import './EnrollList.css';
import Exam from '../../board/exam/Exam';
import StudentMode from '../../board/exam/exam-mode/StudentMode';
import { StudentConsumer } from '../../../../context/StudentContext';

export default function (props) {
    return (
        <div className="EnrollList">
            <StudentConsumer>
                {({ enrollList }) => enrollList.map(
                    ({ name, subject, duedate, duration, description, participants, teacher }, i) => 
                        <div className="item" key = {i}>
                            <Exam
                                name={name}
                                subject={subject}
                                duedate={duedate}
                                duration={duration}
                                description={description}
                            >
                                {<StudentMode participants={participants} teacher={teacher}></StudentMode>}
                            </Exam>
                        </div>
                )}
            </StudentConsumer>
        </div>
    );
}