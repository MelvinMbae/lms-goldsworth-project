import React from 'react'

function ActiveCourse({ registeredCourses}) {

  // let active = registeredCourses.map((course)=>{
  //   <div className='course-card' key={course.course_id}><h2>{course.title}</h2><p>{course.description}</p></div>
  // })
  return (
    <div className='course-grid contents'> 
      This is a list of selected courses!
    </div>
  )
}

export default ActiveCourse;
