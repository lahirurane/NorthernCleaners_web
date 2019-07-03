import React, { Component } from 'react';
import Carousel from './Carousel';
import { Row, Col } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div className="">
        <Row className="m-0 p-2">
          <Col md="12">
            <Row>
              <Col md="12">
                <div className="header-color intro-name">About Us</div>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="col-md-offset-1 col-md-10 ">
                  <div className="row remove-margin">
                    <div style={{ padding: '1em 0 1em 0' }} className="col-md-12">
                      For over 7 years Northern Cleaners have specialized in providing professional
                      cleaning services for commercial, industrial, office, medical and building
                      construction industries throughout Melbourne. Our head office is located in
                      Northern suburbs as well as many of the key clientele. Northern Cleaners
                      provide genuine & quality cleaning services that strive to meet and exceed
                      your expectations. We offer reasonable pricing and follow all relevant Modern
                      Awards.
                    </div>
                  </div>

                  <div className="row remove-margin">
                    <div style={{ padding: '1em 0 1em 0' }} className="col-md-12">
                      Our company has established strong relationships with clients for many years,
                      listening to their individual cleaning requirements to tailor-make a cleaning
                      solution perfectly suited to their specific needs.
                    </div>
                  </div>

                  <div className="row remove-margin">
                    <div style={{ padding: '1em 0 1em 0' }} className="col-md-12">
                      Northern Cleaners are renowned for the highly trained staff who are selected
                      and screened through a thorough induction and training process.
                    </div>
                  </div>

                  <div className="row remove-margin pb-5">
                    <div style={{ padding: '1em 0 1em 0' }} className="col-md-12">
                      We set high standards of cleaning using the modern equipment and approved
                      chemicals. We specialize in
                      <div className="row remove-margin">
                        <div className="col-md-offset-1 col-md-11">
                          - Disinfection of clinical & non-clinical areas
                        </div>
                      </div>
                      <div className="row remove-margin">
                        <div className="col-md-offset-1 col-md-11">
                          - Attention to detail on all work spaces
                        </div>
                      </div>
                      <div className="row remove-margin">
                        <div className="col-md-offset-1 col-md-11">
                          - Maintaining the highest hygiene standards
                        </div>
                      </div>
                      that results in a safer and neater working environment for staff and your
                      valuable clients.
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
