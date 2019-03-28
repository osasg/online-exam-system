import React from 'react';

import './Board.css';
import ExamList from './ExamList';
import Boarding from './Boarding';

export default function (props) {
    const { examList } = props;
    return (
        <div className="Board">
            <div className="boarding-wrap">
                <Boarding></Boarding>
            </div>
            <div className="exam-list-wrap">
                <ExamList examList={examList}></ExamList>
            </div>
        </div>
    );
}