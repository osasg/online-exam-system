import React, { Component } from 'react';

import './StudentDashboard.css';

import Board from '../board/Board';

class StudentDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="StudentDashboard">
                <Board></Board>
            </div>
        );
    }
}

export default StudentDashboard;