import React from 'react';

import './BWButtonBorder.css';

export default function (props) {
    const handleClick = props.handleClick || (() => {});
    return (
        <button onClick={() => handleClick()} className="BWButtonBorder">{props.children}</button>
    );
}