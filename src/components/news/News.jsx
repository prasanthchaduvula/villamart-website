import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import NewsTop from './NewsTop';
import NewsSec1 from './NewsSec1';
import NewsSec2 from './NewsSec2';
import Numbers from './Numbers';

class News extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="">
        <div className="bg">
          <Header />
          <NewsTop />
        </div>
        <Numbers />
        <NewsSec1 />
        <NewsSec2 />
        <Footer />
      </section>
    );
  }
}

export default News;
