import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactGA from 'react-ga';
import Validator from 'validator';
import isEmpty from './is-empty';

export default class Enquire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      description: '',
      errors: {},
      submitted: false,
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (this.state.errors[e.target.name]) {
      const temp = this.state.errors;
      temp[e.target.name] = null;
      this.setState({ errors: temp });
    }
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true, errors: {} });
    if (!this.validateForm()) {
      this.setState({ isLoading: false });
      const gaData = {
        category: 'Enquiry Submission',
        action: 'Unsuccessful'
      };
      ReactGA.event(gaData);

      return;
    }

    const data = new FormData();
    data.append('firstName', this.state.firstName);
    data.append('lastName', this.state.lastName);
    data.append('email', this.state.email);
    data.append('mobile', this.state.mobile);
    data.append('description', this.state.description);

    fetch(
      'https://script.google.com/macros/s/AKfycbz_njZ_FgYDz5QZaanOQBrogWZuanLcNN03CFwF9g/exec',
      {
        method: 'POST',
        body: data
      }
    ).then(data => {
      this.setState({ submitted: true, isLoading: false });
      const gaData = {
        category: 'Enquiry Submission',
        action: 'Success'
      };
      ReactGA.event(gaData);
    });
    event.preventDefault();
  }

  validateForm() {
    let errors = {};

    const firstName = !isEmpty(this.state.firstName) ? this.state.firstName : '';
    const lastName = !isEmpty(this.state.lastName) ? this.state.lastName : '';
    const email = !isEmpty(this.state.email) ? this.state.email : '';

    const description = !isEmpty(this.state.description) ? this.state.description : '';

    if (Validator.isEmpty(firstName)) {
      errors.firstName = 'First Name field is required';
    }
    if (Validator.isEmpty(lastName)) {
      errors.lastName = 'Last Name field is required';
    }
    if (Validator.isEmpty(email)) {
      errors.email = 'Email field is required';
    }
    if (Validator.isEmpty(this.state.email)) {
      errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(this.state.email)) {
      errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(description)) {
      errors.description = 'Description is required';
    }

    this.setState({ errors: errors });

    return isEmpty(errors);
  }

  render() {
    return (
      <div className="row enquire-content">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 enquire-title">Enquire Now</div>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6 col-xs-6">
                <label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    disabled={this.state.submitted}
                    className={
                      !isEmpty(this.state.errors.firstName)
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />
                  {this.state.errors.firstName && (
                    <div className="col-md-12 col-xs-12 invalid-feedback error-message">
                      {this.state.errors.firstName}
                    </div>
                  )}
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
                    disabled={this.state.submitted}
                    className={
                      !isEmpty(this.state.errors.lastName)
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />
                  {this.state.errors.lastName && (
                    <div className="col-md-12 col-xs-12 invalid-feedback error-message">
                      {this.state.errors.lastName}
                    </div>
                  )}
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
                    disabled={this.state.submitted}
                    className={
                      !isEmpty(this.state.errors.email) ? 'form-control is-invalid' : 'form-control'
                    }
                  />
                  {this.state.errors.email && (
                    <div className="col-md-12 col-xs-12 invalid-feedback error-message">
                      {this.state.errors.email}
                    </div>
                  )}
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
                    disabled={this.state.submitted}
                    className={
                      !isEmpty(this.state.errors.mobile)
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />
                  {this.state.errors.mobile && (
                    <div className="col-md-12 col-xs-12 invalid-feedback error-message">
                      {this.state.errors.mobile}
                    </div>
                  )}
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
                    disabled={this.state.submitted}
                    className={
                      !isEmpty(this.state.errors.description)
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />
                  {this.state.errors.description && (
                    <div className="col-md-12 col-xs-12 invalid-feedback error-message">
                      {this.state.errors.description}
                    </div>
                  )}
                </label>
              </div>
            </div>
            <div className="row item-center">
              <div className="col-md-offset-5 col-md-2 ">
                <Button
                  className="enquire-submit"
                  type="submit"
                  disabled={this.state.submitted}
                  value="Submit"
                  onClick={this.handleSubmit}
                >
                  {this.state.isLoading
                    ? 'Submitting...'
                    : this.state.submitted
                    ? 'Successfully Submitted'
                    : 'Submit'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
