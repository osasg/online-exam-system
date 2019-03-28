import React, { Component } from 'react';

import './Exam.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';

class Exam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            participants: props.participants
        }
    }

    render() {
        const {
            name,
            subject, 
            duedate, 
            duration, 
            description, 
            teacher
        } = this.props;

        const { participants } = this.state;

        return (
            <div className="Exam">
                <div className="name">{name}</div>
                <div class="information">
                    {[subject, duedate, duration].join('-')}
                </div>
                <div className="description">{description}</div>
                <div className="bottom">
                    <div className="attempt">
                        <ButtonPrimary>Attempt now</ButtonPrimary>
                    </div>
                    <div className="participants">{participants} participants</div>
                    <div className="teacher">{teacher}</div>
                </div>
            </div>
        );
    }
}

export default Exam;