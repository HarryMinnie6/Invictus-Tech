import React from "react";
import PartnersBar from "./PartnersBar";
import "./Home.css";

function Home() {
  return (
    <section className="home__page">
      <div className="welcome__wrapper">
        <h3>Welcome to</h3>
        <h1>Invictus-Tech</h1>
      </div>
      <PartnersBar />
    </section>
  );
}

export default Home;
