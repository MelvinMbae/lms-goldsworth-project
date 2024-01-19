import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";
import Navbar from './Navbar';
import './Dashboard.css';
import Footer from './Footer';

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
        <div>
             <Navbar />
            
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
            </div>
            <Footer />

        </div>
        
    )
}
export default ParentDash