import React from 'react';
import './TheBar.css';
import { GoCommentDiscussion } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks,MdOutlineDashboard } from "react-icons/md";
import { PiBooks } from "react-icons/pi";

function TheBar() {
  return (
    <div className='menu'>
      <div className='menu-list'>
        <a href="" className='item'>
<MdOutlineDashboard className='icon'/> Dashboard
</a>
<a href="" className='item'>
<PiBooks className='icon'/> Courses
</a>
<a href="" className='item'>
<MdOutlineLibraryBooks className='icon'/> Assignments
</a>
<a href="" className='item'>
<TbReportAnalytics className='icon'/> Report Card
</a>
<a href="" className='item'>
<FaRegCalendarAlt className='icon'/> Calendar
</a>
<a href="" className='item'>
<GoCommentDiscussion className='icon'/> Discussion
</a>
</div>
    </div>
  )
}

export default TheBar;

