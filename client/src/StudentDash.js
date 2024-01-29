import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';


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
                    <span className='data'><h2><Link to={'/active-courses'}>{studentReport['active-course']}</Link></h2></span>
                    <span className='data'><h2>Required Man Hours: </h2><h2>{studentReport['course-hours']}</h2></span>
                    <span className='data'><h2><Link to={'/active-courses'}>Active Courses: {studentReport['courses-pursuing']}</Link></h2></span>
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