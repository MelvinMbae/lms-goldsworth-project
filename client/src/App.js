import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import IndividualStudent from './IndividualStudent'; // Corrected import path
import StudentList from './StudentList';

const App = () => {
  const [students] = useState([
    { id: 1, name: 'Martin Wambugu', rollNumber: 'A001', grade: 'B' },
    { id: 2, name: 'Wilson Muita', rollNumber: 'A002', grade: 'A' },
    { id: 3, name: 'Melvin Mbae', rollNumber: 'A003', grade: 'A' },
    { id: 4, name: 'Michael Njogu', rollNumber: 'A004', grade: 'A' },
    { id: 5, name: 'Cynthia M', rollNumber: 'A005', grade: 'A' },
    { id: 6, name: 'Wilson Wachira', rollNumber: 'A006', grade: 'B' },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<StudentList students={students} onSelectStudent={handleSelectStudent} />}
        />
        <Route
          path="/student/:id"
          element={<IndividualStudent selectedStudent={selectedStudent} />}
        />
      </Routes>
    </div>
  );
};

export default App;
