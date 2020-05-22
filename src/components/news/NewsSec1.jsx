import React from 'react';

class NewsSec1 extends React.Component {
  render() {
    return (
      <section className="center-flex">
        <div className="wrapper rwrapper">
          <div className="timeline-sec">
            <p className="timeline-heading">Journey Upto Now</p>
            <div className="timeline-cont">
              {[
                {
                  time: 'DEC 2017',
                  activity:
                    'starting with the idea of occupation starting with the idea of occupation starting with the idea of occupation starting with the idea of occupation'
                },
                {
                  time: 'MARCH 2018',
                  activity: 'starting with the idea of occupation'
                },
                {
                  time: 'JUNE 2018',
                  activity: 'starting with the idea of occupation'
                },
                {
                  time: 'NOV 2018',
                  activity: 'starting with the idea of occupation'
                }
              ].map((item, index) => (
                <li className="timeline-item-li width-full" key={index}>
                  <span className="timeline-pointer">.</span>
                  <div className="timeline-item-wrapper">
                    <p className="timeline-time">{item.time}</p>
                    <p className="timeline-activity">{item.activity}</p>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsSec1;
