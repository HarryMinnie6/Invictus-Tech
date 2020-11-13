import React from "react";
import "./Services.css";
function Services() {
  return (
    <section className="services__page" id="services">
      <h1> ¿ What we do ?</h1>
      <div className="services-details__holder">
        <div className="services-details__description">
          <div className="services-details__paragraph">
            <h3>Consulting</h3>
            <p>
              At Invictus Tech, we use technology as an enabler and the
              connected device as a vehicle to deliver IoT based solutions that
              assist our Customers to achieve their business goals. We work with
              our Invictus Tech Trusted Partner Network (TPN) to design and
              implement customised, security-enhanced solutions that integrate
              seamlessly and rapidly into our Customers’ operating processes.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="services-details__img-holder">
            <img
              src="https://cdn.pixabay.com/photo/2018/10/02/21/39/smart-3720021_960_720.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------  */}
      <div className="services-details__holder">
        <div className="services-details__description2">
          <div className="services-details__img-holder2">
            <img
              src="https://cdn.pixabay.com/photo/2018/10/02/21/39/smart-3720021_960_720.jpg"
              alt="img"
            />
          </div>
          <div className="services-details__paragraph2">
            <h3>Consulting</h3>
            <p>
              At Invictus Tech, we use technology as an enabler and the
              connected device as a vehicle to deliver IoT based solutions that
              assist our Customers to achieve their business goals. We work with
              our Invictus Tech Trusted Partner Network (TPN) to design and
              implement customised, security-enhanced solutions that integrate
              seamlessly and rapidly into our Customers’ operating processes.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
