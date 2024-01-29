import React, { useContext } from 'react'
import CoursesCard from './CoursesCard';
import { appContext } from './utils/appContext';

function ActiveCourse() {

    const { user , session } = useContext(appContext)
    console.log(user)
  // let active = registeredCourses.map((course)=>{
  //   <div className='course-card' key={course.course_id}><h2>{course.title}</h2><p>{course.description}</p></div>
  // })
  return (
    <div className='contents'> 
      <h2>Courses Allocated</h2>
  </div>
  )
}

export default ActiveCourse;
