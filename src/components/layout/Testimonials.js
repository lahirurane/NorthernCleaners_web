import React, { Component } from 'react';
import Carousel from './Carousel';
import { Row, Col } from 'reactstrap';
import testimonial1 from '../../images/testimonial1.jpg';
import testimonial2 from '../../images/testimonial2.jpg';
import testimonial3 from '../../images/testimonial3.jpg';
import testimonial4 from '../../images/testimonial3.jpg';

const testimonials = [
  {
    title: 'Kara Duncan',
    img: testimonial1,
    desc:
      '"Having used a number of different cleaning services over the last 10 years, I have finally came across a team that delivers all that it has promised. As a large busy Medical center, the daily cleaning is a big duty and day after day every task is completed. Thank you for going above and beyond to ensure the center is cleaned to the highest standard"',
    position: 'Practice Manager',
    company: 'Brunswick Betta Health'
  },
  {
    title: 'Kurn Shaw',
    img: testimonial2,
    desc:
      '"Sandy and the team are efficient, reliable and friendly cleaners and nothing is too much trouble. I would highly recommend them"',
    position: 'Chief Operating Officer',
    company: 'SIA Medical Centres'
  },
  {
    title: 'Suchi Sandeep',
    img: testimonial3,
    desc:
      'Nothern Cleaners have always provided excellent service, whenever we\'ve has issues it has been promptly addressed. The medical center is cleaned six days a week and thorough, efficient and they clean to high standards. We have found them to be consistent with the cleaning. I would highly recommend Nothern Cleaners to anyone interested in quality cleaning."',
    position: 'Practice Manager',
    company: 'Mill Park Family Practice'
  },
  {
    title: 'Emma Caffin',
    img: testimonial4,
    desc:
      '"Nothern Cleaning group works closely with us to full fill our cleaning requirements, I have no hesitation in recommending them for all your cleaning needs."',
    position: 'Practice Manager',
    company: 'Templestowe District Medical Centre'
  }
];

export default class Testimonials extends Component {
  render() {
    return (
      <div className="container">
        <Row className="header-color intro-name m-0">Testimonials</Row>
        <Row className="p-2 m-0">
          <Col md="12">
            <Row className="service-box ">
              {testimonials.map(item => {
                return (
                  <Col md="6" className="p-5">
                    <Row>
                      <div
                        style={{
                          height: '3em',
                          width: '3em',
                          borderRadius: '50px',
                          backgroundColor: '#2f87a6',
                          color: '#ffffff'
                        }}
                        className="item-center"
                      >
                        <i class="fas fa-user" />
                      </div>

                      <Col className="pb-2 px-4 text-left">
                        <Row className="header-color text-left">{item.title}</Row>
                        <Row style={{ fontSize: '0.75em' }} className="header-color text-left">
                          {item.position}
                        </Row>
                        <Row style={{ fontSize: '0.75em' }} className="header-color text-left">
                          {item.company}
                        </Row>
                      </Col>
                    </Row>

                    <Row style={{ paddingLeft: '3em' }}>
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
