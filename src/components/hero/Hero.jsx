import React from 'react';
import Sec1 from './Sec1';
import Sec2 from './Sec2';

class Hero extends React.Component {
  render() {
    return (
      <section>
        <div className="hero-section1 only-flex r-d-block rpd-vertical-1rem height-fit">
          <div className="wrapper rwrapper">
            <p className="hero-text fs-2">
              Supplies farm produce to Retail stores
            </p>
            <p className="hero-caption">
              We source fresh farm produce from farmers and local brands so that
              retailers can order grocery, vegetables, fruits, millets directly
              and get it delivered to their stores
            </p>
            <div className="center-flex">
              <a href="/#opt" className="hero-btn">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <Sec1 />
        <Sec2 />
      </section>
    );
  }
}

export default Hero;
