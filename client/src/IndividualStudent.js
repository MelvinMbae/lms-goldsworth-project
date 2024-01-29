import React, { Fragment } from 'react';

const IndividualStudent = ({ selectedStudent }) => {
return (
    <div  className="indiv-student">
    <h2>User Profile</h2>
    {selectedStudent ? (
        <Fragment><div className='student-title'><div className='student-avator'>
                <img
                    src={selectedStudent.profilePicture || "image_placeholder_url"}
                    alt={`${selectedStudent.name}'s profile`}
                    />
                    <div>
                    <h3>{selectedStudent.name}</h3>
                    <p>Email: {selectedStudent.email}</p>
                    </div>
                    </div>
                    <div className='student-avator'>
                    <p>Course: {selectedStudent.course}</p>
                    <p>No of Assignments: {selectedStudent.numberOfAssignments}</p>
                    
                    <p>Date of Enrollment: {selectedStudent.dateOfEnrollment}</p>
                    </div>
                </div>
                <div><div>
                    <p>Parent Details: {selectedStudent.parentDetails}</p>
                    </div>
        <div>
            
        <h3>Assignment Project Status</h3>
        {selectedStudent.assignmentProjects && selectedStudent.assignmentProjects.length > 0 ? (
            <table style={{ border: '1px solid #ddd', borderRadius: '8px', marginTop: '10px', padding: '10px', width: '100%' }}>
            <thead>
                <tr>
                <th>Project Name</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {selectedStudent.assignmentProjects.map((project, index) => (
                <tr key={index}>
                    <td>{project.name}</td>
                    <td>{project.status}</td>
                </tr>
                ))}
            </tbody>
            </table>
        ) : (
            <p>No assignment projects found.</p>
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
