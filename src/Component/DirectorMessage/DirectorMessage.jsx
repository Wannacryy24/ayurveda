import React from 'react';
import './TestimonialMessage.css';

const testimonials = [
  {
    name: 'Mr. Veer Singh, Director',
    message:
      'We believe that health is not just the absence of disease, but a state of vibrant energy and clarity — physically, mentally, and spiritually. Through our products and services, we are committed to delivering holistic care rooted in Indian tradition, backed by quality, research, and customer trust.',
    imageSrc: '/SagarFather.png',
    heading: '',
  },
  {
    name: 'Dr. Vivek Sagar, Director',
    message:
      'To become a leading name in holistic wellness by offering trusted, natural, and innovative Ayurvedic solutions that restore harmony to mind, body, and spirit. We envision a healthier world where ancient Indian wellness wisdom meets modern lifestyles — empowering people to live more consciously and vibrantly.',
    imageSrc: 'Vivek.png',
  },
];
const TestimonialMessage = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h1
          style={{
            width:'100vw',
            display:'flex',
            justifyContent:'center',
            alignContent:'center'
          }}
        >Director Message</h1>
        {testimonials.map((testimonial, index) => {
          const isImageRight = index % 2 === 0; // ✅ First = right, Second = left
          return (
            <div
              key={index}
              className={`testimonial-card ${isImageRight ? 'reverse' : ''}`}
            >
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                {testimonial.heading && (
                  <h3 className="testimonial-heading">{testimonial.heading}</h3>
                )}
                <p className="testimonial-message">{testimonial.message}</p>
                <p className="testimonial-name">{testimonial.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialMessage;
