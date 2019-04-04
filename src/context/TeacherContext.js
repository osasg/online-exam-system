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
        this.getQuestion = this.getQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.uploadExam = this.uploadExam.bind(this);
    }

    addQuestion({ questionNumber, question, a, b, c, d, rightAnswer, fileAttach}) {
        const fileName = fileAttach ? fileAttach.name : '';

        if (questionNumber >= 0) {
            const questions = this.state.questions.slice();
            const q = questions[questionNumber];
            
            q.question = question;
            q.a = a;
            q.b = b;
            q.c = c;
            q.d = d;
            q.rightAnswer = rightAnswer;
            q.fileAttach = fileAttach;
            q.fileName = fileName;

            this.setState({
                questions
            });
            return;
        }
             
        this.setState({
            questions: [
                ...this.state.questions,
                { question, a, b, c, d, rightAnswer, fileAttach, fileName}
            ]
        })
    }

    getQuestion(index) {
        return this.state.questions[index];
    }

    deleteQuestion(index) {
        this.setState({
            questions: [
                ...this.state.questions.slice(0, index),
                ...this.state.questions.slice(index + 1)
            ]
        });
    }

    uploadExam() {

    }

    render() {
        const { examList, questions } = this.state;
        const { addQuestion, getQuestion, deleteQuestion, uploadExam } = this;
        
        return (
            <TeacherContext.Provider value={{
                examList,
                questions,
                addQuestion,
                deleteQuestion,
                getQuestion,
                uploadExam
            }}>
                {this.props.children}
            </TeacherContext.Provider>
        );
    }
}