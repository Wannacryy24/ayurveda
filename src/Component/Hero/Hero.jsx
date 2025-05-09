import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_inner_right_div">
        <div className="hero_image_main_div">
          <img src="./V.png" alt="" />
          <div className="hero_h1_div">
            <h1>Welcome to </h1>
            <h1>Veerveda Arogya</h1>
            <h1>Life Pvt. Ltd.</h1>
          </div>
        </div>
        <p>
          At Veerveda Arogya Life, we are dedicated to enhancing health and wellness through the
          power of Ayurveda and herbal science. With a strong foundation in traditional knowledge
          and modern innovation, we are pioneers in herbal drug manufacturing, and active organizers
          of national conferences, seminars, CME programs, sports events, and diverse healthcare
          projects.
        </p>
      </div>
      <div className="hero_inner_left_div">
        <img src="./hero_img.png" alt="" className="hero_img" />
      </div>
    </div>
  );
}
