import React from 'react';
import PropTypes from 'prop-types';

import './ButtonPrimary.css';

export default function ButtonPrimary(props) {
    const handleClick = props.handleClick || (() => {});
    return (
        <button onClick={() => handleClick()} className="ButtonPrimary">{props.children}</button>
    );
}

ButtonPrimary.propTypes = {
    handleClick: PropTypes.func.isRequired
}
