import React from 'react';
import FarmerTop from './FarmerTop';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import FarmerSec1 from './FarmerSec1';

class Farmer extends React.Component {
  render() {
    return (
      <section className="">
        <div className="bg">
          <Header />
          <FarmerTop />
        </div>
        <FarmerSec1 />
        <Footer />
      </section>
    );
  }
}

export default Farmer;
