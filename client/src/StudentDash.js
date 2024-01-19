import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";
import Navbar from './Navbar';
import './Dashboard.css';
import Footer from './Footer';

function StudentDash(){
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
        <>
            <Navbar />
            <Link to="/" className="button">Logout</Link>
       
                <div className='student-dash'>
                    <div className='contents'>
                        <div className='top'>
                            <div className='data'>
                                <span>Courses selection</span>
                            </div>
                            <div className='data'>
                                <span>Required man hours</span>
                            </div>
                            <div className='data'>
                                <span>Number of courses</span>
                            </div>
                        </div>
                        <div className='graphs'>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="line"
                            width="650"
                        />              
                        </div>
                    </div>
                </div>
                <Footer />

        </>
    )
}
export default StudentDash