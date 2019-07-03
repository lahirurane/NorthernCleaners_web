import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import logo from '../.././../images/logonc.png';
import Background from '../.././../images/slider7.jpg';
import locations from '../.././../images/locations.jpg';
import Enquire from '../Enquire';

const CommercialCleaning = [
  {
    title: 'Office Cleaning',

    desc:
      'Our team will meet with you and get to know the cleaning expectations that needs to be met. We will do a walk through together of the office site to obtain a good understanding of the cleaning aspects.',
    price: 'A$28.00',
    icon: 'fa-building'
  },
  {
    title: 'Medical Centre Cleaning',

    desc:
      'Northern Cleaners specialise in medical centre cleaning, currently cleaning 15 medical and dental clinics around Melbourne. Our team focus on hygiene, cross contamination and disinfection to create safe environments for all medical staff and patients',
    price: 'A$29.00',
    icon: 'fa-user-md'
  },
  {
    title: 'Kindergarten & Childcare Cleaning',

    desc:
      'A safe and clean environment is expected by every parent when they drop off their children to a centre. Our team will make sure all surfaces, activity rooms, play areas, common areas, toilets are thoroughly cleaned and sanitised. Northern cleaners team will take the burden out of you in keeping the childcare / kindergarten in great health.',
    price: 'A$28.00',
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
  render() {
    return (
      <Col md="12" className="layout-page">
        <Row
          style={{
            background: 'url(' + Background + ')  no-repeat fixed 50% 0px / cover'
          }}
          className="layout-page-block header-block item-center"
        >
          <Col
            style={{
              backgroundColor: 'rgba(0,0,0, 0.7)',
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
                <Row className="item-center py-2">
                  <img style={{ width: '20%' }} src={logo} />
                </Row>
                <Row style={{ color: '#ffffff' }} className="item-center py-2">
                  <h1>SOmething important with somethinf</h1>
                </Row>
                <Row style={{ color: '#ffffff' }} className="item-center py-2">
                  <h5>CLeaning slogan</h5>
                </Row>
                <Row className="item-center py-2">
                  <Button
                    style={{
                      backgroundColor: '#29465f',
                      borderColor: '#29465f',
                      color: '#ffffff',
                      borderRadius: '20px',
                      width: '10em'
                    }}
                  >
                    Call us now
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ backgroundColor: '#ffffff' }} className="layout-page-block item-center">
          <Col md="6" xs="12" xs="12">
            <img style={{ width: '80%' }} src={logo} />
          </Col>
          <Col md="6" xs="12" xs="12">
            <Row className="my-5">
              <h2>About Us</h2>
            </Row>
            <Row style={{ color: '#afafaf' }}>
              <div className="col-md-offset-1 col-md-10 text-left">
                <div className="row ">
                  <div className="col-md-12">
                    For over 7 years Northern Cleaners have specialized in providing professional
                    cleaning services for commercial, industrial, office, medical and building
                    construction industries throughout Melbourne. Our head office is located in
                    Northern suburbs as well as many of the key clientele. Northern Cleaners provide
                    genuine & quality cleaning services that strive to meet and exceed your
                    expectations. We offer reasonable pricing and follow all relevant Modern Awards.
                  </div>
                </div>

                <div className="row ">
                  <div className="col-md-12">
                    Our company has established strong relationships with clients for many years,
                    listening to their individual cleaning requirements to tailor-make a cleaning
                    solution perfectly suited to their specific needs.
                  </div>
                </div>

                <div className="row ">
                  <div className="col-md-12">
                    Northern Cleaners are renowned for the highly trained staff who are selected and
                    screened through a thorough induction and training process.
                  </div>
                </div>

                <div className="row  pb-5">
                  <div className="col-md-12">
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
        </Row>

        <Row style={{ backgroundColor: '#ffffff' }} className="layout-page-block item-center">
          <Col>
            <Row className="item-center layout-title-block  py-5">
              <h1>Our Services</h1>
            </Row>
            <Row className="layout-content-block ">
              {CommercialCleaning.map(item => {
                return (
                  <Col style={{ padding: '5em' }} md="4" xm="12" xs="12" className="">
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
                    <Row className="item-center" style={{ color: '#afafaf' }}>
                      {item.desc}
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row style={{ backgroundColor: '#ffffff' }} className="layout-page-block item-center">
          <Col style={{ height: '100%', padding: 0 }} md="6" xs="12" xs="12">
            <div
              style={{
                background: 'url(' + locations + ')  no-repeat fixed 50% 0px / cover',
                height: '100%'
              }}
            />
          </Col>
          <Col className="pl-5" md="6" xs="12" xs="12">
            <Row className="py-5 ">
              <h2>Locations</h2>
            </Row>
            <Row style={{ color: '#afafaf' }}>
              <span> Servicing all areas of Melbourne, Australia</span>
            </Row>
          </Col>
        </Row>

        <Row style={{ backgroundColor: '#ffffff' }} className="layout-page-block item-center">
          <Col>
            <Row className="item-center layout-title-block py-5">
              <h1>Our Pricing</h1>
            </Row>
            <Row className="layout-content-block">
              {CommercialCleaning.map(item => {
                return (
                  <Col md="12" xm="12" xs="12" className="">
                    <Row style={{ backgroundColor: '#efefef' }} className="item-center p-4 mx-5">
                      <Col>
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

                      <Col style={{ color: '#afafaf' }}>
                        <Row className="item-center">Feature 1</Row>
                        <Row className="item-center">Feature 2</Row>
                      </Col>

                      <Col style={{ color: '#afafaf' }}>
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

        <Row style={{ backgroundColor: '#ffffff' }} className="layout-page-block item-center my-5">
          <Col>
            <Row className="item-center my-5 ">
              <h1>What Our Clients Say</h1>
            </Row>
            <Row className="item-center">
              {testimonials.map(item => {
                return (
                  <Col
                    style={{ minHeight: '20em', maxHeight: '20em' }}
                    md="4"
                    xm="12"
                    xs="12"
                    className="my-3 item-center"
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: '47%',
                        top: '1.5em',
                        height: '3em',
                        width: '3em',
                        borderRadius: '50px',
                        backgroundColor: '#2f87a6',
                        color: '#ffffff'
                      }}
                      className="item-center"
                    >
                      <i className="fa fa-user" />
                    </div>
                    <div
                      style={{
                        paddingTop: '2em',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#efefef',
                        color: '#afafaf',
                        fontSize: '0.7em',
                        minHeight: '20em',
                        maxHeight: '20em'
                      }}
                      className="item-center p-5"
                    >
                      <Col>
                        <Row
                          style={{ minHeight: '10em', maxHeight: '1em' }}
                          className="item-center"
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
        </Row>

        <Row style={{ backgroundColor: '#ffffff' }} className="layout-page-block item-center my-5">
          <Col>
            <Row className="item-center my-5 p-5">
              <h1>Contact Us</h1>
            </Row>
            <Row className="item-center m-0">
              <Col md="6" xs="12" xm="12" className="item-center">
                <div
                  className="p-5 my-5"
                  style={{ backgroundColor: '#efefef', minWidth: '25em', maxWidth: '25em' }}
                >
                  <Row className="item-center py-2" style={{ fontSize: '1.2em' }}>
                    Sandy Auwardt
                  </Row>
                  <Row className="item-center">
                    <a href="tel:+61430504025">0430 504 025</a>{' '}
                  </Row>
                  <Row className="item-center">
                    <a href="mailto:sandy@northerncleaners.com.au">sandy@northerncleaners.com.au</a>
                  </Row>
                </div>
              </Col>
              <Col md="6" xs="12" xm="12" className="item-center">
                <div
                  className="p-5 my-5"
                  style={{ backgroundColor: '#efefef', minWidth: '25em', maxWidth: '25em' }}
                >
                  <Row className="item-center py-2" style={{ fontSize: '1.2em' }}>
                    Sanka Auwardt
                  </Row>
                  <Row className="item-center">
                    <a href="tel:+610433076020">0433 076 020</a> <br />
                  </Row>
                  <Row className="item-center">
                    <a href="mailto:sanka@northerncleaners.com.au">sanka@northerncleaners.com.au</a>
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
        </Row>
      </Col>
    );
  }
}
