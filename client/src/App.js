// src/App.js
import React, { useState } from 'react';
import StudentDetails from './IndividuaStudent';
import StudentList from './StudentList';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Martin Wambugu', rollNumber: 'A001', grade: 'B' },
    { id: 2, name: 'Wilson Muita', rollNumber: 'A002', grade: 'A' },
    { id: 2, name: 'Melvin Mbae', rollNumber: 'A003', grade: 'A' },
    { id: 2, name: 'Michael Njogu', rollNumber: 'A004', grade: 'A' },
    { id: 2, name: 'Cynthia M', rollNumber: 'A005', grade: 'A' },
    { id: 2, name: 'Wilson Wachira', rollNumber: 'A006', grade: 'B' },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <StudentList students={students} onSelectStudent={handleSelectStudent} />
      <StudentDetails selectedStudent={selectedStudent} />
    </div>
  );
};

export default App;
