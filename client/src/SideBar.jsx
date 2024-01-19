import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

function SideBar() {

    const location = useLocation();

    function Sidebar(props){
        return (
            <div className='sides'>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/courses'}>Active Courses</Link>
                <Link to={'/classes'}>Classes</Link>
                {props.children}
            </div>
            )
        }

  return (
        <div className='sidebar'>
            {location.pathname === "/dashboard" ? <Sidebar>
                                <Link to={'/reportcard'}>Report Card</Link>
                                <Link to={'/assignments'}>Assignments</Link>
                            </Sidebar> : <Sidebar />
            }
        </div>
  )
}
export default SideBar;