import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ActiveCourse from './ActiveCourses';
import Assignment from './Assignment';
import AssignmentForm from './AssignmentCreation';
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
import SavedDocs from './SavedDocs';
import SubmittedAssignments from './SubmittedAssignments';


function App() {
  const [courses, setCourse] = useState([])
  const [user, setUser] = useState("")
  const [session, setSession] = useState({"user_type":'', "user_details":'', 'user_image':''})
  const [coursesList, setCoursesList] = useState([]);
  const [courseListDictionary, setCourseListDictionary] = useState({});
  const [assignments, setAssignments] = useState([])
  const [eventsList, setEventsList] = useState([])
  const [eventsDictionary, setEventsDictionary] = useState({})
  const [students, setStudents] = useState([]);
  const [ savedDocs , setSaved ] = useState([])

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

  function handleSaved(id){
    const saved = assignments.filter((assignment)=>assignment.id === parseInt(id))[0]
    setSaved({...savedDocs, saved})
  }

  useEffect(() => {
    fetch('/students')
    .then((r)=>{
      if(r.ok){
        r.json()
        .then((data)=>{
          setStudents(data)
        })
      }
      else{
        throw new Error('error')
      }
    })
    .catch((e)=>{
      return e
    })
}, []);



  return (

      <appContext.Provider value={{user , students , session , setSession , setUser , courses, coursesList , assignments }}>
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
                <Route path="/create-event" element={<CreateEvent user={user} setEvents={setEventsList}/>} />
                <Route path='/active-courses' element={<ActiveCourse />} />
                <Route path='/classes' element={<Classes />} />
                <Route path='/assignments' element={<Assignments handleSaved={handleSaved} session={session} assignments={assignments}/>}></Route>
                <Route path='/assignments/:assignmentID' element={<Assignment assignments={assignments}/>} />
                <Route path='/forums' element={<ChatBox />} />
                <Route path='/enrollment' element={<StudentEnrollment />} />
                <Route path='/grading' element={<SubmittedAssignments />} />
                <Route path='/new' element={<AssignmentForm/>} />
                <Route path='/new-course' element={<CourseForm/>} />
                <Route path='/reportcard' element={<ReportCard />} />
                <Route path='/saved' element={<SavedDocs savedDocs={savedDocs} setDocs={setSaved}/>} />
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


