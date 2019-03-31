import React from 'react';

import './HistoryList.css';
import Exam from '../exam/Exam';
import HistoryMode from '../exam/exam-mode/HistoryMode';

export default function () {
    const data = {
        name: "Sketch Prototyping",
        subject: "UI UX",
        duedate: "Mar 12, 2018",
        duration: "12 mins",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        participants: "23",
        teacher: "Node"
    };

    return (
        <div className="HistoryList">
            {[data, data, data].map(({name, subject, duedate, duration, description, participants, teacher, score}, i) => 
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