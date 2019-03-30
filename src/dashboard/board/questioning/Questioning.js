import React from 'react';

import './Questioning.css';
import InputForm from '../../../form/InputForm';
import ButtonPrimary from '../../../buttons/ButtonPrimary';
import BWButton from '../../../buttons/BWButton';
import AllQuestion from './AllQuestion';

export default function () {
    return (
        <div className="Questioning">
            <div className="question-form">
                <div className="input-group">
                    <InputForm label="Question" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></InputForm>
                    <InputForm label="Answer A" placeholder="Lorem Ipsum."></InputForm>
                    <InputForm label="Answer B" placeholder="Lorem Ipsum."></InputForm>
                    <InputForm label="Answer C" placeholder="Lorem Ipsum."></InputForm>
                    <InputForm label="Answer D" placeholder="Lorem Ipsum."></InputForm>
                </div>
                <div className="action-group">
                    <ButtonPrimary>Add</ButtonPrimary>
                    <BWButton>Clear</BWButton>
                </div>
            </div>
            <div className="all-question-wrap">
                <AllQuestion></AllQuestion>
            </div>
        </div>
    );
}