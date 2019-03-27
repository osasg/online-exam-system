import React from 'react';

import './ButtonPrimary.css';

export default function (props) {
    const handleClick = props.handleClick || (() => {});
    return (
        <button onClick={() => handleClick()} className="ButtonPrimary">{props.children}</button>
    );
}