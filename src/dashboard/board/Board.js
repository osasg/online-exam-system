import React, { Component } from 'react';

import './Board.css';
import ExamList from './list-group/ExamList';
import Boarding from './Boarding';
import LeftNavigateBar from './navigate/LeftNavigateBar';
import HistoryList from './list-group/HistoryList';
import Questioning from './questioning/Questioning';

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
        const current = isTeacher ? teacherTask[currentTask] : studentTask[currentTask];
        let task, boardClass = 'Board';

        switch (current) {
            case 'manage':
                task = <ExamList examList={examList}></ExamList>;
                break;
            case 'questioning':
                task = <Questioning></Questioning>;
                boardClass += ' task-questioning';
                break;
            case 'history':
                task = <HistoryList historyList={historyList}></HistoryList>;
                break;
            default:
                task = 'Not found any task';
        }
        return (
            <div className={boardClass}>
                <LeftNavigateBar changeTask={this.changeTask} isTeacher={isTeacher}></LeftNavigateBar>
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