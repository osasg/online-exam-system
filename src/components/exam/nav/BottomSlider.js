import React from 'react';

import './BottomSlider.css';
import Left from '../../../assets/icons/left.svg';
import Right from '../../../assets/icons/right.svg';
import { ExamingConsumer } from '../../../context/ExamingContext';

export default function BottomSlider() {
    return (
        <div className="BottomSlider">
            <div className="arrow">
                <ExamingConsumer>
                    {
                        ({ onQuestion, changeOnQuestion }) => 
                            <img onClick={() => changeOnQuestion(onQuestion - 1)} src={Left} alt="left" />
                    }
                </ExamingConsumer>
            </div>
            <div className="question-number">
                <ExamingConsumer>
                    {
                        ({ examing: { questions }, onQuestion, changeOnQuestion }) => questions.map((q, i) =>
                            <span
                                onClick={() => changeOnQuestion(i)}
                                key={i}
                                className={'number' + (onQuestion === i ? ' active' : '')}
                            >{i}</span>
                        )
                    }
                </ExamingConsumer>
                <span></span>
            </div>
            <div className="arrow">
                <ExamingConsumer>
                    {
                        ({ onQuestion, changeOnQuestion }) => 
                            <img onClick={() => changeOnQuestion(onQuestion + 1)} src={Right} alt="right" />
                    }
                </ExamingConsumer>
            </div>
        </div>
    );
}