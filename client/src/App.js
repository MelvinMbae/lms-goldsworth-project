// import './App.css';
import StudentDash from './StudentDash';
import TeacherDash from './TeacherDash';
import ParentDash from './ParentDash';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import './App.css'
import courses from './courses';

function App() {
  return (
    // <TeacherDash/>
    // <ParentDash/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<StudentDash/>} />
        <Route path='/courses' element={<courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


