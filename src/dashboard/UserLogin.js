import React from 'react';

import './UserLogin.css';

import Avatar from '../icons/avatar.png';

export default function (props) {
    let { fullName, avatarSrc } = props;
    
    return (
        <div className="UserLogin">
            <img className="avatar" src={avatarSrc ? avatarSrc : Avatar} alt={fullName} />
            <span className="fullname">{fullName}</span>
        </div>
    );
}