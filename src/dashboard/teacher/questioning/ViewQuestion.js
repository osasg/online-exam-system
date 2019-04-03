import React from 'react';

import './ViewQuestion.css';
import BWButton from '../../../buttons/BWButton';

export default function (props) {
    const {
        questionNumber,
        question,
        answerA,
        answerB,
        answerC,
        answerD,
        rightAnswer,
        fileAttach
    } = props;

    return (
        <div className="ViewQuestion">
            <div className="question-number">
                Question {questionNumber}
            </div>
            <div className="question-wrap">
                <p>{question}</p>
            </div>
            <div className="answer-wrap">
                <p>A. {answerA}</p>
                <p>B. {answerB}</p>
                <p>C. {answerC}</p>
                <p>D. {answerD}</p>
            </div>
            <div className="file-attach">
                {fileAttach ? <p>File attach: {fileAttach}</p> : ''}
            </div>
            <div className="right-answer">
                <p>Right answer: <span className="ra">{rightAnswer}</span></p>
            </div>
            <div className="action">
                <BWButton>Edit</BWButton>
                <BWButton>Delete</BWButton>
            </div>
        </div>
    );
}