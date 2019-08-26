import React from 'react';

import './HistoryMode.css';

function HistoryMode(props) {
    const { teacher, score } = props;

    return (
        <div className="HistoryMode">
            <div className="score">
                Score: {score}
            </div>
            <div className="teacher">{teacher}</div>
        </div>
    );
}

export default HistoryMode;