import React from 'react';

import './ExamList.css';
import Exam from '../exam/Exam';
import StudentMode from '../exam/exam-mode/StudentMode';
import TeacherMode from '../exam/exam-mode/TeacherMode';

export default function (props) {

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
        <div className="ExamList">
            {[data, data, data].map(({name, subject, duedate, duration, description, participants, teacher}, i) => 
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