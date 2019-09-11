import React from 'react';
import PropTypes from 'prop-types';

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

History.propTypes = {
    teacher: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
};

export default HistoryMode;
