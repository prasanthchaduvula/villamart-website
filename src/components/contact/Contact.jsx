import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ContactTop from './ContactTop';

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
