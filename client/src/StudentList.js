// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './IndividualStudent.css'; // Import the new CSS file

const StudentList = () => {
const [searchTerm, setSearchTerm] = useState('');
const [students, setStudents] = useState([]);
const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
};

const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
);
useEffect(() => {
    const fetchStudents = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5555/students');
        const data = await response.json();
        setStudents(data);
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
    };
    fetchStudents();
}, []);
return (
    <div>
    <div className="student-container">
        <h1 className="student-list-header">Students</h1>
    </div>
    <div className='student-list'>
        {students.map((student) => (
        <div className="student-info" key={student.id}>
        <h3>{`${student.firstname} ${student.lastname}`}</h3>
            <Link to={`/student/${student.id}`}>
            <h3>{`${student.firstname} ${student.lastname}`}</h3>
            </Link>
        </div>
        ))}
    </div>
    <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
    />
    <ul>
        
    </ul>

    </div>
);
};

export default StudentList;
