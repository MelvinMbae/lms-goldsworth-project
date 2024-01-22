import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

function SideBar() {

    function openNav() {
        document.getElementById("mySide-nav").style.width = "250px";
        document.getElementById("main").style.display='none';
     }
     
     function closeNav() {
        document.getElementById("mySide-nav").style.width = "0";
        document.getElementById("main").style.display = "block";
     }

    const location = useLocation();

    function Sidebar(props){
        return (
            <div className="assignment-container">
            <div id="mySide-nav" class="side-nav"> 
                <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>x</a>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/courses'}>Courses</Link>
                <Link to={'/discussion'}>Discussion</Link>
                <Link to={'/assignments'}>Assignments</Link>
                <Link to={'/calender'}>Calender</Link>
                <Link to={'/reportcard'}>ReportCard</Link>
            </div>
            <div id="main">
                <span style={{fontSize:'30px', cursor:'pointer'}} onClick={() => openNav()}>☰</span>
            </div></div>
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




