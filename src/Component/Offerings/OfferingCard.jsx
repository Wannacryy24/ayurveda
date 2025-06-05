import React from 'react';
import './OfferingsSection.css';

const offerings = [
  {
    title: 'Ayurveda Wellness Solutions',
    description:
      'Boost immunity, improve digestion, and enhance vitality with ethically sourced Ayurvedic products.',
    image: 'https://cdn-icons-png.flaticon.com/512/2913/2913461.png',
  },
  {
    title: 'Manufacturing Excellence',
    description:
      'ISO & GMP-certified facility ensuring consistent quality from raw to final products.',
    image: 'https://cdn-icons-png.flaticon.com/512/2920/2920236.png',
  },
  {
    title: 'Health & Sports Events',
    description:
      'Promoting active lifestyles with marathons, yoga camps, and wellness fairs.',
    image: 'https://cdn-icons-png.flaticon.com/512/1534/1534006.png',
  },
  {
    title: 'Webinars & Seminars',
    description:
      'Events with experts and coaches that foster awareness on natural health practices.',
    image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
  },
  {
    title: 'Collaborative Wellness Programs',
    description:
      'Partnering with institutions to deliver stress relief & performance optimization programs.',
    image: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png',
  },
];

export default function CoreOfferingCard() {
  return (
    <section className="offerings-section">
      <h2 className="offerings-title">Our Core Offerings</h2>
      <div className="offerings-grid">
        {offerings.map((item, index) => (
          <div key={index} className="offering-card">
            <div className="card-img-wrapper">
              <img src={item.image} alt={item.title} className="offering-icon" />
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
