import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import './App.css'
import Courses from './Courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


