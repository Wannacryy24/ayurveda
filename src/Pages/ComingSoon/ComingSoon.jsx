import React from 'react';
import './ComingSoon.css'; // Make sure to create this file

export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-box">
        <img
          src="/veervedaLogo_Top.png"
          alt="VeerVeda Logo"
          className="coming-soon-logo"
        />
        <h1 className="coming-soon-title">We’ll Update This Page Soon 🌿</h1>
        <p className="coming-soon-message">
          Our site is currently undergoing a rejuvenation process, just like nature does.
          <br />
          Please check back shortly for a refreshed experience rooted in Ayurveda.
        </p>
        <a href="tel:+919410909079" className="coming-soon-button">
          📞 +91 9058809580
        </a>
      </div>
    </div>
  );
}
