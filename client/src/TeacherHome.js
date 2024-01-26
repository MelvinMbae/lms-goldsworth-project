import React, { useEffect, useState , useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import TeacherDash from './TeacherDash'
import Navbar from './Navbar';
import Dashboard from './pages/Dashboard';
import ActiveCourse from './ActiveCourses';
import Classes from './Classes';
import Assignments from './Assignments';
import ChatBox from './components/chatBox';
import Registration from './pages/Registration';
import Registrations from './components/RegPage';
import CoursesPage from './CoursesPage'
import About from './pages/About';
import { appContext } from './utils/appContext';



function TeacherHome() {
  const [assignments, setAssignments] = useState([])

  const { user , setUser , courses , coursesList } = useContext(appContext)

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
            <Route path='/dashboard' element={<TeacherDash />} />
            <Route path='/active-courses' element={<ActiveCourse />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/assignments' element={<Assignments user={user} assignments={assignments}/>} />
            <Route path='/forums' element={<ChatBox />} />
            <Route path='/registrations' element={<Registrations />} />
          </Route>
          <Route path='/courses' element={<CoursesPage coursesList={coursesList} />} />
          <Route path='/about' element={<About setUser={setUser} />} />
        </Route>
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/course-registration' element={<Registration />} />
      </Routes>
  );
}

export default TeacherHome;


