import React from 'react';

import './InputForm.css';

export default function (props) {
    const { label, placeholder } = props;
    return (
        <div className="InputForm">
            <label htmlFor={label}>
                <span className="label-name">{label}</span>
                <input tabIndex="1" type="text" id={label} name={label} placeholder={placeholder} />
            </label>
        </div>
    );
}