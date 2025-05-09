import React from 'react';
import LiComponent from '../li/LiComponent';
import { headerList } from './headerData';
import Image from '../Image/Image';
import './Header.css';
import Button from '../Button/Button';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header_main_div">
      <div className="header_main_inner_div">
        <div className="header_left_div">
          <img src="./veervedaLogo_Top.png" alt="" className="main_Logo" />
          <img src="./veervedaText.png" alt="" className="logo_text" />
        </div>
        <div className={`header_middle_div ${isMenuOpen ? 'show_menu' : 'hide_menu'}`}>
          <LiComponent headerList={headerList} />
        </div>
        <div className="header_right_div">
          <Button className="header_btn_call">
            <img src="./phone.png" alt="" className="call_btn_header" />
            <span>+91 9410909079 </span>
          </Button>
          <button className="menu_toggle" onClick={handleToggle}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
