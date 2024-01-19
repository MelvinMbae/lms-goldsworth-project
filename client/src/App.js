import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import './App.css'
import './Dashboard.css'
import StudentDash from './StudentDash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<StudentDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


