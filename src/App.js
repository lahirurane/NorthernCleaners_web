import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import LandingPage from './components/layout/LandingPage';
import './App.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-143468928-1', {
  debug: false,
  titleCase: false
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
