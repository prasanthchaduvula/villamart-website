import React from 'react';

class NewsSec2 extends React.Component {
  render() {
    return (
      <section className="news-sec2 height-fit center-flex rpd-vertical-1rem">
        <div className="news-sec2-cont wrapper rwrapper">
          <p className="news-sec2-heading fs-1-5">Awards and Recognition</p>
          <div className="news-sec2-imgs-cont r-d-block">
            {[
              'sec3item1.jpg',
              'sec3item2.jpeg',
              'sec3item3.jpg',
              'sec3item4.jpg',
              'sec3item5.jpg',
              'sec3item6.jpg'
            ].map((item, index) => (
              <div className="news-sec2-img-wrapper" key={index}>
                <img
                  className="news-sec2-img r-d-block rm-vertical-1rem"
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default NewsSec2;
