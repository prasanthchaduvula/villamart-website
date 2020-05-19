import React from 'react';

class HeroTop extends React.Component {
  render() {
    return (
      <div className="hero-section1 center-flex height-100vh-72px">
        <div className="wrapper rwrapper center-flex">
          <div>
            <p className="hero-text fs-2-3">
              Supplies farm produce to Retail stores
            </p>
            <p className="hero-caption fs-1-3">
              We source fresh farm produce from farmers and local brands so that
              retailers can order grocery, vegetables, fruits, millets directly
              and get it delivered to their stores
            </p>
            <div className="center-flex">
              <a href="/#opt" className="hero-btn">
                Learn More
              </a>
            </div>
          </div>
          {/* <img src="herobg.svg" alt="" /> */}
        </div>
      </div>
    );
  }
}

export default HeroTop;
