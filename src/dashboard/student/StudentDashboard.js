import React, { Component } from 'react';

import './StudentDashboard.css';

import RightNavigateBar from '../RightNavigateBar';
import Exam from '../exam/Exam';
import ButtonPrimary from '../../buttons/ButtonPrimary';

class StudentDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            student: {}
        };
    }

    render() {
        return (
            <div className="StudentDashboard">
                <RightNavigateBar>
                </RightNavigateBar>
                <div className="board">
                    <div className="boarding">
                        <div className="new-enroll">
                            <ButtonPrimary>New enroll</ButtonPrimary>
                        </div>
                        <div className="filter">
                            Teacher
                        </div>
                        <div className="filter">
                            Student
                        </div>
                    </div>
                    <div className="exam-list">
                        <div className="item">
                            <Exam
                                name="Sketch Prototyping"
                                subject="UI UX"
                                duedate="Mar 12, 2018"
                                duration="12 mins"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
        dummy text of the printing and typesetting industry."
                                participants="23"
                                teacher="Master Node"
                            />
                        </div>
                        <div className="item">
                            <Exam
                                name="Sketch Prototyping"
                                subject="UI UX"
                                duedate="Mar 12, 2018"
                                duration="12 mins"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
        dummy text of the printing and typesetting industry."
                                participants="23"
                                teacher="Master Node"
                            />
                        </div>
                        <div className="item">
                            <Exam
                                name="Sketch Prototyping"
                                subject="UI UX"
                                duedate="Mar 12, 2018"
                                duration="12 mins"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
        dummy text of the printing and typesetting industry."
                                participants="23"
                                teacher="Master Node"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentDashboard;