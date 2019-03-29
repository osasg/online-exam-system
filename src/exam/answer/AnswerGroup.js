import React from 'react';

import './AnswerGroup.css';

export default function (props) {
    const { questionNumber, answerA, answerB, answerC, answerD } = props;
    const answers = [ answerA, answerB, answerC, answerD ];

    return (
        <div className="AnswerGroup">
            {
                ['A', 'B', 'C', 'D' ].map((v, i) =>
                    <label htmlFor={v + questionNumber} key={i}>
                        <input id={v + questionNumber} type="radio" name={'radio' + questionNumber}/>
                        <span>A. {answers[i]}</span>
                    </label>
                )
            }
        </div>
    );
}