import React from 'react';
import FarmerTop from './FarmerTop';
import Footer from '../footer/Footer';
import Header from '../header/Header';

class Farmer extends React.Component {
  render() {
    return (
      <section className="">
        <div className="bg">
          <Header />
          <FarmerTop />
        </div>
        <Footer />
      </section>
    );
  }
}

export default Farmer;
