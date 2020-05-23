import React from 'react';

class NewsSec1 extends React.Component {
  render() {
    return (
      <section className="news-sec1 rpd-vertical-1rem">
        <div className="wrapper rwrapper">
          <p className="press-rel-heading">Press Releases</p>
          {[
            {
              date: 'FEBRUARY 25, 2020',
              link:
                'https://yourstory.com/socialstory/2020/02/agri-startup-villa-mart-iit-alumnus-farmers-produce-mobile-market',
              content:
                'This agri startup is weeding out middlemen to get farmers the best price for produce'
            }
          ].map((item, index) => (
            <div className="news-link-wrapper" key={index}>
              <p className="news-date fs-1">{item.date}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-links fs-1-3"
              >
                {item.content}
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default NewsSec1;
