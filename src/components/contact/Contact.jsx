import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ContactTop from './ContactTop';

class Contact extends React.Component {
  render() {
    return (
      <section className="">
        <div className="bg">
          <Header />
          <ContactTop />
        </div>
        <Footer />
      </section>
    );
  }
}

export default Contact;
