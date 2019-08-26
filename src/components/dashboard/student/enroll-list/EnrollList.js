import React from 'react';

import './EnrollList.css';
import EnrollExam from '../../enroll-exam/EnrollExam';
import StudentMode from '../../enroll-exam/exam-mode/StudentMode';
import { StudentConsumer } from '../../../../context/StudentContext';

export default function (props) {
    return (
        <div className="EnrollList">
            <StudentConsumer>
                {({ enrollList }) => enrollList.map(
                    ({ name, subject, duedate, duration, description, participants, teacher }, i) => 
                        <div className="item" key = {i}>
                            <EnrollExam
                                name={name}
                                subject={subject}
                                duedate={duedate}
                                duration={duration}
                                description={description}
                            >
                                {<StudentMode participants={participants} teacher={teacher}></StudentMode>}
                            </EnrollExam>
                        </div>
                )}
            </StudentConsumer>
        </div>
    );
}