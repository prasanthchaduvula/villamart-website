import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import BrandsSec1 from './BrandsSec1';
import BrandsTop from './BrandsTop';

class Brands extends React.Component {
  render() {
    return (
      <section className="">
        <div className="bg">
          <Header />
          <BrandsTop />
        </div>
        <BrandsSec1 />
        <Footer />
      </section>
    );
  }
}

export default Brands;
