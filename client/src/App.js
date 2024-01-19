import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import StudentDash from './StudentDash';
import Navbar from './Navbar';
import ReportCard from './ReportCard';
import Courses from './Courses';
import Dashboard from './Dashboard';
import ActiveCourse from './ActiveCourses';
import Classes from './Classes';
import Assignments from './Assignments';
import './Chat.css';
import Chat from './pages/Chat';
import Registration from './pages/Registration';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navbar user={user} setUser={setUser}/>}>
          <Route path='/home' index element={<Home courses={courses}/>} />
          {/*<Route path='/' element={<Home courses={courses}/>} />*/}
          <Route  element={<Dashboard user={user}/>}>
            <Route path='/dashboard' element={<StudentDash />} />
            <Route path='/reportcard' element={<ReportCard />} />
            <Route path='/courses' element={<ActiveCourse />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/assignments' element={<Assignments />} />
            <Route path='/assignments' element={<Chat />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
  );
}

export default App;
