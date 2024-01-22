import React, { useState } from 'react';

function Grading(){
  const [assignments, setAssignments] = useState([
    { id: 1, student: 'Student A', grade: '', comments: '' },
    { id: 2, student: 'Student B', grade: '', comments: '' },
    { id: 3, student: 'Student C', grade: '', comments: '' },
  ]);

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

  return (
    <div>
      <h1>Assignment List</h1>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Grade</th>
            <th>Comments</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grading;