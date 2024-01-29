import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';


function StudentDash(){
    let studentReport = {
        "name":"Michael Njogu",
        "courses-pursuing":3,
        "active-course":"software engineering",
        "course-hours":40,
    }


    return(
            <div className='contents'>
              <span className='title'>
                <h1>Active Course</h1>
              </span>
                <span className='title-child'><h2><Link to={'/active-courses'}>{studentReport['active-course']}</Link></h2></span>
                <div className='top'>
                    <span className='data'><h2>Required Man-hours: </h2><h2>{studentReport['course-hours']}</h2></span>
                    <span className='data'><h2><Link to={'/active-courses'}>Courses Enrolled: {studentReport['courses-pursuing']}</Link></h2></span>
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