import React, { useEffect, useState , useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDash from './StudentDash';
import Navbar from './Navbar';
import ReportCard from './ReportCard';
import Dashboard from './pages/Dashboard';
import ActiveCourse from './ActiveCourses';
import Classes from './Classes';
import Assignments from './Assignments';
import ChatBox from './components/chatBox';
import { appContext } from './utils/appContext';



function StudentHome() {
  const [assignments, setAssignments] = useState([])
  // const { setUser, setSession , courses , coursesList } = useContext(appContext)

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
          <Route path='/dashboard' element={<StudentDash />} />
          <Route path='/reportcard' element={<ReportCard />} />
          <Route path='/active-courses' element={<ActiveCourse />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/assignments' element={<Assignments assignments={assignments}/>} />
          <Route path='/forums' element={<ChatBox />} />
      </Routes>
  );
}

export default StudentHome;


