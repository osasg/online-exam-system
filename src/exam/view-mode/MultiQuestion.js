import React from 'react';

import './MultiQuestion.css';
import QuestionFlagColumn from '../question/QuestionFlagColumn';
import QuestionTemplate from '../question/QuestionTemplate';
import FinishTimerBox from '../nav/FinishTimerBox';

export default function (props) {
    return (
        <div className="MultiQuestion">
            <FinishTimerBox></FinishTimerBox>
            <div className="question-group">
                <div className="question">
                    <div className="question-flag-wrap">
                        <QuestionFlagColumn questionNumber="3"></QuestionFlagColumn>
                    </div>
                    <div className="question-template-wrap">
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
                <div className="question">
                    <div className="question-flag-wrap">
                        <QuestionFlagColumn questionNumber="0"></QuestionFlagColumn>
                    </div>
                    <div className="question-template-wrap">
                        <QuestionTemplate
                            questionNumber="0"
                            question="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
                            answerA="Lorem ipsum"
                            answerB="Lorem ipsum"
                            answerC="Lorem ipsum"
                            answerD="Lorem ipsum"
                        ></QuestionTemplate>
                    </div>
                </div>
                <div className="question">
                    <div className="question-flag-wrap">
                        <QuestionFlagColumn questionNumber="1"></QuestionFlagColumn>
                    </div>
                    <div className="question-template-wrap">
                        <QuestionTemplate
                            questionNumber="1"
                            question="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
                            answerA="Lorem ipsum"
                            answerB="Lorem ipsum"
                            answerC="Lorem ipsum"
                            answerD="Lorem ipsum"
                        ></QuestionTemplate>
                    </div>
                </div>
                <div className="question">
                    <div className="question-flag-wrap">
                        <QuestionFlagColumn questionNumber="2"></QuestionFlagColumn>
                    </div>
                    <div className="question-template-wrap">
                        <QuestionTemplate
                            questionNumber="2"
                            question="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
                            answerA="Lorem ipsum"
                            answerB="Lorem ipsum"
                            answerC="Lorem ipsum"
                            answerD="Lorem ipsum"
                        ></QuestionTemplate>
                    </div>
                </div>
            </div>
        </div>
    );
}