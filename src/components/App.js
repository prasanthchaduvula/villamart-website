import React from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import Footer from './footer/Footer';
import { Route } from 'react-router-dom';
import About from './aboutus/About';
import Farmer from './farmers/Farmer';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/farmers">
        <Farmer />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
