import React, { Fragment, useContext } from 'react';
// import './IndividualStudent.css'; // Import the new CSS file
import { useParams } from 'react-router-dom';
import { appContext } from './utils/appContext';

const IndividualStudent = () => {


  const { studentID } = useParams()
  const { students } = useContext(appContext)

  const selectedStudent = students.filter((student)=>{
    return student.id === parseInt(studentID)
  })[0]
  // console.log(students)

  return (
    <div className="indiv-student">
      <div className="user-profile">
        <h2>Student Profile</h2>
      </div>
      {studentID ? (
        <Fragment>
          <div className='student-avator'>
            {/* Your content for the student avatar */}
          </div>
          <div className="details-container">
            <div className='details-column'>
              <h3>{`${selectedStudent.firstname} ${selectedStudent.lastname}`}</h3>
              <div className="detail-container">
                <p>Email:</p>
                <p>{selectedStudent.email}</p>
              </div>
              <div className="detail-container">
                <p>Course:</p>
                <p>{selectedStudent.course}</p>
              </div>
              <div className="detail-container">
                <p>No of Assignments:</p>
                <p>{selectedStudent.numberOfAssignments}</p>
              </div>
              <div className="detail-container">
                <p>Date of Enrollment:</p>
                <p>{selectedStudent.dateOfEnrollment}</p>
              </div>
            </div>
            <div className='details-column'>
              <h3>Assignment Project Status</h3>
              <div className="status-container">
                {selectedStudent.assignmentProjects && selectedStudent.assignmentProjects.length > 0 ? (
                  <div>
                    {selectedStudent.assignmentProjects.map((project, index) => (
                      <div key={index} className="detail-container">
                        <p><strong>Project Name:</strong></p>
                        <p>{project.name}</p>
                        <p><strong>Status:</strong></p>
                        <p>{project.status}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No assignment projects found.</p>
                )}
              </div>
            </div>
            <div className='details-column'>
              <h3>Parent Details:</h3>
              <div className="detail-container">
                <p>{selectedStudent.parentDetails}</p>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <p>Please select a student from the list.</p>
      )}
    </div>
  );
};

export default IndividualStudent;
