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
    }

    render() {
        const { examList, questions } = this.state;
        
        return (
            <TeacherContext.Provider value={{
                examList: examList,
                questions: questions
            }}>
                {this.props.children}
            </TeacherContext.Provider>
        );
    }
}