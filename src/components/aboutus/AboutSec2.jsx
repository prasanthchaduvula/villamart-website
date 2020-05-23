import React from 'react';
import { Link } from 'react-router-dom';

function AboutSec2() {
  return (
    <section className="about-sec2 rpd-vertical-1rem">
      <div className="wrapper rwrapper">
        <p className="about-sec2-heading fs-1-5">Want to learn more?</p>
        <p className="about-sec2-subheading fs-1">
          Read more about villamart and our latest news.
        </p>
        <div className="center-flex">
          <Link className="about-sec2-link bg" to="/news">
            Go to Press & Media Page
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSec2;
