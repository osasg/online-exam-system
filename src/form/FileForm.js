import React from 'react';

import './FileForm.css';
import ButtonPrimary from '../buttons/ButtonPrimary';

export default function (props) {
    const { label } = props;
    return (
        <div className="FileForm">
            <label htmlFor={label}>
                <span className="label-name">{label}</span>
                <div className="select-file">
                    <ButtonPrimary handleClick={chooseFile}>Choose file</ButtonPrimary>
                    <span className="file-name">Choose image, video, audio</span>
                </div>
                <input accept="image/*, video/*, audio/*" onChange={onChange} tabIndex="1" type="file" id={label} name={label} />
            </label>
        </div>
    );
}

function chooseFile() {
    const file = document.querySelector('input[type="file"]');
    file.click();
}

function onChange() {
    const file = document.querySelector('input[type="file"]');
    const fileName = document.querySelector('.file-name');
    fileName.textContent = file.files[0] ? file.files[0].name : '';
}