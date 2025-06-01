import React from 'react';
import Hero from '../../Component/Hero/Hero';
import './Intro.css';

export default function Introduction() {
  return (
    <section className="introduction_page_div">
      <figure className="intro-image-wrapper">
        <img
          src="/Lord_Dhanvantari.png"
          alt="Lord Dhanvantari"
          className="intro-image"
        />
      </figure>
            <Hero />
      <article className="intro-text">
        <section className="core-offerings">
  <h2>Our Core Offerings</h2>
  <ul>
    <li>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2913/2913461.png"
        alt="Wellness"
        className="offering-icon"
      />
      🧪 <strong>Ayurveda Wellness Solutions:</strong> Harness the power
      of nature with our range of Ayurvedic products designed to boost
      immunity, enhance digestion, detoxify the body, improve mental
      well-being, and increase vitality. All our formulations are
      ethically sourced, scientifically validated, and crafted under
      GMP-certified processes.
    </li>
    <li>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2920/2920236.png"
        alt="Manufacturing"
        className="offering-icon"
      />
      🏭 <strong>Manufacturing Excellence:</strong> Our ISO and
      GMP-certified facility ensures the highest standards of quality,
      safety, and consistency—from raw ingredients to finished
      products. Every batch is a promise of purity and potency.
    </li>
    <li>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1534/1534006.png"
        alt="Events"
        className="offering-icon"
      />
      🧘‍♂️ <strong>Health & Sports Events:</strong> We promote active,
      Ayurvedic lifestyles through marathons, yoga camps, wellness fairs,
      and fitness-centered events—connecting communities with mindful
      living.
    </li>
    <li>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
        alt="Webinars"
        className="offering-icon"
      />
      🎓 <strong>Webinars, Seminars & Conferences:</strong> Join our
      educational initiatives featuring Ayurvedic experts, wellness
      coaches, and health professionals. Our events foster awareness,
      dialogue, and deeper understanding of natural health practices.
    </li>
    <li>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
        alt="Collaboration"
        className="offering-icon"
      />
      🤝 <strong>Collaborative Wellness Programs:</strong> Partnering
      with hospitals, corporates, and fitness centers, we deliver
      personalized Ayurvedic programs focused on stress relief,
      lifestyle disorder management, and performance optimization.
    </li>
  </ul>
</section>


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
  );
}
