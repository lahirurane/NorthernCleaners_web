import React, { Component } from 'react';
import Carousel from './Carousel';
import slider1 from '../../images/slider5.jpg';
import slider2 from '../../images/slider4.jpg';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider2.jpg';
import slider5 from '../../images/slider1.jpg';

const services = [
  { title: 'Office Cleaning', img: slider3, desc: 'description' },
  {
    title: 'Medical Centre & Hospital Cleaning',
    img: slider4,
    desc: 'description'
  },
  {
    title: 'Kindergarten & Childcare Cleaning',
    img: slider5,
    desc: 'description'
  },
  { title: 'Window Cleaning', img: slider3, desc: 'description' },
  {
    title: 'Carpet & Upholstery Steam Cleaning',
    img: slider2,
    desc: 'description'
  },
  { title: 'Garden & Grounds Maintenance', img: slider1, desc: 'description' }
];

export default class Services extends Component {
  render() {
    return (
      <div className="">
        <Carousel />
        <div className="row remove-margin">
          <div className="about-us-row  col-12">
            <div className="row remove-margin">
              <div className="col-md-offset-1 col-md-10 intro-name">
                Services
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
              {services.map(item => {
                return (
                  <div className="col-md-offset-1 col-md-10 col-xs-12 ">
                    <div className="row services-content-row">
                      <div className="col-md-6 col-xs-12 ">
                        <div className="row  item-center ">
                          <div className="service-title">{item.title}</div>
                        </div>
                        <div className="row  item-center ">
                          <div className="service-desc">{item.desc}</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12 service-img-col ">
                        <img className="service-img " src={item.img} />
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
