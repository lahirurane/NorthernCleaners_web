import React, { Component } from 'react';
import Enquire from './Enquire';

export default class Contact extends Component {
  render() {
    return (
      <div className="">
        <div className="row remove-margin">
          <div className="about-us-row  col-12">
            <div className="row remove-margin">
              <div className="col-md-offset-1 col-md-10 intro-name">
                Contact Us
              </div>
            </div>
            <div
              style={{ 'padding-bottom': '2%' }}
              className="row remove-margin"
            >
              <div className="col-md-offset-1 col-md-10 ">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <div className="row">
                      <div className="col-md-12">Sandy Auwardt</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <a href="tel:0430504025"> 0430 504 025</a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <a href="mailto:sandy@northerncleaners.com.au">
                          sandy@northerncleaners.com.au
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="row">
                      <div className="col-md-12"> Sanka Auwardt </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <a href="tel:0433076020"> 0433 076 020</a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <a href="mailto:sanka@northerncleaners.com.au">
                          {' '}
                          sanka@northerncleaners.com.au
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">&nbsp;</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Enquire />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
