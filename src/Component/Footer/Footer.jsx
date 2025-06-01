import React from 'react';
import './footer.css';
import SocialSectionFooter from './SocialSectionFooter';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_left_div">
        <h3>About Us</h3>
        <p>
          Veerveda Arogya Life empowers wellness through Ayurveda, herbal innovation, and nationwide
          healthcare initiatives.
        </p>
      </div>

      <div className="footer_middle_div">
        <img src="./leaf_footer.png" alt="Leaf Footer" />
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>About</p>
      </div>

      <div className="footer_right_div">
        <h3>Contact Info</h3>
        <p>📞 +91 9058809580 </p>
        <p>✉️ veerveda10125@gmail.com</p>
        <div>
          <p>🏠 Anmol Vihar Paper Mill Road </p>
          <p>Saharanpur (247001) </p>
          <p>UP, India</p>
        </div>
      </div>

      {/* Social Section */}
      <SocialSectionFooter/>

    </footer>
  );
}
