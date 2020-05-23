import React from 'react';
import { FiPhone } from 'react-icons/fi';

class ContactTop extends React.Component {
  render() {
    return (
      <div className="wrapper rwrapper">
        <div className="about-hero rpd-vertical-1rem">
          <p className="about-hero-heading fs-2">Contact Us </p>
          <p className="about-hero-subheading">
            We are always at your service.
          </p>
          <div className="center-flex">
            <button className="about-hero-btn center-flex" to="">
              <FiPhone /> <span className="fs-1"> 7680918423</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactTop;
