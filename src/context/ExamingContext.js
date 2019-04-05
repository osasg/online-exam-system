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
        this.startFnTimer = this.startFnTimer.bind(this);
    }

    startFnTimer() {
        const timeLeft = this.state.timeLeft;
        let timeCounter = 0;

        const updateTimer = () => {
            let left = timeLeft - timeCounter;
            if (left < 0)
                return clearInterval(this.timeStart);

            const hours = Math.floor(left / 3600);
            left = left % 3600;
            const minutes = Math.floor(left / 60);
            left = left % 60;

            const time = `
                ${hours < 10 ? '0' + hours : hours}
                 : ${minutes < 10 ? '0' + minutes : minutes}
                 : ${left < 10 ? '0' + left : left}
            `;

            this.setState({
                timeLeft: time
            })
            timeCounter++;
        }
        this.timeStart = setInterval(updateTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeStart);
    }

    attemptNow(id) {
        // get exam //
        this.setState({
            timeLeft: 5,
            examing: {
                questions: examing.questions
            }
        }, () => {
            this.startFnTimer();
        })
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