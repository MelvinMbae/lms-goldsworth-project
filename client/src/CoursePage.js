import { useParams } from "react-router-dom";


function CoursePage({ coursesList }) {
    const { courseID } = useParams()
    const course = coursesList.filter((course)=> course.id === parseInt(courseID))[0]


  return (
    <div className='contents'>
        <div className='course-container'>
            <h1>{course.course_name}</h1>
            <div>
                <p>{course.description}</p>
            </div>
        </div>
    </div>
  )
}
export default CoursePage;