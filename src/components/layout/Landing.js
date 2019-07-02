import React, { Component } from 'react';
import Carousel from './Carousel';
import Enquire from './Enquire';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Carousel />
        <div className="row remove-margin">
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
        <div className="row">
          <div className="col-md-12">
            <div className="row ">
              <div className="col-md-12 text-center professional-tag">PROFESSIONAL</div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center professional-desc">
                CLEANING SERVICES AT AFFORDABLE PRICES
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12 desc-topic ">TESTIMONIALS</div>
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
              </div>
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12 desc-topic ">CLEANING SERVICES</div>
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
                    <div className="row">
                      <div className="col-md-2 col-xs-2  cleaning-service-point-img">
                        <i className="fas fa-hand-point-right" />
                      </div>
                      <div className="col-md-10 col-xs-10">General Cleaning</div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xs-2 cleaning-service-point-img">
                        <i className="fas fa-hand-point-right" />
                      </div>
                      <div className="col-md-10 col-xs-10">Ground and Garden Maintenance </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xs-2  cleaning-service-point-img">
                        <i className="fas fa-hand-point-right" />
                      </div>
                      <div className="col-md-10 col-xs-10">Title and Grout Cleaning</div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xs-2  cleaning-service-point-img">
                        <i className="fas fa-hand-point-right" />
                      </div>
                      <div className="col-md-10 col-xs-10">
                        Carpet and Upholsteroay Steam Cleaning
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xs-2  cleaning-service-point-img">
                        <i className="fas fa-hand-point-right" />
                      </div>
                      <div className="col-md-10 col-xs-10">Window Cleaning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1" />
          <div style={{ paddingTop: '1em', paddingBottom: '1em' }} className="col-md-3">
            <div className="row">
              <div className="col-md-12 desc-topic">LOCATIONS</div>
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
        <div className="row">
          <div className="col-md-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Enquire />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
