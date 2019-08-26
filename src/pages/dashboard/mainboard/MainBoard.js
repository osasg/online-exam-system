import React from 'react';
import { Route } from 'react-router-dom';

import './MainBoard.css';
import EnrollList from '../../../components/dashboard/student/enroll-list/EnrollList';
import ExamList from '../../../components/dashboard/teacher/exam-list/ExamList';
import Boarding from '../../../components/dashboard/boarding/Boarding';
import LeftNavigator from '../../../components/dashboard/left-navigator/LeftNavigator';
import HistoryList from '../../../components/dashboard/student/history-list/HistoryList';
import Questioning from '../../../components/dashboard/teacher/questioning/Questioning';

function MainBoard() {
    return (
        <div className="MainBoard">
            <div className="mainboard-container">
                <LeftNavigator></LeftNavigator>
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

export default MainBoard;