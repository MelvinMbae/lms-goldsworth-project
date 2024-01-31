import React, { useContext } from 'react'
import { appContext } from './utils/appContext';
import CoursesCard from './CoursesCard';

function ActiveCourse() {

  const { user , session } = useContext(appContext)

  let active = user.courses.map((course)=>{
    return <CoursesCard key={course.id} course={course}/>
  })
  return (
    <div className='contents'>
      <div className='active-course'>
          {session.user_type === "student" ? <h2>Courses Enrolled</h2> : <h2>Courses Allocated</h2>}
          <div>{active}</div>
      </div> 
    </div>
  )
}

export default ActiveCourse;
