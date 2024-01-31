import React, { useEffect, useState } from 'react';
import { appContext } from './utils/appContext';
import Navbar from './Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import CoursesPage from './CoursesPage'
import About from './pages/About';
import Classes from './Classes';
import Assignments from './Assignments';
import ChatBox from './components/chatBox';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserAuth from './pages/UserAuth';
import StudentDash from './StudentDash';
import ActiveCourse from './ActiveCourses';
import StudentEnrollment from './components/StudentEnrollment';
import AssignmentForm from './AssignmentCreation';
import CourseForm from './CourseForm';
import Assignment from './Assignment';
import CoursePage from './CoursePage';


function App() {
  const [courses, setCourse] = useState([])
  const [user, setUser] = useState("")
  const [session, setSession] = useState({"user_type":'', "user_details":''})
  const [coursesList, setCoursesList] = useState([]);
  const [courseListDictionary, setCourseListDictionary] = useState({});  
  const [assignments, setAssignments] = useState([])

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
    else if("teacher_id" in user){
      setSession({user_type:"teacher", user_details:user})
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
  //   if(session.user_type === "student"){
  //     return (<StudentHome />)
      
  //   }
  //   else if(session.user_type === "lecturer"){
  //     return <TeacherDash />
  //   }
  //   else if(session.user_type === "parent"){
  //     return <ParentDash/> 
  //   }
  // }
  // console.log(user)
  

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
              <Route element={<Dashboard />}>
                <Route path='/dashboard' element={<StudentDash />} />
                <Route path='/active-courses' element={<ActiveCourse />} />
                <Route path='/classes' element={<Classes />} />
                <Route path='/assignments' element={<Assignments user={user} assignments={assignments}/>}></Route>
                <Route path='/assignments/:assignmentID' element={<Assignment assignments={assignments}/>} />
                <Route path='/courses/:courseID' element={<CoursePage coursesList={coursesList} />} />
                <Route path='/forums' element={<ChatBox />} />
                <Route path='/enrollment' element={<StudentEnrollment />} />
                <Route path='/new' element={<AssignmentForm/>} />
                <Route path='/new-course' element={<CourseForm/>} />
              </Route>
            </Route>
          </Routes>
        </div>
      </appContext.Provider>
  );
}

export default App;


