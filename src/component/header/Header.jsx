import React from 'react';
import "./Header.css";

// This is a placeholder component for icons
// Replace with actual SVG or image components for your icons
const Icon = ({ label }) => <span>{label}</span>;

const Header = () => {

  return (
    <div className="header">
        <div className='menu'>
            <div className="iconStyle">
                <Icon label="🌱" /> {/* Replace with your control icon */}
                <span>Control</span>
            </div>
            <div className="iconStyle">
                <Icon label="📰" /> {/* Replace with your news icon */}
                <span>News</span>
            </div>
            <div className="iconStyle">
                <Icon label="🌿" /> {/* Replace with your plants icon */}
                <span>Plants</span>
            </div>
            <div className="iconStyle">
                <Icon label="🔧" /> {/* Replace with your device icon */}
                <span>Device</span>
            </div>
        </div>
        <div className='right-menu'>
            <div className="icon-menu">
                <Icon label="🌿" /> {/* Replace with your device icon */}
            </div>
        </div>
    </div>
  );
};

export default Header;
