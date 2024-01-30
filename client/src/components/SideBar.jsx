import { Link } from 'react-router-dom'

function SideBar() {

  return (
    <div className='sidebar'>
        <div class="side-nav"> 
            <Link to={'/active-courses'}>Active Courses</Link>
            <Link to={'/classes'}>Classes</Link>
            <Link to={'/assignments'}>Assignments</Link>
            <Link to={'/reportcard'}>ReportCard</Link>
            <Link to={'/forums'}>Forums</Link>
            <Link to={'/calendar'}>Calendar</Link>
        </div>
    </div>
  )
}
export default SideBar;


