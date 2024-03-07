import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Nav-bar';
import HomePage from './components/HomePage';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />        
      </Routes>
    </Router>
  );
}

export default App;