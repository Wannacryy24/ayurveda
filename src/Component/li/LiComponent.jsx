import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function LiComponent({ headerList = [] }) {
  const [hoveredSection, setHoveredSection] = useState(null);
  const navigate = useNavigate();
    const handleClick = (subItem) => {
    // Build the url like /about/xyz, where xyz is subItem
    const url = `/about/${subItem.toLowerCase()}`;
    navigate(url);
  };
  return (
    <ul className="menu">
      {headerList.map((item) => (
        <li
  key={item.section}
  className="menu-item"
  onMouseEnter={() => setHoveredSection(item.section)}
  onMouseLeave={() => setHoveredSection(null)}
>
  <span>{item.section} </span>
  {item.innerData && (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>)}
  {item.innerData && (
  <ul className={`submenu ${hoveredSection === item.section ? 'show' : ''}`}>
    {item.innerData.map((subItem) => (
      <li key={subItem} className="submenu-item"
        onClick={() => handleClick(subItem)}
      >
        {subItem}
      </li>
    ))}
  </ul>
)}

</li>

      ))}
    </ul>
  );
}
