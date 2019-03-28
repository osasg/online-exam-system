import React from 'react';

import './HistoryList.css';
import Exam from '../../exam/Exam';
import HistoryMode from '../../exam/exam-mode/HistoryMode';

export default function (props) {
    const { historyList } = props;
    return (
        <div className="HistoryList">
            {historyList.map(({name, subject, duedate, duration, description, participants, teacher, score}, i) => 
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
        </div>
    );
}