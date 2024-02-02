import { useParams } from "react-router-dom";
import './styles/Courses.css';

function CoursePage({ coursesList }) {
    const { courseID } = useParams()
    const course = coursesList.filter((course)=> course.id == parseInt(courseID))[0]
    console.log(course[0])
    console.log(coursesList)


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
  <tr>
    <td>Introduction to {course.course_name}
    <div className="unit-content">
      <p>Topic 1</p>
      <p>Topic 2</p>
      <p>Topic 2</p>
      <p>Topic 2</p>
    </div>
    </td>
  </tr>
  <tr>
    <td>{course.course_name} Fundamentals
    <div className="unit-content">
    <p>Topic 1</p>
      <p>Topic 2</p>
      <p>Topic 2</p>
      <p>Topic 2</p>
      </div>
    </td>
   
  </tr>
  <tr>
    <td>{course.course_name} Code Challenge
    <div className="unit-content">
        <p>Code Challenge Instructions</p>
        <p> Code Challenge Submission</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>{course.course_name} Project
    <div className="unit-content">
        <p>Project Instructions</p>
        <p>Projet Submission</p>
      </div>
    
    </td>
  </tr>
  <tr>
    <td>Conclusion to {course.course_name}</td>
  </tr>
</table>

            
            </div>
            
                
            </div>
        </div>
    </div>
  )
}
export default CoursePage;