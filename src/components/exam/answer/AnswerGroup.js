import React from 'react';
import PropTypes from 'prop-types';

import './AnswerGroup.css';
import { ExamingConsumer } from '../../../context/ExamingContext';

export default function AnswerGroup(props) {
    const { questionNumber, answerA, answerB, answerC, answerD, yourAnswer } = props;
    const answers = [ answerA, answerB, answerC, answerD ];

    return (
        <div className="AnswerGroup">
            <ExamingConsumer>
                {
                    ({ changeAnswer }) => 
                        ['a', 'b', 'c', 'd' ].map((v, i) =>
                            <label onClick={() => changeAnswer(questionNumber, v)} htmlFor={v + questionNumber} key={i}>
                                <input
                                    onChange={() => {}}
                                    id={v + questionNumber}
                                    checked={yourAnswer === v}
                                    type="radio"
                                    name={'radio' + questionNumber}
                                />
                                <span>{v + '. ' + answers[i]}</span>
                            </label>
                        )
                }
            </ExamingConsumer>
        </div>
    );
}

AnswerGroup.propTypes = {
    questionNumber: PropTypes.string.isRequired,
    answerA: PropTypes.string.isRequired,
    answerB: PropTypes.string.isRequired,
    answerC: PropTypes.string.isRequired,
    answerD: PropTypes.string.isRequired,
    yourAnswer: PropTypes.string.isRequired
}
