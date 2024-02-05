import { useEffect } from "react";
import DownloadPDF from "./components/DownloadPDF";

const ReportCard = () => {

  useEffect(()=>{
    fetch('/report_cards')
    .then((r)=>{
      if(r.ok){
        r.json()
        .then((reportcard)=>{
          // console.log(reportcard)
          // setReportCard(reportcard)
        })
      }
      else{
        throw new Error('error')
      }
    })
    .catch((error)=>console.error(error))
  }, [])


  return (
    <div className='report-card'>
      <div className="header">
        <h1>Report Card</h1>
      </div>
      <div id="report-card">
        <div className="student-info">  
          <div>
            <div>Course Code</div>
            <div>Course Name</div>
          </div>
          <div>
            <div>Student_Id</div>
            <div>Student Name</div>
            <div>Student Email</div>
          </div>
        </div>
        <div>
        <p>Attendance: </p>
        <table className="report-card-table">
          <thead>
            <tr>
              <th>Unit Name</th>
              <th>Unit Grade</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        </div>
      </div>
      <div><DownloadPDF downloadElement={'report-card'}/></div>
    </div>
  );
};

export default ReportCard;



