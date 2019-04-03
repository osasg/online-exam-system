import React from 'react';

import './AllQuestion.css';
import ViewQuestion from './ViewQuestion';
import { TeacherConsumer } from '../../../context/TeacherContext';

export default function () {
    return (
        <div className="AllQuestion">
            <TeacherConsumer>
                {({ questions }) => questions
                    .map(({ id, question, a, b, c, d, rightAnswer, fileAttach }, i) => 
                        <div className="vq-wrap" key={id}>
                            <ViewQuestion
                                questionNumber={i}
                                question={question}
                                answerA={a}
                                answerB={b}
                                answerC={c}
                                answerD={d}
                                rightAnswer={rightAnswer}
                                fileAttach={fileAttach}
                            ></ViewQuestion>
                        </div>
                    )
                }
            </TeacherConsumer>
        </div>
    );
}