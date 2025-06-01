import Header from './Component/Header/Header';
import './assets/Style/Global.css';
import Carrousal from './Component/Carrousal/Carrousal';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import About from './Sections/About/About';
import { imageData } from './Component/Carrousal/image';
import FormWithMap from './Layout/FormWithMap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './Pages/ContactUs/ContactUs';
import Introduction from './Pages/Introduction/Introduction';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import OurMission from './Pages/OurMission/OurMission';
import Updates from './Pages/Updates/Updates';
import DirectorMessage from './Component/DirectorMessage/DirectorMessage';


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              <Carrousal slides={imageData} />
              <Hero />
              <About />
              <FormWithMap />
            </>
          } />

        <Route
          path={'/Home'}
          element={
            <>
              <Carrousal slides={imageData} />
              <Hero />
              <About />
              <FormWithMap />
            </>
          } />

        <Route
          path='/introduction'
          element={
            <>
              <Introduction />
            </>
          }
        />

        <Route
          path='/our_mission'
          element={
            <OurMission />
          }
        />

        <Route
          path='updates'
          element={
            <Updates/>
          }
        />

        <Route
          path='/director'
          element={
            <DirectorMessage />
          }
        />


        <Route
          path='/events'
          element={
            <ComingSoon />
          }
        />

        <Route
          path={'/contact_us'}
          element={
            <ContactUs />
          }
        />


      </Routes>
      <Footer />
    </>
  );
}

