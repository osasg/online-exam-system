import React from 'react';
import PropTypes from 'prop-types';

import './UserLogin.css';

import Avatar from '../../../assets/icons/avatar.png';

export default function UserLogin(props) {
    let { fullname, avatarSrc } = props;
    
    return (
        <div className="UserLogin">
            <img className="avatar" src={avatarSrc ? avatarSrc : Avatar} alt={fullname} />
            <span className="fullname">{fullname}</span>
        </div>
    );
}

UserLogin.propTypes = {
    fullname: PropTypes.string.isRequired,
    avatarSrc: PropTypes.string.isRequired
}
