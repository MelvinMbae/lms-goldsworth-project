import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import './styles/Courses.css';

function CoursePage({ coursesList }) {
    const { courseID } = useParams()
    const course = coursesList.filter((course)=> course.id == parseInt(courseID))[0]
    console.log(course[0])
    console.log(coursesList)
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className='courses'>
        <div className='course-container'>
            <div>
            <div className="course-units">
            <table>
              <tr>
                 <th><h1 className="course-page-header">{course.course_name}</h1>
                <p className="course-page-content">{course.description}</p></th>
              </tr>
<tr>    <td>  <span onClick={toggleContent}>Week 1: Introduction to {course.course_name}</span>
            {isExpanded && (
              <div className="unit-content">
     <p>Topic 1</p>
                <p>Topic 2</p>
                <p>Topic 3</p>
                <p>Topic 4</p>
              </div>
            )}
          </td>
  </tr>
  <tr>
    <td> <span onClick={toggleContent}>Week 2: {course.course_name} Basics</span>
            {isExpanded && (
              <div className="unit-content">
     <p>Topic 1</p>
                <p>Topic 2</p>
                <p>Topic 3</p>
                <p>Topic 4</p>
              </div>
            )}
          </td>
  </tr>
  <tr>
    <td><span onClick={toggleContent}>Week 3: {course.course_name} codde challenge</span>
            {isExpanded && (
              <div className="unit-content">
     <p>cod challenge instructions</p>
                <p>code challenge submission</p>
              </div>
            )}
          </td>
  </tr>
  <tr>
    <td><span onClick={toggleContent}>Week 4:{course.course_name} project</span>
            {isExpanded && (
              <div className="unit-content">
     <p>project instructions</p>
                <p>Topic submission</p>
              </div>
            )}
          </td>
  </tr>
  <tr>
    <td>Week 5 :Conclusion to {course.course_name}</td>
  </tr>
</table>

            
            </div>
            
                
            </div>
        </div>
    </div>
  )
}
export default CoursePage;