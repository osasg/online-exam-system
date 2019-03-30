import React from 'react';

import './ContainerTab.css';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import InputForm from '../../form/InputForm';

export default function (props) {
    return (
        <div className="ContainerTab">
            <div className="boxes">
                <div className="box-tab register active">
                    <InputForm label="username" placeholder="quangdatpham" />
                    <InputForm label="password" placeholder="************" />
                    <InputForm label="confirm" placeholder="************" />
                </div>
                <div className="box-tab information">
                    <InputForm label="email" placeholder="quangdat2000.pham@gmail.com" />
                    <InputForm label="phone" placeholder="0383545450" />
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