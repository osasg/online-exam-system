import React from 'react';

import './Button.css';

export default function (props) {
    return (
        <button class="Button">{props.children}</button>
    );
}