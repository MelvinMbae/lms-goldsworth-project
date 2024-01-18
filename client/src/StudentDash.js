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
        <>
            <div className='uno'>
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
                <div className='footer'>
                </div>    
            </div>
        </>
    )
}
export default StudentDash