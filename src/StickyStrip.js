import React from 'react';
import './StickyStrip.css'; // Import the CSS file for styling

const StickyStrip = () => {
    return (
        <div className="sticky-strip">
            {/* Section 1 (Blue) */}
            <div className="section blue">
                <h2 style={{color:"white"}}>CENTE-TECH 2023</h2>
            </div>

            {/* Section 2 (Red) */}
            <div className="section red"></div>

            {/* Section 3 (Yellow) */}
            <div className="section yellow"></div>
        </div>
    );
};

export default StickyStrip;
