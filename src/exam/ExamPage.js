import React from 'react';
import { Route } from 'react-router-dom';
import './ExamPage.css';

import MultiQuestion from './view-mode/MultiQuestion';
import BottomSlider from './nav/BottomSlider';
import RightNav from './nav/RightNav';
import OverviewExam from './view-mode/OverviewExam';

export default function () {
    return (
        <div className="ExamPage">
            <div className="view-mode">
                <Route path="/exam/multi-question" exact component={MultiQuestion}/>
                <Route path="/exam/overview" exact component={OverviewExam} />
            </div>
            <div className="right-control">
                <RightNav></RightNav>
            </div>
            <div className="bottom-control">
                <BottomSlider totalQuestion={12} activeQuestion={6}></BottomSlider>
            </div>
        </div>
    );
}