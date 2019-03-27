import React from 'react';

import './Home.css';

import Banner from './Banner';
import GTB from './GTB';

export default function () {
    return (
        <div className="Home">
            <Banner></Banner>
            <GTB></GTB>            
        </div>
    );
}