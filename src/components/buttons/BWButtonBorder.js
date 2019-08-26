import React from 'react';
import PropTypes from 'prop-types';

import './BWButtonBorder.css';

export default function BWButtonBorder(props) {
    const handleClick = props.handleClick || (() => {});
    return (
        <button onClick={() => handleClick()} className="BWButtonBorder">{props.children}</button>
    );
}

BWButtonBorder.propTypes = {
  handleClick: PropTypes.func.isRequired
}
