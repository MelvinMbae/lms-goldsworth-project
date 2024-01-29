import { useParams } from "react-router-dom";


function CoursePage({ coursesList }) {
    const { courseID } = useParams()
    const course = coursesList.filter((course)=> course.id == parseInt(courseID))


  return (
    <div className='contents'>
        <div className='course-container'>
            <h1>{course[0].course_name}</h1>
            <div>
                <p>{course[0].description}</p>
            </div>
        </div>
    </div>
  )
}
export default CoursePage;