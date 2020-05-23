import React from 'react';
import { Link } from 'react-router-dom';

class AboutTop extends React.Component {
  render() {
    return (
      <div className="">
        <div className="wrapper rwrapper">
          <div className="about-hero rpd-vertical-1rem">
            <p className="about-hero-heading fs-2-5">About Us </p>
            <p className="about-hero-subheading">
              A small team driven by pursuit of adventure and fun.
            </p>
            <div className="center-flex">
              <Link className="about-hero-link center-flex" to="/news">
                Check Our News to Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutTop;
