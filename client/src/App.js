import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ActiveCourse from './ActiveCourses';
import Assignment from './Assignment';
import AssignmentForm from './AssignmentCreation';
import AssignmentList from './AssignmentList';
import Assignments from './Assignments';
import Calendar from './Calendar';
import Classes from './Classes';
import CourseForm from './CourseForm';
import CoursePage from './CoursePage';
import CoursesPage from './CoursesPage';
import CreateEvent from './CreateEvent';
import Navbar from './Navbar';
import ParentDash from './ParentDash';
import ReportCard from './ReportCard';
import StudentDash from './StudentDash';
import TeacherDash from './TeacherDash';
import TeacherHome from './TeacherHome';
import StudentEnrollment from './components/StudentEnrollment';
import ChatBox from './components/chatBox';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import UserAuth from './pages/UserAuth';
import { appContext } from './utils/appContext';
import StudentList from './StudentList';
import IndividualStudent from './IndividualStudent';


function App() {
  const [courses, setCourse] = useState([])
  const [user, setUser] = useState("")
  const [session, setSession] = useState({"user_type":'', "user_details":''})
  const [coursesList, setCoursesList] = useState([]);
  const [courseListDictionary, setCourseListDictionary] = useState({});
  const [assignments, setAssignments] = useState([])
  const [eventsList, setEventsList] = useState([])
  const [eventsDictionary, setEventsDictionary] = useState({})
  const [students, setStudents] = useState([]);

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
  // console.log(eventsList)

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

  function SetPage(){
    if(session.user_type === "student"){
      return (<StudentDash />)
      
    }
    else if(session.user_type === "teacher"){
      return <TeacherDash />
    }
    else if(session.user_type === "parent"){
      return <ParentDash/> 
    }
  }
  useEffect(() => {
    const fetchStudents = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5555/students');
        const data = await response.json();
        setStudents(data);
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
    };
    fetchStudents();
}, []);

  return (

      <appContext.Provider value={{user , students , session , setSession , setUser , courses, coursesList }}>
        <div className=''>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home courses={courses}/>}/>
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<CoursesPage coursesList={coursesList} />} />
            <Route path='/courses/:courseID' element={<CoursePage coursesList={coursesList} />} />
            <Route path='/login' element={<Login setUser={setUser} setSession={setSession}/>} />
            <Route  element={<UserAuth user={user} />}>
              <Route element={<Dashboard />}>
                <Route path='/dashboard' element={<SetPage />} />
                <Route path='/calendar' element={<Calendar eventsList={eventsList}/>} />
                <Route path="/create-event" element={<CreateEvent />} />
                <Route path='/active-courses' element={<ActiveCourse />} />
                <Route path='/classes' element={<Classes />} />
                <Route path='/assignments' element={<Assignments session={session} assignments={assignments}/>}></Route>
                <Route path='/assignments/:assignmentID' element={<Assignment assignments={assignments}/>} />
                <Route path='/forums' element={<ChatBox />} />
                <Route path='/enrollment' element={<StudentEnrollment />} />
                <Route path='/grading' element={<AssignmentList />} />
                <Route path='/new' element={<AssignmentForm/>} />
                <Route path='/new-course' element={<CourseForm/>} />
                <Route path='/reportcard' element={<ReportCard />} />
              </Route>
            </Route>
            <Route
            path="/student-view"
            element={<StudentList />}
          />
          <Route
            path="/student-view/:studentID"
            element={<IndividualStudent />}
          />
          </Routes>
        </div>
      </appContext.Provider>
  );
}

export default App;


