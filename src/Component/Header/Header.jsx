import LiComponent from '../li/LiComponent';
import { headerList } from './headerData';
import './Header.css';
import Button from '../Button/Button';
import { useState } from 'react';
import { contactNumber } from '../../Data/contactNumber';
import SocialIcons, { SocialIconsWeb } from '../SocialIcons/SocialIcons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);

  };

  const handleNavigateToHome = () => {
    navigate('/home')
  }

  return (
    <>
      <header className="header_main_div">
        <div className='mobile_view_only upper_header'>
          <SocialIcons />
          <div className='mobile_only_call_div'>
            <img src="./phone.png" alt="" className="call_btn_header" />
            <span>+91 9058809580 </span>
          </div>
        </div>
        <div className="header_main_inner_div">
          <div className="header_left_div"
            onClick={handleNavigateToHome}
          >

            <img src="./veervedaLogo_Top.png" alt="" className="main_Logo" />
            <img src="./veervedaText.png" alt="" className="logo_text" />
          </div>
          <nav id="nav-menu" className={`header_middle_div ${isMenuOpen ? 'show_menu' : 'hide_menu'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <LiComponent 
              headerList={headerList} 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
          </nav>
          <div className="header_right_div">
            <SocialIconsWeb />
            <div className='header_btn_main_div'>
              <Button className="header_btn_call web_only_view">
                <img src="./phone.png" alt="" className="call_btn_header" />
                <span>{contactNumber}</span>
              </Button>
              <button
                aria-controls="nav-menu"
                aria-expanded={isMenuOpen}
                onClick={handleToggle}
                className="menu-toggle-button"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: '8rem' }} />
    </>
  );
}