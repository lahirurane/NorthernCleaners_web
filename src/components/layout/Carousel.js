import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slider1 from '../../images/slider5.jpg';
import slider2 from '../../images/slider4.jpg';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider2.jpg';
import slider5 from '../../images/slider1.jpg';

export default () => {
  const sliders = [
    { img: 'slider1', path: slider1 },
    { img: 'slider2', path: slider2 },
    { img: 'slider3', path: slider3 },
    { img: 'slider4', path: slider4 },
    { img: 'slider5', path: slider5 }
  ];
  return (
    <Carousel>
      {sliders.map(item => {
        return (
          <Carousel.Item>
            <img alt="900x500" src={item.path} />
            <Carousel.Caption>
              {/* <h3>Clean</h3>
    <p>Cleaning Test 1</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
