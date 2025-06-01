import React from "react";
import "./OurMission.css"; // Make sure this file is in the same folder

const OurMission = () => {
  return (
    <section className="our-mission-section">
      <div className="our-mission-container">
        <h2 className="our-mission-heading">Our Mission</h2>
        <p className="our-mission-text">
          <strong>Our Vision:</strong> To become a leading name in holistic wellness by offering trusted,
          natural, and innovative Ayurvedic solutions that restore harmony to mind, body, and spirit.
        </p>
        <p className="our-mission-text">
          We envision a healthier world where ancient Indian wellness wisdom meets modern lifestyles —
          empowering individuals to live more consciously and vibrantly.
        </p>
        <p className="our-mission-text">
          Through ethical sourcing, sustainable practices, and a deep respect for tradition, we aim to inspire
          a global movement toward balance, mindfulness, and preventive care.
        </p>
        <p className="our-mission-text">
          Our mission is not just to heal, but to educate — reconnecting people with nature’s intelligence and
          their own inner vitality.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
