import React, { Component } from 'react';

import './StudentDashboard.css';

import Board from '../board/Board';

class StudentDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            student: {},
            examList: [
                {name: "Sketch Prototyping",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23",
                teacher: "Node"},
                {name: "Express",
                subject: "NodeJS",
                duedate: "Mar 12, 2019",
                duration: "60 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "13",
                teacher: "Master Node"},
                {name: "Sketch Prototyping",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "30 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23",
                teacher: "Master"}
            ],
            historyList: [
                {name: "History",
                subject: "Java",
                duedate: "Mar 12, 2019",
                duration: "50 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "73",
                score: "12/15",
                teacher: "MMM"},
                {name: "History",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23",
                score: "18/30",
                teacher: "Node"},
                {name: "History",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23",
                score: "100/100",
                teacher: "Master Node"}
            ]
        };
    }

    render() {
        return (
            <div className="StudentDashboard">
                <Board examList={this.state.examList} historyList={this.state.historyList}></Board>
            </div>
        );
    }
}

export default StudentDashboard;