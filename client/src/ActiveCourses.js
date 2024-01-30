import React, { useContext } from 'react'
import { appContext } from './utils/appContext';

function ActiveCourse() {

  const { user } = useContext(appContext)

  let active = user.courses.map((course)=>{
    return <div className='course-card' key={course.id}><h2>{course.course_name}</h2><p>{course.description}</p></div>
  })
  return (
    <div className='contents'> 
      <h2>Courses Allocated</h2>
      {active}
  </div>
  )
}

export default ActiveCourse;
