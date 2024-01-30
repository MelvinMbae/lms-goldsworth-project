import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { appContext } from './utils/appContext';

function StudentDash(){

  const { user } = useContext(appContext)


    return(
            <div className='contents'>
              <span className='title'>
                <h1>Active Course</h1>
              </span>
                <span className='title-child'><h2><Link to={'/active-courses'}>{user.courses[0].course_name}</Link></h2></span>
                <div className='top'>
                    <span className='data'><h2>Required Man-hours: </h2><h2>{"20"}</h2></span>
                    <span className='data'><h2><Link to={'/active-courses'}>Courses Enrolled: {user.courses.length}</Link></h2></span>
                </div>
                <div className='dash-message'>
                  <em><q>
                  Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
                  </q></em>
                  <p>~ Martin Fowler</p>
                </div> 
            </div> 
    )
}
export default StudentDash