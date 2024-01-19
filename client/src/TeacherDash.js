import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";
import Navbar from './Navbar';
import Footer from './Footer';

function TeacherDash(){
    
    return(
        <>
           <Navbar />
                
           
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
            </div>
            <Footer /> 

        </>
    )
}
export default TeacherDash