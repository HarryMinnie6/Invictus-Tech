import React, { Fragment } from "react";
import "./Navbar.css";
import logo from "../images/logo.jpg";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <Fragment>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <div id="btn">
          <div className="bar-holder">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </label>
      <label htmlFor="check">
        <i className="fas fa-times" id="cancel">
          x
        </i>
      </label>
      <nav className="sidebar">
        <div className="logo__container">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link
              className="link"
              to="landing"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="services"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="partnerships"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Partnerships
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="contact-details__wrapper">
          <div className="email-details_wrapper">
            <p className="p__header">Email</p>
            <p className="p__detail">shaun@invictus-tech.nl</p>
          </div>
          <div className="phone-details__wrapper">
            <p className="p__header">Phone</p>
            <p className="p__detail">+31 64 005 1485</p>
          </div>
          <div className="address-details__wrapper">
            <p className="p__header">Physical Address</p>
            <p className="p__detail">Laan van Broekpolder 314</p>
            <p className="p__detail">Heemskerk 1967kg</p>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
