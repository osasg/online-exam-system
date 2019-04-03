import React from 'react';
import { Route } from 'react-router-dom';

import './Board.css';
import EnrollList from '../../student/enroll-list/EnrollList';
import ExamList from '../../teacher/exam-list/ExamList';
import Boarding from '../navigate/boarding/Boarding';
import LeftNavigateBar from '../navigate/LeftNavigateBar';
import HistoryList from '../../student/history-list/HistoryList';
import Questioning from '../../teacher/questioning/Questioning';

function Board() {
    return (
        <div className="Board">
            <div className="board-container">
                <LeftNavigateBar></LeftNavigateBar>
                <div className="boarding-wrap">
                    <Boarding></Boarding>
                </div>
                <div className="task-wrap">
                    <Route path="/dashboard/student" exact component={EnrollList}/>
                    <Route path="/dashboard/student/history" exact component={HistoryList}/>
                    <Route path="/dashboard/teacher" exact component={ExamList}/>
                    <Route path="/dashboard/teacher/questioning" exact component={Questioning}></Route>
                </div>
            </div>
        </div>
    );
}

export default Board;