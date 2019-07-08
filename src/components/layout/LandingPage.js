import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink
} from 'reactstrap';
import logo from '../../images/logonc.png';
import Enquire from './Enquire';
import ReactGA from 'react-ga';

const CommercialCleaning = [
  {
    title: 'Office Cleaning',

    desc:
      'Our team will meet with you and get to know the cleaning expectations that needs to be met. We will do a walk through together of the office site to obtain a good understanding of the cleaning aspects.',
    price: '$28.00',
    icon: 'fa-building'
  },
  {
    title: 'Medical Centre Cleaning',

    desc:
      'Northern Cleaners specialise in medical centre cleaning, currently cleaning 15 medical and dental clinics around Melbourne. Our team focus on hygiene, cross contamination and disinfection to create safe environments for all medical staff and patients',
    price: '$29.00',
    icon: 'fa-user-md'
  },
  {
    title: 'Kindergarden & Childcare Cleaning',

    desc:
      'A safe and clean environment is expected by every parent when they drop off their children to a centre. Our team will make sure all surfaces, activity rooms, play areas, common areas, toilets are thoroughly cleaned and sanitised. Northern cleaners team will take the burden out of you in keeping the childcare / kindergarten in great health.',
    price: '$28.00',
    icon: 'fa-cubes'
  }
];

