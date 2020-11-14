import React from "react";
import "./AboutPage.css";
import aboutImage from "../images/iot.png";

function AboutPage() {
  return (
    <section className="about__page" id="about">
      <h1>  What we do </h1>
      <div className="about-details__holder">
        <div className="about-details__description">
          <p className="about-details__paragraph">
            At Invictus Tech, we use technology as an enabler and the connected
            device as a vehicle to deliver IoT based solutions that assist our
            Customers to achieve their business goals. We work with our Invictus
            Tech Trusted Partner Network (TPN) to design and implement
            customised, security-enhanced solutions that integrate seamlessly
            and rapidly into our Customers’ operating processes.
          </p>

          <div className="about-details__img-holder">
            <img
              src={aboutImage}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
