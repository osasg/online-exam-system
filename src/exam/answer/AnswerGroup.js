import React from 'react';

import './AnswerGroup.css';

export default function (props) {
    const { questionNumber, answerA, answerB, answerC, answerD } = props;

    return (
        <div className="AnswerGroup">
            <label for="a">
                <input id="a" type="radio" name={'radio' + questionNumber}/>
                <span>A. {answerA}</span>
            </label>
            <label for="b">
                <input id="b" type="radio" name={'radio' + questionNumber}/>
                <span>B. {answerB}</span>
            </label>
            <label for="c">
                <input id="c" type="radio" name={'radio' + questionNumber}/>
                <span>C. {answerC}</span>
            </label>
            <label for="d">
                <input id="d" type="radio" name={'radio' + questionNumber}/>
                <span>D. {answerD}</span>
            </label>
        </div>
    );
}