import React from 'react';

import './OverviewExam.css';
import FinishTimer from '../nav/FinishTimer';
import { ExamingConsumer } from '../../../context/ExamingContext';

export default function OverviewExam() {
    return (
        <div className="OverviewExam">
            <div className="finish-timer-wrap">
                <FinishTimer></FinishTimer>
            </div>
            <div className="qa-group">
                <ExamingConsumer>
                    {
                        ({ examing: { questions } }) => questions.map(({ yourAnswer }, i) =>
                            <div className={`qa${yourAnswer ? '' : ' non-answer'}`}>
                                {i + '. ' + (yourAnswer ? yourAnswer : '--')}
                            </div>
                        )
                    }
                </ExamingConsumer>
            </div>
        </div>
    );
}