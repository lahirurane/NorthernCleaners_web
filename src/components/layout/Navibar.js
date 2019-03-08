import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navibar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row nav-bar-top-row">
          <div className="col-md-6 col-sm-12 text-center nav-brand-name item-center ">
            <Link to={process.env.PUBLIC_URL + '/'}> NORTHERN CLEANERS</Link>
          </div>
          <div className="col-md-6 col-sm-12 text-center nav-call-us ">
            <div className="call-us-text"> CALL US</div>
            <div className="call-us-number">
              <a href="tel:0430504025"> 0430504025</a>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <Navbar bg="light" expand="lg">
            <Nav>
              <NavItem eventKey={1}>
                <Link to={process.env.PUBLIC_URL + '/'}> Home</Link>
              </NavItem>
              <NavItem eventKey={1}>
                <Link to={process.env.PUBLIC_URL + '/aboutus'}> About Us</Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to={process.env.PUBLIC_URL + '/services'}> Services</Link>
              </NavItem>
              <NavItem eventKey={3}>
                <Link to={process.env.PUBLIC_URL + '/testimonials'}>
                  {' '}
                  Testimonials
                </Link>
              </NavItem>
              <NavItem eventKey={4}>
                <Link to={process.env.PUBLIC_URL + '/contact'}>
                  {' '}
                  Contact us
                </Link>
              </NavItem>
            </Nav>
          </Navbar> */}

          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to={process.env.PUBLIC_URL + '/'}> Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/* <NavItem>
                  <Link to={process.env.PUBLIC_URL + '/'}> Home</Link>
                </NavItem> */}
                <NavItem>
                  {' '}
                  <Link to={process.env.PUBLIC_URL + '/aboutus'}>
                    {' '}
                    About Us
                  </Link>
                </NavItem>

                <NavItem>
                  {' '}
                  <Link to={process.env.PUBLIC_URL + '/services'}>
                    {' '}
                    Services
                  </Link>
                </NavItem>
                <NavItem>
                  {' '}
                  <Link to={process.env.PUBLIC_URL + '/testimonials'}>
                    {' '}
                    Testimonials
                  </Link>
                </NavItem>
                <NavItem>
                  {' '}
                  <Link to={process.env.PUBLIC_URL + '/contact'}>
                    {' '}
                    Contact us
                  </Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Navibar;
