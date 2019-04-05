import React from 'react';

import './QuestionFlag.css';
import Flag from '../../icons/flag.svg';
import RedFlag from '../../icons/red-flag.svg';

export default function QuestionFlagColumn(props) {
    const { questionNumber, flag } = props;

    return (
        <div className="QuestionFlagColumn">
            <p>Question {questionNumber}</p>
            {
                flag
                ? <img src={RedFlag} alt="red-flag"/>
                : <img src={Flag} alt="flag"/>
            }
        </div>
    );
}