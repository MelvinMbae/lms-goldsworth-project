import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";


function TeacherDash(){
    
    return(
        <>
            <div className='navbar'>
                <div className='logo'>
                    <Link to={'/main'}>GoldWorth</Link>
                </div>
                <div className='links'>
                    <Link to={'home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/courses'}>Courses</Link>
                    <Link to={'/contact'}>Contacts</Link>
                    <Link to={'/discussion'}>Discussion</Link>
                    <Link to={'/user'}>user</Link>
                </div>
                
            </div>
            <div className='uno'>
                <div className='sidebar'>
                    <div className='sides'>
                        <Link to={'/StudentDash'}>Dashboard</Link>
                        <Link to={'/courses'}>Courses</Link>
                        <Link to={'/calender'}>Calender</Link>
                        <Link to={'/reportCard'}>Report Card</Link>
                        <Link to={'/assignments'}>Assignments</Link>
                        <Link to={'/discussion'}>Important Dates</Link>
                    </div>
                    <div className='teacherContents'>
                        <div className='teachersTop'>
                            <div className='data'>
                                <span>Number of courses assigned</span>
                            </div>
                            <div className='data'>
                                <span>Number of students</span>
                            </div>
                            <div className='data'>
                                <span>Split between male and female</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    
                </div>    
            </div>
        </>
    )
}
export default TeacherDash