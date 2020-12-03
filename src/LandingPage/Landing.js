import React from "react";

import "./LandingPage.css";
import PartnersBar from "./PartnersBar";


function Landing() {
  return (
    <section className='home__page' id='landing'>
      <div className='welcome__wrapper'>
<h3>Welcome To</h3>
        <h1>INVICTUS-TECH</h1>
      </div>
      <a
        href='about'
        className='mainpage-link'
      >
        <i class='fas fa-chevron-down'></i>
      </a>
      <PartnersBar />
    </section>
  );
}

export default Landing;
