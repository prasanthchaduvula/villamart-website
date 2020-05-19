import React from 'react';
import Hero from './hero/Hero';
import { Route } from 'react-router-dom';
import About from './aboutus/About';
import Farmer from './farmers/Farmer';

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
    </div>
  );
}

export default App;
