import React from 'react';

import './ExamList.css';
import Exam from '../exam/Exam';

export default function (props) {
    const { examList } = props;
    return (
        <div className="ExamList">
            {examList.map(({name, subject, duedate, duration, description, participants, teacher}) => 
                <div className="item">
                    <Exam
                        name={name}
                        subject={subject}
                        duedate={duedate}
                        duration={duration}
                        description={description}
                        participants={participants}
                        teacher={teacher}
                    />
                </div>
            )}
        </div>
    );
}