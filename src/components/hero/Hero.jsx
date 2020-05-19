import React from 'react';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import HeroTop from './HeroTop';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Hero extends React.Component {
  render() {
    return (
      <section>
        <div className="bg">
          <Header />
          <HeroTop />
        </div>
        <Sec1 />
        <Sec2 />
        <Footer />
      </section>
    );
  }
}

export default Hero;
