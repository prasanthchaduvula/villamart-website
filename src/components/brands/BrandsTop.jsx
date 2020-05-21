import React from 'react';
import { FiPhone } from 'react-icons/fi';

class BrandsTop extends React.Component {
  render() {
    return (
      <div className="wrapper rwrapper">
        <div className="about-hero rpd-vertical-1rem">
          <p className="about-hero-heading fs-2">Local Brands </p>
          <p className="about-hero-subheading">
            Build your brand by suppling directly to retailers.
          </p>
          <div className="center-flex">
            <button className="hero-btn center-flex" to="">
              <FiPhone /> <span className="fs-1"> 7680918423</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandsTop;
