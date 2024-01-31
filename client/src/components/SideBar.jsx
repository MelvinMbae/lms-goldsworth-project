import { Link } from 'react-router-dom'

import React from 'react';
import '../styles/Sidebar.css';
import { GoCommentDiscussion } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks,MdOutlineDashboard } from "react-icons/md";
import { PiBooks } from "react-icons/pi";

function SideBar() {
  return (

    <div className='menu'>
      <div className='menu-list'>
        <Link to={'/assignments'} className='item'><MdOutlineLibraryBooks className='icon'/> Assignments</Link>
        <Link to={'/reportcard'} className='item'><TbReportAnalytics className='icon'/> ReportCard</Link>
        <Link to={'/calendar'} className='item'><FaRegCalendarAlt className='icon'/> Calendar</Link>
        <Link to={'/forums'} className='item'><GoCommentDiscussion className='icon'/> Forums</Link>
      </div>
    </div>
  )
}

export default SideBar;

  //  <div className='sidebar'>
  //       <div class="side-nav"> 
  //           <Link to={'/active-courses'}>Active Courses</Link>
  //           <Link to={'/classes'}>Classes</Link>
  //           <Link to={'/assignments'}>Assignments</Link>
  //           <Link to={'/reportcard'}>ReportCard</Link>
  //           <Link to={'/forums'}>Forums</Link>
  //           <Link to={'/calendar'}>Calendar</Link>
  // </div> 