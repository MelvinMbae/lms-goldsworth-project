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
        <a href="/dashboard" className='item'><MdOutlineDashboard className='icon'/> Dashboard</a>
        <a href="/courses" className='item'><PiBooks className='icon'/> Courses</a>
        <a href="/assignments" className='item'><MdOutlineLibraryBooks className='icon'/> Assignments</a>
        <a href="/reportcard" className='item'><TbReportAnalytics className='icon'/> Report Card</a>
        <a href="/calendar" className='item'><FaRegCalendarAlt className='icon'/> Calendar</a>
        <a href="/forums" className='item'><GoCommentDiscussion className='icon'/> Discussion</a>
</div>
    </div>
  )
}

export default SideBar;

