import React, { Fragment, useEffect, useState } from 'react';
import { appContext } from './utils/appContext';
import StudentHome from './StudentHome';
import ParentHome from './ParentHome';
import TeacherHome from './TeacherHome'



function App() {
  const [courses, setCourse] = useState([])
  const [user, setUser] = useState({"user_type":null, "user_details":null})
  const [coursesList, setCoursesList] = useState([]);
  const [courseListDictionary, setCourseListDictionary] = useState({});

  console.log(user)
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

  useEffect(() => {
    fetch("/checksession").then((response) => {
      if (response.ok) {
        response.json()
          .then((sessionMember) => {
            setUser({user_details:sessionMember})
          })
      }
    })
  }, [])

  function SetPage(){
    if(user.user_type === "student"){
      return <StudentHome />
    }
    else if(user.user_type === "parent"){
      return <ParentHome />
    }
    else {
      return <TeacherHome />
    }
  }

  return (
      <appContext.Provider value={{user , setUser , courses, coursesList }}>
           {/*<ParentHome />*/}
         <SetPage />
      </appContext.Provider>
  );
}

export default App;


