import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LiComponent.css';

import { FaHome, FaUser, FaCalendar, FaPhone, FaBook, FaStickyNote } from 'react-icons/fa';

export default function LiComponent({ headerList = [], activeSection, setActiveSection }) {
  const navigate = useNavigate();

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, '_');

  const handleHeaderNavigation = (item) => {
    setActiveSection(item.section);
    navigate(`/${slugify(item.section)}`);
  };

  const getIcon = (section) => {
    const icons = {
      Home: <FaHome />,
      Introduction: <FaBook />,
      Updates: <FaStickyNote />,
      Director: <FaUser />,
      Events: <FaCalendar />,
      'Contact Us': <FaPhone />,
    };
    return icons[section] || null;
  };

  return (
    <ul className="menu">
      {headerList.map((item) => (
        <li
          key={item.section}
          className={`menu-item ${activeSection === item.section ? 'active' : ''}`}
          onClick={() => handleHeaderNavigation(item)}
        >
          <span className="mobile-only-icon">{getIcon(item.section)}</span>
          <span>{item.section}</span>
        </li>
      ))}
    </ul>
  );
}
