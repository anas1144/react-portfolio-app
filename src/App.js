import React from 'react';
import About from './Content/About/About';
import Contact from './Content/Contact/Contact';
import Home from './Content/Home/Home';
import Articles from './Content/Articles/Articles';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom"
import Header from './Content/Header/Header';
import Portfolio from './Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
    <Header />  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  </div>
  );
}

export default App;
