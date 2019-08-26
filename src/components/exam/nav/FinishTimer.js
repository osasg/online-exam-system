import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FinishTimer.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import { ExamingConsumer } from '../../../context/ExamingContext';

export default class FinishTimer extends Component {
    constructor(props) {
        super(props);
        this.timer = React.createRef();
    }

    render() {
        return (
            <div className="FinishTimer">
                <div className="finish">
                    <Link to="/dashboard/student">
                        <ButtonPrimary handleClick={() => {}}>Finish attempt</ButtonPrimary>
                    </Link>
                </div>
                <ExamingConsumer>
                    {
                        ({ timeLeft }) =>
                            <span className="timer" ref={this.timer}>{timeLeft}</span>
                    }
                </ExamingConsumer>
            </div>
        );
    }
}
