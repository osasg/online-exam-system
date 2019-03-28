import React, { Component } from 'react';

import './TeacherDashboard.css';

import Board from '../board/Board';

class TeacherDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            examList: [
                {name: "Sketch Prototyping",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23"},
                {name: "Sketch Prototyping",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23"},
                {name: "Sketch Prototyping",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23"}
            ]
        };
    }

    render() {
        return (
            <div className="TeacherDashboard">
                <Board
                    isTeacher={true}
                    examList={this.state.examList}>
                </Board>
            </div>
        );
    }
}

export default TeacherDashboard;