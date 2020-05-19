import React from 'react';

class Sec3 extends React.Component {
  render() {
    return (
      <section className="sec3">
        <div className="sec3-cont">
          <p className="sec-heading">Awards and Recognition</p>
          <div className="sec3-imgs-cont">
            {[
              'sec3item1.jpg',
              'sec3item2.jpeg',
              'sec3item3.jpg',
              'sec3item4.jpg',
              'sec3item5.jpg',
              'sec3item6.jpg'
            ].map(item => (
              <img className="sec3-img" src={item} alt="" />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Sec3;
