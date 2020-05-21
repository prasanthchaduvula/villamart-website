import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="rpd-vertical-1rem">
        <div className="wrapper rwrapper">
          <div className="spacebet-flex r-d-block">
            <div className="footer-cont-left spacebet-flex r-d-block">
              <p className="f-logo">Villamart</p>
              <section className="footer-col rpt-1">
                <p className="footer-col-heading">COMPANY</p>
                {['About', 'Careers', 'Blog', 'News', 'Contact'].map(
                  (item, index) => (
                    <Link
                      to={`/${item.toLowerCase().split(' ').join('')}`}
                      key={index}
                    >
                      <li className="footer-col-items">{item}</li>
                    </Link>
                  )
                )}
              </section>
              <section className="footer-col rpt-1">
                <p className="footer-col-heading">RESOURCES</p>
                {['Farmers', 'Local Brands', 'Retailers', 'Faq'].map(
                  (item, index) => (
                    <Link
                      to={`/${item.toLowerCase().split(' ').join('')}`}
                      key={index}
                    >
                      <li className="footer-col-items">{item}</li>
                    </Link>
                  )
                )}
              </section>
            </div>

            <section className="footer-cont-right rpt-1">
              <div className="footer-cont-right-top only-flex">
                <a
                  className="footer-social-logo-cont"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram className="footer-social-logo" />
                </a>
                <a
                  className="footer-social-logo-cont"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter className="footer-social-logo" />
                </a>
              </div>
            </section>
          </div>
          <section className="footer-last float-left">
            <small className="footer-last-item">
              India
              <span role="img" aria-label="sheep">
                {''} 🇮🇳 {''}
              </span>
            </small>
            <p className="footer-last-item">© 2020 Villamart</p>
            <a
              className="footer-last-item"
              href="https://twitter.com/chaduvula98"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crafted with
              <span role="img" aria-label="sheep">
                {''} ❤️ {''}
              </span>
              by Chaduvula prasanth
            </a>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
