import React from 'react';

import './QuestionFlag.css';
import Flag from '../../icons/flag.png'

export default function (props) {
    const { questionNumber } = props;

    return (
        <div className="QuestionFlagColumn">
            <p>Question {questionNumber}</p>
            <img src={Flag} alt="flag"/>
        </div>
    );
}