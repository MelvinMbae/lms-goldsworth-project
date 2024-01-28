import React from 'react';

const IndividualStudent = ({ selectedStudent }) => {
return (
    <div>
    <h2>Individual Student</h2>
    {selectedStudent ? (
        <div>
        <h3>{selectedStudent.name}</h3>
        <p>Roll Number: {selectedStudent.rollNumber}</p>
        <p>Grade: {selectedStudent.grade}</p>
        </div>
    ) : (
        <p>Please select a student from the list.</p>
    )}
    </div>
);
};

export default IndividualStudent;
