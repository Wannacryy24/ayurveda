import React from 'react';
import './OurVision.css';

const Section = ({ title, text, imgSrc, imgAlt, flip }) => {
  return (
    <section className={`our-vision ${flip ? 'flip' : ''}`}>
      <div className="vision-image">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="vision-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

const OurVision = () => {
  return (
    <>
      <Section
        title="Our Vision"
        text="At Veerveda Arogya Life Pvt. Ltd., our vision is to become a global leader in Ayurveda-driven wellness, building a healthier world through nature-powered, accessible, and evidence-based solutions."
        imgSrc="/Vision.jpg"
        imgAlt="Person meditating in nature"
        flip={false}
      />
      <Section
        title="Our Mission"
        text="To empower individuals to take charge of their well-being by offering authentic Ayurvedic products, services, and experiences—sustainably and ethically."
        imgSrc="/Yoga.webp"
        imgAlt="Person meditating in nature"
        flip={true}  // Flip this section
      />
    </>
  );
};

export default OurVision;
