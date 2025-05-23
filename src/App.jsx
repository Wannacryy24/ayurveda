import React from 'react';
import Header from './Component/Header/Header';
import './assets/Style/Global.css';
import Carrousal from './Component/Carrousal/Carrousal';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import About from './Sections/About/About';
import { imageData } from './Component/Carrousal/image';

export default function App() {
  return (
    <>
      <Header />
      <Carrousal slides={imageData}/>
      <Hero />
      <About />
      <Footer />
    </>
  );
}
