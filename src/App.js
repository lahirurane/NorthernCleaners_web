import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navibar from './components/layout/Navibar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Services from './components/layout/Services';
import Testimonials from './components/layout/Testimonials';
import Contact from './components/layout/Contact';
import About from './components/layout/AboutUs';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navibar />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={Landing}
          />
          <div className="container">
            <Route
              exact
              path={process.env.PUBLIC_URL + '/services'}
              component={Services}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/testimonials'}
              component={Testimonials}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/contact'}
              component={Contact}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/aboutus'}
              component={About}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
