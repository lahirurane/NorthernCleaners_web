import React, { Component } from 'react';
import {
  Col,
  Row,
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink
} from 'reactstrap';
import logo from '../../images/logonc.png';

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <Navbar
        style={{ backgroundColor: 'transparent' }}
        className="sticky-top bg-transparent"
        light
        expand="md"
      >
        <NavbarBrand href="/" className="pl-4 m-2">
          <img className="nav-bar-logo" alt="northern cleaners logo" src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={process.env.PUBLIC_URL + '/aboutus'}> About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={process.env.PUBLIC_URL + '/services'}> Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={process.env.PUBLIC_URL + '/testimonials'}> Testimonials</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={process.env.PUBLIC_URL + '/contact'}> Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavHeader;
