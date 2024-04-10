import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Properties from './components/Properties';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/properties' element = {<Properties />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
