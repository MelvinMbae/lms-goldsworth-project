import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import StudentDash from './StudentDash';
import Navbar from './Navbar';
import ReportCard from './ReportCard';
import Courses from './Courses';
import CoursesPage from './CoursesPage'
import Dashboard from './Dashboard';
import About from './About';
import './Courses.css'
import './About.css';


function App() {
  const [courses, setCourse] = useState([])
  const [user, setUser] = useState("")
  const [coursesList, setCoursesList] = useState([]);
  const [courseListDictionary, setCourseListDictionary] = useState({});

  function fetchCoursesData() {
    fetch("/courses")
      .then((response) => response.json())
      .then((data) => {

        data.forEach((course) => {
          courseListDictionary[course.id] = course;
        });

        setCoursesList(data);
        setCourseListDictionary(courseListDictionary);
      });

  }
  useEffect(() => fetchCoursesData(), []);

  useEffect(() => {
    fetch("/courses").then((response) => {
      if (response.ok) {
        response.json()
          .then((courses) => {
            setCourse(courses)
          })
      }
    })
  }, [])

  useEffect(() => {
    fetch("/checksession").then((response) => {
      if (response.ok) {
        response.json()
          .then((sessionMember) => {
            setUser(sessionMember)
          })
      }
    })
  }, [])

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/coursespage' element={<CoursesPage coursesList={coursesList} user={user} />} />
        <Route index element={<Home courses={courses} />} />
        <Route path='/' element={<Home courses={courses} />} />
        <Route path='/about' element={<About setUser={setUser} />} />

        <Route element={<Dashboard user={user} />}>
          <Route path='/dashboard' element={<StudentDash />} />
          <Route path='/reportcard' element={<ReportCard />} />
          <Route path='/courses' element={<Courses />} />
        </Route>
        <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;


