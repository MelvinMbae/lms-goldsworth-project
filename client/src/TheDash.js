import React, { useState, useEffect} from 'react';
import './TheDash.css';
import TheBar from './TheBar';
import { FaBook } from "react-icons/fa";
import Profile from './pages/Profile';

function TheDash() {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []); 

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/teachers');
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div>
      <div className='dashboard'>
        <TheBar />
        <div className='dashboard-content'>
          <h1 className='dash-header'>Dashboard</h1>
          <Profile />
          <div className='card-container'>
            {courses.slice(5, 8,).map((course) => (
              <div className='card'>
                <div className='card-cover'><FaBook /></div>
                <div className='card-title'>
                  <h2>{course.course_name}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className='teacher-list'>
            <div className='list-header'>
              <h1 className='dash-header'>Teachers</h1>
             
            </div>
            <div className='list-container'>
              {teachers.slice(3, 8,).map((teacher)=>(
                <div className='list'>
                  <div className='teacher-details'>
                  <img id='teacher-img'src='./images/user1.png' alt={teacher.firstname} />
                  <h2>{`${teacher.firstname} ${teacher.lastname}`}</h2>
                  </div>
            <span >{teacher.expertise}</span>
            <span>{teacher.department}</span>
            <span className='teacher-todo'>:</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheDash;
