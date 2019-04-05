import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FinishTimer.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import { ExamingConsumer } from '../../context/ExamingContext';

export default class FinishTimer extends Component {
    constructor(props) {
        super(props);
        this.timer = React.createRef();
    }

    componentDidMount() {
        const timer = this.timer.current;
        const timeLeft = parseInt(timer.textContent);
        let timeCounter = 0;

        const updateTimer = () => {
            let left = timeLeft - timeCounter;
            if (left < 0)
                return clearInterval(this.timeStart);

            const hours = Math.floor(left / 3600);
            left = left % 3600;

            const minutes = Math.floor(left / 60);
            left = left % 60;

            timer.textContent = `
                ${hours < 10 ? '0' + hours : hours}
                 : ${minutes < 10 ? '0' + minutes : minutes}
                 : ${left < 10 ? '0' + left : left}
            `;
            timeCounter++;
        }

        updateTimer();
        this.timeStart = setInterval(updateTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeStart);
    }

    render() {
        return (
            <div className="FinishTimer">
                <div className="finish">
                    <Link to="/dashboard/student"><ButtonPrimary>Finish attempt</ButtonPrimary></Link>
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
