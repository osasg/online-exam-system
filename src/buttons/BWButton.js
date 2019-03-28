import React from 'react';

import './BWButton.css';

export default function (props) {
    const handleClick = props.handleClick || (() => {});
    return (
        <button onClick={() => handleClick()} className="BWButton">{props.children}</button>
    );
}