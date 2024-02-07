import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './IndividualStudent.css'; // Import the new CSS file
import { appContext } from './utils/appContext';

const IndividualStudent = () => {
  const { studentID } = useParams();
  const { students } = useContext(appContext);
  const [parentDetails, setParentDetails] = useState(null);

  useEffect(() => {
    if (studentID) {
      // Fetch parent details for the selected student from the backend
      fetchParentDetails(studentID);
    }
  }, [studentID]);

  const fetchParentDetails = async (studentID) => {
    try {
      const response = await fetch(`/api/students/${studentID}/parent`);
      if (!response.ok) {
        throw new Error('Failed to fetch parent details');
      }
      const parentDetails = await response.json();
      setParentDetails(parentDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const selectedStudent = students.find(student => student.id === parseInt(studentID));

  return (
    <div className="indiv-student">
      <div className="user-profile">
        <h2>User Profile</h2>
      </div>
      {selectedStudent ? (
        <Fragment>
          <div className='student-avatar'>
            {/* Your content for the student avatar */}
          </div>
          <div className="details-container">
            <div className='details-column'>
              <h3>{selectedStudent.firstname}</h3>
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
              {parentDetails ? (
                <div className="detail-container">
                  <p>Name: {parentDetails.name}</p>
                  <p>Email: {parentDetails.email}</p>
                  {/* Add other parent details as needed */}
                </div>
              ) : (
                <p>Loading parent details...</p>
              )}
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
