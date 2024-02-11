// src/components/StudentList.js
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/StudentList.css'; 
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

    <div className="student-container">
     <h1 className="student-list-header">ENROLLED STUDENTS</h1>
     <div className='search-container'>
        <input
        type="text"
        placeholder="Search Students"
        value={searchTerm}
        onChange={handleSearchChange}
        /></div>
        
        <div className='students-courses_box'>
            {filteredStudents.map((student) => (
            <div className="students-courses_item" key={student.id}>
                <Link className='students-courses-item_link' to={`/student-view/${student.id}`}>
                <div class="students-courses-item_bg"></div>
                    <h3 className='students-courses-item_title'>{`${student.firstname} ${student.lastname}`}</h3>
                </Link>
                <div className='students-courses-item_date-box'>
                    <span className='students-courses-item_date'>Enrolled:04.02.2024</span>
                </div>
            </div>
            ))}
        </div>
    </div>
);
};

export default StudentList;
