import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import './App.css'
import './Dashboard.css'
import StudentDash from './StudentDash';
import Navbar from './Navbar';
import SideBar from './SideBar';


function App() {
  const [courses, setCourse] = useState([])
  const [user, setUser] = useState("")


  useEffect(()=>{
    fetch("/courses").then((response)=>{
      if(response.ok){
        response.json()
        .then((courses)=>{
          setCourse(courses)
        })
      }
    })
  },[])

  useEffect(()=>{
    fetch("/checksession").then((response)=>{
      if(response.ok){
        response.json()
        .then((sessionMember)=>{
          setUser(sessionMember.name)
        })
      }
    })
  },[])

  return (
      <Routes>
        <Route path='/' element={<Navbar user={user} setUser={setUser}/>}>
          <Route index element={<Home courses={courses}/>} />
          <Route path='/' element={<Home courses={courses}/>} />
          <Route path='/dashboard' element={<SideBar />}>
            <Route path='/dashboard' element={<StudentDash />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login setUser={setUser}/>} />
      </Routes>
  );
}

export default App;


