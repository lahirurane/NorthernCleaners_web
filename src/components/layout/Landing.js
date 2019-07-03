import React, { Component } from 'react';

import Enquire from './Enquire';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

class Landing extends Component {
  render() {
    return (
      <React.Fragment className="container">
        <div className="row m-0">
          <div className="col-md-3 col-xs-6 land-desc-box land-desc-box-1">
            <div classNme="row">
              <div className="col-md-12 land-desc-title">OFFICE</div>
            </div>
            <div classNme="row">
              <div className="col-md-12 land-desc-img">
                <i class="fas fa-briefcase" />
              </div>
            </div>
            <div classNme="row">
              <div className="col-md-12 land-desc-desc">
                Our team will meet with you and get to know the cleaning expectations that needs to
                be met. We will do a walk through together of the office site to obtain a good
                understanding of the cleaning aspects.
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 land-desc-box land-desc-box-2">
            <div classNme="row">
              <div className="col-md-12 land-desc-title">COMMERCIAL</div>
            </div>
            <div classNme="row">
              <div className="col-md-12 land-desc-img">
                <i class="fas fa-building" />
              </div>
            </div>
            <div classNme="row">
              <div className="col-md-12 land-desc-desc">
                For over 7 years Northern Cleaners have specialized in providing professional
                cleaning services for commercial, industrial, office, medical and building
                construction industries throughout
              </div>
            </div>
          </div>
          <div className="col-md-3  col-xs-6 land-desc-box land-desc-box-3">
            <div classNme="row">
              <div className="col-md-12 land-desc-title">BUILDERS</div>
            </div>
            <div classNme="row">
              <div className="col-md-12 land-desc-img">
                <i class="fas fa-gavel" />
              </div>
            </div>
            <div classNme="row">
              <div className="col-md-12 land-desc-desc">
                For over 7 years Northern Cleaners have specialized in providing professional
                cleaning services for commercial, industrial, office, medical and building
                construction industries throughout
              </div>
            </div>
          </div>
          <div className="col-md-3  col-xs-6 land-desc-box land-desc-box-4">
            <div classNme="row">
              <div className="col-md-12 land-desc-title">MEDICAL CENTRE</div>
            </div>
            <div classNme="row">
              <div className="col-md-12 land-desc-img">
                <i class="fas fa-user-md" />
              </div>
            </div>
            <div classNme="row">
              <div className="col-md-12 land-desc-desc">
                Northern Cleaners specialise in medical centre cleaning, currently cleaning 15
                medical and dental clinics around Melbourne. Our team focus on hygiene, cross
                contamination and disinfection to create safe environments for all medical staff and
                patients
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 item-col">
              <div className="row ">
                <div className="col-md-12 text-center professional-tag text-theme-color">
                  PROFESSIONAL
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center professional-desc text-theme-color">
                  CLEANING SERVICES AT AFFORDABLE PRICES
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 item-col">
              <div className="row">
                <div className="col-md-12 desc-topic text-theme-color">TESTIMONIALS</div>
              </div>
              <div className="row well">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-10 testermo-name">Emma Caffin</div>
                    <div className="col-md-2 testermo-quot">"</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 testermo-desc">
                      Northen Cleaning group works closely with us to full fill our cleaning
                      requirements. I have no hesitation in recommending them for all your cleaning
                      needs.
                    </div>
                  </div>
                  <div className="row py-2">
                    <Col>
                      <Link to="/testimonials">find out more...</Link>
                    </Col>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
            <div className="col-md-3 item-col cleaning-services-col">
              <div className="row">
                <div className="col-md-12 desc-topic text-theme-color ">CLEANING SERVICES</div>
              </div>
              <div className="row cleaning-service">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-10 text-center cleaning-service-desc">
                      Tailor made cleaning solutions
                    </div>
                    <div className="col-md-2 text-center cleaning-service-desc" />
                  </div>
                  <div className="row item-center ">
                    {/* <div className="col-md-3 cleaning-service-img">
                    <i class="fas fa-broom" />
                  </div> */}
                    <div className="col-md-12 text-left cleaning-service-items">
                      <Row>
                        <Col className="cleaning-service-point-img" md="1" xs="1" xm="1">
                          <i className="fas fa-hand-point-right" />
                        </Col>
                        <Col md="10" xs="10" xm="10">
                          General Cleaning
                        </Col>
                      </Row>
                      <Row>
                        <Col className="cleaning-service-point-img" md="1" xs="1" xm="1">
                          <i className="fas fa-hand-point-right" />
                        </Col>
                        <Col md="10" xs="10" xm="10">
                          Ground and Garden Maintenance
                        </Col>
                      </Row>
                      <Row>
                        <Col className="cleaning-service-point-img" md="1" xs="1" xm="1">
                          <i className="fas fa-hand-point-right" />
                        </Col>
                        <Col md="10" xs="10" xm="10">
                          Title and Grout Cleaning
                        </Col>
                      </Row>
                      <Row>
                        <Col className="cleaning-service-point-img" md="1" xs="1" xm="1">
                          <i className="fas fa-hand-point-right" />
                        </Col>
                        <Col md="10" xs="10" xm="10">
                          Carpet and Upholsteroay Steam Cleaning
                        </Col>
                      </Row>
                      <Row>
                        <Col className="cleaning-service-point-img" md="1" xs="1" xm="1">
                          <i className="fas fa-hand-point-right" />
                        </Col>
                        <Col md="10" xs="10" xm="10">
                          Window Cleaning
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
            <div className="py-2 col-md-3  item-col">
              <div className="row">
                <div className="col-md-12 desc-topic text-theme-color">LOCATIONS</div>
              </div>
              <div className="row">
                <div className="col-md-12"> Servicing all areas of Melbourne, Australia</div>
              </div>

              <div className="row">
                <div className="col-md-12">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12">Northern Cleaners,</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">13 Westbourne Dr,</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">Doreen VIC 3754</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">&nbsp;</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      {' '}
                      <i className="fa fa-mobile" />
                      &nbsp;0430 504 025
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
          <Row className="item-center py-5">
            <div className="col-md-6 col-sm-12 nav-call-us ">
              <div className="call-us-text  item-center "> CALL US</div>
              <div className="call-us-number  item-center ">
                <a href="tel:0430504025"> 0430504025</a>
              </div>
            </div>
          </Row>
          <div className="row">
            <div className="col-md-12">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Enquire />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
