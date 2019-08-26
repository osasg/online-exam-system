import React from 'react';

import './MultiQuestion.css';
import QuestionFlagColumn from '../question/QuestionFlagColumn';
import QuestionTemplate from '../question/QuestionTemplate';
import FinishTimerBox from '../nav/FinishTimerBox';
import { ExamingConsumer } from '../../../context/ExamingContext';

export default function (props) {
    return (
        <div className="MultiQuestion">
            <FinishTimerBox></FinishTimerBox>
            <div className="question-group">
                <ExamingConsumer>
                    {
                        ({ examing }) => examing.questions.map(({ question, a, b, c, d, yourAnswer, flag}, i) =>
                            <div className="question" key={i}>
                                <div className="question-flag-wrap">
                                    <QuestionFlagColumn flag={flag} questionNumber={i}></QuestionFlagColumn>
                                </div>
                                <div className="question-template-wrap">
                                    <QuestionTemplate
                                        questionNumber={i}
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
                </ExamingConsumer>
            </div>
        </div>
    );
}