import React from 'react';
import PropTypes from 'prop-types';

import './InputForm.css';

export default function InputForm(props) {
    const {
        label, 
        placeholder, 
        type = 'text', 
        onChange, 
        value, 
        tabIndex = 1, 
        autocomplete = true
    } = props;

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
                    autoComplete={autocomplete.toString()}
                />
            </label>
        </div>
    );
}

InputForm.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    tabIndex: PropTypes.number.isRequired,
    autocomplete: PropTypes.string
}
