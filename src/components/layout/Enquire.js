import React, { Component } from 'react';
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
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    let text =
      '<table class="tg"><tr>' +
      '<th>First Name </th>' +
      ' <th >' +
      this.state.firstName +
      '</th>' +
      '</tr>' +
      '<tr><th>Last Name </th>' +
      ' <th >' +
      this.state.lastName +
      '</th>' +
      '</tr>' +
      '<tr><th>Email </th>' +
      ' <th >' +
      this.state.email +
      '</th>' +
      '</tr>' +
      '<tr><th>Mobile</th>' +
      ' <th >' +
      this.state.mobile +
      '</th>' +
      '</tr>' +
      '<tr><th>Description :  </th>' +
      ' <th >' +
      this.state.description +
      '</th>' +
      '</tr>' +
      '</table>';
    // this.sendEmail(text);

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
    );
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
                <input className="enquire-submit" type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
