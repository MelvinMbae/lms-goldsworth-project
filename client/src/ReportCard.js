import { useContext, useEffect, useState } from "react";
import DownloadPDF from "./components/DownloadPDF";
import { appContext } from "./utils/appContext"
import './styles/Reportcard.css';


function ReportCard() {

  const [reportData, setReportData] = useState([]);
  const { user } = useContext(appContext)

  // Accessing properties
  const studentName = user.name;
  const studentEmail = user.email;
  const studentImageURL = user.image_url;
  const studentID = user.student_id;
  const report_card = user.report_card || [];


  const courses = user.courses || [];

  const course = courses.length > 0 ? courses[0] : null;
  const courseName = course ? course.course_name : "No course";
  const courseDescription = course ? course.description : "No course description";
  const courseId = course ? course.id : '_';

  console.log(user)

  return (
    <div className='report-card'>

      <div id="report-card">
        <div className="student-info">
          <div className="header">
            <h1>Report Card</h1>
          </div>

          <div>
            <div><h3>Course Code: LMS_{courseId}</h3></div>
            <div><h3>Course Name: {courseName}</h3></div>
          </div>
          <div>
            <div><h4>STU_{studentID}</h4></div>
            <div><h4>Student Name: {studentName}</h4></div>
            <div><h4>Student Email: {studentEmail}</h4></div>
          </div>


        </div>
        <div className="table-container">
          <h3>Attendance: 90%</h3>
          <table className="report-card-table">
            <thead>
              <tr>
                <th>Unit Name</th>
                <th>Unit Grade</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>

            <tr>
                  <td>"unit.topic"</td>
                  <td>unit.grade</td>
                  <td>unit.teacher_remarks</td>
                </tr>
              {report_card.map((unit) => (
                <tr key={unit.id}>
                  <td>{unit.topic}</td>
                  <td>{unit.grade}</td>
                  <td>{unit.teacher_remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <div><DownloadPDF downloadElement={'report-card'} /></div>
    </div>
  );
};

export default ReportCard;



