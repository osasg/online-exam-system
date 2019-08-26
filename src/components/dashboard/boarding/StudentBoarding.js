import React, { Component } from 'react';

import './StudentBoarding.css';

import BWButtonBorder from '../../buttons/BWButtonBorder';
import BWButton from '../../buttons/BWButton';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import InputForm from '../../form/InputForm';

export default class StudentBoarding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enrollKey: ''
        }
        
        this.changeEnrollKey = this.changeEnrollKey.bind(this);
        this.enrollExam = this.enrollExam.bind(this);
    }

    changeEnrollKey(val) {
        this.setState({
            enrollKey: val
        });
    }

    enrollExam() {
        console.log(this.state.enrollKey);
    }
    
    render() {
        return (
            <div className="student-boarding">
                <BWButtonBorder
                    handleClick={
                        () => document.querySelector('.enroll-popup').classList.add('active')
                    }
                >New enroll</BWButtonBorder>
                <div className="enroll-popup">
                    <div className="enter-key">
                        <InputForm onChange={this.changeEnrollKey} value={this.state.enrollKey} label="Key enroll" placeholder="Enter key-enroll"/>
                        <ButtonPrimary handleClick={this.enrollExam}>Enroll</ButtonPrimary>
                        <BWButton
                            handleClick={
                                () => document.querySelector('.enroll-popup').classList.remove('active')
                            }
                        >Cancel</BWButton>
                    </div>
                </div>
            </div>
        );
    }
}
