import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Properties from './components/Properties';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/properties' element = {<Properties />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
