import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/dashboard/student"><Button>Atempt now</Button></Link>
                </div>
                <div className="gtb teacher">
                    <div className="title">Teacher</div>
                    <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                    <Link to="/dashboard/teacher"><Button>Questioning</Button></Link>
                </div>
            </div>
        </div>
    );
}