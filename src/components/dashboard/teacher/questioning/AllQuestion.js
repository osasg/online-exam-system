import React from 'react';
import PropTypes from 'prop-types';

import './AllQuestion.css';
import ViewQuestion from './ViewQuestion';
import { TeacherConsumer } from '../../../../context/TeacherContext';

export default function AllQuestion(props) {
    const { renderQuestion } = props;
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
                                renderQuestion={renderQuestion}
                            ></ViewQuestion>
                        </div>
                    )
                }
            </TeacherConsumer>
        </div>
    );
}

AllQuestion.propTypes = {
    renderQuestion: PropTypes.func.isRequired
};
