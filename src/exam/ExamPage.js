import React from 'react';

import './ExamPage.css';

import MultiQuestion from './view-mode/MultiQuestion';

export default function () {
    return (
        <div className="ExamPage">
            <div className="view-mode">
                <MultiQuestion></MultiQuestion>
            </div>
            <div className="right-control"></div>
            <div className="bottom-control"></div>
        </div>
    );
}