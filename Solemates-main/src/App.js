import React from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Card from './components/Card/Card.js';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts';
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <div className='card-div'>
        <Card
          shoeName="Jordan 1"
          price="1307"
        />
        <Card
          shoeName="Jordan 1"
          price="1307"
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/auth/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
