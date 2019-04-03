import React, { Component } from 'react';

import { enrollList, historyList } from './data';

const StudentContext = React.createContext();

export const StudentConsumer = StudentContext.Consumer;

export class StudentProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enrollList,
            historyList
        }
    }

    render() {
        const { enrollList, historyList } = this.state;
        
        return (
            <StudentContext.Provider value={{
                enrollList: enrollList,
                historyList: historyList
            }}>
                {this.props.children}
            </StudentContext.Provider>
        );
    }
}