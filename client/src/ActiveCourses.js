import React from 'react'

function ActiveCourse({ registeredCourses}) {

  // let active = registeredCourses.map((course)=>{
  //   <div className='course-card' key={course.course_id}><h2>{course.title}</h2><p>{course.description}</p></div>
  // })
  return (
    <div className='course-grid contents'> 
      This is a list of selected courses!
      <h2>Courses Allocated</h2>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Subject/Course</th>
            <th>Mode and Year of study</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><a href='/introduction'>Bio 4900</a></td>
            <td>Bio 4900</td>
            <td>Virtual-Y4</td>
          </tr>
          <tr>
            <td>Bio 1109</td>
            <td>Bio 4900</td>
            <td>B3(Physical-Y1</td>
          </tr>
          <tr>
            <td>Bio 5200</td>
            <td>Bio 4900</td>
            <td>Virtual-Y5</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
  </div>
  )
}

export default ActiveCourse;
