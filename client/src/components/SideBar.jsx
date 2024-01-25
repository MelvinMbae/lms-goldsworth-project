import { Link } from 'react-router-dom'
import { Fragment } from 'react';

function SideBar({ user }) {

    function openNav() {
        document.getElementById("mySide-nav").style.width = "250px";
        document.getElementById("main").style.display='none';
     }
     
     function closeNav() {
        document.getElementById("mySide-nav").style.width = "0";
        document.getElementById("main").style.display = "block";
     }


    // function Sidebar({ children }){
    //     if((user.user_type === "student")){
    //         return (  
    //             <Fragment>
    //                 {children}
    //                 <Link to={'/dashboard'}>Dashboard</Link>
    //                 <Link to={'/active-courses'}>Active Courses</Link>
    //                 <Link to={'/classes'}>Classes</Link>
    //                 <Link to={'/reportcard'}>Report Card</Link>
    //                 <Link to={'/assignments'}>Assignments</Link>
    //             </Fragment>
    //             )
    //         }
    //     else if((user.user_type === "teacher")){
    //         return (  
    //             <Fragment>
    //                 {children}
    //                 <Link to={'/dashboard'}>Dashboard</Link>
    //                 <Link to={'/active-courses'}>Active Courses</Link>
    //                 <Link to={'/classes'}>Classes</Link>
    //                 <Link to={'/reportcard'}>Report Card</Link>
    //                 <Link to={'/assignments'}>Assignments</Link>
    //             </Fragment>
    //             )
    //         }
    //     else{
    //         return (  
    //             <Fragment>
    //                 {children}
    //                 <Link to={'/dashboard'}>Dashboard</Link>
    //                 <Link to={'/active-courses'}>Active Courses</Link>
    //                 <Link to={'/classes'}>Classes</Link>
    //                 <Link to={'/reportcard'}>Report Card</Link>
    //                 <Link to={'/assignments'}>Assignments</Link>
    //             </Fragment>
    //             )
    //         }
    //     }

  return (
        <div className='sidebar'>
            <div className="assignment-container">
            <div id="mySide-nav" class="side-nav"> 
                <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>x</a>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/active-courses'}>Active Courses</Link>
                <Link to={'/classes'}>Classes</Link>
                <Link to={'/courses'}>Courses</Link>
                <Link to={'/discussion'}>Discussion</Link>
                <Link to={'/assignments'}>Assignments</Link>
                <Link to={'/calender'}>Calender</Link>
                <Link to={'/reportcard'}>ReportCard</Link>
            </div>
            <div id="main">
                <span style={{fontSize:'30px', cursor:'pointer'}} onClick={() => openNav()}>☰</span>
            </div></div>
        </div>
  )
}
export default SideBar;


