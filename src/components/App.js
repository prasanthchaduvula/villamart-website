import React from 'react';
import Hero from './hero/Hero';
import { Route, Switch } from 'react-router-dom';
import About from './aboutus/About';
import Farmer from './farmers/Farmer';
import Brands from './brands/Brands';
import Retailer from './retaile/Retailer';
import Contact from './contact/Contact';
import News from './news/News';

function App() {
  return (
    <Switch>
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
      <Route exact path="/news">
        <News />
      </Route>
    </Switch>
  );
}

export default App;
