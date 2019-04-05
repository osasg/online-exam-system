import React from 'react';

import './InputForm.css';

export default function InputForm(props) {
    const { label, placeholder, type = 'text', onChange, value, tabIndex = 1 } = props;

    return (
        <div className="InputForm">
            <label htmlFor={label}>
                <span className="label-name">{label}</span>
                <input
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    tabIndex={tabIndex}
                    type={type}
                    id={label}
                    name={label}
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
}