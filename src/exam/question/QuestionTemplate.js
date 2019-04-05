import React from 'react';

import './QuestionTemplate.css';
// import QuestionFlag from './QuestionFlagColumn';
import AnswerGroup from '../answer/AnswerGroup';

export default function QuestionTemplate(props) {
    const { question, questionNumber, answerA, answerB, answerC, answerD, yourAnswer } = props;

    return (
        <div className="QuestionTemplate">
            <p>{question}</p>
            <AnswerGroup
                questionNumber={questionNumber}
                answerA={answerA}
                answerB={answerB}
                answerC={answerC}
                answerD={answerD}
                yourAnswer={yourAnswer}
            ></AnswerGroup>
        </div>
    );
}