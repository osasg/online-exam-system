import React from 'react';
import { Route } from 'react-router-dom';
import './ExamPage.css';

import MultiQuestion from '../../components/exam/view-mode/MultiQuestion';
import BottomSlider from '../../components/exam/nav/BottomSlider';
import RightNav from '../../components/exam/nav/RightNav';
import OverviewExam from '../../components/exam/view-mode/OverviewExam';
import SingleQuestion from '../../components/exam/view-mode/SingleQuestion';
import QuestionOnlyAnswer from '../../components/exam/view-mode/QuestionOnlyAnswer';

import Hamburger from '../../assets/icons/hamburger.png';

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