import React from 'react';

import './QuestionOnlyAnswer.css';
import QuestionFlagColumn from '../question/QuestionFlagColumn';
import FinishTimerBox from '../nav/FinishTimerBox';
import { ExamingConsumer } from '../../../context/ExamingContext';

export default function QuestionOnlyAnswer() {
    return (
        <div className="QuestionOnlyAnswer">
            <FinishTimerBox></FinishTimerBox>
            <div className="question-group">
                <ExamingConsumer>
                    {
                        ({ examing: { questions }}) => questions.map((q, i) => 
                            <div className="q" key={i}>
                                <div className="q-n">
                                    <QuestionFlagColumn flag={q.flag} questionNumber={i}></QuestionFlagColumn>
                                </div>
                                <div className="q-a">
                                    <p>{q.question}</p>
                                    <p className={q.yourAnswer || 'non-answer' }>{
                                        q.yourAnswer
                                        ? q.yourAnswer.toUpperCase() + '. ' + q[q.yourAnswer]
                                        : '--NON-ANSWER--' 
                                    }</p>
                                </div>
                            </div>
                        )
                    }
                </ExamingConsumer>
            </div>
        </div>
    );
}