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
      // <div className="container">
      //   <Row className=" nav-bar-top-row">
      //     <div className="col-md-6 col-sm-12 text-center nav-brand-name item-center ">
      //       <Link to={process.env.PUBLIC_URL + '/'}> NORTHERN CLEANERS</Link>
      //     </div>
      //     <div className="col-md-6 col-sm-12 text-right nav-call-us ">
      //       <div className="call-us-text"> CALL US</div>
      //       <div className="call-us-number">
      //         <a href="tel:0430504025"> 0430504025</a>
      //       </div>
      //     </div>
      //   </Row>
      //   <div className="row">
      //     <Col md="12 p-0">

      //     </Col>
      //   </div>
      // </div>
      <Navbar className="sticky-top" color="light" light expand="md">
        <NavbarBrand href="/" className="m-2">
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
