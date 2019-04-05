import React, { Component } from 'react';

import { examing } from './data';

const ExamingContext = React.createContext();

export const ExamingConsumer = ExamingContext.Consumer;

export class ExamingProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            examing: {
                startAt: new Date(),
                questions: examing.questions
            }
        });
        console.log(examing);
    }

    render() {
        const { attemptNow } = this;
        const { examing, onQuestion } = this.state;
        
        return (
            <ExamingContext.Provider value={{
                attemptNow,
                examing,
                onQuestion
            }}>
                {this.props.children}
            </ExamingContext.Provider>
        );
    }
}