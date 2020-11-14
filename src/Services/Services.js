import React from "react";
import "./Services.css";

import consultingImage from '../images/question-mark.jpg'
import managementImage from '../images/project-management.jpg'
import connectedImage from '../images/smart-home-two.jpg'
import graphImage from '../images/business-graph.jpg'
import securityImage from '../images/security.jpg'

function Services() {
  return (
    <section className='services__page' id='services'>
      <h1> Services </h1>
      <div className='services-details__holder'>
        <div className='services-details__description'>
          <div className='services-details__paragraph'>
            <h3>Consulting</h3>
            <p>
              At Invictus Tech, we use technology as an enabler and the
              connected device as a vehicle to deliver IoT based solutions that
              assist our Customers to achieve their business goals. We work with
              our Invictus Tech Trusted Partner Network (TPN) to design and
              implement customised, security-enhanced solutions that integrate
              seamlessly and rapidly into our Customers’ operating processes.
            </p>
            <a href='#'>Learn More</a>
          </div>
          <div className='services-details__img-holder'>
            <img
              className='services-image'
              src={consultingImage}
              alt='img'
            />
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------  */}
      <div className='services-details__holder2'>
        <div className='services-details__description2'>
          <div className='services-details__img-holder2'>
            <img
              className='services-image'
              src={managementImage}
              alt='img'
            />
          </div>
          <div className='services-details__paragraph2'>
            <h3>Project Management</h3>
            <p>
              Our available Solutions include our own areas of expertise as well
              as that of the Huge Connect IoT Trusted Partner Network (TPN).
              Rather than simply ‘box-dropping’, we are able to offer managed
              solutions that integrate data acquisition, transmission, security,
              data manipulation, reporting, alerts and advice and designed to
              meet our Customers’ specific needs.
            </p>
            <a href='#'>Learn More</a>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div className='services-details__holder'>
        <div className='services-details__description'>
          <div className='services-details__paragraph'>
            <h3>Data Analytics</h3>
            <p>
              At Huge Connect IoT, Deployment refers to delivery, installation
              and integration of the actual devices, sensors, nodes, gateways,
              the ‘Things’ of IoT. These are from our own portfolio of products
              and solutions that have made us a leader in M2M communication,
              data connectivity and managed services, as well as through the
              Huge Connect IoT TPN. This includes relevant hardware, mobile data
              SIMs for GSM and Connectivity as a Service.
            </p>
            <a href='#'>Learn More</a>
          </div>
          <div className='services-details__img-holder'>
            <img
              className='services-image'
              src={graphImage}
              alt='smart home image'
            />
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------  */}
      <div className='services-details__holder2'>
        <div className='services-details__description2'>
          <div className='services-details__img-holder2'>
            <img
              className='services-image'
              src={connectedImage}
              alt='connected-building image'
            />
          </div>
          <div className='services-details__paragraph2'>
            <h3>Connected Building</h3>
            <p>
              Our available Solutions include our own areas of expertise as well
              as that of the Huge Connect IoT Trusted Partner Network (TPN).
              Rather than simply ‘box-dropping’, we are able to offer managed
              solutions that integrate data acquisition, transmission, security,
              data manipulation, reporting, alerts and advice and designed to
              meet our Customers’ specific needs.
            </p>
            <a href='#'>Learn More</a>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div className='services-details__holder'>
        <div className='services-details__description'>
          <div className='services-details__paragraph'>
            <h3>Security</h3>
            <p>
              At Huge Connect IoT, Deployment refers to delivery, installation
              and integration of the actual devices, sensors, nodes, gateways,
              the ‘Things’ of IoT. These are from our own portfolio of products
              and solutions that have made us a leader in M2M communication,
              data connectivity and managed services, as well as through the
              Huge Connect IoT TPN. This includes relevant hardware, mobile data
              SIMs for GSM and Connectivity as a Service.
            </p>
            <a href='#'>Learn More</a>
          </div>
          <div className='services-details__img-holder'>
            <img
              className='services-image'
              src={securityImage}
              alt='security image'
            />
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------  */}
    </section>
  );
}

export default Services;
