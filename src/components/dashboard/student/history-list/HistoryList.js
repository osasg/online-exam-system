import React from 'react';

import './HistoryList.css';
import Exam from '../../board/exam/Exam';
import HistoryMode from '../../board/exam/exam-mode/HistoryMode';
import { StudentConsumer } from '../../../../context/StudentContext';

export default function () {
    return (
        <div className="HistoryList">
            <StudentConsumer>
                {({ historyList }) => historyList.map(
                    ({name, subject, duedate, duration, description, participants, teacher, score}, i) => 
                        <div className="item" key = {i}>
                            <Exam
                                name={name}
                                subject={subject}
                                duedate={duedate}
                                duration={duration}
                                description={description}
                            >
                                <HistoryMode score={score} teacher={teacher}></HistoryMode>
                            </Exam>
                        </div>
                )}
            </StudentConsumer>
        </div>
    );
}