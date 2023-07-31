import React, {useEffect, useState} from 'react';
import './StickyStrip.css'; // Import the CSS file for styling

const StickyStrip = () => {
    const [show, setShow] = useState(false);

  useEffect(() => {
    // Use a timeout to show the sticky strip after a short delay (e.g., 1 second)
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);
    return (
        <div className={`sticky-strip ${show ? 'show' : ''}`}>
            {/* Section 1 (Blue) */}
            <div className="section blue">
                <h4>CENTE-TECH 2023</h4>
            </div>

            {/* Section 2 (Red) */}
            <div className="section red"></div>

            {/* Section 3 (Yellow) */}
            <div className="section yellow"></div>
        </div>
    );
};

export default StickyStrip;
