import React from 'react';

import './AnswerGroup.css';

export default function AnswerGroup(props) {
    const { questionNumber, answerA, answerB, answerC, answerD, yourAnswer } = props;
    const answers = [ answerA, answerB, answerC, answerD ];

    return (
        <div className="AnswerGroup">
            {
                ['A', 'B', 'C', 'D' ].map((v, i) =>
                    <label htmlFor={v + questionNumber} key={i}>
                        <input id={v + questionNumber} defaultChecked={yourAnswer.toUpperCase() === v} type="radio" name={'radio' + questionNumber}/>
                        <span>{v + '. ' + answers[i]}</span>
                    </label>
                )
            }
        </div>
    );
}