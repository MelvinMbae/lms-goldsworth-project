import React, { useState } from 'react';
import { useParams } from "react-router-dom";

function CoursePage({ coursesList }) {
    const { courseID } = useParams()
    const course = coursesList.filter((course)=> course.id === parseInt(courseID))[0]
    let course_content = course.content
    const [isExpanded, setIsExpanded] = useState(false);
    console.log(course_content )
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='contents'>
        <div className='course-container'>
            <div>
            <div className="course-units">
              <table className='course-table'>
                <tr>
                  <th><h1 className="course-page-header">{course.course_name}</h1>
                  <p className="course-page-content">{course.description}</p></th>
                </tr>
                <tr>    
                <td> <span onClick={toggleContent}>Introduction to {course.course_name}</span>
                  {isExpanded && (
                    <div className="unit-content">
                      {course_content.length !== 0 ? 
                        course_content.map((content)=>{
                        return <ol key={content.id}><h4>{content.content_name}</h4><p>{content.description}</p></ol>
                      })
                    : <div><p>No Available Content</p></div> }
                    </div>
                  )}
                </td>
                </tr>
              </table>
            </div> 
            </div>
        </div>
      </div>
  )
}
export default CoursePage;