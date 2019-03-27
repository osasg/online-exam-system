import React from 'react';

import './Home.css';

import Button from './Button';

export default function () {
    return (
        <div className="Home">
            <div className="top">
                <div className="menubar">
                    <div className="brand">
                        <span className="logo">IC</span>
                        <span className="name">Examiner</span>
                    </div>
                    <div className="login">
                        Login
                    </div>
                </div>
                <div className="top-wrap">
                    <p className="top-head">The best way to taking online exam</p>
                    <p className="top-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-wrap">
                    <div className="gtb student">
                        <div class="title">Student</div>
                        <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                        <Button>Atempt now</Button>
                    </div>
                    <div className="gtb teacher">
                        <div class="title">Teacher</div>
                        <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                        <Button>Questioning</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}