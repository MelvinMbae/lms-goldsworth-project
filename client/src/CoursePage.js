import { useParams } from "react-router-dom";


function CoursePage({ coursesList }) {
    const { courseID } = useParams()
    const course = coursesList.filter((course)=> course.id == parseInt(courseID))
    console.log(course[0])
    console.log(coursesList)


  return (
    <div className='courses'>
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