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
            <h1 className="course-page-header">{course.course_name}</h1>
            <div>
                <p className="course-page-content">{course.description}</p>
                
            </div>
        </div>
    </div>
  )
}
export default CoursePage;