import React, { Component } from 'react';

import { examing } from './data';

const ExamingContext = React.createContext();

export const ExamingConsumer = ExamingContext.Consumer;

export class ExamingProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: null,
            examing: {
                questions: []
            },
            onQuestion: 0
        }

        this.attemptNow = this.attemptNow.bind(this);
        this.changeOnQuestion = this.changeOnQuestion.bind(this);
        this.changeAnswer = this.changeAnswer.bind(this);
        this.changeFlagQuestion = this.changeFlagQuestion.bind(this);
    }

    attemptNow(id) {
        // get exam //
        this.setState({
            timeLeft: 5,
            examing: {
                questions: examing.questions
            }
        });
    }

    changeAnswer(i, a) {
        const questions = this.state.examing.questions.slice();
        questions[i].yourAnswer = a;
        this.setState({
            examing: { questions }
        });
    }

    changeOnQuestion(i) {
        const max = this.state.examing.questions.length;
        const onq = (i % max) || 0;
        this.setState({
            onQuestion: onq < 0 ? max - 1 : onq
        })
    }

    changeFlagQuestion(i) {
        const questions = this.state.examing.questions.slice();
        questions[i].flag = !questions[i].flag;
        this.setState({
            examing: { questions }
        });
    }

    render() {
        const { attemptNow, changeOnQuestion, changeAnswer, changeFlagQuestion } = this;
        const { examing, onQuestion, timeLeft } = this.state;
        
        return (
            <ExamingContext.Provider value={{
                attemptNow,
                examing,
                onQuestion,
                timeLeft,
                changeOnQuestion,
                changeAnswer,
                changeFlagQuestion
            }}>
                {this.props.children}
            </ExamingContext.Provider>
        );
    }
}