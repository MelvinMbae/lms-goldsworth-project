import React, { useState, useEffect, useContext} from 'react';
import { appContext } from '../../utils/appContext';
import { Link } from "react-router-dom";
import { Coronavirus } from '@mui/icons-material';

function StudentDash() {

  const { user } = useContext(appContext)

  const course = user.courses === undefined ? 'No Course assigned' : user.courses[0]
  const courseTeachers = user.courses === undefined ? 'No Teacher assigned' : user.courses[0].teachers
  console.log(user)
  // console.log(courses)


  return (
    <div>
      <div className='dashboard'>
        <div className='dashboard-content'>
          <h1 className='dash-header'>Welcome, {user.name}!</h1>
          <h3>Your Courses:</h3>
          <div className='card-container'>
              <div className='card'>
                <Link to={`/courses/${course.id}`}>
                  <div className='card-title'>
                    <h2>{course.course_name}</h2>
                  </div>
                </Link>
              </div>

              <div className='card'>
                <Link to={`/courses/${course.id}`}>
                  <div className='card-title'>
                    <h2>{course.course_name}</h2>
                  </div>
                </Link>
              </div>
          </div>
          <div className='teacher-list'>
            <div className='list-header'>
              <h1 className='dash-header'>Teachers</h1>
             
            </div>
            <div className='list-container'>
              {courseTeachers.map((teacher)=>(
                <div className='list' key={teacher.id}>
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

export default StudentDash;
