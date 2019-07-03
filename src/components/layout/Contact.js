import React, { Component } from 'react';
import Enquire from './Enquire';
import { Col, Row } from 'reactstrap';
export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <Row className="header-color intro-name m-0">Contact Us</Row>
        <Row className="p-2 py-4 m-0">
          <Col className="p-2" md="6">
            <Row
              className="item-center"
              style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
            >
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
              <div className="text-left px-2">
                <span style={{ fontSize: '1.2em' }}>Sandy Auwardt</span> <br />
                <a href="tel:+61430504025">0430 504 025</a> <br />
                <a href="mailto:sandy@northerncleaners.com.au">sandy@northerncleaners.com.au</a>
              </div>
            </Row>
          </Col>
          <Col className="p-2" md="6">
            <Row
              className="item-center"
              style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
            >
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
              <div className="text-left px-2">
                <span style={{ fontSize: '1.2em' }}>Sanka Auwardt</span> <br />
                <a href="tel:+610433076020">0433 076 020</a> <br />
                <a href="mailto:sanka@northerncleaners.com.au">sanka@northerncleaners.com.au</a>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Enquire />
          </Col>
        </Row>
      </div>
    );
  }
}
