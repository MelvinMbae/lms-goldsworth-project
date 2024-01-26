import { Link } from "react-router-dom"


function TeacherDash(){
    
    return(
            <div className='contents'>
                <div className=''>
                    <div className='top'>
                        <div>
                            <span className='data'>Number of courses assigned</span>
                        </div>
                        <div>
                            <span className='data'>Number of students</span>
                        </div>
                        <div>
                            <span className='data'>Department Role</span>
                        </div>
                    </div>
                    <button className='button'><Link to={'/enrollment'}>Enroll Student</Link></button>
                    <button className='button'><Link to={'/new-course'}>Add Course</Link></button>
                </div>
            </div>
    )
}
export default TeacherDash