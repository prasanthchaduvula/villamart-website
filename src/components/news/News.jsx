import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import NewsTop from './NewsTop';
import NewsSec1 from './NewsSec1';
import NewsSec2 from './NewsSec2';

class News extends React.Component {
  render() {
    return (
      <section className="">
        <div className="bg">
          <Header />
          <NewsTop />
        </div>
        <NewsSec1 />
        <NewsSec2 />
        <Footer />
      </section>
    );
  }
}

export default News;
