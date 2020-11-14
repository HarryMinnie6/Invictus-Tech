import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <Fragment>
      <section className='contact__page' id='contact'>
        <h1>Get in contact with us </h1>
        <div className='contact-details__holder'>
          <p>shaun@invictus-tech.nl</p>
          <p>+31 64 005 1485</p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Contact;
