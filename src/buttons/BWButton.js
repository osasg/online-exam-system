import React from 'react';

import './BWButton.css';

export default function BWButton(props) {
    const handleClick = props.handleClick || (() => {});
    return (
        <button onClick={() => handleClick()} className="BWButton">{props.children}</button>
    );
}