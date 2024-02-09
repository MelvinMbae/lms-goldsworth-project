import { useContext } from "react"
import { Link } from "react-router-dom"
import { appContext } from "../../utils/appContext"
import { MdLibraryBooks } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

function TeacherDash(){

    const { user } = useContext(appContext)
    
    return(
            <div className='teacher-dash'>
             <h2>Department: <span>{user.department}</span></h2>

                 <div className='teacher-card-container'>

                        <div className="teacher-card">
                            <h2 className="card-title"><MdLibraryBooks className="teacher-icon" />
                                Courses assigned :{user.courses.length}</h2>
                        </div>
                        <div className="teacher-card">
                            <h2 className="card-title"><PiStudentBold className="teacher-icon" />
                                Students Assigned:{user.students}</h2>
                        </div>
                         </div>
                         <div className="dash-list">
                            <ul>
                                <h3>To do:</h3>
                                <li><Link to={'/new-course'}>Add Courses</Link></li>
                                <li><Link to={'/student-view'}>View Students</Link></li>
                                <li><Link to={`/assignments`}>Edit Assignments</Link></li>
                                <li><Link to={"/grading"}>Grade Assignments</Link></li>
                                <li><Link to={"/new"}>Add Assignments</Link></li>
                            </ul>
                   </div>
            </div>
    )
}
export default TeacherDash