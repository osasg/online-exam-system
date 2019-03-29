import React from 'react';

import './BottomSlider.css';
import Left from '../../icons/left.svg';
import Right from '../../icons/right.svg';

export default function (props) {
    const { totalQuestion, activeQuestion } = props;

    return (
        <div className="BottomSlider">
            <div className="arrow">
                <img src={Left} alt="left" />
            </div>
            <div className="question-number">
                {
                    Array.from({ length: totalQuestion }).map((v, i) =>
                        <span
                            key={i}
                            className={'number' + (activeQuestion === i ? ' active' : '')}
                        >{i}</span>
                    )
                }
                <span></span>
            </div>
            <div className="arrow">
                <img src={Right} alt="right" />
            </div>
        </div>
    );
}