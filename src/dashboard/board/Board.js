import React, { Component } from 'react';

import './Board.css';
import ExamList from './list-group/ExamList';
import Boarding from './Boarding';
import RightNavigateBar from './navigate/RightNavigateBar';
import HistoryList from './list-group/HistoryList';

const teacherTask = [ 'manage', 'questioning' ];
const studentTask = [ 'manage', 'history' ];

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTask: 0
        }

        this.changeTask = this.changeTask.bind(this);
    }

    changeTask(task) {
        console.log(task);
        this.setState({
            currentTask: task
        });
    }

    render() {
        const { examList, isTeacher, historyList } = this.props;
        const { currentTask } = this.state;
        let task;

        switch (isTeacher ? teacherTask[currentTask] : studentTask[currentTask]) {
            case 'manage':
                task = <ExamList examList={examList}></ExamList>;
                break;
            case 'questioning':
                task = 'Questioning';
                break;
            case 'history':
                task = <HistoryList historyList={historyList}></HistoryList>;
                break;
            default:
                task = 'Not found task';
        }
        return (
            <div className="Board">
                <RightNavigateBar changeTask={this.changeTask} isTeacher={isTeacher}></RightNavigateBar>
                <div className="boarding-wrap">
                    <Boarding isTeacher={isTeacher}></Boarding>
                </div>
                <div className="task-wrap">
                    {task}
                </div>
            </div>
        );
    }
}

export default Board;