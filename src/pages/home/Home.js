import React from 'react';

import './Home.css';

import Banner from '../../components/home/Banner';
import GoToBoard from '../../components/home/GoToBoard';

export default function () {
    return (
        <div className="Home">
            <Banner></Banner>
            <GoToBoard></GoToBoard>
        </div>
    );
}