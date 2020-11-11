import React from "react";
// import PartnersBar from "./PartnersBar.css";
import "./Home.css";
import Landing from "../LandingPage/Landing";
import AboutPage from "../AboutPage/AboutPage";
import Contact from "../Contact/Contact";
import Partnerships from "../Partnerships/Partnerships";
import Services from "../Services/Services";
// import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div>
      <Landing />
      <AboutPage />
      <Services />
      <Partnerships />
      <Contact />
    </div>
  );
}

export default Home;
