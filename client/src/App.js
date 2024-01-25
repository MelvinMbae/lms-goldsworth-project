import React, { Fragment, useEffect, useState } from 'react';
import { appContext } from './utils/appContext';
import StudentHome from './StudentHome';
import ParentHome from './ParentHome';
import TeacherHome from './TeacherHome'
import Navbar from './Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import CoursesPage from './CoursesPage'
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserAuth from './pages/UserAuth';



function App() {
  const [courses, setCourse] = useState([])
  const [user, setUser] = useState("")
  const [session, setSession] = useState({"user_type":'', "user_details":''})
  const [coursesList, setCoursesList] = useState([]);
  const [courseListDictionary, setCourseListDictionary] = useState({});

  function fetchCoursesData() {
    fetch("/courses")
      .then((response) => response.json())
      .then((data) => {

        data.forEach((course) => {
          courseListDictionary[course.id] = course;
        });
        setCourse(data)
        setCoursesList(data);
        setCourseListDictionary(courseListDictionary);
      });

  }
  useEffect(() => fetchCoursesData(), []);

  function handleUser(user){
    if("student_id" in user){
      setSession({user_type:"student", user_details:user})
    }
    else if("parent_id" in user){
      setSession({user_type:"parent", user_details:user})
    }
  }

  useEffect(() => {
    fetch("/checksession").then((response) => {
      if (response.ok) {
        response.json()
          .then((sessionMember) => {
            handleUser(sessionMember)
            setUser(sessionMember)
          })
      }
    })
  }, [])

  // function SetPage(){
  //   // if(user.user_type === "student"){
  //   //   return <StudentHome />
  //   // }
  //   if(user.user_type === "student"){
  //     return <StudentHome />
  //   }

  //   else{ return <ParentHome/> }
  // }

  return (

      <appContext.Provider value={{user , session , setSession , setUser , courses, coursesList }}>
        <div className=''>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home courses={courses}/>}/>
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<CoursesPage coursesList={coursesList} />} />
            <Route path='/login' element={<Login setUser={setUser} setSession={setSession}/>} />
            <Route  element={<UserAuth user={user} />}>
              <Route path='/dashboard' element={<Dashboard />}>
                <Route element={<StudentHome />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </appContext.Provider>
  );
}

export default App;


