import React, { Component } from 'react';

import { examList, questions } from './data';

const TeacherContext = React.createContext();

export const TeacherConsumer = TeacherContext.Consumer;

export class TeacherProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            examList,
            questions
        }

        this.addQuestion = this.addQuestion.bind(this);
    }

    addQuestion({ question, a, b, c, d, rightAnswer, fileAttach}) {
        const fileName = fileAttach.name;
        this.setState({
            questions: [
                ...this.state.questions,
                { question, a, b, c, d, rightAnswer, fileAttach, fileName}
            ]
        })
    }

    editQuestion() {

    }

    deleteQuesiton() {

    }

    uploadExam() {

    }

    render() {
        const { examList, questions } = this.state;
        const { addQuestion } = this;
        
        return (
            <TeacherContext.Provider value={{
                examList: examList,
                questions: questions,
                addQuestion: addQuestion
            }}>
                {this.props.children}
            </TeacherContext.Provider>
        );
    }
}