import { useNavigate } from 'react-router-dom';
import './footer.css';
import SocialSectionFooter from './SocialSectionFooter';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer_left_div">
        <div className="footer_logo_container">
          <img
            src="vv.png"
            className="vv_footer_img"
            alt="Veerveda Logo"
          />
        </div>
        <p>
          Veerveda Arogya Life empowers wellness through Ayurveda, herbal innovation, and nationwide
          healthcare initiatives.
        </p>
      </div>

      <div className="footer_details">
        <div className="footer_middle_div">
          <h3>Menu</h3>
          <div className="footer_middle_div_inside_div">
            <p onClick={() => navigate('/home')}>Home</p>
            <p onClick={() => navigate('/introduction')}>Introduction</p>
            <p onClick={() => navigate('/updates')}>Updates</p>
            <p onClick={() => navigate('/director')}>Director</p>
            <p onClick={() => navigate('/events')}>Events</p>
            <p onClick={() => navigate('/contact_us')}>Contact Us</p>
          </div>
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
        <SocialSectionFooter />
      </div>
    </footer>
  );
}
