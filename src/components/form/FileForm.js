import React from 'react';
import PropTypes from 'prop-types';

import './FileForm.css';
import ButtonPrimary from '../buttons/ButtonPrimary';

export default function FileForm(props) {
    const { label, onChange, fileAttach = {} } = props;
    const chooseFile = () => {
        const file = document.querySelector('input[type="file"]');
        file.click();
    }
    
    const handleChange = () => {
        const file = document.querySelector('input[type="file"]');
        const fileName = document.querySelector('.file-name');
        fileName.textContent = file.files[0] ? file.files[0].name : 'Choose image, video, audio';
        onChange(file.files[0]);
    }

    return (
        <div className="FileForm">
            <label htmlFor={label}>
                <span className="label-name">{label}</span>
                <div className="select-file">
                    <ButtonPrimary handleClick={chooseFile}>Choose file</ButtonPrimary>
                    <span className="file-name">{fileAttach.name ? fileAttach.name : 'Choose image, video, audio'}</span>
                </div>
                <input
                    accept="image/*, video/*, audio/*"
                    onChange={handleChange}
                    tabIndex="1" 
                    type="file" 
                    id={label} 
                    name={label}
                />
            </label>
        </div>
    );
}
FileForm.propTypes = { 
    label: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired,
    fileAttach: PropTypes.object.isRequired
}
