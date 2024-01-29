import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";


function ParentDash(){
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      })
    return(
        <div className='contents'>
            <div className='top'>
                <div className='data'>
                    <span>Courses Enrolled</span>
                </div>
                <div className='data'>
                    <span>Required man hours</span>
                </div>
                <div className='data'>
                    <span>Number of courses</span>
                </div>
            </div>
            <div className='top'>
              <div className='data'>
                  <span>Classes</span>
              </div>
              <div className='data'>
                  <span>Assignments</span>
              </div>
              <div className='data'>
                  <span>Report Card</span>
              </div>
            </div>
        </div>
    )
}
export default ParentDash