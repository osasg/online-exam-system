import React, { Component } from 'react';

import './TeacherDashboard.css';

import Board from '../board/Board';

class TeacherDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TeacherDashboard">
                <Board></Board>
            </div>
        );
    }
}

export default TeacherDashboard;