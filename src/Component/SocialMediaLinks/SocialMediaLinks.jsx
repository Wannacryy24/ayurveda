// SocialMediaLinks.jsx
import React from 'react';
import './SocialMediaLinks.css';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialMediaLinks = () => {
  return (
    <div className="social-container">
      <p className="subtitle">We are social</p>
      <h2 className="title">Follow us on social media</h2>
      <div className="icon-wrapper">
        <a href="https://x.com/Veervedaarogya" className="icon-box twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61576111817317&rdid=et461n6u1sPfyMlT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18TGpk3bA1%2F#" className="icon-box facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/veervedaarogyalife/" className="icon-box instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:example@email.com" className="icon-box email">
          <HiOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
