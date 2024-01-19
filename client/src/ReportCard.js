import { useState } from 'react';

const ReportCard = () => {
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
      "assignments":{
              "Assignment 1":"No submission",
              "Assignment 2":"Perfectly done",
              "Assignment 3":"Refer to previous code challenge for guidance",},
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
  }

    const coursework_report = studentReport.teacher_report.course_work.map((report)=>{
      return (
        <tr key={report.course_id}>
            <td>{report.course_id}</td>
            <td>{report.course}</td>
            <td>{report.grade}</td>
            <td>{report.remarks}</td>
        </tr>
      )

    })

  return (
    <div className='report-card'>
      <div className="header">
        <h1>Report Card</h1>
      </div>
      <div className="student-info">
        <span>
          <h3>Attendance:</h3>
          <p>{studentReport.attendance}</p>
        </span>
        <table className="report-card-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Overall Grade</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {coursework_report}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportCard;


