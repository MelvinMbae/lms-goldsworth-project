import React from 'react'
import CoursesCard from './CoursesCard';

function ActiveCourse({ registeredCourses}) {

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
