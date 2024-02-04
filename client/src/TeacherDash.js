import { useContext } from "react"
import { Link } from "react-router-dom"
import { appContext } from "./utils/appContext"


function TeacherDash(){

    const { user } = useContext(appContext)
    
    return(
            <div className='contents'>
                <div className=''>
                    <div className='top'>
                        <div>
                            <span className='data'><h2>Number of courses assigned :</h2><h3>{user.courses.length}</h3></span>
                        </div>
                        <div>
                            <span className='data'>Number of students</span>
                        </div>
                        <div>
                            <span className='data'><h2>Department Role</h2><h3>{user.department}</h3></span>
                        </div>
                    </div>
                    <button className='button'><Link to={'/enrollment'}>Enroll Student</Link></button>
                    <button className='button'><Link to={'/new-course'}>Add Course</Link></button>
                </div>
            </div>
    )
}
export default TeacherDash