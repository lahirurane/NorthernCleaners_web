import React, { Component } from 'react';
import { Button } from 'reactstrap';
// var API_KEY = 'acb0b40c-43ca387b';
// var DOMAIN = 'http://northerncleaners.com.au/';
// var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

export default class Enquire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      description: '',
      submitted: false,
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    this.setState({ isLoading: true });

    const data = new FormData();
    data.append('firstName', this.state.firstName);
    data.append('lastName', this.state.lastName);
    data.append('email', this.state.email);
    data.append('mobile', this.state.mobile);
    data.append('description', this.state.description);

    fetch(
      'https://script.google.com/macros/s/AKfycbxSMURwUwoEI7LoGuHMjHhuDNMnR9Pa_a0SNNKajG5x2k1XNags/exec',
      {
        method: 'POST',
        body: data
      }
    ).then(data => {
      this.setState({ submitted: true, isLoading: false });
    });
    event.preventDefault();
  }

  sendEmail(text) {
    console.log(text);
    // const data = {
    //   from: 'Excited User <me@samples.mailgun.org>',
    //   to: 'lahirurandika.ranasinghe@gmail.com',
    //   subject: 'new Enquire',
    //   text: text
    // };
    // mailgun.messages().send(data, (error, body) => {
    //   console.log(body);
    // });
  }

  render() {
    return (
      <div className="row enquire-content">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 enquire-title">Enquire Now</div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 col-xs-6">
                <label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="col-md-6 col-xs-6">
                <label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xs-6">
                <label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="col-md-6 col-xs-6">
                <label>
                  <input
                    type="text"
                    placeholder="Mobile (optional)"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <label>
                  <textarea
                    rows={5}
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="row item-center">
              <div className="col-md-offset-5 col-md-2 ">
                <Button
                  className="btn-default"
                  type="submit"
                  disabled={this.state.submitted}
                  value="Submit"
                >
                  {this.state.isLoading
                    ? 'Submitting...'
                    : this.state.submitted
                    ? 'Successfully Submitted'
                    : 'Submit'}
                </Button>
                {/* <input
                  className="enquire-submit"
                  type="submit"
                  disable={this.state.submitted}
                  value="Submit"
                >
                
                </input> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
