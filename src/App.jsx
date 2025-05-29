import Header from './Component/Header/Header';
import './assets/Style/Global.css';
import Carrousal from './Component/Carrousal/Carrousal';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import About from './Sections/About/About';
import { imageData } from './Component/Carrousal/image';
import FormWithMap from './Layout/FormWithMap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Carrousal slides={imageData}/>
            <Hero />
            <About />
            <FormWithMap/>
          </>
        }/>
        {/* <Route path="/about/*" element={<AboutSection />} /> */}
        {/* <Route path="/committee" element={<CommitteeSection />} /> */}



        
      </Routes>
      <Footer />
    </>
  );
}

