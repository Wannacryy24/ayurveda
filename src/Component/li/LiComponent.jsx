import React from 'react';

export default function LiComponent({ headerList = [] }) {
  return (
    <ul>
      {headerList.map((item) => (
        <li key={item} className={`li_${item}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
