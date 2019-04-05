import React from 'react';
import { Route } from 'react-router-dom';
import './ExamPage.css';

import MultiQuestion from './view-mode/MultiQuestion';
import BottomSlider from './nav/BottomSlider';
import RightNav from './nav/RightNav';
import OverviewExam from './view-mode/OverviewExam';
import SingleQuestion from './view-mode/SingleQuestion';
import QuestionOnlyAnswer from './view-mode/QuestionOnlyAnswer';
import Hamburger from '../icons/hamburger.png';

export default function ExamPage() {
    return (
        <div className="ExamPage">
            <div className="view-mode">
                <Route path="/exam/single-question" exact component={SingleQuestion}/>
                <Route path="/exam/multi-question" exact component={MultiQuestion}/>
                <Route path="/exam/question-answer" exact component={QuestionOnlyAnswer}/>
                <Route path="/exam/overview" exact component={OverviewExam} />
            </div>
            <div onClick={closeRightControl} className="right-control">
                <RightNav></RightNav>
            </div>
            <div className="bottom-control">
                <BottomSlider></BottomSlider>
            </div>
            <div className="hamburger close">
                <img onClick={toggleRightControl} className="icon" src={Hamburger} alt="hamburger" />
            </div>
        </div>
    );
}

function toggleRightControl() {
    const rightControl = document.querySelector('.right-control');
    rightControl.classList.toggle('open');
}

function closeRightControl() {
    const rightControl = document.querySelector('.right-control');
    rightControl.classList.remove('open');
}