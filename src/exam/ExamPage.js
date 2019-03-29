import React from 'react';

import './ExamPage.css';

import MultiQuestion from './view-mode/MultiQuestion';
import BottomSlider from './nav/BottomSlider';
import RightNav from './nav/RightNav';

export default function () {
    return (
        <div className="ExamPage">
            <div className="view-mode">
                <MultiQuestion></MultiQuestion>
            </div>
            <div className="right-control">
                <RightNav></RightNav>
            </div>
            <div className="bottom-control">
                <BottomSlider totalQuestion={12} activeQuestion={6}></BottomSlider>
            </div>
        </div>
    );
}