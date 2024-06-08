import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import "../src/CSS/root.css"

import React, {useRef, useEffect, useState} from 'react'
import Fluid from 'webgl-fluid'
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Footer from './Components/Footer';




function App() {

  const canvas = useRef(null)

  



  const options = {
    TRIGGER: 'hover',
    DENSITY_DISSIPATION: 6,
    VELOCITY_DISSIPATION: 4,
    PRESSURE: 0.8,
    CURL: 20,
    SPLAT_RADIUS: 0.35,
    VORTICITY:30,
    SHADING:true,
    SIM_RESOLUTION:128,
  }


  
  

  useEffect(function () {
    let c = canvas.current

    Fluid(c,options);


  
  }, [options])



  

  return (
    <div className="App" >
        <canvas ref={canvas} style={{width: '100%', height: '100%'}}></canvas>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
    </div>
  );
}

export default App;
