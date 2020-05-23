import React from 'react';

class Numbers extends React.Component {
  render() {
    return (
      <section className="numbers-sec rpt-1">
        <div className="wrapper rwrapper">
          <p className="numbers-heading">Our Numbers </p>
          <div className="sec2-content-data r-d-block rpt-0-3 pt-1">
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
                className="sec2-li-item-cont bg margin-vertical-2rem center-flex rpd-vertical-1rem rm-vertical-1rem"
                key={index}
              >
                <div>
                  <p className="sec2-li-item fs-1-5">{item.value}</p>
                  <p className="sec2-li-item-span fs-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Numbers;
