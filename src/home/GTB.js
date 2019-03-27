import React from 'react';

import './GTB.css';

import Button from '../buttons/ButtonPrimary';

export default function () {
    return (
        <div className="GTB">
            <div className="bottom-wrap">
                <div className="gtb student">
                    <div className="title">Student</div>
                    <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                    <Button>Atempt now</Button>
                </div>
                <div className="gtb teacher">
                    <div className="title">Teacher</div>
                    <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                    <Button>Questioning</Button>
                </div>
            </div>
        </div>
    );
}