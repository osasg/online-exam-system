import React from 'react';

import './ContainerTab.css';
import ButtonPrimary from '../buttons/ButtonPrimary';

export default function (props) {
    return (
        <div className="ContainerTab">
            <div className="boxes">
                <div className="box-tab register active">
                    <label htmlFor="username">
                        USERNAME
                        <input tabIndex="1" type="text" id="username" name="username" placeholder="quangdatpham"/>
                    </label>
                    <label htmlFor="password">
                        PASSWORD
                        <input tabIndex="2" type="password" id="password" name="password" placeholder="************"/>
                    </label>
                    <label htmlFor="password-confirm">
                        CONFIRM
                        <input tabIndex="3" type="password" id="password-confirm" name="passwordConfirm" placeholder="************"/>
                    </label>
                </div>
                <div className="box-tab information">
                    <label htmlFor="email">
                        EMAIL
                        <input type="text" id="email" name="email" placeholder="quangdatpham"/>
                    </label>
                    <label htmlFor="phonenumber">
                        PHONE NUMBER
                        <input type="phonenumber" id="phonenumber" name="phoneNumber" placeholder="************"/>
                    </label>
                </div>
                <div className="box-tab verify">
                    <p>
                        Check your email inbox to verify.
                    </p>
                </div>
            </div>
            <div className="wrap-next-btn">
                <ButtonPrimary handleClick={() => props.changeTab(null, 'next')} >Next</ButtonPrimary>
            </div>
        </div>
    );
}