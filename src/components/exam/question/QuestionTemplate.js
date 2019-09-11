import React from 'react';
import PropTypes from 'prop-types';

import './QuestionTemplate.css';
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

QuestionTemplate.propTypes = { 
    question: PropTypes.string.isRequired, 
    questionNumber: PropTypes.number.isRequired, 
    answerA: PropTypes.string.isRequired, 
    answerB: PropTypes.string.isRequired, 
    answerC: PropTypes.string.isRequired, 
    answerD: PropTypes.string.isRequired,
    yourAnswer: PropTypes.string.isRequired
}
