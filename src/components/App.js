import React from 'react';
import Hero from './hero/Hero';
import { Route } from 'react-router-dom';
import About from './aboutus/About';
import Farmer from './farmers/Farmer';
import Brands from './brands/Brands';
import Retailer from './retaile/Retailer';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/farmers">
        <Farmer />
      </Route>
      <Route exact path="/localbrands">
        <Brands />
      </Route>
      <Route exact path="/retailers">
        <Retailer />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
