import React from 'react';

import './QuestionOnlyAnswer.css';
import QuestionFlagColumn from '../question/QuestionFlagColumn';
import FinishTimerBox from '../nav/FinishTimerBox';

export default function () {
    return (
        <div className="QuestionOnlyAnswer">
            <FinishTimerBox></FinishTimerBox>
            <div className="question-group">
                {
                    Array.from({ length: 12 }).map((v, i) => 
                        <div className="q" key={i}>
                            <div className="q-n">
                                <QuestionFlagColumn questionNumber={i}></QuestionFlagColumn>
                            </div>
                            <div className="q-a">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.</p>
                                <p>A. Lorem ipsum</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}