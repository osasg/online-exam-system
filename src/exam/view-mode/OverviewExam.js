import React from 'react';

import './OverviewExam.css';
import FinishTimer from '../nav/FinishTimer';

export default function () {
    return (
        <div className="OverviewExam">
            <div className="finish-timer-wrap">
                <FinishTimer></FinishTimer>
            </div>
            <div className="qa-group">
                <div className="qa">1. A</div>
                <div className="qa">2. C</div>
                <div className="qa non-answer">3. --</div>
                <div className="qa">4. A</div>
                <div className="qa">5. B</div>
                <div className="qa">6. A</div>
                <div className="qa">7. C</div>
                <div className="qa non-answer">8. --</div>
                <div className="qa">9. A</div>
                <div className="qa">10. B</div>
                <div className="qa">11. A</div>
                <div className="qa">12. C</div>
                <div className="qa non-answer">13. --</div>
                <div className="qa">14. A</div>
                <div className="qa">15. B</div>
                <div className="qa">16. A</div>
                <div className="qa">17. C</div>
                <div className="qa non-answer">18. --</div>
                <div className="qa">19. A</div>
                <div className="qa">20. B</div>
                <div className="qa">21. A</div>
                <div className="qa">22. C</div>
                <div className="qa non-answer">23. --</div>
                <div className="qa">24. A</div>
                <div className="qa">25. B</div>
            </div>
        </div>
    );
}