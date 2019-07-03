import React, { Component } from 'react';
import Carousel from './Carousel';
import { Col, Row } from 'reactstrap';
import slider1 from '../../images/slider5.jpg';
import slider2 from '../../images/slider4.jpg';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider2.jpg';
import slider5 from '../../images/slider1.jpg';

const CommercialCleaning = [
  {
    title: 'Office Cleaning',
    img: slider3,
    desc:
      'Our team will meet with you and get to know the cleaning expectations that needs to be met. We will do a walk through together of the office site to obtain a good understanding of the cleaning aspects.',
    price: 'A$28.00',
    icon: 'fa-building'
  },
  {
    title: 'Medical Centre Cleaning',
    img: slider4,
    desc:
      'Northern Cleaners specialise in medical centre cleaning, currently cleaning 15 medical and dental clinics around Melbourne. Our team focus on hygiene, cross contamination and disinfection to create safe environments for all medical staff and patients',
    price: 'A$29.00',
    icon: 'fa-user-md'
  },
  {
    title: 'Kindergarten & Childcare Cleaning',
    img: slider5,
    desc:
      'A safe and clean environment is expected by every parent when they drop off their children to a centre. Our team will make sure all surfaces, activity rooms, play areas, common areas, toilets are thoroughly cleaned and sanitised. Northern cleaners team will take the burden out of you in keeping the childcare / kindergarten in great health.',
    price: 'A$28.00',
    icon: 'fa-cubes'
  }
];

const CarpetCleaning = [
  {
    title: 'Carpet Steam Cleaning',
    img: slider5,
    desc:
      'If your carpets needs to be freshened up please get in touch with us. With the use of latest machinery and commercial grade stain remover chemicals no stain is too hard to get rid of.',
    price: 'A$2.75',
    icon: 'fa-broom'
  },
  {
    title: 'Upholstery Steam Cleaning',
    img: slider5,
    desc:
      'The stains and dirt on upholstery can be easily removed with our three tier upholstery steam cleaning process. Will sure to give a brand new look',
    price: 'A$7.00',
    icon: 'fa-couch'
  }
];

export default class Services extends Component {
  render() {
    return (
      <div className="">
        <Row className="header-color intro-name m-0">Our Services</Row>
        <Row className="p-2 m-0">
          <Col md="12">
            <Row
              className="header-color item-center pb-4"
              style={{
                fontSize: '1.5em',
                marginLeft: '5em',
                marginRight: '5em',
                borderBottom: '1px solid #afafaf'
              }}
            >
              Commercial Cleaning
            </Row>
            <Row className="service-box">
              {CommercialCleaning.map(item => {
                return (
                  <Col md="6" className="p-5">
                    <Row className="header-color pt-2 item-center">
                      <Col style={{ fontSize: '3em' }}>
                        <i className={'fas ' + item.icon} />
                      </Col>
                    </Row>
                    <Row className="header-color pb-2 item-center">
                      <Col>{item.title}</Col>
                    </Row>
                    <Row>
                      <Col>{item.desc}</Col>
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row className="p-2 m-0">
          <Col md="12">
            <Row
              className="header-color item-center pb-4 "
              style={{
                fontSize: '1.5em',
                marginLeft: '5em',
                marginRight: '5em',
                borderBottom: '1px solid #aeaeae'
              }}
            >
              Carpet Cleaning
            </Row>
            <Row className="service-box pt-5">
              {CarpetCleaning.map(item => {
                return (
                  <Col md="6" className="p-5">
                    <Row className="header-color pt-2 item-center">
                      <Col style={{ fontSize: '3em' }}>
                        <i className={'fas ' + item.icon} />
                      </Col>
                    </Row>
                    <Row className="header-color pb-2 item-center">
                      <Col>{item.title}</Col>
                    </Row>
                    <Row>
                      <Col>{item.desc}</Col>
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
