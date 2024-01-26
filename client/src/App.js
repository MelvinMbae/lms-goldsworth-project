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
import './Courses.css'
import './About.css';
import './CreateEvent.css'
import Calendar from './Calendar';
import CreateEvent from './CreateEvent';



function App() {
  const [courses, setCourse] = useState([])
  const [user, setUser] = useState("")
  const [coursesList, setCoursesList] = useState([]);
  const [courseListDictionary, setCourseListDictionary] = useState({});

  const [eventsList, setEventsList] = useState([])
  const [eventsDictionary, setEventsDictionary] = useState({})

  function fetchEventData() {
    fetch("/events")
      .then((response) => response.json())
      .then((eventData) => {
        eventData.forEach((event) => {
          eventsDictionary[event.id] = event;
        });

        setEventsList(eventData);
        setEventsDictionary(eventsDictionary);
      });

  }
  useEffect(() => fetchEventData(), []);
  console.log(eventsList)

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
      <Routes>
        <Route path='/' element={<Navbar user={user} setUser={setUser}/>}>
          <Route path='/' index element={<Home courses={courses}/>} />
          <Route path='/home' element={<Home courses={courses}/>} />
          <Route  element={<Dashboard user={user}/>}>
            <Route path='/dashboard' element={<StudentDash />} />
            <Route path='/calendar' element={<Calendar eventsList={eventsList}/>} />
            <Route path="/create-event" element={<CreateEvent />} />

            <Route path='/reportcard' element={<ReportCard />} />
            <Route path='/active-courses' element={<ActiveCourse />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/assignments' element={<Assignments />} />
            <Route path='/forums' element={<ChatBox />} />
            <Route path='/about' element={<About setUser={setUser} />} />
            <Route path='/coursespage' element={<CoursesPage coursesList={coursesList} user={user} />} />
            <Route path='/registrations' element={<Registrations />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/course-registration' element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;


