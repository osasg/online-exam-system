import React from 'react';

import './AllQuestion.css';
import ViewQuestion from './ViewQuestion';

export default function () {
    return (
        <div className="AllQuestion">
            {
                Array.from({ length: 12 }).map((v, i) => 
                    <div class="vq-wrap" key={i}>
                        <ViewQuestion
                            questionNumber={i}
                            question="Lorem Ipsum is simply dummy text of the
                printing and typesetting industry."
                            answerA="Lorem ipsum"
                            answerB="Lorem ipsum"
                            answerC="Lorem ipsum"
                            answerD="Lorem ipsum"
                        ></ViewQuestion>
                    </div>
                )
            }
        </div>
    );
}