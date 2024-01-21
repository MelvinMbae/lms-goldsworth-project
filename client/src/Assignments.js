import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "./Navbar";
import DownloadButton from "./components/DownloadComp";

function Assignments(){

  let studentReport = {
    "student_id":"3",
    "attendance":80,
    "attendance_remark":"Well done!",
    "name":"Michael Njogu",
    "courses-pursuing":3,
    "active-course":"software engineering",
    "course-hours":40,
    "phases":["Phase 0", "Phase 1", "Phase 2", "Phase 3", "Phase 4","Phase 5"],
    "teacher_report":{
      "assignments":[{
              "ass_id": 1,
              "ass_name":"Perfectly done",
              "content":"Refer to previous code challenge for guidance",
              "due_date":"Refer to previous code challenge for guidance",
              "file":null,},
              {
              "ass_id": 1,
              "ass_name":"Perfectly done",
              "content":"Refer to previous code challenge for guidance",
              "due_date":"Refer to previous code challenge for guidance",
              "file":null,},
              {
                "ass_id": 1,
                "ass_name":"Perfectly done",
                "content":"Refer to previous code challenge for guidance",
                "due_date":"Refer to previous code challenge for guidance",
                "file":null,}]
            },
      "course_work":[
                {"course":"Machine learning",
                "course_id":"ML_101",
                "grade":40,
                "remarks":"Good job on practicals"},
                {"course":"Data Analytics",
                "course_id":"DA_101",
                "grade":70,
                "remarks":"Awaiting code challenge submission"},
                {"course":"Software_Engineering",
                "course_id":"SE_101",
                "grade":80,
                "remarks":"Well done"}
              ]
    }

    return(

      <div className="assignment-container">
          <div className="assignments">  
              {studentReport.teacher_report.assignments.map((assigno) => (
                  <div class="card" key={assigno.ass_id}>
                      <h1>{assigno.ass_name}</h1>
                      <p>{assigno.content}</p>
                      <p class="snippet">{assigno.due_date}</p>
                      <a href= {assigno.file} download><DownloadButton /></a>
                  </div>
              ))}                      
          </div>
      </div>
    )
}

export default Assignments