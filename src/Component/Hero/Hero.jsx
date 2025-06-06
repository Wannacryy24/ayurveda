import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero_content">
        {/* Left: Logo and Text */}
        <div className="hero_text">
          <div className="hero_title_group">
            <img
              src="./vv.png"
              alt="Veerveda Arogya Life logo"
              className="hero_logo"
            />
            <div className="hero_heading">
              <h1>Welcome to</h1>
              <h1>Veerveda Arogya</h1>
              <h1>Life Pvt. Ltd.</h1>
            </div>
          </div>

          <p className="hero_description">
            At Veerveda Arogya Life, we are dedicated to enhancing health and wellness through
            the power of Ayurveda and herbal science. With a strong foundation in traditional
            knowledge and modern innovation, we are pioneers in herbal drug manufacturing and
            active organizers of national conferences, seminars, CME programs, sports events,
            and diverse healthcare projects.
          </p>
        </div>

        {/* Right: Illustration */}
        <div className="hero_image_wrapper">
          <img
            src="./hero_img.png"
            alt="Ayurvedic ingredients and herbs"
            className="hero_illustration"
          />
        </div>
      </div>
    </section>
  );
}
