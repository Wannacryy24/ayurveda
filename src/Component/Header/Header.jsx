import React, { useState } from 'react';
import LiComponent from '../li/LiComponent';
import { headerList } from './headerData';
import './Header.css';
import Button from '../Button/Button';
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
    navigate('/home');
  };

  return (
    <>
      <header className="header_main_div">
        {/* Mobile View Upper Header with icons - unchanged */}
        <div className="mobile_view_only upper_header">
          <SocialIcons />
          <div className="mobile_only_call_div">
            <img src="./phone.png" alt="Call Icon" className="call_btn_header" />
            <span>{contactNumber}</span>
          </div>
        </div>

        <div className="header_main_inner_div">
          <div className="header_left_div" onClick={handleNavigateToHome}>
            <img src="./veervedaLogo_Top.png" alt="Logo" className="main_Logo" />
            <img src="./veervedaText.png" alt="Logo Text" className="logo_text" />
          </div>

          <nav
            id="nav-menu"
            className={`header_middle_div ${isMenuOpen ? 'show_menu' : 'hide_menu'}`}
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
            <div className="header_btn_main_div">
              <Button className="header_btn_call web_only_view">
                <img src="./phone.png" alt="Call Icon" className="call_btn_header" />
                <span>{contactNumber}</span>
              </Button>

              {/* Hamburger menu button - visible only on mobile */}
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

      {/* Spacer to prevent content jump on scroll */}
      <div style={{ height: '8rem' }} />
    </>
  );
}
