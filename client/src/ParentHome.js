import React, { useEffect, useState , useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ParentDash from './ParentDash'
import Navbar from './Navbar';
import ReportCard from './ReportCard';
import Dashboard from './pages/Dashboard';
import ActiveCourse from './ActiveCourses';
import Assignments from './Assignments';
import ChatBox from './components/chatBox';
import CoursesPage from './CoursesPage'
import About from './pages/About';
import { appContext } from './utils/appContext';



function ParentHome() {
  const [courses, setCourse] = useState([])
  const [assignments, setAssignments] = useState([])
  const [coursesList, setCoursesList] = useState([]);
  const [courseListDictionary, setCourseListDictionary] = useState({});

  const { setUser } = useContext(appContext)


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

  useEffect(() => {
    fetch("/assignments").then((response) => {
      if (response.ok) {
        response.json()
          .then((assignment) => {
            setAssignments(assignment)
          })
      }
    })
  }, [])

  return (
      <Routes>
        <Route path='/' element={<Navbar setUser={setUser}/>}>
          <Route path='/' index element={<Home courses={courses}/>} />
          <Route path='/home' element={<Home courses={courses}/>} />
          <Route  element={<Dashboard/>}>
            <Route path='/dashboard' element={<ParentDash />} />
            <Route path='/reportcard' element={<ReportCard />} />
            <Route path='/active-courses' element={<ActiveCourse />} />
            <Route path='/assignments' element={<Assignments assignments={assignments}/>} />
          </Route>
          <Route path='/courses' element={<CoursesPage coursesList={coursesList} />} />
          <Route path='/about' element={<About setUser={setUser} />} />
        </Route>
        <Route path='/login' element={<Login setUser={setUser}/>} />
      </Routes>
  );
}

export default ParentHome;


