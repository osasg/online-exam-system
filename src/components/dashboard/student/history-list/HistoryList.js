import React from 'react';

import './HistoryList.css';
import EnrollExam from '../../enroll-exam/EnrollExam';
import HistoryMode from '../../enroll-exam/exam-mode/HistoryMode';
import { StudentConsumer } from '../../../../context/StudentContext';

export default function () {
    return (
        <div className="HistoryList">
            <StudentConsumer>
                {({ historyList }) => historyList.map(
                    ({name, subject, duedate, duration, description, participants, teacher, score}, i) => 
                        <div className="item" key = {i}>
                            <EnrollExam
                                name={name}
                                subject={subject}
                                duedate={duedate}
                                duration={duration}
                                description={description}
                            >
                                <HistoryMode score={score} teacher={teacher}></HistoryMode>
                            </EnrollExam>
                        </div>
                )}
            </StudentConsumer>
        </div>
    );
}