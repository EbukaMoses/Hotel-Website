import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="meni-icon">
            <i className="fas fa-times"></i>
          </div>

          <div className="nav-menu active">
            <li>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/destination">Destination</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/testimonial">Testimonial</Link>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
