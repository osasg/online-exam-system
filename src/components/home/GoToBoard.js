import React from 'react';
import { Link } from 'react-router-dom';

import './GoToBoard.css';

import ButtonPrimary from '../buttons/ButtonPrimary';

export default function GoToBoard() {
    return (
        <div className="GoToBoard">
            <div className="bottom-wrap">
                <div className="gtb student">
                    <div className="title">Student</div>
                    <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                    <Link to="/dashboard/student">
                        <ButtonPrimary handleClick={() => {}}>Atempt now</ButtonPrimary>
                    </Link>
                </div>
                <div className="gtb teacher">
                    <div className="title">Teacher</div>
                    <p>Lorem Ipsum is simply dummy text of the printing
and`typesetting industry.</p>
                    <Link to="/dashboard/teacher">
                        <ButtonPrimary handleClick={() => {}}>Questioning</ButtonPrimary>
                    </Link>
                </div>
            </div>
        </div>
    );
}
