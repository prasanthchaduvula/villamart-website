import React from 'react';
import { Link } from 'react-router-dom';

class NewsTop extends React.Component {
  render() {
    return (
      <div className="wrapper rwrapper">
        <div className="about-hero rpd-vertical-1rem">
          <p className="about-hero-heading fs-2">News </p>
          <p className="about-hero-subheading">
            Our Journey so far on Your fingers
          </p>
          <div className="center-flex">
            <Link className="about-hero-btn center-flex" to="/blog">
              Check Our Blog to learn
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsTop;
