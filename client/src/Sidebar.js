import React from 'react'
 import { GoCommentDiscussion } from "react-icons/go";
 import { TbReportAnalytics } from "react-icons/tb";
 import { FaRegCalendarAlt } from "react-icons/fa";
 import { MdOutlineLibraryBooks,MdOutlineDashboard  } from "react-icons/md";
 import { PiBooks } from "react-icons/pi";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlineDashboard  className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <PiBooks className='icon'/> Courses
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <MdOutlineLibraryBooks  className='icon'/> Assignments
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <FaRegCalendarAlt className='icon'/> Calendar
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbReportAnalytics className='icon'/> Report Card
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <GoCommentDiscussion className='icon'/> Discussion
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
