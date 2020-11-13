import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import PartnersBar from "./PartnersBar";
import logo from "../images/logo-new1.jpg";

function Landing() {
  return (
    <section className='home__page' id='landing'>
      <div className='welcome__wrapper'>
        <h1>Invictus-Tech</h1>
      </div>
      <a
        href='#services'
        className='mainpage-link'
      >
        <i class='fas fa-chevron-down'></i>{" "}
      </a>
      <PartnersBar />
    </section>
  );
}

export default Landing;
