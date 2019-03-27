import React from 'react';

import './ButtonPrimary.css';

export default function (props) {
    return (
        <button class="ButtonPrimary">{props.children}</button>
    );
}