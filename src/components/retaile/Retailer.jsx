import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import RetailerTop from './RetailerTop';
import RetailerSec1 from './RetailerSec1';

class Retailer extends React.Component {
  render() {
    return (
      <section className="">
        <div className="bg">
          <Header />
          <RetailerTop />
        </div>
        <RetailerSec1 />
        <Footer />
      </section>
    );
  }
}

export default Retailer;
