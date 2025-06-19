import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <nav className="container">
      <img src="https://i.ibb.co/xtzD0cRb/we.jpg" className="logo" />
      <h1>Ethiopian Coffee Ceremony</h1>
      <ul>
        <li>
          <Link
            to="header"
            smooth={true}
            offset={-50}
            duration={500}
            className="btn"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="history"
            smooth={true}
            offset={-550}
            duration={500}
            className="btn"
          >
            History
          </Link>
        </li>
        <li>
          <Link
            to="procedure"
            smooth={true}
            offset={-550}
            duration={500}
            className="btn"
          >
            Procedure
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            smooth={true}
            offset={-550}
            duration={500}
            className="btn"
          >
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
