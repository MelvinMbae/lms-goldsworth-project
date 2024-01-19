import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import StudentDash from './StudentDash';
import Navbar from './Navbar';
import ReportCard from './ReportCard';
import Courses from './courses';
import Dashboard from './Dashboard';


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
    <Routes>
      <Route path='/CoursesPage' element={<CoursesPage coursesList={coursesList} setToFavorite={setToFavoriteProducts} />}/>
      <Route path='/' element={<Navbar user={user} setUser={setUser} />}>
        <Route index element={<Home courses={courses} />} />
        <Route path='/' element={<Home courses={courses} />} />
        <Route element={<Dashboard user={user} />}>
          <Route path='/dashboard' element={<StudentDash />} />
          <Route path='/reportcard' element={<ReportCard />} />
          <Route path='/courses' element={<Courses />} />
        </Route>
      </Route>
      <Route path='/login' element={<Login setUser={setUser} />} />
    </Routes>
  );
}

export default App;


