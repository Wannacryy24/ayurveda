import React from 'react';
import LiComponent from '../li/LiComponent';
import { headerList } from './headerData';
import Image from '../Image/Image';
import './Header.css';
import Button from '../Button/Button';
import { useState } from 'react';
import { contactNumber } from '../../Data/contactNumber';
import SocialIcons, { SocialIconsWeb } from '../SocialIcons/SocialIcons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header_main_div">
      <div className='mobile_view_only upper_header'>
        <SocialIcons/>
        <div className='mobile_only_call_div'>
            <img src="./phone.png" alt="" className="call_btn_header" />
            <span>+91 9410909079 </span>
        </div>
      </div>
      <div className="header_main_inner_div">
        <div className="header_left_div">
          <img src="./veervedaLogo_Top.png" alt="" className="main_Logo" />
          <img src="./veervedaText.png" alt="" className="logo_text" />
        </div>
        <nav id="nav-menu" className={`header_middle_div ${isMenuOpen ? 'show_menu' : 'hide_menu'}`}>
          <LiComponent headerList={headerList} />
        </nav>
        <div className="header_right_div">
          <SocialIconsWeb/>
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
  );
}