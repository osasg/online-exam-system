import React, { Component } from 'react';

import './Exam.css';
import StudentMode from './StudentMode';
import TeacherMode from './TeacherMode';

class Exam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            participants: props.participants
        }
    }

    render() {
        const {
            name,
            subject, 
            duedate, 
            duration, 
            description, 
            teacher
        } = this.props;

        const { participants } = this.state;

        let toolsBar;
        if (teacher)
            toolsBar = <StudentMode participants={participants} teacher={teacher} ></StudentMode>;
        else 
            toolsBar = <TeacherMode participants={participants}></TeacherMode>;

        return (
            <div className="Exam">
                <div className="name">{name}</div>
                <div className="information">
                    {[subject, duedate, duration].join('-')}
                </div>
                <div className="description">{description}</div>
                <div className="bottom">
                    {toolsBar}
                </div>
            </div>
        );
    }
}

export default Exam;