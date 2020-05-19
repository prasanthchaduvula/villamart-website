import React from 'react';
import Team from './Team';
import AboutSec1 from './AboutSec1';
import AboutSec2 from './AboutSec2';

class About extends React.Component {
  render() {
    return (
      <section className="about">
        <div className="wrapper rwrapper">
          <div className="about-hero rpd-vertical-1rem">
            <p className="about-hero-heading fs-2">About Us </p>
            <p className="about-hero-subheading">
              A small team driven by pursuit of adventure and fun.
            </p>
          </div>
        </div>
        <AboutSec1 />
        <Team />
        <AboutSec2 />
      </section>
    );
  }
}

export default About;
