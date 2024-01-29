import React, { useState } from 'react';
import './App.css';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, student: 'Michael Njogu', grade: '', comments: '' },
    { id: 2, student: 'Wilson Wanjiru', grade: '', comments: '' },
    { id: 3, student: 'Martin Gakuya', grade: '', comments: '' },
  ]);

  const [formVisible, setFormVisible] = useState(true);

  const handleGradeChange = (id, grade) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id ? { ...assignment, grade } : assignment
      )
    );
  };

  const handleCommentsChange = (id, comments) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id ? { ...assignment, comments } : assignment
      )
    );
  };

  const handleCreateAssignment = () => {
    const studentName = window.prompt('Enter student name:');
    if (studentName) {
      const newAssignment = {
        id: assignments.length + 1,
        student: studentName,
        grade: '',
        comments: '',
      };
      setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
    }
  };

  const handleDeleteAssignment = (id) => {
    setAssignments((prevAssignments) =>
      prevAssignments.filter((assignment) => assignment.id !== id)
    );
  };

  const handleSubmit = () => {
    // Handle the submission logic, e.g., send data to a server
    console.log('Submitted:', assignments);

    // Hide the form after submission
    setFormVisible(false);
  };

  return (
    <div>
      <h1>Grade List</h1>
      {formVisible && (
        <div>
          <button onClick={handleCreateAssignment}>Create Grades</button>
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Grade</th>
                <th>Comments</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.student}</td>
                  <td>
                    <input
                      type="text"
                      value={assignment.grade}
                      onChange={(e) => handleGradeChange(assignment.id, e.target.value)}
                    />
                  </td>
                  <td>
                    <textarea
                      value={assignment.comments}
                      onChange={(e) => handleCommentsChange(assignment.id, e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDeleteAssignment(assignment.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default AssignmentList;
