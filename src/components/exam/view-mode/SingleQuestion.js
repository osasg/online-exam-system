import React from 'react';
import { Redirect } from 'react-router-dom';

import './SingleQuestion.css';
import QuestionFlagRow from '../question/QuestionFlagRow';
import QuestionTemplate from '../question/QuestionTemplate';
import FinishTimer from '../nav/FinishTimer';
import { ExamingConsumer } from '../../../context/ExamingContext';

export default function SingleQuestion(props) {
    if (window.innerWidth < 768) {
        alert('Can\'t open SingleQuestion view-mode because your device is too small (device-width < 768px)\nDon\'t worry!');
        return <Redirect to="/exam/multi-question"></Redirect>;
    }

    return (
        <div className="SingleQuestion">
            <ExamingConsumer>
                {
                    ({ examing, onQuestion }) => {
                        if (examing.questions.length === 0)
                            return '';

                        const { question, a, b, c, d, yourAnswer, flag } = examing.questions[onQuestion];
                        return (
                            <div className="sq-wrap">
                                <div className="file-attach">
                                    <img draggable={false} src="https://source.unsplash.com/640x800" alt="attach" />
                                </div>
                                <div className="content">
                                    <div className="finish-timer-wrap">
                                        <FinishTimer></FinishTimer>
                                    </div>
                                    <QuestionFlagRow flag={flag} questionNumber={onQuestion}></QuestionFlagRow>
                                    <QuestionTemplate
                                        questionNumber={onQuestion}
                                        question={question}
                                        answerA={a}
                                        answerB={b}
                                        answerC={c}
                                        answerD={d}
                                        yourAnswer={yourAnswer}
                                    ></QuestionTemplate>
                                </div>
                            </div>
                        )
                    }
                }
            </ExamingConsumer>               
        </div>
    );
}