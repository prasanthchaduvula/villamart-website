import React from 'react';
import Team from './Team';
import AboutSec1 from './AboutSec1';
import AboutSec2 from './AboutSec2';
import AboutTop from './AboutTop';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section>
        <div className="bg">
          <Header />
          <AboutTop />
        </div>
        <AboutSec1 />
        <Team />
        <AboutSec2 />
        <Footer />
      </section>
    );
  }
}

export default About;
