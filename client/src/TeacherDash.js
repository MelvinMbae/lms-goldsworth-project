import { useContext } from "react"
import { Link } from "react-router-dom"
import { appContext } from "./utils/appContext"

function TeacherDash(){

    const { user } = useContext(appContext)
    
    return(
            <div className='teacher-dash'>
             <h2>Department: <span>{user.department}</span></h2>
             <h2>Expertise: <span>{user.expertise}</span></h2>

                 <div className='teacher-card-container'>

                        <div className="teacher-card">
                            <h2 className="card-title">Courses assigned :{user.courses.length}</h2>
                        </div>
                        <div className="teacher-card">
                            <h2 className="card-title">Students Assigned:{user.students}</h2>
                        </div>
                                    </div>
                                    <div className="dash-buttons">
                   <button className='teacher-btn'><Link to={'/new-course'}>Add Course</Link></button>
                   <button className='teacher-btn'><Link to={'/student-view'}>View Students</Link></button>
                   </div>
            </div>
    )
}
export default TeacherDash