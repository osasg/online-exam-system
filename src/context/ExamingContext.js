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
    }

    attemptNow(id) {
        // get exam //
        this.setState({
            timeLeft: 5,
            examing: {
                questions: examing.questions
            }
        });
        console.log(examing);
    }

    render() {
        const { attemptNow } = this;
        const { examing, onQuestion, timeLeft } = this.state;
        
        return (
            <ExamingContext.Provider value={{
                attemptNow,
                examing,
                onQuestion,
                timeLeft
            }}>
                {this.props.children}
            </ExamingContext.Provider>
        );
    }
}