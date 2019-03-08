import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navibar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row nav-bar-top-row">
          <div className="col-md-6 col-sm-12 text-center nav-brand-name item-center ">
            <Link to="/"> NORTHERN CLEANERS</Link>
          </div>
          <div className="col-md-6 col-sm-12 text-center nav-call-us ">
            <div className="call-us-text"> CALL US</div>
            <div className="call-us-number">
              <a href="tel:0430504025"> 0430504025</a>
            </div>
          </div>
        </div>
        <div className="row">
          <Navbar>
            <Nav>
              <NavItem eventKey={1}>
                <Link to="/"> Home</Link>
              </NavItem>
              <NavItem eventKey={1}>
                <Link to="/aboutus"> About Us</Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to="/services"> Services</Link>
              </NavItem>
              <NavItem eventKey={3}>
                <Link to="/testimonials"> Testimonials</Link>
              </NavItem>
              <NavItem eventKey={4}>
                <Link to="/contact"> Contact us</Link>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Navibar;
