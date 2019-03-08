import React, { Component } from 'react';
import Carousel from './Carousel';
import testimonial1 from '../../images/testimonial1.jpg';
import testimonial2 from '../../images/testimonial2.jpg';
import testimonial3 from '../../images/testimonial3.jpg';
import testimonial4 from '../../images/testimonial3.jpg';

const testimonials = [
  {
    title: 'Kara Duncan',
    img: testimonial1,
    desc:
      '"Having used a number of different cleaning services over the last 10 years, I have finally came across a team that delivers all that it has promised. As a large busy Medical center, the daily cleaning is a big duty and day after day every task is completed. Thank you for going above and beyond to ensure the center is cleaned to the highest standard"'
  },
  {
    title: 'Kurn Shaw',
    img: testimonial2,
    desc:
      '"Sandy and the team are efficient, reliable and friendly cleaners and nothing is too much trouble. I would highly recommend them"'
  },
  {
    title: 'Suchi Sandeep',
    img: testimonial3,
    desc:
      'Nothern Cleaners have always provided excellent service, whenever we\'ve has issues it has been promptly addressed. The medical center is cleaned six days a week and thorough, efficient and they clean to high standards. We have found them to be consistent with the cleaning. I would highly recommend Nothern Cleaners to anyone interested in quality cleaning."'
  },
  {
    title: 'Emma Caffin',
    img: testimonial4,
    desc:
      '"Nothern Cleaning group works closely with us to full fill our cleaning requirements, I have no hesitation in recommending them for all your cleaning needs."'
  }
];

export default class Testimonials extends Component {
  render() {
    return (
      <div className="">
        <Carousel />
        <div className="row remove-margin">
          <div className="about-us-row  col-12">
            <div className="row remove-margin">
              <div className="col-md-offset-1 col-md-10 intro-name">
                Testimonials
              </div>
            </div>
            <div className="row remove-margin">
              <div className="col-md-offset-1 col-md-10">
                Our services includes text
              </div>
            </div>
          </div>
          <div className="row">
            <div
              style={{ paddingBottom: '2%', paddingTop: '2%' }}
              className="row remove-margin"
            >
              {testimonials.map(item => {
                return (
                  <div className="col-md-offset-1 col-md-10 ">
                    <div className="row services-content-row ">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="service-title">{item.title}</div>
                        </div>
                        <div className="row">
                          <div className="testimonial-desc">{item.desc}</div>
                        </div>
                      </div>
                      <div className="col-md-6 service-img-col">
                        <img className="service-img" src={item.img} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
