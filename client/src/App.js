import React, { Fragment, useEffect, useState } from 'react';
import { appContext } from './utils/appContext';
import StudentHome from './StudentHome';
import ParentHome from './ParentHome';
import TeacherHome from './TeacherHome'
import Navbar from './Navbar';



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
          <StudentHome />
        </div>
      </appContext.Provider>
  );
}

export default App;