const testimonials = [
  {
    title: 'Kara Duncan',

    desc:
      'Having used a number of different cleaning services over the last 10 years, I have finally came across a team that delivers all that it has promised. As a large busy Medical center, the daily cleaning is a big duty and day after day every task is completed. Thank you for going above and beyond to ensure the center is cleaned to the highest standard',
    position: 'Practice Manager',
    company: 'Brunswick Betta Health'
  },
  {
    title: 'Kurn Shaw',

    desc:
      'Sandy and the team are efficient, reliable and friendly cleaners and nothing is too much trouble. I would highly recommend them',
    position: 'Chief Operating Officer',
    company: 'SIA Medical Centres'
  },
  {
    title: 'Suchi Sandeep',

    desc:
      'Nothern Cleaners have always provided excellent service, whenever we\'ve has issues it has been promptly addressed. The medical center is cleaned six days a week and thorough, efficient and they clean to high standards. We have found them to be consistent with the cleaning. I would highly recommend Nothern Cleaners to anyone interested in quality cleaning."',
    position: 'Practice Manager',
    company: 'Mill Park Family Practice'
  },
  {
    title: 'Emma Caffin',

    desc:
      'Nothern Cleaning group works closely with us to full fill our cleaning requirements, I have no hesitation in recommending them for all your cleaning needs.',
    position: 'Practice Manager',
    company: 'Templestowe District Medical Centre'
  }
];

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.aboutus = React.createRef();
    this.ourservices = React.createRef();
    this.testimonials = React.createRef();
    this.contactus = React.createRef();
    this.mainPage = React.createRef();
  }

  componentDidMount() {
    if (this.props.location && this.props.location.hash !== '') {
      setTimeout(() => {
        this.handleScroll(this.props.location.hash.replace('#/', ''));
      }, 500);
    }
  }

  handleScroll(type) {
    switch (type) {
      case 'aboutus':
        this.aboutus.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        this.setGAEvent('navigation', 'aboutus');
        break;
      case 'contact':
        this.contactus.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        this.setGAEvent('navigation', 'contact');
        break;
      case 'services':
        this.ourservices.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        this.setGAEvent('navigation', 'services');
        break;
      case 'testimonials':
        this.testimonials.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        this.setGAEvent('navigation', 'testimonials');
        break;
      case 'home':
        this.mainPage.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        this.setGAEvent('navigation', 'home');
        break;
      default:
        this.mainPage.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  setGAEvent(category, action) {
    const gaData = {
      category: category,
      action: action
    };
    ReactGA.event(gaData);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          style={{ backgroundColor: 'rgb(255, 255, 255,0.7)', filter: 'grayscale(100%)' }}
          className="sticky-top"
          light
          expand="md"
        >
          <NavbarBrand
            onClick={() => {
              this.toggle();
              this.handleScroll('home');
            }}
            href={process.env.PUBLIC_URL}
            className="pl-4 m-2"
          >
            <img className="nav-bar-logo" alt="northern cleaners logo" src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle();
                    this.handleScroll('aboutus');
                  }}
                  href={process.env.PUBLIC_URL + '#/aboutus'}
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle();
                    this.handleScroll('services');
                  }}
                  href={process.env.PUBLIC_URL + '#/services'}
                >
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle();
                    this.handleScroll('testimonials');
                  }}
                  href={process.env.PUBLIC_URL + '#/testimonials'}
                >
                  Testimonials
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggle();
                    this.handleScroll('contact');
                  }}
                  href={process.env.PUBLIC_URL + '#/contact'}
                >
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Col md="12" className="layout-page">
          <div ref={this.mainPage} style={{}} className="header-block item-center row">
            <Col
              style={{
                backgroundColor: 'rgba(255,255,255, 0.7)',
                height: '100%'
              }}
            >
              <Row
                style={{
                  height: '100%'
                }}
                className="item-center"
              >
                <Col>
                  <Row className="item-center  py-2">
                    <img
                      alt={'northern cleaners melbourne'}
                      className="header-block-logo"
                      src={logo}
                    />
                  </Row>
                  <Row style={{ color: '#29465f' }} className="item-center py-2">
                    <h1>Your Professional Cleaning Services</h1>
                  </Row>
                  <Row style={{ color: '#29465f' }} className="item-center py-2 ">
                    <h5> For Affordable Price</h5>
                  </Row>
                  <Row className="item-center py-2 ">
                    <Button className="btn-default" href={'tel:+610433076020'} style={{}}>
                      Call us now
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Col>
          </div>

          <div
            ref={this.aboutus}
            style={{ backgroundColor: '#ffffff' }}
            className="layout-page-block item-center row"
          >
            <Col md="6" xs="12" xm="12" className="pt-5">
              <img alt={'northen cleaners melbourne'} style={{ width: '80%' }} src={logo} />
            </Col>
            <Col md="6" xs="12" xm="12">
              <Row className="item-center py-5">
                <div className="col-md-12">
                  <h2>About Us</h2>
                </div>
              </Row>
              <Row style={{ color: '#afafaf' }}>
                <div className="col-md-12 px-5">
                  <div className="row ">
                    <div className="col-md-12 text-justify py-4 ">
                      For over 7 years Northern Cleaners have specialized in providing professional
                      cleaning services for commercial, industrial, office, medical and building
                      construction industries throughout Melbourne. Our head office is located in
                      Northern suburbs as well as many of the key clientele. Northern Cleaners
                      provide genuine & quality cleaning services that strive to meet and exceed
                      your expectations. We offer reasonable pricing and follow all relevant Modern
                      Awards.
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-12 text-justify py-4 ">
                      Our company has established strong relationships with clients for many years,
                      listening to their individual cleaning requirements to tailor-make a cleaning
                      solution perfectly suited to their specific needs.
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-12 text-justify py-4 ">
                      Northern Cleaners are renowned for the highly trained staff who are selected
                      and screened through a thorough induction and training process.
                    </div>
                  </div>

                  <div className="row  pb-5">
                    <div className="col-md-12 text-justify py-4 ">
                      We set high standards of cleaning using the modern equipment and approved
                      chemicals. We specialize in
                      <div className="row  pt-2">
                        <div className="col-md-offset-1 col-md-11">
                          &nbsp;&nbsp;- Disinfection of clinical & non-clinical areas
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-md-offset-1 col-md-11">
                          &nbsp;&nbsp;- Attention to detail on all work spaces
                        </div>
                      </div>
                      <div className="row  pb-2">
                        <div className="col-md-offset-1 col-md-11">
                          &nbsp;&nbsp;- Maintaining the highest hygiene standards
                        </div>
                      </div>
                      that results in a safer and neater working environment for staff and your
                      valuable clients.
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </div>

          <div
            ref={this.ourservices}
            style={{ backgroundColor: '#ffffff' }}
            className="layout-page-block item-center row pt-5 "
          >
            <Col>
              <Row className="item-center layout-title-block  py-5">
                <h1>Our Services</h1>
              </Row>
              <Row className="layout-content-block ">
                {CommercialCleaning.map((item, index) => {
                  return (
                    <Col key={index} style={{ padding: '5em' }} md="4" xm="12" xs="12" className="">
                      <Row
                        className="item-center py-4"
                        style={{ fontSize: '2.75rem', color: '#29465f' }}
                      >
                        <i className={'fa ' + item.icon} />
                      </Row>
                      <Row
                        style={{ minHeight: '6rem', maxHeight: '6rem' }}
                        className="item-center py-4"
                      >
                        <h3> {item.title} </h3>
                      </Row>
                      <Row className="item-center text-justify" style={{ color: '#afafaf' }}>
                        {item.desc}
                      </Row>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </div>

          <Row ref={this.locations} style={{ backgroundColor: '#ffffff' }} className="item-center">
            <Col style={{ height: '100%', padding: 0 }} md="6" xm="12" xs="12">
              <div className="location-block " />
            </Col>
            <Col className="py-5" md="6" xm="12" xs="12">
              <Row className="py-5 item-center">
                <h2>Locations</h2>
              </Row>
              <Row className="item-center" style={{ color: '#afafaf' }}>
                <span> Servicing all areas of Melbourne, Australia</span>
              </Row>
            </Col>
          </Row>

          <Row
            style={{ backgroundColor: '#ffffff' }}
            className="layout-page-block item-center mt-5"
          >
            <Col>
              <Row className="item-center layout-title-block py-5">
                <h1>Our Pricing</h1>
              </Row>
              <Row className="layout-content-block">
                {CommercialCleaning.map(item => {
                  return (
                    <Col md="12" xm="12" xs="12" className="my-2">
                      <Row style={{ backgroundColor: '#efefef' }} className="item-center p-4 mx-5">
                        <Col md="6" xs="12" xm="12">
                          <Row>
                            <Col>
                              <h4> {item.title} </h4>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              className="item-center"
                              style={{ color: '#29465f', fontSize: '2em', fontWeight: '800' }}
                            >
                              {item.price}
                            </Col>
                          </Row>
                        </Col>

                        <Col md="3" xs="12" xm="12" style={{ color: '#afafaf' }}>
                          <Row className="item-center">Feature 1</Row>
                          <Row className="item-center">Feature 2</Row>
                        </Col>

                        <Col md="3" xs="12" xm="12" style={{ color: '#afafaf' }}>
                          <Row className="item-center">Feature 3</Row>
                          <Row className="item-center">Feature 4</Row>
                        </Col>
                      </Row>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>

          <div
            ref={this.testimonials}
            style={{ backgroundColor: '#ffffff', paddingTop: '4em' }}
            className="layout-page-block testimonial-block item-center  mt-5 row"
          >
            <Col>
              <Row className="item-center my-5 ">
                <h1>What Our Clients Say</h1>
              </Row>
              <Row className="item-center">
                {testimonials.map(item => {
                  return (
                    <Col style={{}} md="4" xm="12" xs="12" className="my-3 py-2 item-center">
                      <div
                        style={{
                          position: 'absolute',
                          left: '47%',
                          top: '-1.5em',
                          height: '3em',
                          width: '3em',
                          borderRadius: '50px',
                          backgroundColor: '#29465f',
                          color: '#ffffff'
                        }}
                        className="item-center"
                      >
                        <i className="fa fa-user" />
                      </div>
                      <div style={{}} className="item-center testimonial-container p-5">
                        <Col>
                          <Row
                            style={{}}
                            className="item-center testimonial-comment-container text-justify"
                          >
                            <div>{item.desc}</div>
                          </Row>
                          <Row
                            style={{ fontSize: '1em', color: '#212529', fontWeight: '800' }}
                            className="item-center py-2"
                          >
                            <div>{item.title}</div>
                          </Row>
                          <Row className="item-center">
                            <div>{item.position}</div>
                          </Row>
                          <Row className="item-center">
                            <div>{item.company}</div>
                          </Row>
                        </Col>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </div>

          <div
            ref={this.contactus}
            style={{ backgroundColor: '#ffffff' }}
            className="row layout-page-block item-center my-5"
          >
            <Col>
              <Row className="item-center my-5 p-5">
                <h1>Contact Us</h1>
              </Row>
              <Row className="item-center m-0">
                <Col md="6" xs="12" xm="12" className="item-center">
                  <div
                    className="my-5"
                    style={{
                      backgroundColor: '#ffffff',

                      minWidth: '25em',
                      maxWidth: '25em'
                    }}
                  >
                    <Row
                      className="item-center py-2"
                      style={{ fontSize: '1.2em', marginBottom: '1em' }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          height: '3em',
                          width: '3em',
                          borderRadius: '50px',
                          backgroundColor: '#29465f',
                          color: '#ffffff'
                        }}
                        className="item-center"
                      >
                        <i className="fa fa-user-clock" />
                      </div>
                    </Row>
                    <Row className="item-center py-2" style={{ fontSize: '1.2em' }}>
                      Sandy Auwardt
                    </Row>
                    <Row className="item-center">
                      <a href="tel:+61430504025">0430 504 025</a>{' '}
                    </Row>
                    <Row className="item-center">
                      <a href="mailto:sandy@northerncleaners.com.au">
                        sandy@northerncleaners.com.au
                      </a>
                    </Row>
                  </div>
                </Col>
                <Col md="6" xs="12" xm="12" className="item-center">
                  <div
                    className="my-5"
                    style={{
                      backgroundColor: '#ffffff',

                      minWidth: '25em',
                      maxWidth: '25em'
                    }}
                  >
                    <Row
                      className="item-center py-2"
                      style={{ fontSize: '1.2em', marginBottom: '1em' }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          height: '3em',
                          width: '3em',
                          borderRadius: '50px',
                          backgroundColor: '#29465f',
                          color: '#ffffff'
                        }}
                        className="item-center"
                      >
                        <i className="fa fa-user-ninja" />
                      </div>
                    </Row>
                    <Row className="item-center py-2" style={{ fontSize: '1.2em' }}>
                      Sanka Auwardt
                    </Row>
                    <Row className="item-center">
                      <a href="tel:+610433076020">0433 076 020</a> <br />
                    </Row>
                    <Row className="item-center">
                      <a href="mailto:sanka@northerncleaners.com.au">
                        sanka@northerncleaners.com.au
                      </a>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Enquire />
                </Col>
              </Row>
            </Col>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}
