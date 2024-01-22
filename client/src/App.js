import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import StudentDash from './StudentDash';
import Navbar from './Navbar';
import ReportCard from './ReportCard';
import Dashboard from './pages/Dashboard';
import ActiveCourse from './ActiveCourses';
import Classes from './Classes';
import Assignments from './Assignments';
import ChatBox from './components/chatBox';
import Registration from './pages/Registration';
import Registrations from './components/RegPage';
import CoursesPage from './CoursesPage'
import About from './About';
import { userContext } from './utils/UserContext';



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
      <userContext.Provider value={user}><Routes>
        <Route path='/' element={<Navbar setUser={setUser}/>}>
          <Route path='/' index element={<Home courses={courses}/>} />
          <Route path='/home' element={<Home courses={courses}/>} />
          <Route  element={<Dashboard/>}>
            <Route path='/dashboard' element={<StudentDash />} />
            <Route path='/reportcard' element={<ReportCard />} />
            <Route path='/active-courses' element={<ActiveCourse />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/assignments' element={<Assignments />} />
            <Route path='/forums' element={<ChatBox />} />
            <Route path='/about' element={<About setUser={setUser} />} />
            <Route path='/coursespage' element={<CoursesPage coursesList={coursesList} />} />
            <Route path='/registrations' element={<Registrations />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/course-registration' element={<Registration />} />
      </Routes></userContext.Provider>
  );
}

export default App;


