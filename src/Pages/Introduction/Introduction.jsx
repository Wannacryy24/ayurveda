import React from 'react';
import Hero from '../../Component/Hero/Hero';
import './Intro.css';
import OfferingCard from '../../Component/Offerings/OfferingCard';

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
          <section className="vision-mission">
            <h2>Our Vision</h2>
            <p>
              🌍 To become a global leader in Ayurveda-driven wellness, building a
              healthier world through nature-powered, accessible, and
              evidence-based solutions.
            </p>

            <h2>Our Mission</h2>
            <p>
              🎯 To empower individuals to take charge of their well-being by
              offering authentic Ayurvedic products, services, and
              experiences—sustainably and ethically.
            </p>
          </section>
        </article>


      </section>
    </div>
  );
}
