import React from 'react';

import './ImageForm.css';

export default function (props) {
    const { label } = props;
    return (
        <div className="ImageForm">
            <label htmlFor={label}>
                <span className="label-name">{label}</span>
                <input tabIndex="1" type="text" id={label} name={label} />
            </label>
        </div>
    );
}