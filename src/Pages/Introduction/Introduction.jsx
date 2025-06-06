import React from 'react';
import Hero from '../../Component/Hero/Hero';
import './Intro.css';
import OfferingCard from '../../Component/Offerings/OfferingCard';
import OurVision from '../../Component/OurVision/OurVision';

export default function Introduction() {
  return (
    <div className='Intro_Main_Div'>
      <section className="introduction_page_div">
        <figure className="intro-image-wrapper">
          <img
            src="/Dhan.png"
            alt="Lord Dhanvantari"
            className="intro-image"
          />
        </figure>
        <Hero />
        <article className="intro-text">
          <OfferingCard/>  
        </article>
        <OurVision/>
      </section>
    </div>
  );
}
