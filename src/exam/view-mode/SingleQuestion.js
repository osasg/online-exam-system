import React from 'react';

import './SingleQuestion.css';
import QuestionFlagRow from '../question/QuestionFlagRow';
import QuestionTemplate from '../question/QuestionTemplate';

export default function (props) {
    return (
        <div className="SingleQuestion">
            <div className="file-attach">
                {/* <img src="https://source.unsplash.com/640x800" /> */}
            </div>
            <div className="content">
                <QuestionFlagRow questionNumber="3"></QuestionFlagRow>
                <QuestionTemplate
                        questionNumber="3"
                        question="Lorem Ipsum is simply dummy text of the printing and typesetting
    industry."
                        answerA="Lorem ipsum"
                        answerB="Lorem ipsum"
                        answerC="Lorem ipsum"
                        answerD="Lorem ipsum"
                    ></QuestionTemplate>
            </div>
        </div>
    );
}