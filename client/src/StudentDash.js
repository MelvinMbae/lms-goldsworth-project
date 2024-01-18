import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";
import './App.css'


function StudentDash(){
    let studentReport = {
        "name":"Michael Njogu",
        "courses-pursuing":3,
        "active-course":"software engineering",
        "course-hours":40,
        "phases":["Phase 0", "Phase 1", "Phase 2", "Phase 3", "Phase 4","Phase 5"],
        "grades":[40,60,75,60,80]
    }

    const [performanceGraph, setPerformanceGraph] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: studentReport.phases
          }
        },
        series: [
          {
            name: "grades",
            data: studentReport.grades
          }
        ]
      })
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
                        <Link to={'/discussion'}>Discussion</Link>
                        <Link to={'/calender'}>Calender</Link>
                        <Link to={'/reportCard'}>Report Card</Link>
                        <Link to={'/assignments'}>Assignments</Link>
                    </div>
                    <div className='contents'>
                        <div className='top'>
                            <div className='data'>
                                <span>{studentReport['active-course']}</span>
                            </div>
                            <div className='data'>
                                <span>{studentReport['course-hours']} hrs</span>
                            </div>
                            <div className='data'>
                                <span>{studentReport['courses-pursuing']} Courses</span>
                            </div>
                        </div>
                        <div className='graphs'>
                        <Chart
                            options={performanceGraph.options}
                            series={performanceGraph.series}
                            type="line"
                            width="400"
                        />              
                        </div>

                    </div>
                </div>
                <div className='footer'>
                </div>    
            </div>
        </>
    )
}
export default StudentDash