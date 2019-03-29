import React from 'react';
import { Redirect } from 'react-router-dom';

import './SingleQuestion.css';
import QuestionFlagRow from '../question/QuestionFlagRow';
import QuestionTemplate from '../question/QuestionTemplate';
import FinishTimer from '../nav/FinishTimer';

export default function (props) {
    if (window.innerWidth < 768) {
        alert('Can\'t open this mode because your device is too small (device-width < 768px)\nDon\'t worry!');
        return <Redirect to="/exam/multi-question"></Redirect>;
    }

    return (
        <div className="SingleQuestion">
            <div className="file-attach">
                {/* <img src="https://source.unsplash.com/640x800" /> */}
            </div>
            <div className="content">
                <div className="finish-timer-wrap">
                    <FinishTimer></FinishTimer>
                </div>
                <QuestionFlagRow questionNumber="3"></QuestionFlagRow>
                <QuestionTemplate
                        questionNumber="3"
                        question="Lorem Ipsum is simply dummy text of the printing and typesetting
    industry."
                        answerA="Lorem ipsum"
                        answerB="Lorem ipsum"
                        answerC="Lorem ipsum"
                        answerD="Lorem ipsum"
                    ></QuestionTemplate>
            </div>
        </div>
    );
}