// src/components/StudentList.js
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './IndividualStudent.css'; // Import the new CSS file
import { appContext } from './utils/appContext';

const StudentList = () => {
const [searchTerm, setSearchTerm] = useState('');

const { students } = useContext(appContext)
// console.log(students)

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
};

const filteredStudents = students.filter((student) =>
    student.firstname.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
    <div>
        <div className="student-container">
            <h1 className="student-list-header">Students</h1>
        </div>
        <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
        />
        <div className='student-list'>
            {filteredStudents.map((student) => (
            <div className="student-info" key={student.id}>
                <Link to={`/student-view/${student.id}`}>
                    <h3>{`${student.firstname} ${student.lastname}`}</h3>
                </Link>
            </div>
            ))}
        </div>
    </div>
);
};

export default StudentList;
