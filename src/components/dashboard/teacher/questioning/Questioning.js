import React, { Component } from 'react';

import './Questioning.css';
import InputForm from '../../../form/InputForm';
import ButtonPrimary from '../../../buttons/ButtonPrimary';
import BWButton from '../../../buttons/BWButton';
import AllQuestion from './AllQuestion';
import FileForm from '../../../form/FileForm';
import { TeacherConsumer } from '../../../../context/TeacherContext';

class Questioning extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            questionNumber: -1,
            question: '',
            a: '',
            b: '',
            c: '',
            d: '',
            rightAnswer: '',
            fileAttach: {}
        };

        this.setQuestionProp = this.setQuestionProp.bind(this);
        this.addQToContext = this.addQToContext.bind(this);
        this.clear = this.clear.bind(this);
        this.renderQuestion = this.renderQuestion.bind(this);
    }

    setQuestionProp(p, val) {
        if (p === 'rightAnswer') {
            val = val[0];
        }
        
        this.setState({ [p]: val });
    }
    
    addQToContext(addQuestion) {
        const { questionNumber, question, a, b, c, d, rightAnswer, fileAttach } = this.state;
        addQuestion({ questionNumber, question, a, b, c, d, rightAnswer, fileAttach });
        this.clear();
    }

    clear() {
        this.setState({
            questionNumber: -1,
            question: '',
            a: '',
            b: '',
            c: '',
            d: '',
            rightAnswer: '',
            fileAttach: {}
        });
    }

    renderQuestion(getQuestion, index) {
        const q = getQuestion(index);
        const { question, a, b, c, d, rightAnswer, fileAttach } = q;
        this.setState({ questionNumber: index, question, a, b, c, d, rightAnswer, fileAttach });
        
    }

    render() {
        const { setQuestionProp, clear, addQToContext, renderQuestion } = this;
        const { question, a, b, c, d, rightAnswer, fileAttach } = this.state;

        return (
            <div className="Questioning">
                <div className="question-form">
                    <div className="input-group">
                        <InputForm
                            value={question}
                            onChange={(val) => setQuestionProp('question', val)}
                            label="Question"
                            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        </InputForm>
                        <InputForm
                            value={a}
                            onChange={(val) => setQuestionProp('a', val)}
                            label="Answer A"
                            placeholder="Lorem Ipsum.">
                        </InputForm>
                        <InputForm
                            value={b}
                            label="Answer B"
                            placeholder="Lorem Ipsum."
                            onChange={(val) => setQuestionProp('b', val)}>
                        </InputForm>
                        <InputForm
                            value={c}
                            label="Answer C"
                            placeholder="Lorem Ipsum."
                            onChange={(val) => setQuestionProp('c', val)}>
                        </InputForm>
                        <InputForm
                            value={d}
                            label="Answer D"
                            placeholder="Lorem Ipsum."
                            onChange={(val) => setQuestionProp('d', val)}>
                        </InputForm>
                        <InputForm
                            value={rightAnswer}
                            label="Right Answer"
                            placeholder="a b c d"
                            onChange={(val) => setQuestionProp('rightAnswer', val)}>
                        </InputForm>
                        <FileForm
                            fileAttach={fileAttach}
                            label="File attach"
                            onChange={(val) => setQuestionProp('fileAttach', val)}>
                        </FileForm>
                    </div>
                    <div className="action-group">
                        <TeacherConsumer>
                            {
                                ({ addQuestion }) =>
                                    <ButtonPrimary handleClick={() => addQToContext(addQuestion)}>Add</ButtonPrimary>
                            }
                        </TeacherConsumer>
                        <BWButton handleClick={clear}>Clear</BWButton>       
                    </div>
                </div>
                <div className="all-question-wrap">
                    <TeacherConsumer>
                        {
                            ({ getQuestion }) =>
                                <AllQuestion
                                    renderQuestion={(index) => renderQuestion(getQuestion, index)}>
                                </AllQuestion>
                        }
                    </TeacherConsumer>
                </div>
            </div>
        );
    }
}

export default Questioning;
