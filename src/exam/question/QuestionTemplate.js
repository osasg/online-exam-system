import React from 'react';

import './QuestionTemplate.css';
// import QuestionFlag from './QuestionFlagColumn';
import AnswerGroup from '../answer/AnswerGroup';

export default function (props) {
    const { question, questionNumber, answerA, answerB, answerC, answerD } = props;

    return (
        <div className="QuestionTemplate">
            {/* <QuestionFlag questionNumber={questionNumber}></QuestionFlag> */}
            <p>{question}</p>
            <AnswerGroup
                questionNumber={questionNumber}
                answerA={answerA}
                answerB={answerB}
                answerC={answerC}
                answerD={answerD}
            ></AnswerGroup>
        </div>
    );
}