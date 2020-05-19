import React from 'react';
import { Link } from 'react-router-dom';

class Sec2 extends React.Component {
  render() {
    return (
      <section className="sec2 rpd-vertical-2rem">
        <div className="wrapper rwrapper">
          <p className="sec2-heading fs-2">What we are </p>
          <div className="sec2-content-data r-d-block rpt-1">
            {[
              {
                value: '1500',
                text: 'Famers associated'
              },
              {
                value: '16000',
                text: 'Monthly consumers'
              },
              {
                value: '40',
                text: 'Weekly villages covered'
              },
              {
                value: '15',
                text: 'People in team'
              }
            ].map((item, index) => (
              <div
                className="sec2-li-item-cont margin-vertical-2rem center-flex rpd-vertical-1rem"
                key={index}
              >
                <div>
                  <p className="sec2-li-item fs-1-5">{item.value}</p>
                  <p className="sec2-li-item-span fs-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="sec2-content-para rpt-1">
            We are team of passionate people trying to solve the age old problem
            of agriculture. We procure from farmers and local brands by creating
            sustainable livelihood & uplifting their profits. We designed
            specifically for businesses including small retailers,
            entrepreneurs, departmental stores, kirana stores even in the remote
            towns and villages. As a member, you can purchase thousands of items
            for resale, at wholesale prices and in bulk quantities. You can
            order from anywhere at any time of the day and get delivery at your
            doorstep.
          </p>
          <Link to="/" className="sec2-btn">
            Know More
          </Link>
        </div>
      </section>
    );
  }
}

export default Sec2;
