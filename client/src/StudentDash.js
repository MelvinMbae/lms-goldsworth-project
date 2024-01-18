import React, { useState } from 'react'
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
            <div className='contents'>
                <div className='top'>
                        <span className='data'><h2>{studentReport['active-course']}</h2></span>
                        <span className='data'><h1>{studentReport['course-hours']}</h1> <h2>  hrs</h2></span>
                        <span className='data'><h1>{studentReport['courses-pursuing']}</h1> <h2>  Courses</h2></span>
                </div>
                <div className='graphs'>
                    <Chart
                        options={performanceGraph.options}
                        series={performanceGraph.series}
                        type="line"
                        width="400"
                    />
                    <div className='dash-message'>
                        <em><q>
                        Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</q></em>
                        <p>~ Martin Fowler</p>
                    </div>              
                </div>
            </div> 
    )
}
export default StudentDash