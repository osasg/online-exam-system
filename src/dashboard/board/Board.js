import React from 'react';
import { Route } from 'react-router-dom';

import './Board.css';
import ExamList from './list-group/ExamList';
import Boarding from './navigate/boarding/Boarding';
import LeftNavigateBar from './navigate/LeftNavigateBar';
import HistoryList from './list-group/HistoryList';
import Questioning from './questioning/Questioning';

function Board() {
    return (
        <div className="Board">
            <div className="board-container">
                <LeftNavigateBar></LeftNavigateBar>
                <div className="boarding-wrap">
                    <Boarding></Boarding>
                </div>
                <div className="task-wrap">
                    <Route path="/dashboard/student" exact component={ExamList}/>
                    <Route path="/dashboard/student/history" exact component={HistoryList}/>
                    <Route path="/dashboard/teacher" exact component={ExamList}/>
                    <Route path="/dashboard/teacher/questioning" exact component={Questioning}></Route>
                </div>
            </div>
        </div>
    );
}

export default Board;