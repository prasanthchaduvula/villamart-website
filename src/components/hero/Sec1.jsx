import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

class Sec1 extends React.Component {
  render() {
    return (
      <section
        id="opt"
        className="sec1 space-evenly-flex r-d-block rp-1 height-fit"
      >
        <div className="sec1item rpt-1 width-full">
          <img className="sec1item-img" src="sec1icon1.png" alt="" />
          <p id="#options" className="sec1item-heading fs-1-5">
            Farmers
          </p>
          <p className="sec1item-subheading fs-1">
            Sell directly and make 20% more revenue from your doorstep.
            Tranparent weighing. Payment in 24 hours. Cold storage facility
          </p>
          <button className="sec1-btn center-flex" to="">
            <FiPhone /> <span> 7680918423</span>
          </button>
        </div>
        <div className="sec1item rpt-1 width-full">
          <img className="sec1item-img" src="sec1icon2.png" alt="" />
          <p className="sec1item-heading fs-1-5">Local Brands</p>
          <p className="sec1item-subheading fs-1">
            Get access to chain of retailers, small kirana stores. Sell from
            your doorstep. Storage and inventory facility
          </p>
          <Link className="sec1-btn" to="/">
            Join as Local Brand
          </Link>
        </div>
        <div className="sec1item rpt-1 width-full">
          <img className="sec1item-img" src="sec1icon3.png" alt="" />
          <p className="sec1item-heading fs-1-5">Retailers</p>
          <p className="sec1item-subheading fs-1">
            Competitive pricing. Doorstep delivery. High quality graded produce.
            Convinent, time saving and with ease
          </p>
          <Link className="sec1-btn" to="">
            Join as Retailer
          </Link>
        </div>
      </section>
    );
  }
}

export default Sec1;
