import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { styleNavbar } from "./css/styleNavbar.css";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <nav>
        {/* logo */}
        <div className="navbarComp">
          {/* <p>Drugreporter</p> */}
          <Link to='/' style={{ textDecoration: 'none' }}>
            <p class="navHeading">Drugreporter</p>
          </Link>
        </div>

        {/* nav links */}
        <div className="navbarLinks horizontal-list">
          <ul>
            <Link to='/about'>
              <li class="LinkHeading">
                About Us
              </li>
            </Link>
            <Link to='/readmore'>
              <li class="LinkHeading">
                Read More
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
