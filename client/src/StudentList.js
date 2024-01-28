// src/components/StudentList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css';

const StudentList = ({ students, onSelectStudent }) => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
};

const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
    <div>
    <h2>Student List</h2>
    <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
    />
    <ul>
        {filteredStudents.map((student) => (
        <li key={student.id}>
            <Link to={`/student/${student.id}`} onClick={() => onSelectStudent(student)}>
            {student.name}
            </Link>
        </li>
        ))}
    </ul>
    </div>
);
};

export default StudentList;
