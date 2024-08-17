import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      {/* <Link to="/">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link> */}
      <a href="/">About Me</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
      <a href="/resume">Resume</a>
    </nav>
  );
};

export default Navigation;
