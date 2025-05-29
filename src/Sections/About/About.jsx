import React from 'react';
import './about.css';
import TabComponentAbout from '../../Component/TabComponentAbout/TabComponentAbout';

import { aboutData } from './about_Data';

export default function About() {
  return (
    <div className="about_div">
      <TabComponentAbout aboutData={aboutData} />
    </div>
  );
}