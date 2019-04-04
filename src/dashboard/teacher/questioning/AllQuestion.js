import React from 'react';

import './AllQuestion.css';
import ViewQuestion from './ViewQuestion';
import { TeacherConsumer } from '../../../context/TeacherContext';

export default function AllQuestion() {
    return (
        <div className="AllQuestion">
            <TeacherConsumer>
                {({ questions }) => questions
                    .map(({ id, question, a, b, c, d, rightAnswer, fileName }, i) => 
                        <div className="vq-wrap" key={i}>
                            <ViewQuestion
                                questionNumber={i}
                                question={question}
                                answerA={a}
                                answerB={b}
                                answerC={c}
                                answerD={d}
                                rightAnswer={rightAnswer}
                                fileName={fileName}
                            ></ViewQuestion>
                        </div>
                    )
                }
            </TeacherConsumer>
        </div>
    );
}