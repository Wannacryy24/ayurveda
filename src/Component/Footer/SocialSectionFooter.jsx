import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function SocialSectionFooter() {
  return (
    <div className="footer_social_div">
        <h1>We Are on Social</h1>
        <div className="social-icons">
          <a
            href="https://x.com/Veervedaarogya"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
            aria-label="Twitter"
          >
            <FaTwitter />
            <span className="social-text">Twitter</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61576111817317&rdid=et461n6u1sPfyMlT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18TGpk3bA1%2F#"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
            aria-label="Facebook"
          >
            <FaFacebookF />
            <span className="social-text">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/veervedaarogyalife/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
            aria-label="Instagram"
          >
            <FaInstagram />
            <span className="social-text">Instagram</span>
          </a>
          <a href="mailto:veerveda10125@gmail.com" className="email" aria-label="Email">
            <FaEnvelope />
            <span className="social-text">Gmail</span>
          </a>
        </div>
      </div>
  )
}
